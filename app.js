(function () {
  "use strict";

  const storageKeys = {
    cart: "maison-archive-cart",
    wishlist: "maison-archive-wishlist",
    discount: "maison-archive-discount"
  };

  const img = (id, width) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width || 1400}&q=82`;

  const heroImages = {
    home: img("photo-1520975954732-35dd22299614", 1800),
    shop: img("photo-1523398002811-999ca8dec234", 1800),
    collections: img("photo-1487222477894-8943e31ef7b2", 1800),
    about: img("photo-1496747611176-843222e1e57c", 1800),
    contact: img("photo-1520975954732-35dd22299614", 1800),
    cart: img("photo-1483985988355-763728e1935b", 1800),
    checkout: img("photo-1523381210434-271e8be1f52b", 1800),
    wishlist: img("photo-1509631179647-0177331693ae", 1800),
    auth: img("photo-1539109136881-3be0616acf4b", 1800)
  };

  const colorMap = {
    "Faded Blue": "#6f8296",
    Brown: "#5b3d2f",
    Black: "#111111",
    Cream: "#eadfca",
    Olive: "#6f7357",
    Charcoal: "#303030",
    Sand: "#c7b299",
    Rust: "#8a4f36",
    Indigo: "#26384d",
    Burgundy: "#6b3131",
    Taupe: "#9b8570",
    Grey: "#7b7b78",
    White: "#f4eee2"
  };

  const products = [
    {
      id: "p-001",
      slug: "90s-washed-denim-jacket",
      name: "90s Washed Denim Jacket",
      brand: "Maison Archive",
      category: "Denim",
      collection: "The Denim Edit",
      description:
        "A faded indigo denim jacket with relaxed structure, soft wear, and the kind of wash that only time can make believable.",
      price: 188,
      salePrice: 158,
      images: [
        img("photo-1523398002811-999ca8dec234", 1200),
        img("photo-1487222477894-8943e31ef7b2", 1200),
        img("photo-1523381210434-271e8be1f52b", 1200),
        img("photo-1490481651871-ab68de25d43d", 1200)
      ],
      hoverImage: img("photo-1487222477894-8943e31ef7b2", 1200),
      sizes: ["S", "M", "L"],
      colors: ["Faded Blue", "Indigo"],
      condition: "Excellent",
      measurements: { chest: "23 in", length: "25 in", shoulder: "19 in", sleeve: "24 in" },
      material: "Heavy cotton denim",
      era: "1990s",
      rating: 4.9,
      reviewCount: 42,
      isBestSeller: true,
      isRare: true,
      stock: 2
    },
    {
      id: "p-002",
      slug: "vintage-brown-leather-bomber",
      name: "Vintage Brown Leather Bomber",
      brand: "Heritage Line",
      category: "Leather",
      collection: "Leather Archive",
      description:
        "Supple espresso leather, ribbed trims, and a cropped bomber profile that feels quietly cinematic.",
      price: 342,
      salePrice: 298,
      images: [
        img("photo-1520975954732-35dd22299614", 1200),
        img("photo-1529139574466-a303027c1d8b", 1200),
        img("photo-1503342217505-b0a15ec3261c", 1200),
        img("photo-1496747611176-843222e1e57c", 1200)
      ],
      hoverImage: img("photo-1529139574466-a303027c1d8b", 1200),
      sizes: ["M", "L"],
      colors: ["Brown", "Black"],
      condition: "Good",
      measurements: { chest: "24 in", length: "26 in", shoulder: "20 in", sleeve: "25 in" },
      material: "Genuine leather shell, satin lining",
      era: "1980s",
      rating: 4.8,
      reviewCount: 31,
      isBestSeller: true,
      isLowStock: true,
      stock: 1
    },
    {
      id: "p-003",
      slug: "faded-graphic-tour-tee",
      name: "Faded Graphic Tour Tee",
      brand: "Tour Issue",
      category: "Tees",
      collection: "Rare Streetwear",
      description:
        "Sun-faded cotton with cracked ink graphics, a broken-in hand feel, and a boxy streetwear fit.",
      price: 96,
      images: [
        img("photo-1503342217505-b0a15ec3261c", 1200),
        img("photo-1496747611176-843222e1e57c", 1200),
        img("photo-1539109136881-3be0616acf4b", 1200),
        img("photo-1515886657613-9f3515b0c78f", 1200)
      ],
      hoverImage: img("photo-1496747611176-843222e1e57c", 1200),
      sizes: ["S", "M", "L", "XL"],
      colors: ["Charcoal", "Cream"],
      condition: "Worn Vintage",
      measurements: { chest: "22 in", length: "27 in", shoulder: "21 in" },
      material: "Soft cotton jersey",
      era: "1990s",
      rating: 4.7,
      reviewCount: 18,
      isRare: true,
      stock: 4
    },
    {
      id: "p-004",
      slug: "relaxed-workwear-canvas-pants",
      name: "Relaxed Workwear Canvas Pants",
      brand: "Utility Archive",
      category: "Pants",
      collection: "Workwear Classics",
      description:
        "Durable canvas trousers with utility pockets, softened seams, and a relaxed straight-leg shape.",
      price: 132,
      images: [
        img("photo-1489987707025-afc232f7ea0f", 1200),
        img("photo-1523381210434-271e8be1f52b", 1200),
        img("photo-1523398002811-999ca8dec234", 1200),
        img("photo-1483985988355-763728e1935b", 1200)
      ],
      hoverImage: img("photo-1523381210434-271e8be1f52b", 1200),
      sizes: ["S", "M", "L", "XL"],
      colors: ["Sand", "Olive"],
      condition: "Excellent",
      measurements: { waist: "32 in", inseam: "30 in", length: "41 in" },
      material: "Cotton canvas",
      era: "2000s",
      rating: 4.6,
      reviewCount: 21,
      isNewArrival: true,
      stock: 6
    },
    {
      id: "p-005",
      slug: "oversized-wool-overcoat",
      name: "Oversized Wool Overcoat",
      brand: "Atelier Found",
      category: "Outerwear",
      collection: "Winter Outerwear",
      description:
        "A long wool coat with draped shoulders, warm taupe tone, and enough presence to anchor a full look.",
      price: 286,
      images: [
        img("photo-1529139574466-a303027c1d8b", 1200),
        img("photo-1515886657613-9f3515b0c78f", 1200),
        img("photo-1539109136881-3be0616acf4b", 1200),
        img("photo-1509631179647-0177331693ae", 1200)
      ],
      hoverImage: img("photo-1515886657613-9f3515b0c78f", 1200),
      sizes: ["M", "L", "XL"],
      colors: ["Taupe", "Grey"],
      condition: "Like New",
      measurements: { chest: "25 in", length: "44 in", shoulder: "21 in", sleeve: "26 in" },
      material: "Wool blend",
      era: "1990s",
      rating: 4.9,
      reviewCount: 27,
      isBestSeller: true,
      stock: 3
    },
    {
      id: "p-006",
      slug: "distressed-black-denim-jeans",
      name: "Distressed Black Denim Jeans",
      brand: "Noir Issue",
      category: "Denim",
      collection: "The Denim Edit",
      description:
        "Washed black denim with natural abrasion, straight fit, and subtle distressing through the thigh.",
      price: 148,
      images: [
        img("photo-1523381210434-271e8be1f52b", 1200),
        img("photo-1489987707025-afc232f7ea0f", 1200),
        img("photo-1523398002811-999ca8dec234", 1200),
        img("photo-1496747611176-843222e1e57c", 1200)
      ],
      hoverImage: img("photo-1489987707025-afc232f7ea0f", 1200),
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Charcoal"],
      condition: "Distressed",
      measurements: { waist: "30 in", inseam: "31 in", length: "42 in" },
      material: "Cotton denim",
      era: "2000s",
      rating: 4.5,
      reviewCount: 16,
      isNewArrival: true,
      stock: 5
    },
    {
      id: "p-007",
      slug: "retro-varsity-jacket",
      name: "Retro Varsity Jacket",
      brand: "Campus Archive",
      category: "Jackets",
      collection: "Rare Streetwear",
      description:
        "A heavyweight varsity jacket with contrast sleeves, snap front, and collegiate nostalgia without the costume feel.",
      price: 238,
      images: [
        img("photo-1496747611176-843222e1e57c", 1200),
        img("photo-1515886657613-9f3515b0c78f", 1200),
        img("photo-1509631179647-0177331693ae", 1200),
        img("photo-1520975954732-35dd22299614", 1200)
      ],
      hoverImage: img("photo-1515886657613-9f3515b0c78f", 1200),
      sizes: ["M", "L", "XL"],
      colors: ["Burgundy", "Cream"],
      condition: "Excellent",
      measurements: { chest: "24 in", length: "27 in", shoulder: "20 in", sleeve: "25 in" },
      material: "Wool body, faux leather sleeves",
      era: "1990s",
      rating: 4.8,
      reviewCount: 36,
      isRare: true,
      stock: 2
    },
    {
      id: "p-008",
      slug: "cream-knit-cardigan",
      name: "Cream Knit Cardigan",
      brand: "Soft Relic",
      category: "Knitwear",
      collection: "Earth Tone Layers",
      description:
        "A textured cream cardigan with relaxed sleeves, horn buttons, and soft weight for layered styling.",
      price: 128,
      salePrice: 112,
      images: [
        img("photo-1509631179647-0177331693ae", 1200),
        img("photo-1539109136881-3be0616acf4b", 1200),
        img("photo-1515886657613-9f3515b0c78f", 1200),
        img("photo-1490481651871-ab68de25d43d", 1200)
      ],
      hoverImage: img("photo-1539109136881-3be0616acf4b", 1200),
      sizes: ["XS", "S", "M"],
      colors: ["Cream", "White"],
      condition: "Like New",
      measurements: { chest: "21 in", length: "23 in", shoulder: "18 in", sleeve: "23 in" },
      material: "Cotton wool blend",
      era: "2000s",
      rating: 4.7,
      reviewCount: 14,
      isNewArrival: true,
      stock: 7
    },
    {
      id: "p-009",
      slug: "vintage-utility-vest",
      name: "Vintage Utility Vest",
      brand: "Field Goods",
      category: "Accessories",
      collection: "Workwear Classics",
      description:
        "Pocketed utility vest in washed olive cotton, ideal over tees, knits, and oversized shirting.",
      price: 118,
      images: [
        img("photo-1487222477894-8943e31ef7b2", 1200),
        img("photo-1523398002811-999ca8dec234", 1200),
        img("photo-1489987707025-afc232f7ea0f", 1200),
        img("photo-1523381210434-271e8be1f52b", 1200)
      ],
      hoverImage: img("photo-1523398002811-999ca8dec234", 1200),
      sizes: ["S", "M", "L"],
      colors: ["Olive", "Sand"],
      condition: "Good",
      measurements: { chest: "22 in", length: "24 in", shoulder: "17 in" },
      material: "Cotton twill",
      era: "1990s",
      rating: 4.6,
      reviewCount: 19,
      isLowStock: true,
      stock: 1
    },
    {
      id: "p-010",
      slug: "archive-plaid-flannel-shirt",
      name: "Archive Plaid Flannel Shirt",
      brand: "Old Mill",
      category: "Shirts",
      collection: "Weekend Essentials",
      description:
        "Brushed cotton flannel with muted rust and charcoal plaid, cut oversized for modern layering.",
      price: 104,
      images: [
        img("photo-1490481651871-ab68de25d43d", 1200),
        img("photo-1516762689617-e1cffcef479d", 1200),
        img("photo-1523381210434-271e8be1f52b", 1200),
        img("photo-1523398002811-999ca8dec234", 1200)
      ],
      hoverImage: img("photo-1516762689617-e1cffcef479d", 1200),
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Rust", "Charcoal"],
      condition: "Excellent",
      measurements: { chest: "23 in", length: "29 in", shoulder: "19 in", sleeve: "25 in" },
      material: "Brushed cotton flannel",
      era: "1990s",
      rating: 4.8,
      reviewCount: 29,
      isBestSeller: true,
      stock: 4
    }
  ];

  const collections = [
    {
      id: "c-001",
      slug: "denim-edit",
      title: "The Denim Edit",
      description: "Washed blues, black fades, and structure with memory.",
      image: img("photo-1523398002811-999ca8dec234", 1200),
      productCount: 18,
      mood: "Faded indigo",
      focus: "Jackets, jeans, utility blues",
      featured: true
    },
    {
      id: "c-002",
      slug: "leather-archive",
      title: "Leather Archive",
      description: "Aged bombers, worn-in texture, and cinematic outerwear.",
      image: img("photo-1520975954732-35dd22299614", 1200),
      productCount: 11,
      mood: "Espresso leather",
      focus: "Bombers, cropped shapes, grain",
      featured: true
    },
    {
      id: "c-003",
      slug: "rare-streetwear",
      title: "Rare Streetwear",
      description: "Collectible silhouettes with downtown energy.",
      image: img("photo-1496747611176-843222e1e57c", 1200),
      productCount: 24,
      mood: "Downtown rare",
      focus: "Varsity, tour tees, graphic pieces",
      featured: true
    },
    {
      id: "c-004",
      slug: "workwear-classics",
      title: "Workwear Classics",
      description: "Canvas, twill, utility pockets, and honest wear.",
      image: img("photo-1487222477894-8943e31ef7b2", 1200),
      productCount: 15,
      mood: "Utility worn",
      focus: "Canvas, twill, field pockets"
    },
    {
      id: "c-005",
      slug: "earth-tone-layers",
      title: "Earth Tone Layers",
      description: "Cream knits, taupe coats, olive vests, and quiet texture.",
      image: img("photo-1509631179647-0177331693ae", 1200),
      productCount: 20,
      mood: "Warm neutrals",
      focus: "Knitwear, wool, olive layers"
    },
    {
      id: "c-006",
      slug: "winter-outerwear",
      title: "Winter Outerwear",
      description: "Heavy coats and cold-weather pieces with lasting shape.",
      image: img("photo-1529139574466-a303027c1d8b", 1200),
      productCount: 13,
      mood: "Cold-weather structure",
      focus: "Overcoats, wool, winter weight"
    }
  ];

  const testimonials = [
    {
      name: "Amara J.",
      city: "Brooklyn",
      product: "Leather Bomber",
      quote: "The jacket felt like a piece I had been looking for for years. Beautifully packed and exactly measured.",
      rating: 5
    },
    {
      name: "Leo M.",
      city: "Los Angeles",
      product: "Tour Tee",
      quote: "Not a thrift-store gamble. The whole experience feels curated, calm, and genuinely premium.",
      rating: 5
    },
    {
      name: "Nadia K.",
      city: "Chicago",
      product: "Wool Overcoat",
      quote: "Every detail was clear, from fit notes to condition. It arrived looking better than the photos.",
      rating: 5
    }
  ];

  const nav = [
    ["home", "Home", "index.html"],
    ["shop", "Shop", "shop.html"],
    ["collections", "Collections", "collections.html"],
    ["about", "About", "about.html"],
    ["contact", "Contact", "contact.html"]
  ];

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));

  const money = (value) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  function icon(name) {
    const icons = {
      search:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
      heart:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z"></path></svg>',
      bag:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1 13H7L6 8Z"></path><path d="M9 8a3 3 0 0 1 6 0"></path></svg>',
      user:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg>',
      menu:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16"></path><path d="M4 17h16"></path></svg>',
      close:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
      star:
        '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 3.1 6.3 7 .9-5.1 4.9 1.3 6.9-6.3-3.4L5.7 21 7 14.1 1.9 9.2l7-.9L12 2Z"></path></svg>',
      filter:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>',
      plus:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
      minus:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"></path></svg>',
      trash:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M6 7l1 14h10l1-14"></path><path d="M9 7V4h6v3"></path></svg>',
      chevron:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>',
      instagram:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><path d="M17.5 6.5h.01"></path></svg>',
      mail:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path></svg>',
      lock:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>'
    };
    return icons[name] || "";
  }

  function readJSON(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function getCart() {
    return readJSON(storageKeys.cart, []);
  }

  function saveCart(cart) {
    localStorage.setItem(storageKeys.cart, JSON.stringify(cart));
    updateCounts();
  }

  function getWishlist() {
    return readJSON(storageKeys.wishlist, []);
  }

  function saveWishlist(items) {
    localStorage.setItem(storageKeys.wishlist, JSON.stringify(items));
    updateCounts();
  }

  function productById(id) {
    return products.find((product) => product.id === id);
  }

  function productBySlug(slug) {
    return products.find((product) => product.slug === slug) || products[0];
  }

  function currentPage() {
    return document.body.dataset.page || "home";
  }

  function ensureRoot(id, className) {
    let root = document.getElementById(id);
    if (!root) {
      root = document.createElement("div");
      root.id = id;
      if (className) root.className = className;
      document.body.appendChild(root);
    }
    return root;
  }

  function updateCounts() {
    const cartCount = getCart().reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = getWishlist().length;
    $$("[data-cart-count]").forEach((node) => {
      node.textContent = cartCount;
    });
    $$("[data-wishlist-count]").forEach((node) => {
      node.textContent = wishlistCount;
    });
  }

  function renderHeader() {
    const root = $("#site-header");
    if (!root) return;
    const page = currentPage();
    const transparent = page === "home";
    const navLinks = nav
      .map(([key, label, href]) => `<a class="${page === key ? "active" : ""}" href="${href}">${label}</a>`)
      .join("");

    root.innerHTML = `
      <header class="site-header ${transparent ? "header-transparent" : "is-scrolled"}" id="siteHeader">
        <div class="nav-inner">
          <a class="brand" href="index.html" aria-label="Maison Archive home">Maison <span>Archive</span></a>
          <nav class="desktop-nav" aria-label="Primary navigation">${navLinks}</nav>
          <div class="nav-actions">
            <button class="icon-button desktop-only" type="button" aria-label="Search" data-open-search>${icon("search")}</button>
            <a class="icon-button desktop-only" href="wishlist.html" aria-label="Wishlist">
              ${icon("heart")}<span class="count-badge" data-wishlist-count>0</span>
            </a>
            <button class="icon-button" type="button" aria-label="Open cart" data-open-cart>
              ${icon("bag")}<span class="count-badge" data-cart-count>0</span>
            </button>
            <a class="icon-button desktop-only" href="login.html" aria-label="Account">${icon("user")}</a>
            <button class="icon-button mobile-toggle" type="button" aria-label="Open menu" data-mobile-open>${icon("menu")}</button>
          </div>
        </div>
      </header>
      <div class="search-popover" id="searchPopover" aria-label="Search products">
        <form data-site-search-form>
          <input id="siteSearch" type="search" placeholder="Search denim, leather, workwear..." autocomplete="off" aria-label="Search the archive">
        </form>
        <div class="search-results-mini" id="miniSearchResults"></div>
      </div>
      <aside class="mobile-menu" id="mobileMenu" aria-label="Mobile menu" aria-hidden="true">
        <div class="mobile-menu-top">
          <a class="brand" href="index.html">Maison <span>Archive</span></a>
          <button class="icon-button" type="button" aria-label="Close menu" data-mobile-close>${icon("close")}</button>
        </div>
        <form class="mobile-search" data-site-search-form>
          <input type="search" name="q" placeholder="Search rare pieces" aria-label="Search products">
        </form>
        <nav class="mobile-nav-links" aria-label="Mobile navigation">${navLinks}</nav>
        <div class="mobile-shortcuts">
          <a href="wishlist.html">${icon("heart")} Wishlist <span data-wishlist-count>0</span></a>
          <a href="login.html">${icon("user")} Account</a>
          <button type="button" data-open-cart>${icon("bag")} Cart <span data-cart-count>0</span></button>
        </div>
      </aside>
    `;
  }

  function renderFooter() {
    const root = $("#site-footer");
    if (!root) return;
    root.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="brand" href="index.html">Maison <span>Archive</span></a>
              <p>Curated vintage pieces for modern wardrobes. Rare finds, timeless silhouettes, and archive-inspired essentials.</p>
              <div class="payment-row" aria-label="Accepted payment methods">
                <span>VISA</span><span>MC</span><span>AMEX</span><span>APPLE PAY</span><span>STRIPE</span>
              </div>
            </div>
            <div class="footer-col">
              <h3>Shop</h3>
              <a href="shop.html">All Products</a>
              <a href="collections.html">Collections</a>
              <a href="shop.html?filter=new">New Arrivals</a>
              <a href="shop.html?filter=sale">Sale</a>
            </div>
            <div class="footer-col">
              <h3>Care</h3>
              <a href="contact.html">Contact</a>
              <a href="shipping.html">Shipping & Returns</a>
              <a href="privacy.html">Privacy Policy</a>
              <a href="terms.html">Terms & Conditions</a>
            </div>
            <div class="footer-col">
              <h3>Archive List</h3>
              <span>Early access to rare drops, styling edits, and private releases.</span>
              <form class="footer-newsletter" data-newsletter-form>
                <input type="email" name="email" placeholder="Email address" aria-label="Email address" required>
                <button class="button secondary" type="submit">Subscribe</button>
                <div class="form-note" data-form-note></div>
              </form>
            </div>
          </div>
          <div class="footer-bottom">
            <span>Copyright 2026 Maison Archive. All rights reserved.</span>
            <div class="footer-bottom-links">
              <a href="privacy.html">Privacy</a>
              <a href="terms.html">Terms</a>
              <a href="shipping.html">Shipping</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function ratingStars(rating, count) {
    const stars = Array.from({ length: 5 }, () => icon("star")).join("");
    const countLabel = typeof count === "number" && count > 0 ? ` (${count})` : "";
    return `<span class="rating" aria-label="${rating} out of 5 stars">${stars}<span class="rating-count">${rating}${countLabel}</span></span>`;
  }

  function badgeFor(product) {
    if (product.isLowStock) return "Low Stock";
    if (product.isRare) return "Rare Find";
    if (product.isBestSeller) return "Best Seller";
    if (product.isNewArrival) return "New Arrival";
    if (product.salePrice) return "Sale";
    return "Archive Piece";
  }

  function priceHTML(product) {
    if (product.salePrice) {
      return `<span class="sale-price">${money(product.salePrice)}</span><span class="compare-price">${money(product.price)}</span>`;
    }
    return `<span class="price">${money(product.price)}</span>`;
  }

  function productCard(product) {
    const wishlisted = getWishlist().includes(product.id);
    return `
      <article class="product-card reveal" data-product-card="${product.id}">
        <div class="product-media">
          <a href="product.html?slug=${product.slug}" aria-label="View ${product.name}">
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <img class="hover-img" src="${product.hoverImage || product.images[1]}" alt="${product.name} styled on model" loading="lazy">
          </a>
          <span class="product-badge">${badgeFor(product)}</span>
          <button class="icon-button product-wishlist ${wishlisted ? "active" : ""}" type="button" aria-label="Save ${product.name}" data-wishlist="${product.id}">${icon("heart")}</button>
          <div class="product-actions">
            <button class="button" type="button" data-add-cart="${product.id}">Add</button>
            <button class="button secondary" type="button" data-quick-view="${product.id}">Quick View</button>
          </div>
        </div>
        <div class="product-body">
          <div class="product-topline"><span>${product.category}</span><span>${product.condition}</span></div>
          <h3><a href="product.html?slug=${product.slug}">${product.name}</a></h3>
          <div class="price-row">${priceHTML(product)}</div>
          ${ratingStars(product.rating, product.reviewCount)}
        </div>
      </article>
    `;
  }

  function collectionCard(collection) {
    return `
      <article class="collection-card reveal" style="--card-image: url('${collection.image}')">
        <div class="collection-content">
          <div class="collection-card-top">
            <p class="eyebrow">${collection.productCount} pieces</p>
            <span>${collection.mood || "Archive edit"}</span>
          </div>
          <h3>${collection.title}</h3>
          <p>${collection.description}</p>
          <div class="collection-card-meta">${collection.focus || "Curated by silhouette and era"}</div>
          <a class="button secondary" href="shop.html?collection=${encodeURIComponent(collection.title)}">Shop Edit</a>
        </div>
      </article>
    `;
  }

  function renderHome() {
    const featuredRoot = $("#featuredCollections");
    if (featuredRoot) featuredRoot.innerHTML = collections.filter((item) => item.featured).map(collectionCard).join("");

    const trendingRoot = $("#trendingProducts");
    if (trendingRoot) trendingRoot.innerHTML = products.filter((item) => item.isRare || item.isBestSeller).slice(0, 4).map(productCard).join("");

    const bestRoot = $("#bestSellerProducts");
    if (bestRoot) bestRoot.innerHTML = products.filter((item) => item.isBestSeller).slice(0, 3).map(productCard).join("");

    const newRoot = $("#newArrivalProducts");
    if (newRoot) newRoot.innerHTML = products.filter((item) => item.isNewArrival || item.salePrice).slice(0, 4).map(productCard).join("");

    const testimonialRoot = $("#testimonials");
    if (testimonialRoot) {
      testimonialRoot.innerHTML = testimonials
        .map(
          (review) => `
          <article class="testimonial reveal">
            ${ratingStars(review.rating, 0)}
            <blockquote>${review.quote}</blockquote>
            <cite>${review.name} - ${review.city}, ${review.product}</cite>
          </article>
        `
        )
        .join("");
    }

    const socialRoot = $("#socialShowcase");
    if (socialRoot) {
      const socialImages = [
        img("photo-1515886657613-9f3515b0c78f", 700),
        img("photo-1496747611176-843222e1e57c", 700),
        img("photo-1520975954732-35dd22299614", 700),
        img("photo-1509631179647-0177331693ae", 700),
        img("photo-1523398002811-999ca8dec234", 700),
        img("photo-1539109136881-3be0616acf4b", 700)
      ];
      socialRoot.innerHTML = socialImages
        .map(
          (image, index) => `
          <a class="social-tile reveal" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Open Maison Archive social post ${index + 1}">
            <img src="${image}" alt="Maison Archive editorial social image ${index + 1}" loading="lazy">
            <span>${icon("instagram")} View</span>
          </a>
        `
        )
        .join("");
    }
  }

  function renderCollectionsPage() {
    const root = $("#collectionsGrid");
    if (root) root.innerHTML = collections.map(collectionCard).join("");
  }

  function unique(key) {
    return Array.from(new Set(products.flatMap((product) => (Array.isArray(product[key]) ? product[key] : [product[key]])))).filter(Boolean);
  }

  function renderFilters() {
    const root = $("#filtersPanel");
    if (!root) return;
    const groups = [
      ["category", "Category", unique("category")],
      ["size", "Size", unique("sizes")],
      ["color", "Color", unique("colors")],
      ["condition", "Condition", unique("condition")],
      ["brand", "Brand", unique("brand")],
      ["collection", "Collection", unique("collection")]
    ];

    root.innerHTML = `
      <div class="filters-head">
        <h2>Refine</h2>
        <button class="icon-button filter-close" type="button" aria-label="Close filters" data-filter-close>${icon("close")}</button>
      </div>
      ${groups
        .map(
          ([type, label, values]) => `
          <div class="filter-group">
            <h3>${label}</h3>
            <div class="check-list">
              ${values
                .map(
                  (value) => `
                    <label class="check">
                      <input type="checkbox" data-filter data-filter-type="${type}" value="${value}">
                      <span>${value}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>
        `
        )
        .join("")}
      <div class="filter-group">
        <h3>Price Range</h3>
        <label class="check" for="maxPrice">Under <strong id="maxPriceLabel">$400</strong></label>
        <input id="maxPrice" type="range" min="90" max="400" value="400" step="10" data-filter aria-label="Maximum price">
      </div>
      <div class="filter-group">
        <h3>Availability</h3>
        <div class="check-list">
          <label class="check"><input type="checkbox" data-filter data-filter-type="availability" value="in-stock"> In Stock</label>
          <label class="check"><input type="checkbox" data-filter data-filter-type="availability" value="low-stock"> Low Stock</label>
          <label class="check"><input type="checkbox" data-filter data-filter-type="sale" value="sale"> Sale Items</label>
        </div>
      </div>
      <button class="button ghost full" type="button" data-clear-filters>Clear All</button>
    `;

    const params = new URLSearchParams(window.location.search);
    const collection = params.get("collection");
    const filter = params.get("filter");
    if (collection) {
      const target = $(`[data-filter-type="collection"][value="${CSS.escape(collection)}"]`, root);
      if (target) target.checked = true;
    }
    if (filter === "sale") {
      const sale = $('[data-filter-type="sale"]', root);
      if (sale) sale.checked = true;
    }
  }

  function selectedFilters() {
    const filters = {};
    $$("[data-filter][type='checkbox']:checked").forEach((input) => {
      const type = input.dataset.filterType;
      filters[type] = filters[type] || [];
      filters[type].push(input.value);
    });
    return filters;
  }

  function productMatchesFilters(product, filters, query, maxPrice) {
    const searchable = [
      product.name,
      product.brand,
      product.category,
      product.collection,
      product.condition,
      product.era,
      product.material,
      product.description,
      product.colors.join(" "),
      product.sizes.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const q = query.trim().toLowerCase();
    const effectivePrice = product.salePrice || product.price;
    const has = (type, value) => !filters[type] || filters[type].length === 0 || filters[type].includes(value);
    const hasAny = (type, values) => !filters[type] || filters[type].length === 0 || values.some((value) => filters[type].includes(value));

    if (q && !searchable.includes(q)) return false;
    if (maxPrice && effectivePrice > maxPrice) return false;
    if (!has("category", product.category)) return false;
    if (!has("condition", product.condition)) return false;
    if (!has("brand", product.brand)) return false;
    if (!has("collection", product.collection)) return false;
    if (!hasAny("size", product.sizes)) return false;
    if (!hasAny("color", product.colors)) return false;
    if (filters.availability && filters.availability.includes("in-stock") && product.stock < 1) return false;
    if (filters.availability && filters.availability.includes("low-stock") && !product.isLowStock) return false;
    if (filters.sale && filters.sale.includes("sale") && !product.salePrice) return false;
    return true;
  }

  function sortedProducts(items) {
    const sort = $("#sortProducts") ? $("#sortProducts").value : "featured";
    const copy = [...items];
    const price = (product) => product.salePrice || product.price;
    const sorters = {
      newest: (a, b) => Number(!!b.isNewArrival) - Number(!!a.isNewArrival),
      "price-low": (a, b) => price(a) - price(b),
      "price-high": (a, b) => price(b) - price(a),
      best: (a, b) => Number(!!b.isBestSeller) - Number(!!a.isBestSeller),
      rated: (a, b) => b.rating - a.rating,
      sale: (a, b) => Number(!!b.salePrice) - Number(!!a.salePrice),
      featured: (a, b) => Number(!!b.isRare) + Number(!!b.isBestSeller) - (Number(!!a.isRare) + Number(!!a.isBestSeller))
    };
    return copy.sort(sorters[sort] || sorters.featured);
  }

  function renderSkeletons(root) {
    root.innerHTML = `
      <div class="skeleton-grid">
        ${Array.from({ length: 8 })
          .map(
            () => `
          <div class="skeleton-card">
            <div class="skeleton-media"></div>
            <div class="skeleton-lines">
              <div class="skeleton-line short"></div>
              <div class="skeleton-line"></div>
              <div class="skeleton-line short"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderActiveFilters(filters, query, maxPrice) {
    const root = $("#activeFilters");
    if (!root) return;
    const chips = [];
    Object.entries(filters).forEach(([type, values]) => {
      values.forEach((value) => chips.push({ type, value, label: value }));
    });
    if (query.trim()) chips.push({ type: "query", value: query.trim(), label: `Search: ${query.trim()}` });
    if (maxPrice < 400) chips.push({ type: "price", value: String(maxPrice), label: `Under ${money(maxPrice)}` });

    root.innerHTML = chips
      .map((chip) => `<span class="chip">${chip.label}<button type="button" aria-label="Remove ${chip.label}" data-remove-filter="${chip.type}" data-filter-value="${chip.value}">${icon("close")}</button></span>`)
      .join("");
  }

  function renderShopProducts() {
    const root = $("#shopProductGrid");
    if (!root) return;
    const query = $("#shopSearch") ? $("#shopSearch").value : "";
    const maxPrice = $("#maxPrice") ? Number($("#maxPrice").value) : 400;
    const filters = selectedFilters();
    const result = sortedProducts(products.filter((product) => productMatchesFilters(product, filters, query, maxPrice)));

    const label = $("#maxPriceLabel");
    if (label) label.textContent = money(maxPrice);

    const count = $("#productCount");
    if (count) count.textContent = `${result.length} ${result.length === 1 ? "piece" : "pieces"}`;

    renderActiveFilters(filters, query, maxPrice);

    if (!result.length) {
      root.innerHTML = `
        <div class="empty-state">
          <h2>No archive pieces matched your search.</h2>
          <p>Try a broader filter or clear the current selection.</p>
          <button class="button" type="button" data-clear-filters>Clear Filters</button>
        </div>
      `;
    } else {
      root.innerHTML = result.map(productCard).join("");
    }
    setupReveal();
  }

  let filterTimer = null;

  function renderShopPage() {
    renderFilters();
    const root = $("#shopProductGrid");
    if (root) {
      renderSkeletons(root);
      window.setTimeout(renderShopProducts, 180);
    }
  }

  function renderProductPage() {
    const root = $("#productDetail");
    if (!root) return;
    const slug = new URLSearchParams(window.location.search).get("slug");
    const product = productBySlug(slug);
    document.title = `${product.name} | Maison Archive`;
    const mainImage = product.images[0];

    root.innerHTML = `
      <div class="gallery" data-gallery>
        <div class="thumbs">
          ${product.images
            .map(
              (image, index) => `
            <button class="thumb ${index === 0 ? "active" : ""}" type="button" data-gallery-image="${image}" aria-label="View image ${index + 1} of ${product.name}">
              <img src="${image}" alt="${product.name} view ${index + 1}" loading="lazy">
            </button>
          `
            )
            .join("")}
        </div>
        <div class="main-image"><img id="mainProductImage" src="${mainImage}" alt="${product.name} main view"></div>
      </div>
      <aside class="product-info" data-product-context="${product.id}">
        <p class="eyebrow">${product.brand} / ${product.era}</p>
        <h1>${product.name}</h1>
        <div class="price-row">${priceHTML(product)}</div>
        ${ratingStars(product.rating, product.reviewCount)}
        <p class="product-description">${product.description}</p>
        ${renderSelectors(product)}
        <div class="hero-actions">
          <button class="button" type="button" data-add-cart="${product.id}">Add to Cart</button>
          <button class="button ghost" type="button" data-add-cart="${product.id}" data-buy-now>Buy Now</button>
          <button class="icon-button product-wishlist ${getWishlist().includes(product.id) ? "active" : ""}" type="button" aria-label="Save ${product.name}" data-wishlist="${product.id}">${icon("heart")}</button>
        </div>
        <div class="info-grid">
          <div><span>Condition</span><strong>${product.condition}</strong></div>
          <div><span>Material</span><strong>${product.material}</strong></div>
          <div><span>Era</span><strong>${product.era}</strong></div>
          <div><span>Stock</span><strong>${product.stock} available</strong></div>
        </div>
        <div class="info-grid">
          ${Object.entries(product.measurements || {})
            .map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`)
            .join("")}
        </div>
        ${accordionHTML([
          ["Shipping & Returns", "Orders ship in 1 to 3 business days with tracked delivery. Vintage pieces may be returned within 14 days in their original shipped condition."],
          ["Care Instructions", "Spot clean gently or dry clean when needed. Store leather and wool pieces away from direct heat and moisture."],
          ["Authenticity Note", "Every item is inspected for construction, condition, material feel, and vintage character before it reaches the archive."]
        ])}
      </aside>
    `;

    const related = $("#relatedProducts");
    if (related) {
      related.innerHTML = products
        .filter((item) => item.id !== product.id && (item.category === product.category || item.collection === product.collection))
        .slice(0, 4)
        .map(productCard)
        .join("");
    }

    injectProductSchema(product);
  }

  function renderSelectors(product) {
    return `
      <div class="selectors">
        <div class="selector-group">
          <span>Size</span>
          <div class="option-row">
            ${product.sizes.map((size, index) => `<button class="option-pill ${index === 0 ? "active" : ""}" type="button" data-size="${size}">${size}</button>`).join("")}
          </div>
        </div>
        <div class="selector-group">
          <span>Color</span>
          <div class="option-row">
            ${product.colors
              .map(
                (color, index) => `
                <button class="option-pill ${index === 0 ? "active" : ""}" type="button" data-color="${color}">
                  <span class="swatch" style="background:${colorMap[color] || colorMap.Taupe}"></span>${color}
                </button>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function accordionHTML(items) {
    return `
      <div class="accordion">
        ${items
          .map(
            ([title, content], index) => `
            <div class="accordion-item ${index === 0 ? "open" : ""}">
              <button class="accordion-button" type="button" data-accordion aria-expanded="${index === 0 ? "true" : "false"}">
                ${title}<span>${icon("chevron")}</span>
              </button>
              <div class="accordion-panel">${content}</div>
            </div>
          `
          )
          .join("")}
      </div>
    `;
  }

  function injectProductSchema(product) {
    const existing = $("#productSchema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "productSchema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.images,
      description: product.description,
      brand: { "@type": "Brand", name: product.brand },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: product.salePrice || product.price,
        availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount
      }
    });
    document.head.appendChild(script);
  }

  function renderCartLine(item, pageMode) {
    const product = productById(item.productId);
    if (!product) return "";
    return `
      <article class="cart-line" data-cart-key="${item.key}">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <div>
          <h3>${product.name}</h3>
          <div class="line-meta">${item.size} / ${item.color}</div>
          <div class="qty-control" aria-label="Quantity for ${product.name}">
            <button type="button" aria-label="Decrease quantity" data-cart-decrease="${item.key}">${icon("minus")}</button>
            <span>${item.quantity}</span>
            <button type="button" aria-label="Increase quantity" data-cart-increase="${item.key}">${icon("plus")}</button>
          </div>
        </div>
        <div class="price-row">
          <strong>${money((product.salePrice || product.price) * item.quantity)}</strong>
          <button class="remove-line" type="button" aria-label="Remove ${product.name}" data-cart-remove="${item.key}">${icon("trash")}</button>
        </div>
      </article>
    `;
  }

  function cartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => {
      const product = productById(item.productId);
      return sum + (product ? (product.salePrice || product.price) * item.quantity : 0);
    }, 0);
    const discountCode = localStorage.getItem(storageKeys.discount) || "";
    const discount = discountCode === "ARCHIVE10" ? Math.round(subtotal * 0.1) : 0;
    const shipping = subtotal > 250 || subtotal === 0 ? 0 : 12;
    return {
      subtotal,
      discount,
      shipping,
      total: Math.max(0, subtotal - discount + shipping),
      discountCode
    };
  }

  function summaryHTML(includeDiscount) {
    const totals = cartTotals();
    return `
      <div class="summary-row"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
      ${includeDiscount ? `<div class="summary-row"><span>Discount</span><strong>-${money(totals.discount)}</strong></div>` : ""}
      <div class="summary-row"><span>Shipping</span><strong>${totals.shipping ? money(totals.shipping) : "Free"}</strong></div>
      <div class="summary-row total"><span>Total</span><strong>${money(totals.total)}</strong></div>
    `;
  }

  function openCartDrawer() {
    const root = ensureRoot("cart-drawer-root");
    root.innerHTML = `
      <div class="drawer-overlay open" data-close-cart></div>
      <aside class="drawer-panel open" role="dialog" aria-modal="true" aria-label="Cart drawer">
        <div class="cart-drawer-head">
          <h2>Your Archive</h2>
          <button class="icon-button" type="button" aria-label="Close cart" data-close-cart>${icon("close")}</button>
        </div>
        <div class="cart-drawer-body" id="cartDrawerBody"></div>
      </aside>
    `;
    document.body.classList.add("drawer-open");
    renderCartDrawerBody();
  }

  function closeCartDrawer() {
    const root = $("#cart-drawer-root");
    if (root) root.innerHTML = "";
    document.body.classList.remove("drawer-open");
  }

  function renderCartDrawerBody() {
    const root = $("#cartDrawerBody");
    if (!root) return;
    const cart = getCart();
    if (!cart.length) {
      root.innerHTML = `
        <div class="empty-state">
          <h3>Your archive is empty.</h3>
          <p>Rare pieces move quickly. Begin with the current edit.</p>
          <a class="button" href="shop.html">Start Shopping</a>
        </div>
      `;
      return;
    }
    root.innerHTML = `
      ${cart.map((item) => renderCartLine(item)).join("")}
      <div class="drawer-summary">${summaryHTML(false)}</div>
      <a class="button full" href="checkout.html">Checkout</a>
      <a class="button ghost full" href="cart.html">View Cart</a>
    `;
  }

  function renderCartPage() {
    const root = $("#cartPage");
    if (!root) return;
    const cart = getCart();
    if (!cart.length) {
      root.innerHTML = `
        <div class="empty-state">
          <h2>Your archive is empty.</h2>
          <p>Build a wardrobe from pieces with character, texture, and history.</p>
          <a class="button" href="shop.html">Start Shopping</a>
        </div>
      `;
      return;
    }
    const totals = cartTotals();
    root.innerHTML = `
      <div class="cart-layout">
        <div class="cart-page-lines">${cart.map((item) => renderCartLine(item, true)).join("")}</div>
        <aside class="cart-summary">
          <h2>Order Summary</h2>
          <form class="discount-form" data-discount-form>
            <input type="text" name="discount" value="${totals.discountCode}" placeholder="Discount code" aria-label="Discount code">
            <button class="button ghost" type="submit">Apply</button>
          </form>
          <p class="form-note" data-discount-note>${totals.discountCode ? "ARCHIVE10 applied." : "Try ARCHIVE10 for the demo."}</p>
          ${summaryHTML(true)}
          <a class="button full" href="checkout.html">Checkout</a>
          <a class="link-arrow" href="shop.html">Continue Shopping ${icon("chevron")}</a>
        </aside>
      </div>
    `;
  }

  function renderCheckoutPage() {
    const root = $("#checkoutSummary");
    if (!root) return;
    const cart = getCart();
    if (!cart.length) {
      root.innerHTML = `
        <div class="empty-state">
          <h3>Your archive is empty.</h3>
          <p>Add a piece before starting checkout.</p>
          <a class="button" href="shop.html">Start Shopping</a>
        </div>
      `;
      return;
    }

    root.innerHTML = `
      <h2>Order Review</h2>
      <div class="checkout-items">
        ${cart
          .map((item) => {
            const product = productById(item.productId);
            if (!product) return "";
            return `
              <div class="checkout-line">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                <div><strong>${product.name}</strong><div class="line-meta">${item.size} / ${item.color} x ${item.quantity}</div></div>
                <strong>${money((product.salePrice || product.price) * item.quantity)}</strong>
              </div>
            `;
          })
          .join("")}
      </div>
      ${summaryHTML(true)}
      <p class="form-note">${icon("lock")} Secure demo checkout. No payment details are stored.</p>
    `;
  }

  function renderWishlistPage() {
    const root = $("#wishlistGrid");
    if (!root) return;
    const wishlist = getWishlist().map(productById).filter(Boolean);
    if (!wishlist.length) {
      root.innerHTML = `
        <div class="empty-state">
          <h2>Your wishlist is waiting for rare finds.</h2>
          <p>Save pieces while browsing and return before they disappear.</p>
          <a class="button" href="shop.html">Explore the Archive</a>
        </div>
      `;
      return;
    }
    root.innerHTML = wishlist.map(productCard).join("");
  }

  function renderSearchPage() {
    const root = $("#searchResults");
    if (!root) return;
    const input = $("#searchPageInput");
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    if (input) input.value = q;
    const query = (input ? input.value : q).trim().toLowerCase();
    const matched = products.filter((product) =>
      [product.name, product.brand, product.category, product.collection, product.description, product.colors.join(" "), product.sizes.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
    $("#searchCount").textContent = query ? `${matched.length} results for "${query}"` : "Search the archive";
    root.innerHTML = query && matched.length ? matched.map(productCard).join("") : query ? `<div class="empty-state"><h2>No archive pieces matched your search.</h2><p>Try denim, leather, workwear, olive, or black.</p><a class="button" href="shop.html">Clear Filters</a></div>` : products.slice(0, 4).map(productCard).join("");
  }

  function addToCart(productId, context, openDrawer) {
    const product = productById(productId);
    if (!product) return;
    const size = $("[data-size].active", context)?.dataset.size || product.sizes[0];
    const color = $("[data-color].active", context)?.dataset.color || product.colors[0];
    const key = `${product.id}|${size}|${color}`;
    const cart = getCart();
    const existing = cart.find((item) => item.key === key);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ key, productId: product.id, size, color, quantity: 1 });
    }
    saveCart(cart);
    toast("Added to your archive.");
    renderCartPage();
    renderCheckoutPage();
    if (openDrawer) {
      closeQuickView();
      openCartDrawer();
    }
  }

  function updateCartQuantity(key, delta) {
    const cart = getCart()
      .map((item) => (item.key === key ? { ...item, quantity: item.quantity + delta } : item))
      .filter((item) => item.quantity > 0);
    saveCart(cart);
    renderCartDrawerBody();
    renderCartPage();
    renderCheckoutPage();
  }

  function removeCartItem(key) {
    saveCart(getCart().filter((item) => item.key !== key));
    toast("Removed from your archive.");
    renderCartDrawerBody();
    renderCartPage();
    renderCheckoutPage();
  }

  function toggleWishlist(id) {
    const wishlist = getWishlist();
    const exists = wishlist.includes(id);
    const next = exists ? wishlist.filter((item) => item !== id) : [...wishlist, id];
    saveWishlist(next);
    $$(`[data-wishlist="${id}"]`).forEach((button) => {
      button.classList.toggle("active", !exists);
    });
    toast(exists ? "Removed from wishlist." : "Saved to wishlist.");
    renderWishlistPage();
  }

  function openQuickView(id) {
    const product = productById(id);
    if (!product) return;
    const root = ensureRoot("quick-view-root");
    root.innerHTML = `
      <div class="modal-overlay open" data-close-modal></div>
      <section class="quick-modal open" role="dialog" aria-modal="true" aria-labelledby="quickViewTitle">
        <button class="icon-button modal-close" type="button" aria-label="Close quick view" data-close-modal>${icon("close")}</button>
        <div class="quick-content" data-product-context="${product.id}">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
          <div class="quick-info">
            <p class="eyebrow">${badgeFor(product)} / ${product.condition}</p>
            <h2 id="quickViewTitle">${product.name}</h2>
            <div class="price-row">${priceHTML(product)}</div>
            ${ratingStars(product.rating, product.reviewCount)}
            <p>${product.description}</p>
            ${renderSelectors(product)}
            <div class="hero-actions">
              <button class="button" type="button" data-add-cart="${product.id}">Add to Cart</button>
              <button class="icon-button product-wishlist ${getWishlist().includes(product.id) ? "active" : ""}" type="button" aria-label="Save ${product.name}" data-wishlist="${product.id}">${icon("heart")}</button>
            </div>
            <a class="link-arrow" href="product.html?slug=${product.slug}">Full Details ${icon("chevron")}</a>
          </div>
        </div>
      </section>
    `;
    document.body.classList.add("modal-open");
    const close = $(".modal-close", root);
    if (close) close.focus();
  }

  function closeQuickView() {
    const root = $("#quick-view-root");
    if (root) root.innerHTML = "";
    document.body.classList.remove("modal-open");
  }

  function toast(message) {
    const root = ensureRoot("toast-root", "toast-root");
    const note = document.createElement("div");
    note.className = "toast";
    note.setAttribute("role", "status");
    note.textContent = message;
    root.appendChild(note);
    requestAnimationFrame(() => note.classList.add("show"));
    window.setTimeout(() => {
      note.classList.remove("show");
      window.setTimeout(() => note.remove(), 220);
    }, 2600);
  }

  function renderMiniSearch(value) {
    const root = $("#miniSearchResults");
    if (!root) return;
    const query = value.trim().toLowerCase();
    if (!query) {
      root.innerHTML = `<a class="link-arrow" href="search.html">Open Search ${icon("chevron")}</a>`;
      return;
    }
    const matched = products
      .filter((product) => [product.name, product.category, product.collection, product.colors.join(" ")].join(" ").toLowerCase().includes(query))
      .slice(0, 4);
    root.innerHTML = matched.length
      ? matched
          .map(
            (product) => `
            <a class="mini-result" href="product.html?slug=${product.slug}">
              <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
              <div><strong>${product.name}</strong><span>${product.category}</span></div>
              <strong>${money(product.salePrice || product.price)}</strong>
            </a>
          `
          )
          .join("")
      : `<a class="link-arrow" href="search.html?q=${encodeURIComponent(value)}">Search all products ${icon("chevron")}</a>`;
  }

  function validateForm(form) {
    let valid = true;
    $$(".error-text", form).forEach((node) => node.remove());
    $$(".field", form).forEach((field) => field.classList.remove("error"));

    $$("input, textarea, select", form).forEach((input) => {
      if (!input.required) return;
      const field = input.closest(".field");
      let message = "";
      if (!input.value.trim()) message = "This field is required.";
      if (input.type === "email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) message = "Enter a valid email address.";
      if (input.name === "confirmPassword") {
        const password = $('[name="password"]', form);
        if (password && input.value !== password.value) message = "Passwords must match.";
      }
      if (message && field) {
        field.classList.add("error");
        const error = document.createElement("span");
        error.className = "error-text";
        error.textContent = message;
        field.appendChild(error);
        valid = false;
      }
    });
    return valid;
  }

  function setupReveal() {
    const items = $$(".reveal:not(.in-view)");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const target = event.target;
      const openSearch = target.closest("[data-open-search]");
      if (openSearch) {
        $("#searchPopover")?.classList.toggle("open");
        $("#siteSearch")?.focus();
        renderMiniSearch($("#siteSearch")?.value || "");
      }

      if (target.closest("[data-mobile-open]")) {
        $("#mobileMenu")?.classList.add("open");
        $("#mobileMenu")?.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
      }

      if (target.closest("[data-mobile-close]")) {
        $("#mobileMenu")?.classList.remove("open");
        $("#mobileMenu")?.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
      }

      if (target.closest("[data-open-cart]")) {
        event.preventDefault();
        openCartDrawer();
      }

      if (target.closest("[data-close-cart]")) closeCartDrawer();

      const quick = target.closest("[data-quick-view]");
      if (quick) openQuickView(quick.dataset.quickView);

      if (target.closest("[data-close-modal]")) closeQuickView();

      const wishlist = target.closest("[data-wishlist]");
      if (wishlist) {
        event.preventDefault();
        toggleWishlist(wishlist.dataset.wishlist);
      }

      const add = target.closest("[data-add-cart]");
      if (add) {
        event.preventDefault();
        const context = add.closest("[data-product-context]") || document;
        add.classList.add("is-loading");
        window.setTimeout(() => {
          add.classList.remove("is-loading");
          addToCart(add.dataset.addCart, context, !add.dataset.buyNow);
          if (add.dataset.buyNow) window.location.href = "checkout.html";
        }, 220);
      }

      const size = target.closest("[data-size]");
      if (size) {
        const row = size.closest(".option-row");
        $$("[data-size]", row).forEach((item) => item.classList.remove("active"));
        size.classList.add("active");
      }

      const color = target.closest("[data-color]");
      if (color) {
        const row = color.closest(".option-row");
        $$("[data-color]", row).forEach((item) => item.classList.remove("active"));
        color.classList.add("active");
      }

      const gallery = target.closest("[data-gallery-image]");
      if (gallery) {
        const image = $("#mainProductImage");
        if (image) image.src = gallery.dataset.galleryImage;
        $$("[data-gallery-image]").forEach((button) => button.classList.remove("active"));
        gallery.classList.add("active");
      }

      const accordion = target.closest("[data-accordion]");
      if (accordion) {
        const item = accordion.closest(".accordion-item");
        item.classList.toggle("open");
        accordion.setAttribute("aria-expanded", item.classList.contains("open") ? "true" : "false");
      }

      const increase = target.closest("[data-cart-increase]");
      if (increase) updateCartQuantity(increase.dataset.cartIncrease, 1);

      const decrease = target.closest("[data-cart-decrease]");
      if (decrease) updateCartQuantity(decrease.dataset.cartDecrease, -1);

      const remove = target.closest("[data-cart-remove]");
      if (remove) removeCartItem(remove.dataset.cartRemove);

      if (target.closest("[data-filter-toggle]")) {
        $("#filtersPanel")?.classList.add("open");
        document.body.classList.add("drawer-open");
      }

      if (target.closest("[data-filter-close]")) {
        $("#filtersPanel")?.classList.remove("open");
        document.body.classList.remove("drawer-open");
      }

      if (target.closest("[data-clear-filters]")) {
        $$("[data-filter][type='checkbox']").forEach((input) => {
          input.checked = false;
        });
        const search = $("#shopSearch");
        if (search) search.value = "";
        const max = $("#maxPrice");
        if (max) max.value = "400";
        renderShopProducts();
      }

      const removeFilter = target.closest("[data-remove-filter]");
      if (removeFilter) {
        const type = removeFilter.dataset.removeFilter;
        const value = removeFilter.dataset.filterValue;
        if (type === "query") {
          $("#shopSearch").value = "";
        } else if (type === "price") {
          $("#maxPrice").value = "400";
        } else {
          $$(`[data-filter-type="${type}"]`).forEach((input) => {
            if (input.value === value) input.checked = false;
          });
        }
        renderShopProducts();
      }

      const authTab = target.closest("[data-auth-tab]");
      if (authTab) {
        const tab = authTab.dataset.authTab;
        $$("[data-auth-tab]").forEach((button) => button.classList.toggle("active", button.dataset.authTab === tab));
        $$(".auth-form").forEach((form) => form.classList.toggle("active", form.dataset.authForm === tab));
      }
    });

    document.addEventListener("input", (event) => {
      const target = event.target;
      if (target.matches("#siteSearch")) renderMiniSearch(target.value);
      if (target.matches("#shopSearch") || target.matches("[data-filter]") || target.matches("#sortProducts")) {
        window.clearTimeout(filterTimer);
        filterTimer = window.setTimeout(renderShopProducts, 140);
      }
      if (target.matches("#searchPageInput")) renderSearchPage();
    });

    document.addEventListener("change", (event) => {
      if (event.target.matches("[data-filter], #sortProducts")) renderShopProducts();
    });

    document.addEventListener("submit", (event) => {
      const form = event.target;
      if (form.matches("[data-site-search-form]")) {
        event.preventDefault();
        const input = $("input", form);
        const q = input ? input.value.trim() : "";
        window.location.href = q ? `search.html?q=${encodeURIComponent(q)}` : "search.html";
      }

      if (form.matches("[data-newsletter-form]")) {
        event.preventDefault();
        const input = $("input[type='email']", form);
        const note = $("[data-form-note]", form);
        if (!input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          if (note) note.textContent = "Enter a valid email to join the list.";
          return;
        }
        if (note) note.textContent = "You are on the Archive List.";
        form.reset();
        toast("Subscribed to the Archive List.");
      }

      if (form.matches("[data-contact-form]")) {
        event.preventDefault();
        if (!validateForm(form)) return;
        form.reset();
        const note = $("[data-contact-note]");
        if (note) note.textContent = "Message sent. Our studio will reply within 1 business day.";
        toast("Message sent.");
      }

      if (form.matches("[data-discount-form]")) {
        event.preventDefault();
        const input = $('[name="discount"]', form);
        const value = input.value.trim().toUpperCase();
        const note = $("[data-discount-note]");
        if (value === "ARCHIVE10") {
          localStorage.setItem(storageKeys.discount, "ARCHIVE10");
          if (note) note.textContent = "ARCHIVE10 applied.";
          toast("Discount applied.");
        } else {
          localStorage.removeItem(storageKeys.discount);
          if (note) note.textContent = "Use ARCHIVE10 for this demo.";
          toast("Discount code not found.");
        }
        renderCartPage();
      }

      if (form.matches("[data-checkout-form]")) {
        event.preventDefault();
        if (!validateForm(form)) return;
        const submit = $("button[type='submit']", form);
        if (submit) submit.classList.add("is-loading");
        window.setTimeout(() => {
          localStorage.setItem("maison-archive-last-order", JSON.stringify({ total: cartTotals().total, date: new Date().toISOString() }));
          saveCart([]);
          window.location.href = "order-confirmation.html";
        }, 600);
      }

      if (form.matches("[data-login-form], [data-register-form]")) {
        event.preventDefault();
        if (!validateForm(form)) return;
        toast(form.matches("[data-login-form]") ? "Welcome back to the archive." : "Archive account created.");
        form.reset();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeQuickView();
        closeCartDrawer();
        $("#searchPopover")?.classList.remove("open");
        $("#mobileMenu")?.classList.remove("open");
        document.body.classList.remove("menu-open");
      }
    });

    window.addEventListener("scroll", () => {
      const header = $("#siteHeader");
      if (!header || currentPage() !== "home") return;
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    });
  }

  function applyPageImages() {
    const page = currentPage();
    document.documentElement.style.setProperty("--hero-image", `url('${heroImages.home}')`);
    document.documentElement.style.setProperty("--page-image", `url('${heroImages[page] || heroImages.shop}')`);
    document.documentElement.style.setProperty("--newsletter-image", `url('${img("photo-1520975954732-35dd22299614", 1800)}')`);
    document.documentElement.style.setProperty("--auth-image", `url('${heroImages.auth}')`);
  }

  function renderPage() {
    const page = currentPage();
    if (page === "home") renderHome();
    if (page === "shop") renderShopPage();
    if (page === "product") renderProductPage();
    if (page === "collections") renderCollectionsPage();
    if (page === "cart") renderCartPage();
    if (page === "checkout") renderCheckoutPage();
    if (page === "wishlist") renderWishlistPage();
    if (page === "search") renderSearchPage();
    setupReveal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyPageImages();
    renderHeader();
    renderFooter();
    ensureRoot("quick-view-root");
    ensureRoot("cart-drawer-root");
    ensureRoot("toast-root", "toast-root");
    bindEvents();
    renderPage();
    updateCounts();
  });
})();
