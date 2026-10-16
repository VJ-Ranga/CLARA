/**
 * CLARA Bags — Editorial Digital Flagship & WhatsApp Concierge
 * Flagship Showroom: No. 587/A, Galle Road, Mount Lavinia, Sri Lanka
 * Concierge Hotline: +94 77 317 3217 | Showroom Landline: +94 11 703 7030
 * Email: clara2bags@gmail.com / sl.djindustries@gmail.com
 */

// Official WhatsApp Concierge Contact
const CLARA_WHATSAPP_NUMBER = "94773173217";
const FREE_SHIPPING_THRESHOLD = 10000;

// Curated 12-Piece Permanent Collection
const PRODUCTS = [
  {
    id: 1,
    sku: "CL-VT101",
    name: "The Sovereign Structured Vanity",
    category: "vanity",
    categoryLabel: "Structured Vanity",
    price: 5950,
    originalPrice: 6800,
    editorialTag: "Signature Atelier",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    colors: ["Burgundy Noir", "Onyx Black", "Dusty Rose"],
    colorHex: ["#6B1720", "#141416", "#D9A5A5"],
    description: "An architectural vanity silhouette handcrafted in micro-pebbled vegan leather. Embellished with hand-polished brushed gold lock hardware, protective pedestal studs, and a detachable crossbody strap.",
    dimensions: "22cm (W) × 18cm (H) × 10cm (D)",
    material: "Textured Saffiano Micro-Grain Vegan Leather, Brushed Gold Alloy Hardware",
    features: "Reinforced rigid top handle, interior zipped passport pouch, magnetic side closures, protective brass feet."
  },
  {
    id: 2,
    sku: "CL-TT204",
    name: "Kensington Executive Laptop Tote",
    category: "totes",
    categoryLabel: "Work & Laptop Totes",
    price: 6850,
    originalPrice: 7500,
    editorialTag: "Editorial Pick",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    colors: ["Tuscan Tan", "Obsidian Noir", "Deep Forest"],
    colorHex: ["#9E6941", "#121212", "#2B4736"],
    description: "The definitive everyday professional companion for corporate leaders. Thoughtfully engineered to securely fit up to a 14-inch laptop, tablet, daily planner, and cosmetics organizer with reinforced shoulder drop handles.",
    dimensions: "36cm (W) × 29cm (H) × 14cm (D)",
    material: "High-Density Pebbled Faux Leather with Water-Repellent Twill Lining",
    features: "Padded 14-inch laptop sleeve, dual smartphone slip pockets, smooth full-length metal top zip closure."
  },
  {
    id: 3,
    sku: "CL-ST308",
    name: "Riviera Suede Turn-Lock Satchel",
    category: "shoulder",
    categoryLabel: "Shoulder Satchels",
    price: 6450,
    originalPrice: 7200,
    editorialTag: "Flagship Feature",
    image: "assets/banner.jpg",
    hoverImage: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    colors: ["Camel Suede", "Chocolate Brown", "Matte Black"],
    colorHex: ["#B88B58", "#4A2B18", "#18181A"],
    description: "As showcased in our Mount Lavinia flagship showroom banner. A harmonious union of velvety suede texture and smooth leather trim, fastened with an antique turn-lock clasp.",
    dimensions: "30cm (W) × 24cm (H) × 12cm (D)",
    material: "Sensual Vegan Suede Exterior with Reinforced Structural Leather Trim",
    features: "Dual accordion internal chambers, center zip divider pouch, adjustable leatherette shoulder strap."
  },
  {
    id: 4,
    sku: "CL-CB112",
    name: "Milano Equestrian Saddle Crossbody",
    category: "crossbody",
    categoryLabel: "Crossbody & Slings",
    price: 4750,
    originalPrice: 5300,
    editorialTag: "New Season",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=800&q=80",
    colors: ["Warm Ecru", "Soft Taupe", "Classic Noir"],
    colorHex: ["#E8E1D3", "#8C827A", "#1A1A1A"],
    description: "Curved equestrian lines crafted for seamless hands-free mobility. Features a concealed magnetic snap closure and an interchangeable wide woven guitar strap for all-day urban comfort.",
    dimensions: "21cm (W) × 16cm (H) × 7cm (D)",
    material: "Supple Semi-Matte Vegan Leather, Brushed Palladium Hardware",
    features: "Concealed magnetic flap closure, exterior quick-slip card slot, detachable wide lifestyle strap."
  },
  {
    id: 5,
    sku: "CL-EC405",
    name: "Aura Metallic Evening Minaudière",
    category: "clutches",
    categoryLabel: "Evening Clutches",
    price: 3950,
    originalPrice: 4600,
    editorialTag: "Gala Edition",
    image: "https://images.unsplash.com/photo-1566150902887-9679ec15dcb7?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    colors: ["Champagne Gold", "Liquid Silver", "Rose Bronze"],
    colorHex: ["#D4AF37", "#C5C5C5", "#B36B73"],
    description: "Sculpted for festive galas, weddings, and evening receptions. Shimmering metallic exterior crowned with a jeweled statement clasp and a delicate detachable serpentine chain.",
    dimensions: "20cm (W) × 12cm (H) × 5cm (D)",
    material: "Fine Metallic Shimmer Polyurethane with Champagne Satin Interior",
    features: "Jewel clasp fastening, concealed drop-in gold serpentine chain, lined smartphone slip compartment."
  },
  {
    id: 6,
    sku: "CL-TR502",
    name: "Oxford Grand Weekender Holdall",
    category: "travel",
    categoryLabel: "Travel & Weekender",
    price: 8250,
    originalPrice: 9500,
    editorialTag: "High Volume",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    colors: ["Espresso Brown", "Matte Noir"],
    colorHex: ["#3A2416", "#141416"],
    description: "The pinnacle of weekend escapism and airline carry-on luxury. High-capacity cavernous interior complemented by a dedicated ventilated shoe chamber and luggage trolley integration sleeve.",
    dimensions: "48cm (W) × 30cm (H) × 22cm (D)",
    material: "Weatherproof Heavyweight Canvas with Reinforced Calf-Grain Trim",
    features: "Ventilated bottom shoe compartment, rear luggage trolley sleeve, detachable padded shoulder strap."
  },
  {
    id: 7,
    sku: "CL-HB701",
    name: "Saint-Germain Pleated Cloud Hobo",
    category: "crossbody",
    categoryLabel: "Crossbody & Slings",
    price: 5850,
    originalPrice: 6600,
    editorialTag: "Runway Cut",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800&q=80",
    colors: ["Oatmeal Ecru", "Olive Drab", "Rich Espresso"],
    colorHex: ["#E5DDD0", "#4B5320", "#332219"],
    description: "Slouchy, cloud-like ruched leather inspired by Parisian fashion week silhouettes. Gently gathers along the top with magnetic snap closures for effortless under-arm poise.",
    dimensions: "28cm (W) × 22cm (H) × 9cm (D)",
    material: "Ultra-Soft Microfiber Leather with Gathered Pleating",
    features: "Cushioned shoulder strap, hidden magnetic top seal, internal zip organizer."
  },
  {
    id: 8,
    sku: "CL-BG315",
    name: "Vendôme 90s Minimalist Baguette",
    category: "shoulder",
    categoryLabel: "Shoulder Satchels",
    price: 4950,
    originalPrice: 5600,
    editorialTag: "Archive Revival",
    image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    colors: ["Gloss Noir", "Deep Bordeaux", "Chestnut"],
    colorHex: ["#111113", "#5C121A", "#633A24"],
    description: "Clean, horizontal proportions paying homage to 1990s high-fashion minimalism. Sits snugly under the shoulder with a slender streamlined strap and discreet gold hardware.",
    dimensions: "26cm (W) × 14cm (H) × 6cm (D)",
    material: "High-Gloss Patent-Finish Vegan Leather, Gold Finished Hardware",
    features: "Slim ergonomic shoulder arch, scratch-resistant gloss exterior, internal zip compartment."
  },
  {
    id: 9,
    sku: "CL-VT109",
    name: "Mayfair Sculptural Trapezoid Bag",
    category: "vanity",
    categoryLabel: "Structured Vanity",
    price: 6250,
    originalPrice: 7100,
    editorialTag: "Artisanal",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    colors: ["Alabaster White", "Imperial Emerald", "Matte Black"],
    colorHex: ["#F2EDE4", "#1E4B38", "#121212"],
    description: "An architectural masterpiece defined by sharp trapezoidal angles and a sweeping curved arch handle. Creates an indelible impression from daytime gallery visits to dinner engagements.",
    dimensions: "24cm (W) × 20cm (H) × 11cm (D)",
    material: "Structured Palmellato Finish Vegan Leather, Brushed Champagne Brass",
    features: "Rigid sculpted arch handle, secure twist-lock mechanism, protective brass bottom feet."
  },
  {
    id: 10,
    sku: "CL-TT219",
    name: "Montmartre Monogram Canvas Tote",
    category: "totes",
    categoryLabel: "Work & Laptop Totes",
    price: 5450,
    originalPrice: 6200,
    editorialTag: "Bespoke Print",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    colors: ["Mustard Monogram", "Monochrome Noir"],
    colorHex: ["#D4A017", "#1E1E20"],
    description: "Bespoke geometric jacquard-inspired print framed with rich saddle-tan leatherette handles. A statement workhorse engineered to combine generous capacity with lightweight elegance.",
    dimensions: "34cm (W) × 27cm (H) × 13cm (D)",
    material: "Screen-Printed Durable Canvas with Double-Stitched PU Leather Reinforcements",
    features: "Reinforced double leather shoulder straps, brass snap bridge closure, internal zip organizer."
  },
  {
    id: 11,
    sku: "CL-TT230",
    name: "Marais Natural Linen & Tan Shopper",
    category: "totes",
    categoryLabel: "Work & Laptop Totes",
    price: 5200,
    originalPrice: 5900,
    editorialTag: "Resort Collection",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    colors: ["Natural Linen / Tan", "Noir / Cream"],
    colorHex: ["#D9CBB7", "#1F1F21"],
    description: "The effortless balance of raw natural linen weave and rich saddle tan leather bindings. Perfectly suited for coastal escapes, weekend brunches, or casual corporate meetings.",
    dimensions: "35cm (W) × 28cm (H) × 12cm (D)",
    material: "Woven Heavyweight Linen-Blend Canvas with Contrast Saddle Leather Trim",
    features: "Open-top silhouette with magnetic bridge catch, interior phone pocket, flat base."
  },
  {
    id: 12,
    sku: "CL-AC601",
    name: "Palais Continental Quilted Wallet",
    category: "accessories",
    categoryLabel: "Wallets & Small Leather",
    price: 2650,
    originalPrice: 3200,
    editorialTag: "Essential",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1566150902887-9679ec15dcb7?auto=format&fit=crop&w=800&q=80",
    colors: ["Bordeaux Red", "Onyx Black", "Blush Nude"],
    colorHex: ["#781822", "#111113", "#E3B6AE"],
    description: "Diamond-quilted leatherette wallet accented with polished gold hardware. Thoughtfully engineered interior holds 8 credit cards, banknote sleeves, and a centered zippered coin vault.",
    dimensions: "19cm (W) × 10cm (H) × 2.5cm (D)",
    material: "Diamond-Quilted Soft Nappa Grain PU Leather, Smooth Gold Zipper",
    features: "8 precision card slots, 2 full-length currency sleeves, central zippered coin divider."
  }
];

