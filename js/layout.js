/**
 * CLARA Bags — Shared layout & UI kit
 * Renders the announcement bar, header (with mega menu), mobile menu, search overlay,
 * footer and product cards on every page, and handles the wishlist and scroll reveals.
 * Load after products-data.js and store.js.
 */

const CLARA_INFO = {
  phoneMobile: "077 317 3217",
  phoneMobileIntl: "94773173217",
  phoneLand: "011 703 7030",
  email: "clara2bags@gmail.com",
  corporateEmail: "sl.djindustries@gmail.com",
  address: "No. 587/A, Galle Road, Mount Lavinia",
  hours: "Open daily · 9:30 AM – 7:30 PM",
  // Add the Facebook and TikTok page links here and their icons will appear in the footer.
  social: {
    instagram: "https://www.instagram.com/clara_bags/",
    facebook: "",
    tiktok: ""
  }
};

const CATEGORY_META = [
  { key: "vanity", label: "Structured Vanity", image: "assets/img/cat-vanity.jpg" },
  { key: "totes", label: "Work & Totes", image: "assets/img/cat-totes.jpg" },
  { key: "crossbody", label: "Crossbody & Slings", image: "assets/img/cat-crossbody.jpg" },
  { key: "shoulder", label: "Shoulder Bags", image: "assets/img/cat-shoulder.jpg" },
  { key: "clutches", label: "Evening Clutches", image: "assets/img/cat-clutches.jpg" },
  { key: "travel", label: "Travel & Weekender", image: "assets/img/cat-travel.jpg" },
  { key: "wallets", label: "Wallets", image: "assets/img/cat-wallets.jpg" }
];

