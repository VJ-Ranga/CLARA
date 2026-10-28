# CLARA — Status & Next Steps

Handoff notes so the remaining work can be done locally. Live site: https://vj-ranga.github.io/CLARA/

## How the project works

- Static site: plain HTML + CSS + JS, no build step.
  - `css/main.css`: all styles.
  - `js/layout.js`: header, footer, menu and product cards (`Clara.productCard`), plus `CATEGORY_META`.
  - `js/products-data.js`: the product catalogue (single source of truth).
  - `js/store.js`: cart and checkout logic.
- **GitHub Pages publishes from `main`.** Push to `main` and the site updates in about a minute.
- **Run locally:** `python3 -m http.server 8000`, then open http://localhost:8000
- **Design language (home page):** follow this style for any new section.
  - Full-width sections: `.hsec`
  - Section heading `.shead`: small uppercase kicker and large light heading on the left, underlined uppercase link on the right.
  - Tile rows `.hrow`: 4:5 images with 8px gaps.
  - Spacing: ~30px side padding (16px on mobile).
  - Brand colours: black, white, red `var(--rose)`.

## Done so far

- Design preview bar removed. Only the chosen designs remain: Slider hero, Classic Boutique header, Noir footer, Classic Gallery product page.
- Header shrinks to a slim bar on scroll (logo, menu, search, wishlist, bag).
- Home page order:
  1. Hero (fits the screen)
  2. Shop by category
  3. New In (1 row of 4)
  4. Two image panels
  5. Most Loved (2 rows of 4)
  6. Our Story (animated panel)
  7. Customer reviews carousel
- Page names simplified: "Maison" became **About Us** and "Boutique" became **Contact Us**.

## To do: Shop page (`shop.html`)

1. **Title area:** replace the big centred "Handbags" block with the home `.shead` style: kicker "SHOP" and heading "Handbags" on the left, "12 products" on the right. Products should start much higher on the page.
2. **Grid spacing:** use the same gaps and side padding as the home page (8px gap, `--side` padding).
3. **Remove duplicate categories:** keep the tab row across the top and remove the "Category" list from the left sidebar. Keep the Colour and Price filters. Drop "Wishlist" from the category list.
4. **Fewer labels:** only show **New** and **Sale** badges. Remove Signature, Bestseller, Flagship Edition, Atelier Piece, Voyage, Trending and Gift Choice. The badge is rendered in `productCard()` in `js/layout.js` (line ~153).
5. **Sale pricing (agreed):**
   - Normal bags show one price only.
   - Bags that are really on sale show a red **Sale** badge, the new price, and the old price crossed out.
   - Mechanism: a product is on sale only if `originalPrice` is set in `js/products-data.js`. Remove `originalPrice` from all products except **2 demo sale items**, and show the "Sale" badge automatically when `originalPrice > price`.
   - Check the card (`js/layout.js` ~line 170) and the product page (`product.html` ~line 156).
6. **One name per category:** product cards say "Shoulder Satchels" and "Evening & Clutches" while the filters say "Shoulder Bags" and "Evening Clutches". Align `categoryName` in `products-data.js` with `CATEGORY_META` labels.
7. **Mobile:** the WhatsApp float covers the price of the bottom-left card. Add bottom padding to the grid, or move or shrink the button on the shop page.
8. **Mobile:** combine "Filter" and "Sort" into one slim sticky bar under the category tabs.

## To do: Mintpay and KOKO (buy now, pay later)

The store will offer **Mintpay** and **KOKO**, the two common Sri Lankan BNPL services. Both split the price into **3 interest-free instalments**. Confirm the exact terms, minimum and maximum order values, and the official logos and widget code from each merchant account before launch.

- **Product cards** (shop and home), as one small line under the price:
  `or 3 × Rs. 1,983 with [Mintpay] [KOKO]`
  Use small grey text with the two small logos. Calculate the instalment as `Math.ceil(price / 3)`.
- **Product page** (`product.html`), as a block under the price, before the colour picker:
  - "Pay in 3 interest-free instalments of **Rs. 1,983**"
  - Two rows or pills: [Mintpay logo] "3 × Rs. 1,983 · 0% interest" and [KOKO logo] "3 × Rs. 1,983 · 0% interest"
  - A small "How it works" link that opens a short popup: choose Mintpay or KOKO at checkout → pay the 1st instalment today → the rest over the next 2 months → no interest.
- **Cart and checkout** (`cart.html`, `checkout.html`):
  - Add "Mintpay" and "KOKO" as payment options next to Card, Bank transfer and COD.
  - Show the instalment amount for the order total.
  - Add both logos to the footer payment row (currently VISA, MASTERCARD, AMEX, BANK TRANSFER, COD).
- **Real integration:** the store must sign up as a merchant with each provider to get API keys and the official checkout and widget scripts. Mintpay has a WooCommerce plugin (https://wordpress.org/plugins/mintpay/), but this is a static site, so a backend or hosted checkout is needed for live payments. For the demo, the UI only is fine.
- Put the helper in one place, e.g. `Clara.bnpl(price)` in `js/layout.js`, so the instalment count and the logos can change in one spot.

## Open items: ask the client / before launch

- **Reviews:** the 5 reviews in the home carousel (`REVIEWS` list in `index.html`) are placeholder copy for the preview. **Replace them with real customer reviews before going live.**
- **Review counts:** product `rating` and `reviewCount` in `products-data.js` are placeholders too. Hide them, or replace them with real numbers.
- **Old prices:** the old prices must be real prices the bag was actually sold at (see the sale pricing item above).
- **Slider slide 2** still reads "The Celebration Edit / For every poruwa moment". Keep it or change it?
- **Product page:** the photo gallery doesn't stay pinned while the details scroll (this was already the case before the changes).
- **iPhone zoom:** add `font-size: 16px` to the newsletter email input in the Noir footer on phones, to stop iPhones zooming in when it's tapped.
- **Unused files:** `js/app.js`, `css/styles.css`, and two stray images in the repo root (`474572439_...jpg`, `WhatsApp Image ...jpeg`) aren't used. Delete them if not needed.
- **Unneeded branch:** `claude/confident-fermi-cqhz8j` and can be deleted.