// App State
let cart = [];
let activeCategory = "all";
let searchQuery = "";
let currentSort = "featured";
let activeQuickViewProduct = null;
let activeQuickViewColor = "";
let selectedDeliveryOption = "western"; // "western" (350), "islandwide" (550), "pickup" (0)

const DELIVERY_RATES = {
  western: { fee: 350, label: "Colombo & Western Province" },
  islandwide: { fee: 550, label: "Islandwide / Outstation Courier" },
  pickup: { fee: 0, label: "Showroom Collection (Mount Lavinia — Free)" }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// Load saved cart from localStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("clara_atelier_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Cart storage could not be parsed", e);
    cart = [];
  }
}

// Save cart to localStorage
function saveCartToStorage() {
  try {
    localStorage.setItem("clara_atelier_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Cart storage error", e);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input live filtering
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Category tab buttons
  const catButtons = document.querySelectorAll(".category-tab-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => {
        b.classList.remove("active", "border-neutral-900", "text-neutral-900", "font-medium");
        b.classList.add("border-transparent", "text-neutral-500");
      });
      btn.classList.add("active", "border-neutral-900", "text-neutral-900", "font-medium");
      btn.classList.remove("border-transparent", "text-neutral-500");
      
      activeCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Escape key closes open drawers or modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeQuickView();
      closeWhatsAppCheckoutModal();
      closeWholesaleModal();
    }
  });
}

