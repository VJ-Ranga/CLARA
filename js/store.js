/**
 * CLARA Bags — Core E-Commerce & WooCommerce Store Engine
 * Handles Cart, Checkout, Order Persistence, Slide Drawer, and Multi-Page Sync.
 */

const CART_STORAGE_KEY = "clara_luxury_cart_v2";
const LAST_ORDER_KEY = "clara_last_placed_order";
const APPLIED_COUPON_KEY = "clara_applied_coupon";
const FREE_SHIPPING_MIN = 10000;

const SHIPPING_METHODS = {
  western: { id: "western", name: "Colombo & Western Province Courier (1–2 Days)", fee: 350 },
  islandwide: { id: "islandwide", name: "Islandwide Outstation Courier (2–4 Days)", fee: 550 },
  pickup: { id: "pickup", name: "Flagship Showroom Collection (Mount Lavinia — No. 587/A)", fee: 0 }
};

const VALID_COUPONS = {
  "WELCOME10": { type: "percent", value: 10, label: "Welcome 10% Off" },
  "CLARA2026": { type: "fixed", value: 500, label: "Rs. 500 Exclusive Voucher" }
};

// =============================================================================
// CART REPOSITORY & OPERATIONS
// =============================================================================

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateHeaderCartBadge();
    window.dispatchEvent(new CustomEvent("clara:cart-updated", { detail: { cart } }));
  } catch (e) {
    console.error("Failed to save cart", e);
  }
}

function addToCart(productId, selectedColor, quantity = 1, options = { openDrawer: true }) {
  const product = getProductById(productId);
  if (!product) return false;

  const color = selectedColor || product.colors[0];
  const qty = parseInt(quantity, 10) || 1;
  const cart = getCart();

  // Find if matching product & color already exists in cart
  const existingIdx = cart.findIndex(item => item.productId === product.id && item.color === color);

  if (existingIdx > -1) {
    cart[existingIdx].quantity += qty;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      sku: product.sku,
      price: product.price,
      image: product.images[0],
      color: color,
      quantity: qty
    });
  }

  saveCart(cart);
  showToast(`Added “${product.name}” · ${color}`);

  if (options.openDrawer) {
    openSlideCart();
  }
  return true;
}

function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    const removed = cart.splice(index, 1);
    saveCart(cart);
    if (removed.length > 0) {
      showToast(`Removed “${removed[0].name}” from your bag`);
    }
  }
}

function updateCartQuantity(index, quantity) {
  const cart = getCart();
  const qty = parseInt(quantity, 10);
  if (index >= 0 && index < cart.length) {
    if (qty <= 0) {
      removeFromCart(index);
    } else {
      cart[index].quantity = qty;
      saveCart(cart);
    }
  }
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  localStorage.removeItem(APPLIED_COUPON_KEY);
  updateHeaderCartBadge();
  window.dispatchEvent(new CustomEvent("clara:cart-updated", { detail: { cart: [] } }));
}

// =============================================================================
// TOTALS, SHIPPING & COUPON CALCULATIONS
// =============================================================================