const Clara = (() => {
  // ---------------------------------------------------------------------------
  // Icons (inline SVG, 24px grid)
  // ---------------------------------------------------------------------------
  const PATHS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.9 1.2-1.8 2.8-2.9 4.8-2.9 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z"/>',
    bag: '<path d="M5.5 7.5h13l1 12.5h-15z"/><path d="M9 7.5V6.5a3 3 0 0 1 6 0v1"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "chev-down": '<path d="m6 9 6 6 6-6"/>',
    "chev-left": '<path d="m15 6-6 6 6 6"/>',
    "chev-right": '<path d="m9 6 6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    truck: '<path d="M3 6.5h11v9.5H3zM14 9.5h4l3 3v3.5h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    store: '<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5h16v.4a2.8 2.8 0 0 1-5.3 1.3 2.9 2.9 0 0 1-5.4 0A2.8 2.8 0 0 1 4 9.9z"/><path d="M5.5 12.5V20h13v-7.5M10 20v-4h4v4"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
    card: '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>',
    sparkle: '<path d="M12 3c.6 4.3 2.7 6.4 7 7-4.3.6-6.4 2.7-7 7-.6-4.3-2.7-6.4-7-7 4.3-.6 6.4-2.7 7-7z"/><path d="M19 16.5c.2 1.3.9 2 2.2 2.2-1.3.2-2 .9-2.2 2.2-.2-1.3-.9-2-2.2-2.2 1.3-.2 2-.9 2.2-2.2z"/>',
    pin: '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M5 4h3.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1L3.2 9.4l6.1-.8z"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9"/>',
    facebook: '<path d="M14 8.5V7c0-.8.5-1.2 1.2-1.2H17V3h-2.5C12 3 11 4.6 11 6.8v1.7H9V11h2v10h3V11h2.4l.4-2.5z"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 3c.5 2.6 2.2 4.2 5 4.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12"/><path d="M12 8S10.5 3.5 8 4.2C6 4.8 7 8 12 8zm0 0s1.5-4.5 4-3.8C18 4.8 17 8 12 8z"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    cash: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.8"/><path d="M6 9.5v5M18 9.5v5"/>',
    printer: '<path d="M7 9V3.5h10V9M7 17H4.5v-7.5h15V17H17"/><path d="M7 14h10v6.5H7z"/>',
    exchange: '<path d="M4 9h12a4 4 0 0 1 0 8h-3"/><path d="m8 5-4 4 4 4"/>',
    gem: '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9.5 4 12 9l2.5-5M12 9v11"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };

  const WHATSAPP_PATH = '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.01-2.42.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2.01.89 2.15.07.15.12.32.02.51-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.59.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38z"/>';

  function icon(name, cls = "") {
    if (name === "whatsapp") {
      return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" style="fill:currentColor;stroke:none">${WHATSAPP_PATH}</svg>`;
    }
    return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${PATHS[name] || ""}</svg>`;
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach(el => {
      if (el.dataset.iconDone) return;
      el.innerHTML = icon(el.dataset.icon, el.dataset.iconClass || "");
      el.dataset.iconDone = "1";
    });
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  const waLink = (text) => `https://wa.me/${CLARA_INFO.phoneMobileIntl}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  // ---------------------------------------------------------------------------
  // Wishlist
  // ---------------------------------------------------------------------------
  const WISHLIST_KEY = "clara_wishlist_v1";

  function getWishlist() {
    try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; } catch (e) { return []; }
  }

  function isSaved(id) { return getWishlist().includes(Number(id)); }

  function toggleWishlist(id, btn) {
    id = Number(id);
    let list = getWishlist();
    const saved = list.includes(id);
    list = saved ? list.filter(x => x !== id) : [...list, id];
    try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(list)); } catch (e) { /* storage unavailable */ }
    const product = getProductById(id);
    if (typeof showToast === "function") {
      showToast(saved ? `Removed from your wishlist` : `Saved “${product.name}” to your wishlist`);
    }
    document.querySelectorAll(`.heart-btn[data-id="${id}"]`).forEach(b => {
      b.classList.toggle("is-saved", !saved);
      b.setAttribute("aria-pressed", String(!saved));
      b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
    });
    updateWishlistBadge();
    window.dispatchEvent(new CustomEvent("clara:wishlist-updated", { detail: { list } }));
  }

  function updateWishlistBadge() {
    const n = getWishlist().length;
    document.querySelectorAll(".wishlist-count").forEach(el => {
      el.textContent = n;
      el.classList.toggle("is-visible", n > 0);
    });
  }

  // ---------------------------------------------------------------------------
  // Product card
  // ---------------------------------------------------------------------------
  function discountPct(p) {
    return p.originalPrice && p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  }

  function productCard(p, opts = {}) {
    const pct = discountPct(p);
    const saved = isSaved(p.id);
    const badges = [];
    if (p.isNew) badges.push(`<span class="badge new">New in</span>`);
    else if (p.badge) badges.push(`<span class="badge">${escapeHtml(p.badge)}</span>`);
    if (pct >= 10 && opts.showSale !== false) badges.push(`<span class="badge sale">−${pct}%</span>`);
    const href = `product.html?id=${p.id}`;
    const reveal = opts.reveal === false ? "" : `reveal reveal-d${(opts.index || 0) % 4 + 1}`;

    return `
      <article class="pcard ${reveal}">
        <div class="pcard__media">
          <a href="${href}" aria-label="${escapeHtml(p.name)}">
            <img src="${p.images[0]}" alt="${escapeHtml(p.name)}" loading="lazy" width="500" height="625">
            <img class="alt" src="${p.images[1] || p.images[0]}" alt="" loading="lazy" width="500" height="625">
          </a>
          <div class="pcard__badges">${badges.join("")}</div>
          <button type="button" class="heart-btn ${saved ? "is-saved" : ""}" data-id="${p.id}" aria-pressed="${saved}" aria-label="Save ${escapeHtml(p.name)} to wishlist" onclick="Clara.toggleWishlist(${p.id}, this)">${icon("heart")}</button>
          <div class="pcard__quick">
            <button type="button" class="btn btn-light" onclick="addToCart(${p.id}, '${p.colors[0].replace(/'/g, "\\'")}', 1)">${icon("bag")}Add to bag</button>
          </div>
        </div>
        <div class="pcard__body">
          <div class="pcard__meta">
            <span class="pcard__cat">${escapeHtml(p.categoryName)}</span>
            <span class="swatches" title="${escapeHtml(p.colors.join(", "))}">${p.colorHex.map((c, i) => `<i style="background:${c}" title="${escapeHtml(p.colors[i] || "")}"></i>`).join("")}</span>
          </div>
          <h3 class="pcard__name"><a href="${href}">${escapeHtml(p.name)}</a></h3>
          <div class="price"><b>${formatLKR(p.price)}</b>${p.originalPrice ? `<s>${formatLKR(p.originalPrice)}</s>` : ""}</div>
          <div class="pcard__koko">or 3 × ${formatLKR(Math.round(p.price / 3))} with KOKO</div>
        </div>
      </article>`;
  }

  // ---------------------------------------------------------------------------
  // Header, menus, overlays
  // ---------------------------------------------------------------------------
  const ROSE = `<img class="brand__rose" src="assets/rose.png" alt="" width="30" height="30">`;

  function brand(tag = "Bags · Sri Lanka") {
    return `<a href="index.html" class="brand" aria-label="CLARA Bags — home">
      <span class="brand__row">${ROSE}<span class="brand__name">CLARA</span></span>
      <span class="brand__tag">${tag}</span>
    </a>`;
  }

  function header() {
    const page = document.body.dataset.page || "";
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    const active = (key) => {
      if (key === "shop") return page === "shop" && !cat ? "is-active" : "";
      if (key === "new") return page === "shop" && cat === "new" ? "is-active" : "";
      if (key === "evening") return page === "shop" && cat === "clutches" ? "is-active" : "";
      return page === key ? "is-active" : "";
    };

    const messages = [
      `<span class="dot"></span>Free islandwide delivery over <strong>Rs. 10,000</strong>`,
      `<span class="dot"></span><strong>10% off</strong> your first order · code <strong>WELCOME10</strong>`,
      `<span class="dot"></span>Boutique open daily · <strong>Galle Road, Mount Lavinia</strong>`,
      `<span class="dot"></span>Card · Bank transfer · <strong>Cash on delivery</strong>`
    ];

    const catLinks = CATEGORY_META.map(c => `<li><a href="shop.html?cat=${c.key}">${c.label}</a></li>`).join("");

    const html = `
      <div class="announce" role="region" aria-label="Store announcements">
        <div class="announce__track">
          ${messages.map((m, i) => `<div class="announce__item ${i === 0 ? "is-active" : ""}">${m}</div>`).join("")}
        </div>
      </div>
      <header class="site-header" id="siteHeader">
        <div class="container header-inner">
          <nav class="nav-left" aria-label="Primary">
            <button type="button" class="icon-btn menu-toggle" aria-label="Open menu" onclick="Clara.openMenu()">${icon("menu")}</button>
            <div class="has-mega">
              <a href="shop.html" class="nav-link ${active("shop")}">Shop ${icon("chev-down", "chev")}</a>
              <div class="mega">
                <div class="mega__inner">
                  <div>
                    <h5>Handbags</h5>
                    <ul>${catLinks}</ul>
                  </div>
                  <div>
                    <h5>Shop by moment</h5>
                    <ul>
                      <li><a href="shop.html?cat=totes">To the office</a></li>
                      <li><a href="shop.html?cat=clutches">Evening &amp; weddings</a></li>
                      <li><a href="shop.html?cat=crossbody">Weekend ease</a></li>
                      <li><a href="shop.html?cat=travel">Getaways</a></li>
                      <li><a href="shop.html?cat=wallets">Gifts under Rs. 3,000</a></li>
                    </ul>
                  </div>
                  <div class="mega__features">
                    <a class="mega__card" href="shop.html?cat=new"><img src="assets/img/hero-palms.jpg" alt="" loading="lazy"><span>New in</span></a>
                    <a class="mega__card" href="shop.html?cat=clutches"><img src="assets/img/evening-gown.jpg" alt="" loading="lazy"><span>The evening edit</span></a>
                  </div>
                </div>
              </div>
            </div>
            <a href="shop.html?cat=new" class="nav-link ${active("new")}">New in</a>
            <a href="shop.html?cat=clutches" class="nav-link ${active("evening")}">Evening</a>
            <a href="about.html" class="nav-link ${active("about")}">Our story</a>
            <a href="contact.html" class="nav-link ${active("contact")}">Boutique</a>
          </nav>

          ${brand()}

          <div class="nav-right">
            <button type="button" class="icon-btn" aria-label="Search" onclick="Clara.openSearch()">${icon("search")}</button>
            <a href="shop.html?saved=1" class="icon-btn hide-sm" aria-label="Wishlist">${icon("heart")}<span class="count wishlist-count">0</span></a>
            <button type="button" class="icon-btn" aria-label="Shopping bag" onclick="openSlideCart()">${icon("bag")}<span class="count cart-count-badge">0</span></button>
          </div>
        </div>
      </header>

      <div class="mobile-nav" id="mobileNav" aria-hidden="true">
        <div class="mobile-nav__scrim" onclick="Clara.closeMenu()"></div>
        <aside class="mobile-nav__panel" aria-label="Menu">
          <div class="mobile-nav__head">
            ${brand()}
            <button type="button" class="icon-btn" aria-label="Close menu" onclick="Clara.closeMenu()">${icon("close")}</button>
          </div>
          <nav class="mobile-nav__links">
            <a href="shop.html">Shop all ${icon("arrow")}</a>
            <a href="shop.html?cat=new">New in ${icon("arrow")}</a>
            <a href="shop.html?cat=clutches">Evening edit ${icon("arrow")}</a>
            <a href="shop.html?saved=1">Wishlist ${icon("heart")}</a>
            <a href="about.html">Our story ${icon("arrow")}</a>
            <a href="contact.html">Visit the boutique ${icon("arrow")}</a>
          </nav>
          <div class="mobile-nav__cats">
            ${CATEGORY_META.map(c => `<a href="shop.html?cat=${c.key}">${c.label}</a>`).join("")}
          </div>
          <div class="mobile-nav__foot">
            <span>${CLARA_INFO.address}</span>
            <span>${CLARA_INFO.hours}</span>
            <a href="tel:0773173217">${CLARA_INFO.phoneMobile}</a>
          </div>
        </aside>
      </div>

      <div class="search-overlay" id="searchOverlay" aria-hidden="true">
        <button type="button" class="icon-btn close" aria-label="Close search" onclick="Clara.closeSearch()">${icon("close")}</button>
        <form action="shop.html" method="get" role="search">
          ${icon("search")}
          <input type="search" name="q" placeholder="Search handbags, totes, colours…" aria-label="Search the collection" autocomplete="off">
          <button type="submit" class="btn btn-dark btn-sm">Search</button>
        </form>
        <div class="search-suggest">
          <span>Popular</span>
          <a class="chip" href="shop.html?q=vanity">Vanity bags</a>
          <a class="chip" href="shop.html?q=laptop">Laptop totes</a>
          <a class="chip" href="shop.html?cat=clutches">Wedding clutches</a>
          <a class="chip" href="shop.html?q=noir">Black</a>
          <a class="chip" href="shop.html?q=wallet">Wallets</a>
        </div>
      </div>`;

    document.currentScript.insertAdjacentHTML("beforebegin", html);
    startAnnouncements();
  }

  function startAnnouncements() {
    const items = document.querySelectorAll(".announce__item");
    if (items.length < 2) return;
    let i = 0;
    setInterval(() => {
      const cur = items[i];
      i = (i + 1) % items.length;
      const next = items[i];
      cur.classList.remove("is-active");
      cur.classList.add("is-leaving");
      next.classList.remove("is-leaving");
      next.classList.add("is-active");
      setTimeout(() => cur.classList.remove("is-leaving"), 700);
    }, 4500);
  }

  function openMenu() {
    const el = document.getElementById("mobileNav");
    el.classList.add("is-open"); el.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeMenu() {
    const el = document.getElementById("mobileNav");
    if (!el) return;
    el.classList.remove("is-open"); el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }
  function openSearch() {
    const el = document.getElementById("searchOverlay");
    el.classList.add("is-open"); el.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    setTimeout(() => el.querySelector("input").focus(), 120);
  }
  function closeSearch() {
    const el = document.getElementById("searchOverlay");
    if (!el) return;
    el.classList.remove("is-open"); el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  function footer() {
    const s = CLARA_INFO.social;
    const socials = [
      s.instagram && `<a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>`,
      s.facebook && `<a href="${s.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook")}</a>`,
      s.tiktok && `<a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${icon("tiktok")}</a>`,
      `<a href="${waLink("Hello CLARA, I would like some help with my order.")}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a>`
    ].filter(Boolean).join("");

    const html = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-brand">
              ${brand("Bags · Sri Lanka")}
              <p>Handbags designed for the modern Sri Lankan woman — structured vanity bags, work totes, evening clutches and everyday companions, from our boutique in Mount Lavinia to your door.</p>
              <div class="socials">${socials}</div>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="shop.html?cat=new">New in</a></li>
                ${CATEGORY_META.slice(0, 6).map(c => `<li><a href="shop.html?cat=${c.key}">${c.label}</a></li>`).join("")}
              </ul>
            </div>
            <div>
              <h4>Client care</h4>
              <ul>
                <li><a href="cart.html">Shopping bag</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="shop.html?saved=1">Wishlist</a></li>
                <li><a href="about.html">Our story</a></li>
                <li><a href="contact.html">Visit the boutique</a></li>
                <li><a href="contact.html#enquiry">Wholesale enquiries</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit &amp; contact</h4>
              <ul class="footer-contact">
                <li>${icon("pin")}<span>${CLARA_INFO.address},<br>Sri Lanka</span></li>
                <li>${icon("clock")}<span>${CLARA_INFO.hours}</span></li>
                <li>${icon("phone")}<span><a href="tel:0773173217">${CLARA_INFO.phoneMobile}</a> · <a href="tel:0117037030">${CLARA_INFO.phoneLand}</a></span></li>
                <li>${icon("mail")}<a href="mailto:${CLARA_INFO.email}">${CLARA_INFO.email}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} CLARA Bags · DJ Industries. All rights reserved.</p>
            <div class="pay-chips"><span>VISA</span><span>Mastercard</span><span>AMEX</span><span>Bank transfer</span><span>Cash on delivery</span></div>
          </div>
        </div>
      </footer>`;

    document.currentScript.insertAdjacentHTML("beforebegin", html);
  }

  // ---------------------------------------------------------------------------
  // Scroll reveal
  // ---------------------------------------------------------------------------
  let revealObserver = null;
  function observeReveals(root = document) {
    const els = root.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("is-in")); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("is-in"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(el => revealObserver.observe(el));
  }

  // ---------------------------------------------------------------------------
  // Newsletter (stores the email locally and reveals the welcome code)
  // ---------------------------------------------------------------------------
  function joinCircle(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector("input[type=email]").value.trim();
    if (!email) return;
    try {
      const list = JSON.parse(localStorage.getItem("clara_circle") || "[]");
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("clara_circle", JSON.stringify(list));
    } catch (e) { /* storage unavailable */ }
    form.closest(".circle").classList.add("is-joined");
  }

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------
  function init() {
    document.documentElement.classList.remove("no-js");
    hydrateIcons();
    updateWishlistBadge();
    observeReveals();

    const headerEl = document.getElementById("siteHeader");
    const onScroll = () => headerEl && headerEl.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { closeMenu(); closeSearch(); }
    });
  }

  document.addEventListener("DOMContentLoaded", init);

  return {
    icon, hydrateIcons, escapeHtml, waLink,
    header, footer, productCard, discountPct,
    getWishlist, isSaved, toggleWishlist, updateWishlistBadge,
    openMenu, closeMenu, openSearch, closeSearch,
    observeReveals, joinCircle
  };
})();