// Render Products Grid with Editorial Luxury Craftsmanship
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  // Filter
  let filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(query) || 
                          p.sku.toLowerCase().includes(query) ||
                          p.categoryLabel.toLowerCase().includes(query) ||
                          p.material.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  }

  // Count indicator
  const countElem = document.getElementById("productCount");
  if (countElem) {
    countElem.innerText = `Showing ${filtered.length} of ${PRODUCTS.length} Atelier Silhouettes`;
  }

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-20 text-center">
        <p class="font-editorial text-3xl font-light text-neutral-800 mb-2">No silhouettes match your query</p>
        <p class="text-xs text-neutral-500 tracking-wide mb-6">Explore our complete collection or inquire directly with our Mount Lavinia concierge.</p>
        <button onclick="resetFilters()" class="inline-block px-7 py-3 bg-neutral-900 text-white text-[11px] tracking-ultra uppercase hover:bg-neutral-800 transition">
          View Complete Collection
        </button>
      </div>
    `;
    return;
  }

  // Build product cards
  grid.innerHTML = filtered.map(p => {
    const defaultColor = p.colors[0];
    return `
      <article class="product-card group flex flex-col justify-between bg-transparent" data-id="${p.id}">
        
        <!-- Media Showcase Container -->
        <div class="luxury-card-media relative aspect-[3/4] w-full overflow-hidden cursor-pointer" onclick="openQuickView(${p.id})">
          <!-- Primary Image -->
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            class="primary-img w-full h-full object-cover object-center"
            loading="lazy"
            onerror="this.src='assets/banner.jpg'"
          />
          
          <!-- Secondary Hover Image for smooth crossfade -->
          <img 
            src="${p.hoverImage || p.image}" 
            alt="${p.name} - Alternate view" 
            class="secondary-img w-full h-full object-cover object-center"
            loading="lazy"
            onerror="this.src='assets/banner.jpg'"
          />

          <!-- Discreet Editorial Badge (if present) -->
          ${p.editorialTag ? `
            <div class="absolute top-3.5 left-3.5 z-10">
              <span class="bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] tracking-ultra uppercase font-medium px-2.5 py-1 text-neutral-800 border border-neutral-300/40">
                ${p.editorialTag}
              </span>
            </div>
          ` : ''}

          <!-- Micro SKU -->
          <div class="absolute top-3.5 right-3.5 z-10">
            <span class="font-mono text-[10px] tracking-wider text-neutral-500 bg-[#FAF8F5]/80 backdrop-blur-xs px-2 py-0.5 border border-neutral-200/40">
              ${p.sku}
            </span>
          </div>

          <!-- Refined Floating Action Drawer on Desktop Hover -->
          <div class="card-hover-actions absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 flex items-center justify-center gap-2">
            <button 
              type="button"
              onclick="event.stopPropagation(); openQuickView(${p.id})"
              class="flex-1 py-2.5 px-3 bg-[#FAF8F5] text-neutral-900 hover:bg-white text-[10px] tracking-ultra uppercase font-medium transition text-center shadow-sm"
              title="View bag specifications"
            >
              Quick View
            </button>
            <button 
              type="button"
              onclick="event.stopPropagation(); addToCart(${p.id}, '${defaultColor}', 1)"
              class="flex-1 py-2.5 px-3 bg-neutral-950 text-white hover:bg-neutral-800 text-[10px] tracking-ultra uppercase font-medium transition text-center shadow-sm"
              title="Add to shopping bag"
            >
              Add To Bag
            </button>
          </div>
        </div>

        <!-- Typography & Meta -->
        <div class="pt-4 pb-2 flex flex-col flex-grow justify-between">
          <div>
            <!-- Category & Color Swatches Row -->
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] tracking-ultra uppercase font-medium text-neutral-400">
                ${p.categoryLabel}
              </span>
              <!-- Discreet Color Swatches -->
              <div class="flex items-center gap-1.5" title="Available in ${p.colors.join(', ')}">
                ${p.colorHex.map(c => `
                  <span class="w-2.5 h-2.5 rounded-full border border-neutral-300" style="background-color: ${c}"></span>
                `).join('')}
              </div>
            </div>

            <!-- Product Title -->
            <h3 
              class="font-editorial text-xl font-normal text-neutral-900 hover:text-[#7A1B24] transition-colors cursor-pointer leading-tight mb-2"
              onclick="openQuickView(${p.id})"
            >
              ${p.name}
            </h3>
          </div>

          <!-- Price & Concierge WhatsApp Row -->
          <div class="pt-1 hairline-t flex items-center justify-between text-xs">
            <div class="flex items-baseline gap-2">
              <span class="font-medium text-neutral-900 tracking-wide">
                Rs. ${p.price.toLocaleString()}
              </span>
              ${p.originalPrice ? `
                <span class="text-[11px] text-neutral-400 line-through">
                  Rs. ${p.originalPrice.toLocaleString()}
                </span>
              ` : ''}
            </div>

            <!-- 1-Click WhatsApp Quick Order Link -->
            <button 
              type="button" 
              onclick="quickOrderWhatsApp(${p.id}, '${defaultColor}')"
              class="text-[10px] tracking-micro uppercase font-medium text-[#187747] hover:text-neutral-900 transition flex items-center gap-1.5"
              title="Direct WhatsApp concierge inquiry"
            >
              <i class="fab fa-whatsapp text-sm"></i>
              <span>Concierge</span>
            </button>
          </div>

        </div>

      </article>
    `;
  }).join('');
}

// Reset filters to default
function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  currentSort = "featured";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";

  const catButtons = document.querySelectorAll(".category-tab-btn");
  catButtons.forEach(btn => {
    if (btn.getAttribute("data-category") === "all") {
      btn.click();
    }
  });

  renderProducts();
}

// 1-Click WhatsApp Direct Concierge Order
function quickOrderWhatsApp(productId, selectedColor) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const color = selectedColor || p.colors[0];
  const message = 
`⚜️ *CLARA ATELIER • PRIVATE CONCIERGE INQUIRY*
--------------------------------------------------
Flagship Boutique: No. 587/A Galle Road, Mount Lavinia
Concierge Hotline: +94 77 317 3217

