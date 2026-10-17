/**
 * CLARA Bags — Shared layout & UI kit (Maison edition)
 * Renders the top bar, masthead header with mega menu, mobile menu, search overlay,
 * newsletter + footer, the checkout header, product cards and carousels on every page,
 * and handles the wishlist, recently viewed items and scroll reveals.
 * Load after products-data.js and store.js.
 */

const CLARA_INFO = {
  phoneMobile: "077 317 3217",
  phoneMobileIntl: "94773173217",
  phoneLand: "011 703 7030",
  email: "clara2bags@gmail.com",
  corporateEmail: "sl.djindustries@gmail.com",
  address: "No. 587/A, Galle Road, Mount Lavinia",
  hours: "Open daily, 9:30 AM – 7:30 PM",
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
  { key: "wallets", label: "Small Leather Goods", image: "assets/img/cat-wallets.jpg" }
];

const Clara = (() => {
  // ---------------------------------------------------------------------------
  // Icons
  // ---------------------------------------------------------------------------
  const PATHS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.9 1.2-1.8 2.8-2.9 4.8-2.9 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z"/>',
    bag: '<path d="M5.5 7.5h13l1 12.5h-15z"/><path d="M9 7.5V6.5a3 3 0 0 1 6 0v1"/>',
    menu: '<path d="M3 7h18M3 12h18M3 17h18"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    "chev-down": '<path d="m6 9 6 6 6-6"/>',
    "chev-left": '<path d="m15 5-7 7 7 7"/>',
    "chev-right": '<path d="m9 5 7 7-7 7"/>',
    plus: '<path d="M12 4v16M4 12h16"/>',
    minus: '<path d="M4 12h16"/>',
    truck: '<path d="M2.5 6.5h12v9.5h-12zM14.5 9.5h4l3 3v3.5h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
    store: '<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5h16v.4a2.8 2.8 0 0 1-5.3 1.3 2.9 2.9 0 0 1-5.4 0A2.8 2.8 0 0 1 4 9.9z"/><path d="M5.5 12.5V20h13v-7.5M10 20v-4h4v4"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
    card: '<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3 10h18M7 15h4"/>',
    pin: '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M5 4h3.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1L3.2 9.4l6.1-.8z"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9"/>',
    facebook: '<path d="M14 8.5V7c0-.8.5-1.2 1.2-1.2H17V3h-2.5C12 3 11 4.6 11 6.8v1.7H9V11h2v10h3V11h2.4l.4-2.5z"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46"/><path d="M14 3c.5 2.6 2.2 4.2 5 4.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="1.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    cash: '<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><circle cx="12" cy="12" r="2.8"/>',
    printer: '<path d="M7 9V3.5h10V9M7 17H4.5v-7.5h15V17H17"/><path d="M7 14h10v6.5H7z"/>',
    exchange: '<path d="M4 9h12a4 4 0 0 1 0 8h-3"/><path d="m8 5-4 4 4 4"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4"/><path d="M5 12v8h14v-8M12 8v12"/><path d="M12 8S10.5 3.5 8 4.2C6 4.8 7 8 12 8zm0 0s1.5-4.5 4-3.8C18 4.8 17 8 12 8z"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };
  const WHATSAPP = '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.01-2.42.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2.01.89 2.15.07.15.12.32.02.51-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.59.17.29.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.65-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38z"/>';

  function icon(name, cls = "") {
    if (name === "whatsapp") return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" style="fill:currentColor;stroke:none">${WHATSAPP}</svg>`;
    return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${PATHS[name] || ""}</svg>`;
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll("[data-icon]:not([data-icon-done])").forEach(el => {
      el.innerHTML = icon(el.dataset.icon);
      el.dataset.iconDone = "1";
    });
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  const waLink = (text) => `https://wa.me/${CLARA_INFO.phoneMobileIntl}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  function store(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
  }

  // ---------------------------------------------------------------------------
  // Wishlist & recently viewed
  // ---------------------------------------------------------------------------
  const WISHLIST_KEY = "clara_wishlist_v1";
  const RECENT_KEY = "clara_recent_v1";

  const getWishlist = () => store(WISHLIST_KEY, []);
  const isSaved = (id) => getWishlist().includes(Number(id));

  function toggleWishlist(id) {
    id = Number(id);
    const list = getWishlist();
    const saved = list.includes(id);
    const next = saved ? list.filter(x => x !== id) : [...list, id];
    save(WISHLIST_KEY, next);
    const product = getProductById(id);
    if (typeof showToast === "function") showToast(saved ? "Removed from your wishlist" : `“${product.name}” saved to your wishlist`);
    document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => {
      b.classList.toggle("is-saved", !saved);
      b.setAttribute("aria-pressed", String(!saved));
      b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
      const lbl = b.querySelector(".wish-label");
      if (lbl) lbl.textContent = saved ? "Add to wishlist" : "Saved to wishlist";
    });
    updateWishlistBadge();
    window.dispatchEvent(new CustomEvent("clara:wishlist-updated", { detail: { list: next } }));
  }

  function updateWishlistBadge() {
    const n = getWishlist().length;
    document.querySelectorAll(".wishlist-count").forEach(el => { el.textContent = n; el.classList.toggle("is-visible", n > 0); });
  }

  function addRecent(id) {
    const list = store(RECENT_KEY, []).filter(x => x !== id);
    save(RECENT_KEY, [id, ...list].slice(0, 8));
  }
  const getRecent = () => store(RECENT_KEY, []);

  // ---------------------------------------------------------------------------
  // Product card
  // ---------------------------------------------------------------------------
  function discountPct(p) {
    return p.originalPrice && p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  }

  function productCard(p, opts = {}) {
    const saved = isSaved(p.id);
    const href = `product.html?id=${p.id}`;
    const flag = p.isNew ? `<span class="card__flag">New</span>` : p.badge && opts.badges !== false ? `<span class="card__flag">${escapeHtml(p.badge)}</span>` : "";
    const reveal = opts.reveal === false ? "" : `reveal d${(opts.index || 0) % 4 + 1}`;
    const firstColor = p.colors[0].replace(/'/g, "\\'");
    return `
      <article class="card ${reveal}">
        <div class="card__media">
          <a href="${href}" aria-label="${escapeHtml(p.name)}">
            <img src="${p.images[0]}" alt="${escapeHtml(p.name)}" loading="lazy" width="600" height="800">
            <img class="alt" src="${p.images[1] || p.images[0]}" alt="" loading="lazy" width="600" height="800">
          </a>
          ${flag}
          <button type="button" class="heart ${saved ? "is-saved" : ""}" data-wish="${p.id}" aria-pressed="${saved}" aria-label="Save ${escapeHtml(p.name)} to wishlist" onclick="Clara.toggleWishlist(${p.id})">${icon("heart")}</button>
          <div class="card__quick"><button type="button" onclick="addToCart(${p.id}, '${firstColor}', 1)">Quick add</button></div>
        </div>
        <div class="card__body">
          <span class="card__cat">${escapeHtml(p.categoryName)}</span>
          <h3 class="card__name"><a href="${href}">${escapeHtml(p.name)}</a></h3>
          <div class="card__price">${p.originalPrice ? `<span class="now">${formatLKR(p.price)}</span><s>${formatLKR(p.originalPrice)}</s>` : `<span>${formatLKR(p.price)}</span>`}</div>
          <div class="card__colors">${p.colorHex.map((c, i) => `<i style="background:${c}" title="${escapeHtml(p.colors[i] || "")}"></i>`).join("")}<span>${p.colors.length} colours</span></div>
        </div>
      </article>`;
  }

  // ---------------------------------------------------------------------------
  // Header
  // ---------------------------------------------------------------------------
  function logo(tag = "Mount Lavinia · Sri Lanka") {
    return `<a href="index.html" class="logo" aria-label="CLARA — home">
      <span class="logo__row"><img class="logo__rose" src="assets/rose.png" alt="" width="30" height="30"><span class="logo__name">CLARA</span></span>
      ${tag ? `<span class="logo__tag">${tag}</span>` : ""}
    </a>`;
  }

  function header() {
    const page = document.body.dataset.page || "";
    const cat = new URLSearchParams(location.search).get("cat");
    const on = (cond) => (cond ? "is-active" : "");

    const messages = [
      "Complimentary islandwide delivery over Rs. 10,000",
      "10% off your first order with code WELCOME10",
      "Cash on delivery available across Sri Lanka"
    ];

    const html = `
      <div class="topbar">
        <div class="container topbar__inner">
          <div class="topbar__left"><a href="contact.html">Our boutique · Mount Lavinia</a></div>
          <div class="topbar__msgs" aria-live="polite">${messages.map((m, i) => `<span class="${i === 0 ? "is-active" : ""}">${m}</span>`).join("")}</div>
          <div class="topbar__right"><a href="tel:0773173217">${CLARA_INFO.phoneMobile}</a><a href="${waLink("Hello CLARA, I would like some help.")}" target="_blank" rel="noopener">WhatsApp</a></div>
        </div>
      </div>
      <header class="site-header" id="siteHeader">
        <div class="container masthead">
          <div class="masthead__left">
            <button type="button" class="hbtn menu-btn" aria-label="Open menu" onclick="Clara.openMenu()">${icon("menu")}</button>
            <button type="button" class="hbtn hbtn-icon-only" aria-label="Search" onclick="Clara.openSearch()">${icon("search")}</button>
            <form class="search-inline" action="shop.html" role="search">
              ${icon("search")}
              <input type="search" name="q" placeholder="Search" aria-label="Search the collection" autocomplete="off">
            </form>
          </div>
          ${logo()}
          <div class="masthead__right">
            <a href="contact.html" class="hbtn hide-mobile">${icon("store")}<span class="lbl">Boutique</span></a>
            <a href="shop.html?saved=1" class="hbtn hide-mobile" aria-label="Wishlist">${icon("heart")}<span class="lbl">Wishlist</span><span class="count wishlist-count">0</span></a>
            <button type="button" class="hbtn" aria-label="Shopping bag" onclick="openSlideCart()">${icon("bag")}<span class="lbl">Bag</span><span class="count cart-count-badge">0</span></button>
          </div>
        </div>
        <nav class="primary-nav-wrap" aria-label="Primary">
          <ul class="primary-nav">
            <li><a href="shop.html?cat=new" class="${on(page === "shop" && cat === "new")}">New In</a></li>
            <li>
              <a href="shop.html" class="${on(page === "shop" && !cat)}">Handbags</a>
              <div class="mega">
                <div class="container mega__inner">
                  <div><h6>Handbags</h6><ul>
                    <li><a href="shop.html">View all</a></li>
                    ${CATEGORY_META.slice(0, 6).map(c => `<li><a href="shop.html?cat=${c.key}">${c.label}</a></li>`).join("")}
                  </ul></div>
                  <div><h6>Occasions</h6><ul>
                    <li><a href="shop.html?cat=totes">The working week</a></li>
                    <li><a href="shop.html?cat=vanity">Weddings &amp; celebrations</a></li>
                    <li><a href="shop.html?cat=clutches">Evenings out</a></li>
                    <li><a href="shop.html?cat=crossbody">Weekend &amp; travel</a></li>
                  </ul></div>
                  <div><h6>Gifts</h6><ul>
                    <li><a href="shop.html?cat=wallets">Small leather goods</a></li>
                    <li><a href="shop.html?price=under4">Gifts under Rs. 4,000</a></li>
                    <li><a href="shop.html?saved=1">Your wishlist</a></li>
                  </ul></div>
                  <div class="mega__feature">
                    <a href="shop.html?cat=new"><div class="img"><img src="assets/img/hero-palms.jpg" alt="" loading="lazy"></div><span>New arrivals</span></a>
                    <a href="shop.html?cat=clutches"><div class="img"><img src="assets/img/evening-gown.jpg" alt="" loading="lazy"></div><span>The evening edit</span></a>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="shop.html?cat=clutches" class="${on(page === "shop" && cat === "clutches")}">Evening</a></li>
            <li><a href="shop.html?cat=totes" class="${on(page === "shop" && cat === "totes")}">Work &amp; Totes</a></li>
            <li><a href="shop.html?cat=wallets" class="${on(page === "shop" && cat === "wallets")}">Small Leather Goods</a></li>
            <li><a href="about.html" class="${on(page === "about")}">Maison</a></li>
            <li><a href="contact.html" class="${on(page === "contact")}">Boutique</a></li>
          </ul>
        </nav>
      </header>

      <div class="mnav" id="mobileNav" aria-hidden="true">
        <div class="mnav__scrim" onclick="Clara.closeMenu()"></div>
        <aside class="mnav__panel" aria-label="Menu">
          <div class="mnav__head">${logo("")}<button type="button" class="icon-btn" aria-label="Close menu" onclick="Clara.closeMenu()">${icon("close")}</button></div>
          <nav class="mnav__links">
            <a href="shop.html?cat=new">New In ${icon("chev-right")}</a>
            <a href="shop.html">All Handbags ${icon("chev-right")}</a>
            ${CATEGORY_META.map(c => `<a href="shop.html?cat=${c.key}">${c.label} ${icon("chev-right")}</a>`).join("")}
            <a href="shop.html?saved=1">Wishlist ${icon("heart")}</a>
            <a href="about.html">Maison CLARA ${icon("chev-right")}</a>
            <a href="contact.html">Visit the boutique ${icon("chev-right")}</a>
          </nav>
          <div class="mnav__foot">
            <span>${CLARA_INFO.address}</span>
            <span>${CLARA_INFO.hours}</span>
            <a href="tel:0773173217">${CLARA_INFO.phoneMobile}</a>
          </div>
        </aside>
      </div>

      <div class="search-ov" id="searchOverlay" aria-hidden="true">
        <button type="button" class="icon-btn close" aria-label="Close search" onclick="Clara.closeSearch()">${icon("close")}</button>
        <form action="shop.html" role="search">
          <input type="search" name="q" placeholder="What are you looking for?" aria-label="Search the collection" autocomplete="off">
          <button type="submit" class="icon-btn" aria-label="Search">${icon("search")}</button>
        </form>
        <div class="search-ov__tags">
          <a class="tag" href="shop.html?q=vanity">Vanity bags</a>
          <a class="tag" href="shop.html?q=laptop">Laptop totes</a>
          <a class="tag" href="shop.html?cat=clutches">Wedding clutches</a>
          <a class="tag" href="shop.html?q=noir">Black</a>
          <a class="tag" href="shop.html?cat=wallets">Wallets</a>
        </div>
      </div>`;

    document.currentScript.insertAdjacentHTML("beforebegin", html);
    rotateTopbar();
  }

  function checkoutHeader() {
    document.currentScript.insertAdjacentHTML("beforebegin", `
      <header class="co-header">
        <div class="container co-header__inner">
          <a href="cart.html" class="back">${icon("chev-left")}<span>Back to bag</span></a>
          ${logo("")}
          <span class="secure">${icon("lock")}<span>Secure checkout</span></span>
        </div>
      </header>`);
  }

  function rotateTopbar() {
    const items = document.querySelectorAll(".topbar__msgs span");
    if (items.length < 2) return;
    let i = 0;
    setInterval(() => {
      items[i].classList.remove("is-active");
      i = (i + 1) % items.length;
      items[i].classList.add("is-active");
    }, 4500);
  }

  function setOverlay(id, open) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("is-open", open);
    el.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("no-scroll", open);
  }
  const openMenu = () => setOverlay("mobileNav", true);
  const closeMenu = () => setOverlay("mobileNav", false);
  function openSearch() {
    setOverlay("searchOverlay", true);
    setTimeout(() => document.querySelector("#searchOverlay input").focus(), 100);
  }
  const closeSearch = () => setOverlay("searchOverlay", false);

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  function footer() {
    const s = CLARA_INFO.social;
    const socials = [
      s.instagram && `<a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>`,
      s.facebook && `<a href="${s.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook")}</a>`,
      s.tiktok && `<a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${icon("tiktok")}</a>`,
      `<a href="${waLink("Hello CLARA, I would like some help.")}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a>`
    ].filter(Boolean).join("");

    document.currentScript.insertAdjacentHTML("beforebegin", `
      <section class="container news" id="newsletter">
        <span class="kicker">The CLARA Letter</span>
        <h2 class="title-md">Be the first to know</h2>
        <p>New arrivals, boutique events and private offers. Join today and receive 10% off your first order.</p>
        <form onsubmit="Clara.joinNews(event)">
          <label for="newsEmail" class="visually-hidden">Email address</label>
          <input id="newsEmail" type="email" required placeholder="Your email address" autocomplete="email">
          <button type="submit">Subscribe</button>
        </form>
        <p class="ok">Thank you for joining. Use code <b>WELCOME10</b> for 10% off your first order.</p>
      </section>
      <footer class="site-footer">
        <div class="container footer-cols">
          <div class="footer-brand">
            ${logo("Mount Lavinia · Sri Lanka")}
            <p>Handbags for the modern Sri Lankan woman — chosen with care at our boutique on Galle Road and delivered to your door.</p>
            <div class="socials">${socials}</div>
          </div>
          <div><h4>Shop</h4><ul>
            <li><a href="shop.html?cat=new">New In</a></li>
            <li><a href="shop.html">All Handbags</a></li>
            ${CATEGORY_META.slice(0, 5).map(c => `<li><a href="shop.html?cat=${c.key}">${c.label}</a></li>`).join("")}
          </ul></div>
          <div><h4>Client Services</h4><ul>
            <li><a href="contact.html">Contact us</a></li>
            <li><a href="product.html?id=1#delivery">Delivery &amp; returns</a></li>
            <li><a href="cart.html">Shopping bag</a></li>
            <li><a href="shop.html?saved=1">Wishlist</a></li>
            <li><a href="contact.html#enquiry">Wholesale</a></li>
          </ul></div>
          <div><h4>Maison</h4><ul>
            <li><a href="about.html">Our story</a></li>
            <li><a href="contact.html">The boutique</a></li>
            <li><a href="${s.instagram}" target="_blank" rel="noopener">Instagram</a></li>
          </ul></div>
          <div><h4>Visit Us</h4><ul>
            <li>${CLARA_INFO.address}, Sri Lanka</li>
            <li>${CLARA_INFO.hours}</li>
            <li><a href="tel:0773173217">${CLARA_INFO.phoneMobile}</a> · <a href="tel:0117037030">${CLARA_INFO.phoneLand}</a></li>
            <li><a href="mailto:${CLARA_INFO.email}">${CLARA_INFO.email}</a></li>
          </ul></div>
        </div>
        <div class="container footer-legal">
          <span>© ${new Date().getFullYear()} CLARA Bags · DJ Industries. All rights reserved.</span>
          <span class="pay"><span>Visa</span><span>Mastercard</span><span>Amex</span><span>Bank transfer</span><span>Cash on delivery</span></span>
        </div>
      </footer>`);
  }

  function minimalFooter() {
    document.currentScript.insertAdjacentHTML("beforebegin", `
      <footer class="site-footer"><div class="container footer-legal">
        <span>© ${new Date().getFullYear()} CLARA Bags · DJ Industries</span>
        <span>Need help? <a class="link-plain" href="tel:0773173217">${CLARA_INFO.phoneMobile}</a> · <a class="link-plain" href="${waLink("Hello CLARA, I need help with checkout.")}" target="_blank" rel="noopener">WhatsApp</a></span>
      </div></footer>`);
  }

  function joinNews(event) {
    event.preventDefault();
    const email = event.target.querySelector("input").value.trim();
    const list = store("clara_circle", []);
    if (email && !list.includes(email)) save("clara_circle", [...list, email]);
    event.target.closest(".news").classList.add("is-joined");
  }

  // ---------------------------------------------------------------------------
  // Carousel (scroll-snap track with arrows + progress)
  // ---------------------------------------------------------------------------
  function initCarousels(root = document) {
    root.querySelectorAll("[data-carousel]").forEach(wrap => {
      if (wrap.dataset.ready) return;
      wrap.dataset.ready = "1";
      const track = wrap.querySelector(".carousel__track");
      const bar = wrap.querySelector(".progress i");
      const id = wrap.dataset.carousel;
      const step = () => track.clientWidth * 0.9;
      document.querySelectorAll(`[data-prev="${id}"]`).forEach(b => b.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" })));
      document.querySelectorAll(`[data-next="${id}"]`).forEach(b => b.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" })));
      const update = () => {
        if (!bar) return;
        const max = track.scrollWidth - track.clientWidth;
        const w = Math.max(10, (track.clientWidth / track.scrollWidth) * 100);
        bar.style.width = `${w}%`;
        bar.style.left = `${max > 0 ? (track.scrollLeft / max) * (100 - w) : 0}%`;
      };
      track.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    });
  }

  // ---------------------------------------------------------------------------
  // Scroll reveal
  // ---------------------------------------------------------------------------
  let observer = null;
  function observeReveals(root = document) {
    const els = root.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("is-in")); return; }
    if (!observer) {
      observer = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); observer.unobserve(e.target); }
      }), { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });
    }
    els.forEach(el => observer.observe(el));
  }

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.remove("no-js");
    hydrateIcons();
    updateWishlistBadge();
    observeReveals();
    initCarousels();
    const h = document.getElementById("siteHeader");
    if (h) {
      const onScroll = () => h.classList.toggle("is-scrolled", window.scrollY > 60);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    document.addEventListener("keydown", e => { if (e.key === "Escape") { closeMenu(); closeSearch(); } });
  });

  return {
    icon, hydrateIcons, escapeHtml, waLink,
    header, checkoutHeader, footer, minimalFooter, logo,
    productCard, discountPct, initCarousels, observeReveals,
    getWishlist, isSaved, toggleWishlist, updateWishlistBadge, addRecent, getRecent,
    openMenu, closeMenu, openSearch, closeSearch, joinNews
  };
})();