function getAppliedCoupon() {
  try {
    const raw = localStorage.getItem(APPLIED_COUPON_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function applyCouponCode(code) {
  const cleanCode = (code || "").trim().toUpperCase();
  if (!cleanCode) return { success: false, message: "Please enter a voucher code." };

  if (VALID_COUPONS[cleanCode]) {
    const couponData = { code: cleanCode, ...VALID_COUPONS[cleanCode] };
    localStorage.setItem(APPLIED_COUPON_KEY, JSON.stringify(couponData));
    window.dispatchEvent(new CustomEvent("clara:cart-updated", { detail: { cart: getCart() } }));
    return { success: true, message: `Voucher "${cleanCode}" applied successfully!`, coupon: couponData };
  } else {
    return { success: false, message: "Invalid voucher code. Try WELCOME10." };
  }
}

function removeAppliedCoupon() {
  localStorage.removeItem(APPLIED_COUPON_KEY);
  window.dispatchEvent(new CustomEvent("clara:cart-updated", { detail: { cart: getCart() } }));
}

function calculateOrderTotals(shippingMethodKey = "western") {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Free shipping check
  const method = SHIPPING_METHODS[shippingMethodKey] || SHIPPING_METHODS.western;
  const isFreeDelivery = (subtotal >= FREE_SHIPPING_MIN) || (method.id === "pickup");
  const shippingFee = isFreeDelivery ? 0 : method.fee;

  // Coupon discount
  let discountAmount = 0;
  const coupon = getAppliedCoupon();
  if (coupon && subtotal > 0) {
    if (coupon.type === "percent") {
      discountAmount = Math.round((subtotal * coupon.value) / 100);
    } else if (coupon.type === "fixed") {
      discountAmount = Math.min(coupon.value, subtotal);
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return {
    subtotal,
    totalItems,
    shippingFee,
    shippingMethod: method,
    isFreeDelivery,
    discountAmount,
    coupon,
    grandTotal,
    freeDeliveryThreshold: FREE_SHIPPING_MIN,
    amountNeededForFreeShipping: Math.max(0, FREE_SHIPPING_MIN - subtotal)
  };
}

// =============================================================================
// ORDER PLACEMENT (WOOCOMMERCE SIMULATION)
// =============================================================================

function placeOrder(checkoutForm) {
  const cart = getCart();
  if (cart.length === 0) {
    return { success: false, message: "Your shopping bag is empty." };
  }

  const totals = calculateOrderTotals(checkoutForm.shippingMethod);
  const orderNumber = `CL-${Math.floor(10000 + Math.random() * 90000)}`;
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const orderData = {
    orderNumber,
    orderDate,
    customer: {
      firstName: checkoutForm.firstName,
      lastName: checkoutForm.lastName,
      email: checkoutForm.email,
      phone: checkoutForm.phone,
      address: checkoutForm.address,
      apartment: checkoutForm.apartment || "",
      city: checkoutForm.city,
      postalCode: checkoutForm.postalCode || "",
      notes: checkoutForm.notes || ""
    },
    paymentMethod: checkoutForm.paymentMethod, // 'card', 'bank_transfer', 'cod', 'showroom'
    shippingMethod: totals.shippingMethod,
    items: [...cart],
    subtotal: totals.subtotal,
    discount: totals.discountAmount,
    coupon: totals.coupon,
    shippingFee: totals.shippingFee,
    grandTotal: totals.grandTotal,
    status: checkoutForm.paymentMethod === 'card' ? 'Payment Verified • Processing' : 'Pending Confirmation'
  };

  try {
    localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(orderData));
    // Clear cart after placing order
    clearCart();
    return { success: true, order: orderData };
  } catch (e) {
    console.error("Failed to save order", e);
    return { success: false, message: "System error saving your order. Please try again." };
  }
}

function getLastOrder() {
  try {
    const raw = localStorage.getItem(LAST_ORDER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}


// =============================================================================
// UI SYNC: HEADER BADGES & SLIDE-OVER DRAWER
// =============================================================================

function storeIcon(name) {
  return (typeof Clara !== "undefined") ? Clara.icon(name) : "";
}

function updateHeaderCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelectorAll(".cart-count-badge").forEach(badge => {
    badge.textContent = totalQty;
    badge.classList.toggle("is-visible", totalQty > 0);
  });

  const drawerCount = document.getElementById("slideCartCount");
  if (drawerCount) drawerCount.textContent = totalQty > 0 ? totalQty : "";

  // Re-render slide cart if it exists in DOM
  renderSlideCartContent();
}

function openSlideCart() {
  let drawer = document.getElementById("slideCartDrawer");
  if (!drawer) {
    injectSlideCartDrawer();
    drawer = document.getElementById("slideCartDrawer");
  }
  if (typeof Clara !== "undefined") { Clara.closeMenu(); Clara.closeSearch(); }
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  renderSlideCartContent();
}

function closeSlideCart() {
  const drawer = document.getElementById("slideCartDrawer");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function injectSlideCartDrawer() {
  if (document.getElementById("slideCartDrawer")) return;

  const div = document.createElement("div");
  div.id = "slideCartDrawer";
  div.className = "drawer";
  div.setAttribute("aria-hidden", "true");
  div.innerHTML = `
    <div class="drawer__scrim" onclick="closeSlideCart()"></div>
    <aside class="drawer__panel" role="dialog" aria-label="Shopping bag">
      <div class="drawer__head">
        <h3>Your bag<sup id="slideCartCount"></sup></h3>
        <button type="button" class="icon-btn" onclick="closeSlideCart()" aria-label="Close bag">${storeIcon("close")}</button>
      </div>
      <div class="ship-meter" id="slideCartShipMeter">
        <div id="slideCartFreeShipText">Add more for <strong>complimentary islandwide delivery</strong></div>
        <div class="ship-meter__bar"><i id="slideCartFreeShipBar"></i></div>
      </div>
      <div id="slideCartItems" class="drawer__items"></div>
      <div class="drawer__foot" id="slideCartFoot">
        <div class="drawer__total">
          <span>Subtotal</span>
          <b id="slideCartSubtotal">Rs. 0</b>
        </div>
        <div class="drawer__actions">
          <a href="cart.html" class="btn btn-outline">View bag</a>
          <a id="slideCartCheckoutBtn" href="checkout.html" class="btn btn-rose">${storeIcon("lock")}Checkout</a>
        </div>
        <p class="drawer__note">Card · Bank transfer · Cash on delivery · Showroom pickup</p>
      </div>
    </aside>
  `;
  document.body.appendChild(div);
}

function injectFloatingConcierge() {
  const path = window.location.pathname;
  if (path.endsWith("checkout.html") || path.endsWith("order-confirmation.html") || path.endsWith("product.html")) return;
  if (document.getElementById("claraFloatingConcierge")) return;

  const a = document.createElement("a");
  a.id = "claraFloatingConcierge";
  a.className = "wa-float";
  a.href = "https://wa.me/94773173217?text=" + encodeURIComponent("Hello CLARA, I'm browsing your collection and would love some help.");
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", "Chat with CLARA on WhatsApp");
  a.innerHTML = `${storeIcon("whatsapp")}<span>Chat with us</span>`;
  document.body.appendChild(a);
}

function injectBackToTop() {
  const path = window.location.pathname;
  if (path.endsWith("checkout.html") || path.endsWith("order-confirmation.html")) return;
  if (document.getElementById("claraToTop")) return;

  const btn = document.createElement("button");
  btn.id = "claraToTop";
  btn.type = "button";
  btn.className = "to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = window.Clara ? Clara.icon("chev-up") : "&uarr;";
  btn.addEventListener("click", () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
  document.body.appendChild(btn);

  const sync = () => btn.classList.toggle("is-visible", window.scrollY > 600);
  window.addEventListener("scroll", sync, { passive: true });
  sync();
}

function renderSlideCartContent() {
  const container = document.getElementById("slideCartItems");
  if (!container) return;

  const subtotalElem = document.getElementById("slideCartSubtotal");
  const freeShipBar = document.getElementById("slideCartFreeShipBar");
  const freeShipText = document.getElementById("slideCartFreeShipText");
  const meter = document.getElementById("slideCartShipMeter");
  const foot = document.getElementById("slideCartFoot");

  const cart = getCart();
  const totals = calculateOrderTotals();

  if (freeShipBar && freeShipText) {
    if (totals.subtotal >= FREE_SHIPPING_MIN) {
      freeShipBar.style.width = "100%";
      meter.classList.add("is-done");
      freeShipText.innerHTML = `You've unlocked complimentary islandwide delivery`;
    } else {
      const pct = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_MIN) * 100));
      freeShipBar.style.width = `${pct}%`;
      meter.classList.remove("is-done");
      freeShipText.innerHTML = `You're <strong>${formatLKR(totals.amountNeededForFreeShipping)}</strong> away from complimentary delivery`;
    }
  }

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="bubble">${storeIcon("bag")}</div>
        <h3>Your bag is empty</h3>
        <p>Discover structured vanity bags, work totes and evening clutches made to be loved.</p>
        <a href="shop.html" class="btn btn-dark" onclick="closeSlideCart()">Shop the collection</a>
      </div>`;
    if (subtotalElem) subtotalElem.textContent = "Rs. 0";
    if (foot) foot.classList.add("hidden");
    if (meter) meter.classList.add("hidden");
    return;
  }

  if (foot) foot.classList.remove("hidden");
  if (meter) meter.classList.remove("hidden");

  container.innerHTML = cart.map((item, index) => `
    <div class="line-item">
      <a href="product.html?id=${item.productId}"><img src="${item.image}" alt="${item.name}" onerror="this.src='assets/banner.jpg'"></a>
      <div>
        <div class="line-item__top">
          <div>
            <h4><a href="product.html?id=${item.productId}">${item.name}</a></h4>
            <div class="meta">${item.color} · ${item.sku}</div>
          </div>
          <button type="button" class="remove" onclick="removeFromCart(${index})" aria-label="Remove ${item.name}">${storeIcon("close")}</button>
        </div>
        <div class="line-item__bottom">
          <div class="qty">
            <button type="button" onclick="updateCartQuantity(${index}, ${item.quantity - 1})" aria-label="Decrease quantity">${storeIcon("minus")}</button>
            <span>${item.quantity}</span>
            <button type="button" onclick="updateCartQuantity(${index}, ${item.quantity + 1})" aria-label="Increase quantity">${storeIcon("plus")}</button>
          </div>
          <b>${formatLKR(item.price * item.quantity)}</b>
        </div>
      </div>
    </div>
  `).join("");

  if (subtotalElem) subtotalElem.textContent = formatLKR(totals.subtotal);
}

// Toast Feedback Notification
let claraToastTimer = null;
function showToast(message) {
  let toast = document.getElementById("claraGlobalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "claraGlobalToast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.innerHTML = `${storeIcon("check")}<span id="claraToastMsg"></span>`;
    document.body.appendChild(toast);
  }

  toast.querySelector("#claraToastMsg").textContent = message;
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  clearTimeout(claraToastTimer);
  claraToastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  injectSlideCartDrawer();
  updateHeaderCartBadge();
  injectFloatingConcierge();
  injectBackToTop();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSlideCart();
  });
});
