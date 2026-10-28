/**
 * CLARA Bags — Master Product Catalog Data
 * Single source of truth for all products across the website.
 *
 * Per-colour photos (optional): add colorImages to a product, keyed by the exact
 * colour name from its colors list. Picking that colour swaps the gallery to those
 * photos; colours not listed keep using images.
 *   colorImages: { "Onyx Noir": ["assets/img/sovereign-noir-1.jpg", "assets/img/sovereign-noir-2.jpg"] },
 */

const CLARA_PRODUCTS = [
  {
    id: 1,
    slug: "sovereign-structured-vanity-bag",
    sku: "CL-VT101",
    name: "The Sovereign Structured Vanity Bag",
    category: "vanity",
    categoryName: "Structured Vanity",
    price: 5950,
    originalPrice: 6800,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 24,
    stockStatus: "In Stock",
    stockQuantity: 14,
    colors: ["Bordeaux Wine", "Onyx Noir", "Rose Quartz"],
    colorHex: ["#6B1420", "#141416", "#D9A5A9"],
    images: [
      "assets/img/p-1575032617751.jpg",
      "assets/img/p-1606522754091.jpg",
      "assets/img/p-1506152983158.jpg",
      "assets/img/p-1617019114583.jpg"
    ],
    shortDescription: "An architectural vanity silhouette defined by rigid contours, polished brass turn-lock hardware, and an ergonomic arched top handle.",
    description: "The Sovereign Structured Vanity Bag represents the pinnacle of CLARA craftsmanship. Designed with an unwavering attention to architectural balance, its rigid frame preserves a pristine silhouette whether placed on a pedestal or draped across the shoulder. The exterior features premium micro-textured vegan leather, resistant to scuffs and daily wear, while the interior is lined in plush suede-touch microfibre with dedicated card and lipstick sleeves.",
    dimensions: "23 cm (Length) × 18 cm (Height) × 10 cm (Depth)",
    strapDrop: "Detachable & adjustable crossbody strap: 48 cm – 56 cm drop",
    material: "Textured Vegan Saffiano Leather • Brushed Champagne Brass Hardware",
    whatFits: "Fits iPhone 16 Pro Max, cardholder, car keys, lipstick, and compact powder",
    features: [
      "Rigid top-handle with reinforced interior metal spine",
      "Detachable, adjustable matching crossbody shoulder strap",
      "Signature turn-lock clasp closure in brushed brass",
      "Interior zip compartment and dual slip pocket sleeves",
      "Four protective brass studs on base to prevent scuffing"
    ]
  },
  {
    id: 2,
    slug: "kensington-executive-laptop-tote",
    sku: "CL-TT204",
    name: "Kensington Executive Laptop Tote",
    category: "totes",
    categoryName: "Work & Totes",
    price: 6850,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 38,
    stockStatus: "In Stock",
    stockQuantity: 19,
    colors: ["Cognac Tan", "Midnight Noir", "British Forest Green"],
    colorHex: ["#8B4513", "#121212", "#1C352D"],
    images: [
      "assets/img/p-1614179689702.jpg",
      "assets/img/p-1605733513597.jpg",
      "assets/img/p-1624687943971.jpg",
      "assets/img/p-1617019114583.jpg"
    ],
    shortDescription: "Tailored for the corporate professional. Accommodates up to a 14-inch MacBook with reinforced padded protection and twin shoulder arches.",
    description: "The Kensington Executive Tote unites boardroom authority with everyday practicality. Structured in rich pebbled faux leather that softens gracefully with age, this spacious tote easily hosts your laptop, daily documents, charger, and cosmetic pouch without losing its crisp lines. Reinforced tubular handles ensure supreme comfort when commuting through Colombo or traveling interstate.",
    dimensions: "37 cm (Length) × 30 cm (Height) × 14 cm (Depth)",
    strapDrop: "Comfort shoulder arch: 26 cm drop",
    material: "Pebbled Vegan Calfskin • Water-Resistant Jacquard Twill Lining",
    whatFits: "Fits up to 14.2-inch MacBook, iPad Pro, charger, A4 documents, water bottle, and makeup pouch",
    features: [
      "Padded central compartment fitting laptops and tablets up to 14.2 inches",
      "Full-length metallic zip closure for complete security",
      "Dual smartphone and notebook slip pockets with pen loops",
      "Reinforced base with metal protective feet",
      "Discreet exterior magnetic slip pocket for quick-access cards or phone"
    ]
  },
  {
    id: 3,
    slug: "riviera-suede-lock-satchel",
    sku: "CL-ST308",
    name: "Riviera Suede Turn-Lock Satchel",
    category: "shoulder",
    categoryName: "Shoulder Bags",
    price: 6450,
    isNew: false,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 19,
    stockStatus: "In Stock",
    stockQuantity: 8,
    colors: ["Camel Suede", "Dark Espresso", "Classic Noir"],
    colorHex: ["#B8860B", "#382212", "#111111"],
    images: [
      "assets/img/p-1612902456551.jpg",
      "assets/img/p-1590874103328.jpg",
      "assets/img/p-1605733513597.jpg",
      "assets/img/p-1483985988355.jpg"
    ],
    shortDescription: "Featured on our Mount Lavinia showroom façade. Sumptuous tactile suede framed by polished twist hardware and accordion gusseting.",
    description: "As showcased on the CLARA Mount Lavinia flagship banner, the Riviera Satchel marries textural suede softness with structured edge-painted contours. Its multi-compartment accordion construction organizes belongings effortlessly, while the silver-chrome lock plate commands attention wherever you arrive.",
    dimensions: "31 cm (Length) × 24 cm (Height) × 12 cm (Depth)",
    strapDrop: "Adjustable leather shoulder strap: 42 cm – 52 cm drop",
    material: "Rich Micro-Suede Exterior • Smooth Vegan Trim • Polished Chrome Hardware",
    whatFits: "Fits 11-inch iPad, continental wallet, sunglasses, keys, smartphone, and beauty touch-up kit",
    features: [
      "Twin divided main chambers separated by full-length zip partition",
      "Sculpted turn-lock clasp closure on front flap",
      "Detachable wide crossbody strap for versatile styling",
      "Back exterior zip pocket for transit cards or keys",
      "Fully lined in soft sand-toned canvas"
    ]
  },
  {
    id: 4,
    slug: "milano-equestrian-saddle-crossbody",
    sku: "CL-CB112",
    name: "Milano Equestrian Saddle Crossbody",
    category: "crossbody",
    categoryName: "Crossbody & Slings",
    price: 4750,
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 15,
    stockStatus: "In Stock",
    stockQuantity: 22,
    colors: ["Alabaster Cream", "Warm Taupe", "Onyx Noir"],
    colorHex: ["#F5F5DC", "#8E8279", "#111111"],
    images: [
      "assets/img/p-1566150905458.jpg",
      "assets/img/p-1628149455678.jpg",
      "assets/img/p-1506152983158.jpg",
      "assets/img/p-1617922001439.jpg"
    ],
    shortDescription: "Flawlessly proportioned curved saddle silhouette with magnetic flap closure and interchangeable wide guitar-style strap.",
    description: "The Milano Saddle Crossbody embodies hands-free luxury. Inspired by traditional equestrian saddlery, its curved base and clean flap are highlighted by fine tonal edge-painting. Lightweight yet remarkably accommodating, it comfortably holds your phone, wallet, cosmetics, and keys for effortless weekend strolls or high-society lunches.",
    dimensions: "22 cm (Length) × 17 cm (Height) × 8 cm (Depth)",
    strapDrop: "Adjustable wide webbing strap: 40 cm – 58 cm drop",
    material: "Smooth Matte Vegan Calf Leather • Pale Gold Hardware",
    whatFits: "Fits all standard smartphones, compact folding wallet, keys, and lip gloss",
    features: [
      "Curved saddle profile with hidden dual-magnet snap closure",
      "Interchangeable patterned webbing strap and tonal leather strap",
      "Internal zipper pocket and slip divider",
      "Exterior back slip pocket for instant phone access",
      "Scratch-resistant water-repellent matte finish"
    ]
  },
  {
    id: 5,
    slug: "aura-jeweled-evening-minaudiere",
    sku: "CL-EC405",
    name: "Aura Jeweled Evening Minaudière",
    category: "clutches",
    categoryName: "Evening Clutches",
    price: 3950,
    originalPrice: 4700,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 31,
    stockStatus: "In Stock",
    stockQuantity: 11,
    colors: ["Champagne Gold", "Sterling Silver", "Rose Bronze"],
    colorHex: ["#D4AF37", "#C0C0C0", "#B76E79"],
    images: [
      "assets/img/p-1563904092230.jpg",
      "assets/img/p-1575032617751.jpg",
      "assets/img/p-1550614000.jpg",
      "assets/img/p-1492707892479.jpg"
    ],
    shortDescription: "Sculptural metallic hard-case clutch crowned with an ornate faceted jewel clasp. Includes a detachable serpentine gold drop chain.",
    description: "Designed for galas, wedding celebrations, and cocktail evenings. The Aura Minaudière is crafted inside a rigid metallic shell wrapped in shimmering fine-grain poly-lamé. Topped with a cut-crystal clasp, it can be grasped elegantly in the palm or worn over the shoulder using the concealed serpentine drop chain.",
    dimensions: "20 cm (Length) × 12 cm (Height) × 5.5 cm (Depth)",
    strapDrop: "Detachable serpentine link chain: 52 cm drop",
    material: "Metallic Shimmer Poly-Lamé • Crystal Faceted Clasp • Champagne Gold Alloy",
    whatFits: "Fits all smartphones up to 6.7 inches, keys, cardholder, and lipstick",
    features: [
      "Hard-shell frame with spring-loaded jewel clasp opening",
      "Plush velvet interior lining to protect jewelry and delicate screens",
      "Fits all standard smartphones up to 6.7 inches diagonally",
      "Concealed hinge loop for chain tuck-in",
      "Includes protective microfibre dust bag"
    ]
  },
  {
    id: 6,
    slug: "oxford-grand-voyage-weekender",
    sku: "CL-TR502",
    name: "Oxford Grand Voyage Weekender",
    category: "travel",
    categoryName: "Travel & Weekender",
    price: 8250,
    isNew: false,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 27,
    stockStatus: "In Stock",
    stockQuantity: 9,
    colors: ["Espresso Brown", "Matte Noir"],
    colorHex: ["#3E2723", "#111111"],
    images: [
      "assets/img/p-1624687943971.jpg",
      "assets/img/p-1622560480605.jpg",
      "assets/img/p-1614179689702.jpg",
      "assets/img/p-1617922001439.jpg"
    ],
    shortDescription: "A sophisticated travel holdall engineered for spontaneous weekend escapes. Features a separate ventilated shoe compartment and luggage sleeve.",
    description: "The Oxford Grand Voyage Weekender redefines travel luxury. Sized precisely to satisfy standard airline cabin baggage dimensions, it accommodates 3 to 4 days of clothing and footwear. The bottom zippered foundation houses a separate water-resistant shoe deck, keeping pristine apparel completely isolated.",
    dimensions: "50 cm (Length) × 32 cm (Height) × 24 cm (Depth)",
    strapDrop: "Ergonomic leather twin handles: 18 cm drop • Padded sling: 45 cm – 65 cm drop",
    material: "Heavy-Duty Weather-Proof Faux Leather & Ballistic Weave Canvas",
    whatFits: "Fits 15.6-inch laptop, 3–4 days of clothing, pair of shoes, toiletries bag, tablet, and travel documents",
    features: [
      "Separate bottom zippered footwear/laundry chamber with twin brass eyelet breathers",
      "Rear luggage pass-through sleeve slides securely over suitcase pull handles",
      "Ultra-wide zip mouth opening for effortless packing and unpacking",
      "Padded detachable shoulder strap with nonslip silicone underside",
      "Internal zip pocket, dual mesh organizers, and waterproof toiletry pocket"
    ]
  },
  {
    id: 7,
    slug: "saint-germain-pleated-cloud-hobo",
    sku: "CL-HB701",
    name: "Saint-Germain Pleated Cloud Hobo",
    category: "shoulder",
    categoryName: "Shoulder Bags",
    price: 5850,
    isNew: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 12,
    stockStatus: "In Stock",
    stockQuantity: 16,
    colors: ["Oatmeal Ecru", "Olive Drab", "Rich Cocoa"],
    colorHex: ["#E3DAC9", "#556B2F", "#3B2F2F"],
    images: [
      "assets/img/p-1564422170194.jpg",
      "assets/img/p-1598532163257.jpg",
      "assets/img/p-1591561954557.jpg",
      "assets/img/p-1483985988355.jpg"
    ],
    shortDescription: "Slouchy, cloud-like gathered vegan leather inspired by Parisian haute couture. Sits with effortless poise under the arm.",
    description: "The Saint-Germain Hobo captures effortless Parisian elegance with its organic pleated drapes. Crafted from buttery-soft microfibre leather that drapes like genuine nappa, it secures with a concealed magnetic top closure and nests comfortably beneath your shoulder.",
    dimensions: "29 cm (Length) × 23 cm (Height) × 9 cm (Depth)",
    strapDrop: "Integrated padded shoulder arch: 24 cm drop",
    material: "Buttery Ruched Microfibre Vegan Leather • Antique Gold Accents",
    whatFits: "Fits 13-inch MacBook Air / iPad Pro, wallet, phone, water bottle, planner, and daily essentials",
    features: [
      "Hand-pleated drape with structured internal base",
      "Concealed magnetic snap top seal with safety tether",
      "Zippered interior side pocket and slip pocket",
      "Featherweight construction (weighs under 420g)",
      "Supple form collapses smoothly for travel packing"
    ]
  },
  {
    id: 8,
    slug: "vendome-90s-minimalist-baguette",
    sku: "CL-BG315",
    name: "Vendôme 90s Minimalist Baguette",
    category: "shoulder",
    categoryName: "Shoulder Bags",
    price: 4950,
    isNew: false,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 22,
    stockStatus: "In Stock",
    stockQuantity: 18,
    colors: ["Gloss Noir", "Deep Bordeaux", "Chestnut Brown"],
    colorHex: ["#0E0E10", "#58111A", "#654321"],
    images: [
      "assets/img/p-1506152983158.jpg",
      "assets/img/p-1612902456551.jpg",
      "assets/img/p-1564422170194.jpg",
      "assets/img/p-1492707892479.jpg"
    ],
    shortDescription: "Clean, horizontal proportions paying homage to 1990s high-fashion minimalism. Designed to tuck neatly under the shoulder.",
    description: "The Vendôme Baguette is an ode to nineties understated chic. Defined by its elongated rectangular frame, high-shine finish, and minimalist strap, it elevates monochrome tailoring or evening slips effortlessly.",
    dimensions: "27 cm (Length) × 14 cm (Height) × 6.5 cm (Depth)",
    strapDrop: "Slim shoulder strap: 22 cm drop",
    material: "High-Gloss Patent-Finish Vegan Leather • Pale Gold Hardware",
    whatFits: "Fits 13-inch laptop, planner, cosmetic case, wallet, keys, and phone",
    features: [
      "Horizontal baguette silhouette with top zip closure",
      "Scratch-resistant high-gloss patent polyurethane exterior",
      "Interior slip pocket for lipstick and cards",
      "Slim contoured shoulder strap tailored to stay in place",
      "Lightweight and compact"
    ]
  },
  {
    id: 9,
    slug: "mayfair-sculptural-trapezoid-bag",
    sku: "CL-VT109",
    name: "Mayfair Sculptural Trapezoid Bag",
    category: "vanity",
    categoryName: "Structured Vanity",
    price: 6250,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 16,
    stockStatus: "In Stock",
    stockQuantity: 7,
    colors: ["Alabaster Ivory", "Imperial Emerald", "Matte Noir"],
    colorHex: ["#F5F2EB", "#0B4F37", "#111111"],
    images: [
      "assets/img/p-1594223274512.jpg",
      "assets/img/p-1606522754091.jpg",
      "assets/img/p-1612902456551.jpg",
      "assets/img/p-1617019114583.jpg"
    ],
    shortDescription: "An architectural masterpiece defined by sharp geometric angles and an integrated sculpted arch handle.",
    description: "The Mayfair Trapezoid Bag is wearable architecture. Every line is deliberate: sharp flared sides taper into an elegant top arch, secured with a custom brushed-brass lock plate. Built for women who treat accessories as sculpture.",
    dimensions: "25 cm (Length) × 21 cm (Height) × 11 cm (Depth)",
    strapDrop: "Top arch handle: 10 cm drop • Crossbody strap: 50 cm – 56 cm drop",
    material: "Fine-Grain Palmellato Vegan Leather • Brushed Champagne Brass",
    whatFits: "Fits iPhone Pro Max, folding cardholder, car keys, lip gloss, and sunglasses",
    features: [
      "Sculptural trapezoid silhouette that holds its form permanently",
      "Custom geometric turn-lock clasp mechanism",
      "Detachable leather shoulder strap for crossbody versatility",
      "Internal center divider and zippered valuables pocket",
      "Protective brass bottom base studs"
    ]
  },
  {
    id: 10,
    slug: "montmartre-designer-printed-tote",
    sku: "CL-TT219",
    name: "Montmartre Designer Printed Tote",
    category: "totes",
    categoryName: "Work & Totes",
    price: 5450,
    isNew: false,
    isFeatured: false,
    rating: 4.6,
    reviewCount: 29,
    stockStatus: "In Stock",
    stockQuantity: 15,
    colors: ["Mustard Monogram", "Monochrome Noir"],
    colorHex: ["#D4AF37", "#1E1E22"],
    images: [
      "assets/img/p-1591561954557.jpg",
      "assets/img/p-1598532163257.jpg",
      "assets/img/p-1483985988355.jpg",
      "assets/img/p-1624687943971.jpg"
    ],
    shortDescription: "Matches the striking mannequin showcase from our Mount Lavinia boutique. Rich patterned canvas framed with cognac leatherette straps.",
    description: "Inspired by European cobblestone ateliers, the Montmartre Tote features a stylized geometric motif printed on durable textured canvas. Cognac brown leatherette shoulder straps provide comfort and enduring structural integrity for shopping, work, and city outings.",
    dimensions: "35 cm (Length) × 28 cm (Height) × 13 cm (Depth)",
    strapDrop: "Flat shoulder straps: 25 cm drop",
    material: "Screen-Printed Poly-Canvas • Reinforced PU Leather Trim",
    whatFits: "Fits iPad Mini, long wallet, phone, keys, and cosmetic pouch",
    features: [
      "Top magnetic snap closure with supplementary safety clasp",
      "Roomy main compartment fits tablets, notebooks, and umbrella",
      "Zippered hanging pocket for keys, wallet, and lip care",
      "Reinforced double-stitched handle bases for heavy loads",
      "Water-resistant interior wipe-clean lining"
    ]
  },
  {
    id: 11,
    slug: "palais-royal-convertible-cylinder-bag",
    sku: "CL-CB119",
    name: "Palais-Royal Convertible Cylinder Bag",
    category: "crossbody",
    categoryName: "Crossbody & Slings",
    price: 4650,
    isNew: true,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 14,
    stockStatus: "In Stock",
    stockQuantity: 12,
    colors: ["Butterscotch Tan", "Deep Merlot", "Midnight Noir"],
    colorHex: ["#D27D2D", "#5C061B", "#111111"],
    images: [
      "assets/img/p-1590874103328.jpg",
      "assets/img/p-1575032617751.jpg",
      "assets/img/p-1563904092230.jpg",
      "assets/img/p-1550614000.jpg"
    ],
    shortDescription: "A playful yet impeccably refined cylindrical silhouette. Converts effortlessly from a top-handle vanity roll to a crossbody cylinder.",
    description: "The Palais-Royal Cylinder Bag is a sculptural conversation piece. Its tubular profile is encircled by polished brass hardware rings, allowing the strap to be detached so you can carry it as an avant-garde evening clutch or as an everyday crossbody roll.",
    dimensions: "22 cm (Length) × 12 cm (Diameter)",
    strapDrop: "Detachable crossbody strap: 50 cm – 58 cm drop",
    material: "Structured Vegan Box Calf Leather • Polished Brass Rings",
    whatFits: "Fits evening smartphone, cardholder, key fob, and lipstick",
    features: [
      "Full-length curved perimeter zipper for wide interior visibility",
      "Dual convertible carrying modes (Handheld cylinder / Crossbody)",
      "Structured rigid shell retains circular geometry even when empty",
      "Interior elasticized card sleeve",
      "Debossed CLARA rose insignia on end cap"
    ]
  },
  {
    id: 12,
    slug: "elegance-quilted-zip-around-wallet",
    sku: "CL-AC601",
    name: "Elegance Diamond-Quilted Continental Wallet",
    category: "wallets",
    categoryName: "Small Leather Goods",
    price: 2650,
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 42,
    stockStatus: "In Stock",
    stockQuantity: 28,
    colors: ["Scarlet Red", "Onyx Noir", "Blush Petal"],
    colorHex: ["#C41E3A", "#141416", "#FADADD"],
    images: [
      "assets/img/p-1627123424574.jpg",
      "assets/img/p-1492707892479.jpg",
      "assets/img/p-1566150905458.jpg",
      "assets/img/p-1594223274512.jpg"
    ],
    shortDescription: "A tactile diamond-quilted continental zip wallet with 12 card slots, full currency sleeves, and a centered zip coin pouch.",
    description: "The Elegance Continental Wallet delivers comprehensive luxury organization in a slender, pocket-friendly silhouette. Diamond-quilted exterior cushioning is accented with a delicate gold rose emblem, while the smooth perimeter zipper reveals an accordion interior engineered to keep cash, cards, and receipts pristine.",
    dimensions: "19.5 cm (Length) × 10.5 cm (Height) × 2.5 cm (Depth)",
    strapDrop: "Detachable wristlet strap: 15 cm loop",
    material: "Diamond-Quilted Soft Vegan Leather • Gold Finish Zip Hardware",
    whatFits: "Fits 12 cards, folded currency, coins, receipts, and standard passport",
    features: [
      "12 dedicated card slots plus 2 full-length bill divider sleeves",
      "Central zippered coin pocket with micro-suede lining",
      "Detachable leather wristlet strap for grab-and-go convenience",
      "Smooth glide perimeter nylon-coil zipper with metal puller",
      "Packaged in an elegant branded presentation gift box"
    ]
  }
];

// Helper functions for catalog queries
function getProductById(id) {
  const numId = parseInt(id, 10);
  return CLARA_PRODUCTS.find(p => p.id === numId) || CLARA_PRODUCTS[0];
}

function getProductBySlug(slug) {
  return CLARA_PRODUCTS.find(p => p.slug === slug) || CLARA_PRODUCTS[0];
}

function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  return CLARA_PRODUCTS
    .filter(p => p.id !== current.id && (p.category === current.category || p.isFeatured))
    .slice(0, limit);
}

function formatLKR(amount) {
  if (typeof amount !== 'number') amount = Number(amount) || 0;
  return `Rs. ${amount.toLocaleString('en-LK')}`;
}