Hello CLARA Team, I wish to inquire about reserving this handbag:

• *Silhouette:* ${p.name}
• *Atelier Code:* ${p.sku}
• *Colorway:* ${color}
• *Investment:* Rs. ${p.price.toLocaleString()}

Please confirm stock availability at the Mount Lavinia showroom and provide settlement details (Direct Bank Deposit / Cash on Delivery).

• *Delivery City / Town:* [Please specify your city]
• *Client Name:* [Your Name]`;

  const encodedUrl = `https://wa.me/${CLARA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}

// Add Item to Slide-over Cart
function addToCart(productId, selectedColor, quantity = 1) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const color = selectedColor || p.colors[0];

  const existingIndex = cart.findIndex(item => item.id === productId && item.color === color);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: p.id,
      sku: p.sku,
      name: p.name,
      price: p.price,
      image: p.image,
      color: color,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added to your Atelier Bag: ${p.name} (${color})`);
  openCartDrawer();
}

// Update Cart Quantity
function updateQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

// Remove from Cart
function removeFromCart(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartUI();
  }
}

// Update Cart UI (Count, Drawer items, Subtotal, Delivery meter)
function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(badge => {
    badge.innerText = totalItems;
    if (totalItems > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  const cartContainer = document.getElementById("cartItemsList");
  const subtotalElem = document.getElementById("cartSubtotal");
  const deliveryElem = document.getElementById("cartDeliveryFee");
  const totalElem = document.getElementById("cartGrandTotal");
  const deliveryMeter = document.getElementById("freeDeliveryMeter");
  const freeDeliveryText = document.getElementById("freeDeliveryText");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate delivery fee
  let deliveryFee = DELIVERY_RATES[selectedDeliveryOption].fee;
  if (subtotal >= FREE_SHIPPING_THRESHOLD && selectedDeliveryOption !== "pickup") {
    deliveryFee = 0;
  }
  if (selectedDeliveryOption === "pickup") {
    deliveryFee = 0;
  }

  const grandTotal = subtotal > 0 ? (subtotal + deliveryFee) : 0;

  // Update Free Shipping Progress Bar
  if (deliveryMeter && freeDeliveryText) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      deliveryMeter.style.width = "100%";
      deliveryMeter.style.backgroundColor = "#187747";
      freeDeliveryText.innerHTML = `Complimentary Islandwide Courier Unlocked`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      deliveryMeter.style.width = `${percent}%`;
      deliveryMeter.style.backgroundColor = "#C5A880";
      freeDeliveryText.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for complimentary courier`;
    }
  }

  if (subtotalElem) subtotalElem.innerText = `Rs. ${subtotal.toLocaleString()}`;
  if (deliveryElem) {
    if (deliveryFee === 0 && subtotal > 0) {
      deliveryElem.innerHTML = `<span class="text-[#187747] font-medium">Complimentary</span>`;
    } else {
      deliveryElem.innerText = `Rs. ${deliveryFee.toLocaleString()}`;
    }
  }
  if (totalElem) totalElem.innerText = `Rs. ${grandTotal.toLocaleString()}`;

  // Render items inside drawer
  if (cartContainer) {
    if (cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="py-16 text-center text-neutral-400">
          <i class="fas fa-shopping-bag text-3xl mb-3 text-neutral-300"></i>
          <p class="font-editorial text-2xl text-neutral-700">Your bag is currently empty</p>
          <p class="text-xs text-neutral-400 mt-1 mb-6">Discover timeless handbags sculpted for everyday distinction.</p>
          <button onclick="closeCartDrawer()" class="px-6 py-2.5 bg-neutral-900 text-white text-[10px] tracking-ultra uppercase hover:bg-neutral-800 transition">
            Browse The Collection
          </button>
        </div>
      `;
      const checkoutBtn = document.getElementById("cartCheckoutBtn");
      if (checkoutBtn) {
        checkoutBtn.setAttribute("disabled", "true");
        checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
      }
    } else {
      const checkoutBtn = document.getElementById("cartCheckoutBtn");
      if (checkoutBtn) {
        checkoutBtn.removeAttribute("disabled");
        checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
      }

      cartContainer.innerHTML = cart.map((item, index) => `
        <div class="flex items-start gap-3.5 py-3.5 hairline-b">
          <div class="w-16 h-20 bg-neutral-100 flex-shrink-0 overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='assets/banner.jpg'">
          </div>
          <div class="flex-grow min-w-0">
            <div class="flex justify-between items-start">
              <h4 class="font-editorial text-base text-neutral-900 truncate pr-2">${item.name}</h4>
              <button onclick="removeFromCart(${index})" class="text-neutral-400 hover:text-neutral-900 transition p-1" title="Remove item">
                <i class="fas fa-times text-xs"></i>
              </button>
            </div>
            <p class="text-[10px] tracking-wider uppercase text-neutral-500 mt-0.5">Color: ${item.color}</p>
            <div class="flex items-center justify-between mt-3">
              <!-- Stepper -->
              <div class="flex items-center border border-neutral-300/80 bg-white">
                <button onclick="updateQuantity(${index}, -1)" class="px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-100 transition">−</button>
                <span class="px-2.5 py-0.5 text-xs font-medium text-neutral-900">${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)" class="px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-100 transition">+</button>
              </div>
              <span class="text-xs font-medium text-neutral-900">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Change delivery selection in drawer
function changeDeliveryOption(option) {
  selectedDeliveryOption = option;
  const buttons = document.querySelectorAll(".delivery-opt-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-opt") === option) {
      btn.classList.add("border-neutral-900", "bg-neutral-900", "text-white");
      btn.classList.remove("border-neutral-300", "bg-white", "text-neutral-700");
    } else {
      btn.classList.remove("border-neutral-900", "bg-neutral-900", "text-white");
      btn.classList.add("border-neutral-300", "bg-white", "text-neutral-700");
    }
  });
  updateCartUI();
}

