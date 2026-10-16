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
  showToast(`Added "${product.name}" (${color}) to your shopping bag.`);

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
      showToast(`Removed "${removed[0].name}" from your shopping bag.`);
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

function updateHeaderCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-count-badge");

  badges.forEach(badge => {
    badge.textContent = totalQty;
    if (totalQty > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  // Re-render slide cart if it exists in DOM
  renderSlideCartContent();
}

function openSlideCart() {
  let drawer = document.getElementById("slideCartDrawer");
  if (!drawer) {
    injectSlideCartDrawer();
    drawer = document.getElementById("slideCartDrawer");
  }

  if (drawer) {
    drawer.classList.remove("opacity-0", "pointer-events-none");
    drawer.classList.add("opacity-100", "pointer-events-auto");
    const panel = drawer.querySelector(".slide-cart-panel");
    if (panel) {
      panel.classList.remove("translate-x-full");
      panel.classList.add("translate-x-0");
    }
    document.body.classList.add("overflow-hidden");
    renderSlideCartContent();
  }
}

function closeSlideCart() {
  const drawer = document.getElementById("slideCartDrawer");
  if (drawer) {
    const panel = drawer.querySelector(".slide-cart-panel");
    if (panel) {
      panel.classList.remove("translate-x-0");
      panel.classList.add("translate-x-full");
    }
    setTimeout(() => {
      drawer.classList.remove("opacity-100", "pointer-events-auto");
      drawer.classList.add("opacity-0", "pointer-events-none");
      document.body.classList.remove("overflow-hidden");
    }, 250);
  }
}

function injectSlideCartDrawer() {
  if (document.getElementById("slideCartDrawer")) {
    const existing = document.getElementById("slideCartDrawer");
    existing.addEventListener("click", (e) => {
      if (e.target === existing) closeSlideCart();
    });
    return;
  }

  const div = document.createElement("div");
  div.id = "slideCartDrawer";
  div.className = "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs opacity-0 pointer-events-none transition-opacity duration-200 flex justify-end";
  div.innerHTML = `
    <div class="slide-cart-panel w-full max-w-md bg-[#FAF8F5] h-full flex flex-col shadow-2xl transform translate-x-full border-l border-neutral-300/60">
      
      <div class="p-5 border-b border-neutral-200 bg-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="fas fa-shopping-bag text-neutral-900 text-sm"></i>
          <h3 class="font-editorial text-xl font-normal text-neutral-900">Your Shopping Bag</h3>
        </div>
        <button onclick="closeSlideCart()" class="p-2 text-neutral-400 hover:text-black transition" title="Close Drawer">
          <i class="fas fa-times text-sm"></i>
        </button>
      </div>

      <div class="p-4 bg-[#F4F0E8] border-b border-neutral-200/80">
        <div class="text-[11px] text-neutral-700 mb-1.5" id="slideCartFreeShipText">
          Add more items for <strong>Complimentary Islandwide Delivery</strong>
        </div>
        <div class="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div id="slideCartFreeShipBar" class="h-1.5 bg-[#0E0E10] transition-all duration-300" style="width: 0%;"></div>
        </div>
      </div>

      <div id="slideCartItems" class="flex-grow overflow-y-auto p-4 space-y-3"></div>

      <div class="p-5 border-t border-neutral-200 bg-white space-y-3">
        <div class="flex justify-between items-baseline text-sm">
          <span class="text-neutral-500 uppercase tracking-ultra text-[10px]">Subtotal</span>
          <span id="slideCartSubtotal" class="font-editorial text-2xl font-light text-neutral-900">Rs. 0</span>
        </div>

        <div class="grid grid-cols-2 gap-2.5 pt-2">
          <a 
            href="cart.html" 
            class="w-full py-3.5 bg-white border border-neutral-300 hover:border-black text-neutral-900 text-center text-[11px] font-medium tracking-ultra uppercase transition"
          >
            View Full Cart
          </a>

          <a 
            id="slideCartCheckoutBtn"
            href="checkout.html" 
            class="w-full py-3.5 bg-[#0E0E10] hover:bg-[#7A1B24] text-white text-center text-[11px] font-medium tracking-ultra uppercase transition shadow-sm"
          >
            Checkout
          </a>
        </div>
      </div>

    </div>
  `;
  document.body.appendChild(div);

  div.addEventListener("click", (e) => {
    if (e.target === div) closeSlideCart();
  });
}

function injectFloatingConcierge() {
  if (window.location.pathname.endsWith("checkout.html") || window.location.pathname.endsWith("order-confirmation.html")) return;
  if (document.getElementById("claraFloatingConcierge")) return;

  const aside = document.createElement("aside");
  aside.id = "claraFloatingConcierge";
  aside.className = "fixed bottom-5 right-5 z-40 group";
  aside.innerHTML = `
    <a 
      href="https://wa.me/94773173217?text=Hello%20CLARA%20Mount%20Lavinia,%20I%20am%20browsing%20your%20luxury%20collection%20and%20would%20like%20client%20assistance." 
      target="_blank" 
      rel="noopener noreferrer"
      class="flex items-center gap-2.5 px-4 py-2.5 bg-[#0E0E10] hover:bg-[#7A1B24] text-white rounded-full shadow-2xl border border-[#C5A880]/60 transition-all duration-300 transform group-hover:scale-105"
      title="Direct Private WhatsApp Concierge (Mount Lavinia)"
    >
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <i class="fab fa-whatsapp text-emerald-400 text-base"></i>
      <span class="text-[10px] tracking-ultra uppercase font-medium hidden sm:inline-block">Atelier Concierge</span>
    </a>
  `;
  document.body.appendChild(aside);
}

function renderSlideCartContent() {
  const container = document.getElementById("slideCartItems");
  const subtotalElem = document.getElementById("slideCartSubtotal");
  const freeShipBar = document.getElementById("slideCartFreeShipBar");
  const freeShipText = document.getElementById("slideCartFreeShipText");
  const checkoutBtn = document.getElementById("slideCartCheckoutBtn");

  if (!container) return;

  const cart = getCart();
  const totals = calculateOrderTotals();

  // Free shipping meter
  if (freeShipBar && freeShipText) {
    if (totals.subtotal >= FREE_SHIPPING_MIN) {
      freeShipBar.style.width = "100%";
      freeShipBar.className = "h-1.5 bg-emerald-600 transition-all duration-300";
      freeShipText.innerHTML = `<span class="text-emerald-700 font-medium">Complimentary Islandwide Delivery Unlocked</span>`;
    } else {
      const pct = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_MIN) * 100));
      freeShipBar.style.width = `${pct}%`;
      freeShipBar.className = "h-1.5 bg-[#0E0E10] transition-all duration-300";
      freeShipText.innerHTML = `Add <strong>${formatLKR(totals.amountNeededForFreeShipping)}</strong> for Complimentary Delivery`;
    }
  }

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-neutral-500">
        <div class="w-12 h-12 mx-auto mb-3 border border-neutral-300 flex items-center justify-center text-neutral-400">
          <i class="fas fa-shopping-bag"></i>
        </div>
        <p class="font-editorial text-2xl font-light text-neutral-800 mb-1">Your bag is empty</p>
        <p class="text-xs text-neutral-400 mb-6">Explore our handcrafted silhouettes and accessories.</p>
        <a href="shop.html" onclick="closeSlideCart()" class="inline-block px-6 py-2.5 bg-[#0E0E10] text-white text-[10px] tracking-ultra uppercase hover:bg-neutral-800 transition">
          Discover The Collection
        </a>
      </div>
    `;
    if (subtotalElem) subtotalElem.textContent = "Rs. 0";
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
    }
    return;
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="flex gap-4 p-3 bg-white border border-neutral-200/60 shadow-2xs items-center">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover bg-neutral-100 flex-shrink-0" onerror="this.src='assets/banner.jpg'" />
      
      <div class="flex-grow min-w-0">
        <div class="flex justify-between items-start gap-2">
          <h4 class="font-medium text-neutral-900 text-xs truncate">${item.name}</h4>
          <button onclick="removeFromCart(${index})" class="text-neutral-400 hover:text-[#7A1B24] transition p-1" title="Remove">
            <i class="fas fa-times text-[10px]"></i>
          </button>
        </div>

        <div class="text-[10px] text-neutral-500 my-1 flex items-center gap-1.5">
          <span class="font-mono text-neutral-600">${item.sku}</span>
          <span>•</span>
          <span class="text-neutral-700">Color: ${item.color}</span>
        </div>

        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border border-neutral-300">
            <button onclick="updateCartQuantity(${index}, ${item.quantity - 1})" class="w-6 h-6 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 text-xs">
              -
            </button>
            <span class="w-7 text-center text-xs font-mono text-neutral-900">${item.quantity}</span>
            <button onclick="updateCartQuantity(${index}, ${item.quantity + 1})" class="w-6 h-6 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 text-xs">
              +
            </button>
          </div>

          <span class="text-xs font-semibold text-neutral-900">
            ${formatLKR(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  `).join('');

  if (subtotalElem) {
    subtotalElem.textContent = formatLKR(totals.subtotal);
  }
}

// Toast Feedback Notification
function showToast(message) {
  let toast = document.getElementById("claraGlobalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "claraGlobalToast";
    toast.className = "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none";
    toast.innerHTML = `
      <div class="px-5 py-3 bg-[#0E0E10] text-[#FAF8F5] text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2.5 border border-white/20">
        <span class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
        <span id="claraToastMsg"></span>
      </div>
    `;
    document.body.appendChild(toast);
  }

  const msgElem = toast.querySelector("#claraToastMsg");
  if (msgElem) msgElem.textContent = message;

  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0");
  }, 3200);
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  injectSlideCartDrawer();
  updateHeaderCartBadge();
  injectFloatingConcierge();
  
  // Close drawer on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSlideCart();
  });
});