// Cart Drawer open/close
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Quick View Modal
function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  activeQuickViewProduct = p;
  activeQuickViewColor = p.colors[0];

  document.getElementById("qvImage").src = p.image;
  document.getElementById("qvSku").innerText = p.sku;
  document.getElementById("qvCategory").innerText = p.categoryLabel;
  document.getElementById("qvName").innerText = p.name;
  document.getElementById("qvPrice").innerText = `Rs. ${p.price.toLocaleString()}`;
  
  const originalElem = document.getElementById("qvOriginalPrice");
  if (originalElem) {
    if (p.originalPrice) {
      originalElem.innerText = `Rs. ${p.originalPrice.toLocaleString()}`;
      originalElem.classList.remove("hidden");
    } else {
      originalElem.classList.add("hidden");
    }
  }

  document.getElementById("qvDescription").innerText = p.description;
  document.getElementById("qvDimensions").innerText = p.dimensions;
  document.getElementById("qvMaterial").innerText = p.material;
  document.getElementById("qvFeatures").innerText = p.features;

  // Render color options
  const colorContainer = document.getElementById("qvColorOptions");
  if (colorContainer) {
    colorContainer.innerHTML = p.colors.map((color, idx) => `
      <button 
        type="button" 
        onclick="selectQuickViewColor('${color}')" 
        class="qv-color-btn px-3 py-1.5 text-xs border ${idx === 0 ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-300 bg-white text-neutral-800'} transition"
        data-color="${color}"
      >
        ${color}
      </button>
    `).join('');
  }

  const qvQty = document.getElementById("qvQuantity");
  if (qvQty) qvQty.value = "1";

  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function selectQuickViewColor(color) {
  activeQuickViewColor = color;
  const buttons = document.querySelectorAll(".qv-color-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-color") === color) {
      btn.classList.add("border-neutral-900", "bg-neutral-900", "text-white");
      btn.classList.remove("border-neutral-300", "bg-white", "text-neutral-800");
    } else {
      btn.classList.remove("border-neutral-900", "bg-neutral-900", "text-white");
      btn.classList.add("border-neutral-300", "bg-white", "text-neutral-800");
    }
  });
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function addQuickViewToCart() {
  if (!activeQuickViewProduct) return;
  const qtyInput = document.getElementById("qvQuantity");
  const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
  addToCart(activeQuickViewProduct.id, activeQuickViewColor, qty);
  closeQuickView();
}

function orderQuickViewWhatsApp() {
  if (!activeQuickViewProduct) return;
  quickOrderWhatsApp(activeQuickViewProduct.id, activeQuickViewColor);
  closeQuickView();
}

// WhatsApp Checkout Modal from Drawer
function openWhatsAppCheckoutModal() {
  if (cart.length === 0) return;
  closeCartDrawer();
  const modal = document.getElementById("waCheckoutModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeWhatsAppCheckoutModal() {
  const modal = document.getElementById("waCheckoutModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Submit Full WhatsApp Bag Order
function submitWhatsAppOrder(event) {
  event.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const city = document.getElementById("custCity").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const postal = document.getElementById("custPostal") ? document.getElementById("custPostal").value.trim() : "";
  const notes = document.getElementById("custNotes") ? document.getElementById("custNotes").value.trim() : "";
  
  const paymentRadio = document.querySelector('input[name="paymentMode"]:checked');
  const paymentMode = paymentRadio ? paymentRadio.value : "Direct Bank Transfer";

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let deliveryFee = DELIVERY_RATES[selectedDeliveryOption].fee;
  if (subtotal >= FREE_SHIPPING_THRESHOLD || selectedDeliveryOption === "pickup") {
    deliveryFee = 0;
  }
  const grandTotal = subtotal + deliveryFee;

  // Build bag lines
  const itemsText = cart.map((item, idx) => 
    `${idx + 1}. *${item.name}* (${item.sku})\n   Color: ${item.color} | Qty: ${item.quantity} | Rs. ${(item.price * item.quantity).toLocaleString()}`
  ).join('\n\n');

  const orderMessage = 
`⚜️ *CLARA ATELIER • DISPATCH MEMO & PRIVATE ORDER*
--------------------------------------------------
Flagship Boutique: No. 587/A Galle Road, Mount Lavinia
Concierge Hotline: +94 77 317 3217

*CLIENT INFORMATION:*
• Name: ${name}
• Contact: ${phone}
• Delivery Destination: ${city} ${postal ? '(' + postal + ')' : ''}
• Address: ${address}
• Preferred Settlement: ${paymentMode}
${notes ? '• Concierge Notes: ' + notes : ''}

*SELECTED PIECES:*
${itemsText}

--------------------------------------------------
*Subtotal:* Rs. ${subtotal.toLocaleString()}
*Courier Dispatch:* ${deliveryFee === 0 ? 'Complimentary' : 'Rs. ' + deliveryFee.toLocaleString() + ' (' + DELIVERY_RATES[selectedDeliveryOption].label + ')'}
*TOTAL PAYABLE:* Rs. ${grandTotal.toLocaleString()}

Kindly verify my order, confirm stock availability, and send the settlement instructions. Thank you!`;

  const encodedUrl = `https://wa.me/${CLARA_WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}`;
  window.open(encodedUrl, "_blank");

  // Clear cart upon submission
  cart = [];
  saveCartToStorage();
  updateCartUI();
  closeWhatsAppCheckoutModal();
  showToast("Your atelier order was dispatched to WhatsApp Concierge!");
}

// Wholesale / B2B Inquiry Modal
function openWholesaleModal() {
  const modal = document.getElementById("wholesaleModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeWholesaleModal() {
  const modal = document.getElementById("wholesaleModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function submitWholesaleInquiry(event) {
  event.preventDefault();

  const business = document.getElementById("wsBusinessName").value.trim();
  const contact = document.getElementById("wsContactName").value.trim();
  const phone = document.getElementById("wsPhone").value.trim();
  const town = document.getElementById("wsTown").value.trim();
  const qty = document.getElementById("wsQtyEstimate").value;
  const message = document.getElementById("wsMessage").value.trim();

  const wsText = 
`⚜️ *CLARA BAGS — B2B WHOLESALE & STOCKIST INQUIRY*
--------------------------------------------------
Flagship Boutique: No. 587/A Galle Road, Mount Lavinia
Wholesale Division Hotline: +94 77 317 3217

• *Boutique / Store:* ${business}
• *Representative:* ${contact}
• *WhatsApp Hotline:* ${phone}
• *Town / District:* ${town}
• *Volume Estimate:* ${qty}
${message ? '• *Required Styles:* ' + message : ''}

We would like to review the complete CLARA wholesale catalog, volume discount tiers, and islandwide courier terms. Thank you!`;

  const encodedUrl = `https://wa.me/${CLARA_WHATSAPP_NUMBER}?text=${encodeURIComponent(wsText)}`;
  window.open(encodedUrl, "_blank");
  closeWholesaleModal();
  showToast("Wholesale inquiry forwarded to B2B team!");
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById("appToast");
  const toastMsg = document.getElementById("toastMessage");
  if (toast && toastMsg) {
    toastMsg.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);
  }
}
