import {
  ChevronRight,
  Clock,
  Facebook,
  Footprints,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  Star,
  Tag,
  Twitter,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    name: "Sports Sneaker",
    price: 1299,
    description:
      "Lightweight running shoes with orange accents and advanced cushioning technology.",
    image: "/assets/generated/sneaker-white-orange.dim_400x300.jpg",
    category: "Sports",
    tag: "New",
  },
  {
    id: 2,
    name: "Women's Gold Sandal",
    price: 899,
    description:
      "Elegant strappy sandals with golden finish — perfect for every occasion.",
    image: "/assets/generated/sandal-women-gold.dim_400x300.jpg",
    category: "Sandals",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Men's Formal Shoe",
    price: 2199,
    description:
      "Classic leather formal shoes, crafted for the office and special events.",
    image: "/assets/generated/shoe-formal-brown.dim_400x300.jpg",
    category: "Formal",
    tag: "Bestseller",
  },
  {
    id: 4,
    name: "Casual Flip Flops",
    price: 299,
    description: "Comfortable everyday slippers with durable rubber soles.",
    image: "/assets/generated/slipper-orange.dim_400x300.jpg",
    category: "Slippers",
    tag: "Sale",
  },
  {
    id: 5,
    name: "Leather Ankle Boot",
    price: 3499,
    description:
      "Premium black leather ankle boots — stylish and durable for all seasons.",
    image: "/assets/generated/boot-black-leather.dim_400x300.jpg",
    category: "Boots",
    tag: "Premium",
  },
  {
    id: 6,
    name: "Brown Loafers",
    price: 1799,
    description: "Comfortable casual brown loafers, great for everyday wear.",
    image: "/assets/generated/loafer-brown.dim_400x300.jpg",
    category: "Casual",
    tag: "New",
  },
  {
    id: 7,
    name: "Kolhapuri Sandal",
    price: 699,
    description:
      "Traditional handcrafted Kolhapuri sandals — authentic Indian artisan footwear.",
    image: "/assets/generated/kolhapuri-sandal.dim_400x300.jpg",
    category: "Traditional",
    tag: "Heritage",
  },
  {
    id: 8,
    name: "Kids Sneaker",
    price: 799,
    description:
      "Fun and comfortable shoes for kids — durable design with vibrant colors.",
    image: "/assets/generated/sneaker-white-orange.dim_400x300.jpg",
    category: "Kids",
    tag: "Kids",
  },
];

const OFFERS = [
  {
    id: 1,
    title: "Flat 30% OFF",
    subtitle: "on all Slippers",
    code: "SLIPPER30",
    bg: "from-orange-600 to-amber-500",
    icon: "🩴",
    badge: "HOT DEAL",
  },
  {
    id: 2,
    title: "Buy 2 Get 1 FREE",
    subtitle: "on all Sandals",
    code: "SANDAL3FOR2",
    bg: "from-amber-500 to-yellow-400",
    icon: "👡",
    badge: "LIMITED TIME",
  },
  {
    id: 3,
    title: "Festival Special",
    subtitle: "₹500 OFF on orders above ₹2000",
    code: "FEST500",
    bg: "from-yellow-500 to-orange-500",
    icon: "🎉",
    badge: "FESTIVE",
  },
];

const COLLECTIONS = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Light sandals and slippers for the warm season",
    image: "/assets/generated/sandal-women-gold.dim_400x300.jpg",
    items: "24 items",
  },
  {
    id: 2,
    title: "Formal Wear",
    description: "Office shoes and loafers for professionals",
    image: "/assets/generated/shoe-formal-brown.dim_400x300.jpg",
    items: "18 items",
  },
  {
    id: 3,
    title: "Sports & Active",
    description: "Sneakers and sports shoes for an active lifestyle",
    image: "/assets/generated/sneaker-white-orange.dim_400x300.jpg",
    items: "31 items",
  },
];

// ─── NavBar ──────────────────────────────────────────────────────────────────

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", ocid: "nav.home_link" },
    { label: "Products", href: "#products", ocid: "nav.products_link" },
    { label: "Offers", href: "#offers", ocid: "nav.offers_link" },
    {
      label: "Collections",
      href: "#collections",
      ocid: "nav.collections_link",
    },
    { label: "About", href: "#about", ocid: "nav.about_link" },
    { label: "Contact", href: "#contact", ocid: "nav.contact_link" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.10_0.01_20)] shadow-lg shadow-black/30"
          : "bg-[oklch(0.12_0.01_20)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full gradient-orange-yellow flex items-center justify-center shadow-md">
              <Footprints className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-white group-hover:text-[oklch(0.82_0.17_85)] transition-colors">
              चरण स्पर्श
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.ocid}
                href={link.href}
                data-ocid={link.ocid}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="nav-link-hover px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#products")}
              className="ml-3 px-4 py-2 rounded-full text-sm font-bold gradient-orange-yellow text-white shadow hover:opacity-90 transition-opacity"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            data-ocid="nav.mobile_toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[oklch(0.14_0.01_20)] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.ocid}
                  href={link.href}
                  data-ocid={link.ocid}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#products")}
                className="w-full mt-2 px-4 py-3 rounded-xl text-sm font-bold gradient-orange-yellow text-white shadow"
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  const handleShopNow = () => {
    const el = document.querySelector("#products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x500.jpg"
          alt="चरण स्पर्श - Premium Footwear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.01_20/0.95)] via-[oklch(0.10_0.01_20/0.80)] to-[oklch(0.08_0.01_20/0.50)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/80 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 text-[oklch(0.82_0.17_85)]" />
            Premium Footwear Collection
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-4"
          >
            <span className="block text-gradient-fire">चरण स्पर्श</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-display text-2xl sm:text-3xl font-bold text-[oklch(0.82_0.17_85)] mb-3"
          >
            हर कदम में स्टाइल
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 mb-10 max-w-lg leading-relaxed"
          >
            Premium Footwear Collection by{" "}
            <span className="text-white font-semibold">Ayush Saha</span>.
            Discover shoes, sandals, slippers, and traditional footwear crafted
            with love.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={handleShopNow}
              className="group flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base gradient-orange-yellow text-white shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.querySelector("#collections");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-4 rounded-full font-bold text-base border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              View Collections
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-8 mt-14 pt-8 border-t border-white/20"
          >
            {[
              { value: "500+", label: "Products" },
              { value: "10K+", label: "Happy Customers" },
              { value: "5★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-black text-gradient-fire">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/40" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tagColors: Record<string, string> = {
    New: "bg-[oklch(0.65_0.22_40)] text-white",
    Popular: "bg-[oklch(0.82_0.17_85)] text-[oklch(0.12_0.01_20)]",
    Bestseller: "bg-[oklch(0.55_0.18_45)] text-white",
    Sale: "bg-red-500 text-white",
    Premium: "bg-[oklch(0.30_0.02_25)] text-white",
    Heritage: "bg-amber-700 text-white",
    Kids: "bg-sky-500 text-white",
  };

  return (
    <motion.div
      data-ocid={`products.item.${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-[oklch(0.90_0.02_60)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[oklch(0.96_0.01_80)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Tag badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${tagColors[product.tag] ?? "bg-gray-500 text-white"}`}
        >
          {product.tag}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="text-xs text-[oklch(0.55_0.05_40)] font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </div>
        <h3 className="font-display font-bold text-[oklch(0.14_0.01_20)] text-lg leading-tight mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-[oklch(0.45_0.03_40)] leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="font-display text-2xl font-black text-[oklch(0.65_0.22_40)]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>
          <button
            type="button"
            data-ocid={`products.button.${index}`}
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              added
                ? "bg-green-500 text-white scale-95"
                : "gradient-orange-yellow text-white hover:opacity-90 hover:scale-105"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Featured Products ────────────────────────────────────────────────────────

function FeaturedProducts() {
  return (
    <section className="py-20 bg-[oklch(0.97_0.01_85)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[oklch(0.65_0.22_40)] uppercase tracking-wider mb-2">
            Handpicked for you
          </p>
          <h2 className="font-display text-4xl font-black text-[oklch(0.12_0.01_20)] section-heading-center">
            Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Products Section ─────────────────────────────────────────────────────────

function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-bold text-[oklch(0.65_0.22_40)] uppercase tracking-wider mb-2">
              Shoes, Sandals & More
            </p>
            <h2 className="font-display text-4xl font-black text-[oklch(0.12_0.01_20)] section-heading">
              Our Collection
            </h2>
          </div>
          <p className="text-[oklch(0.45_0.03_40)] text-sm max-w-xs">
            Explore our wide range of premium footwear — from traditional to
            modern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Offers Section ───────────────────────────────────────────────────────────

function OffersSection() {
  return (
    <section id="offers" className="py-20 bg-[oklch(0.12_0.01_20)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[oklch(0.82_0.17_85)] uppercase tracking-wider mb-2">
            Save More Today
          </p>
          <h2 className="font-display text-4xl font-black text-white section-heading-center">
            Special Offers
          </h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto text-sm">
            Limited time deals — grab them before they're gone!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br ${offer.bg} shadow-xl`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/25 backdrop-blur rounded-full text-xs font-black text-white tracking-wider">
                {offer.badge}
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/10" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{offer.icon}</div>
                <h3 className="font-display text-2xl font-black text-white mb-1">
                  {offer.title}
                </h3>
                <p className="text-white/90 font-medium mb-4">
                  {offer.subtitle}
                </p>

                {/* Code */}
                <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur rounded-xl px-4 py-2.5">
                  <Tag className="w-4 h-4 text-white/70" />
                  <span className="font-mono font-bold text-white text-sm tracking-widest">
                    {offer.code}
                  </span>
                </div>

                <p className="mt-3 text-white/70 text-xs">
                  ⏱ Limited Time Offer
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Collections Section ──────────────────────────────────────────────────────

function CollectionsSection() {
  return (
    <section id="collections" className="py-20 bg-[oklch(0.97_0.01_85)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[oklch(0.65_0.22_40)] uppercase tracking-wider mb-2">
            Curated for you
          </p>
          <h2 className="font-display text-4xl font-black text-[oklch(0.12_0.01_20)] section-heading-center">
            New Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_20/0.90)] via-[oklch(0.08_0.01_20/0.40)] to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">
                  {col.items}
                </div>
                <h3 className="font-display text-xl font-black text-white mb-2">
                  {col.title}
                </h3>
                <p className="text-white/75 text-sm mb-4 line-clamp-2">
                  {col.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.querySelector("#products");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold gradient-orange-yellow text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Browse Collection
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/kolhapuri-sandal.dim_400x300.jpg"
                alt="Handcrafted footwear"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_20/0.60)] to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[oklch(0.12_0.01_20)] rounded-2xl p-5 shadow-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-orange-yellow flex items-center justify-center shadow">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display text-xl font-black text-white">
                    10K+
                  </div>
                  <div className="text-white/60 text-xs">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Orange accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl gradient-orange-yellow opacity-20 blur-2xl" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold text-[oklch(0.65_0.22_40)] uppercase tracking-wider mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl font-black text-[oklch(0.12_0.01_20)] section-heading mb-8">
              About Us
            </h2>

            {/* Owner highlight */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-[oklch(0.97_0.01_85)] rounded-2xl border border-[oklch(0.90_0.02_60)]">
              <div className="w-14 h-14 rounded-full gradient-orange-yellow flex items-center justify-center text-white font-display text-xl font-black shadow">
                AS
              </div>
              <div>
                <div className="font-display text-lg font-black text-[oklch(0.12_0.01_20)]">
                  Ayush Saha
                </div>
                <div className="text-sm text-[oklch(0.55_0.05_40)]">
                  Founder & Owner, चरण स्पर्श
                </div>
              </div>
            </div>

            <p className="text-[oklch(0.35_0.02_30)] leading-relaxed mb-5">
              Welcome to{" "}
              <span className="font-bold text-[oklch(0.65_0.22_40)]">
                चरण स्पर्श
              </span>
              , your trusted destination for premium quality footwear. Founded
              by <span className="font-bold">Ayush Saha</span>, our shop brings
              you the finest selection of shoes, sandals, slippers, and more.
            </p>
            <p className="text-[oklch(0.35_0.02_30)] leading-relaxed mb-5">
              We believe that the right footwear can transform your style and
              comfort. From traditional Kolhapuri sandals to modern sports
              sneakers, we have something for everyone — crafted with care,
              delivered with love.
            </p>
            <p className="text-[oklch(0.35_0.02_30)] leading-relaxed mb-8">
              Every pair in our collection is thoughtfully sourced, ensuring
              quality, comfort, and style that lasts. Step into your best self
              with{" "}
              <span className="font-bold text-[oklch(0.65_0.22_40)]">
                चरण स्पर्श
              </span>
              .
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "✅", label: "100% Genuine Products" },
                { icon: "🚚", label: "Fast Local Delivery" },
                { icon: "🔄", label: "Easy Returns" },
                { icon: "💰", label: "Best Price Guarantee" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-[oklch(0.35_0.02_30)]"
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "123, Footwear Market, Main Bazaar, Kolkata – 700001",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "charansparsh@gmail.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "Mon–Sat: 10:00 AM – 8:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[oklch(0.12_0.01_20)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[oklch(0.82_0.17_85)] uppercase tracking-wider mb-2">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl font-black text-white section-heading-center">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Visit our Store
            </h3>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-orange-yellow flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[oklch(0.82_0.17_85)] uppercase tracking-wider mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-[oklch(0.18_0.015_25)] h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-[oklch(0.65_0.22_40)] mx-auto mb-2" />
                <p className="text-white/50 text-sm">Main Bazaar, Kolkata</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[oklch(0.18_0.015_25)] rounded-3xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    data-ocid="contact.success_state"
                    className="mb-5 p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-green-400 text-sm font-medium"
                  >
                    ✅ Thank you! Your message has been sent. We'll get back to
                    you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    data-ocid="contact.input"
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.01_20)] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.65_0.22_40)] focus:ring-2 focus:ring-[oklch(0.65_0.22_40/0.20)] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    data-ocid="contact.email_input"
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.01_20)] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.65_0.22_40)] focus:ring-2 focus:ring-[oklch(0.65_0.22_40/0.20)] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    data-ocid="contact.phone_input"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.01_20)] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.65_0.22_40)] focus:ring-2 focus:ring-[oklch(0.65_0.22_40/0.20)] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    required
                    rows={4}
                    placeholder="I'm looking for formal shoes in size 9..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.01_20)] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[oklch(0.65_0.22_40)] focus:ring-2 focus:ring-[oklch(0.65_0.22_40/0.20)] transition-all resize-none"
                  />
                </div>
                <button
                  data-ocid="contact.submit_button"
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-base gradient-orange-yellow text-white shadow-lg hover:opacity-90 hover:scale-[1.01] transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.08_0.01_15)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-orange-yellow flex items-center justify-center shadow">
                <Footprints className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-black text-white">
                चरण स्पर्श
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-5">
              Premium footwear for every occasion. From traditional Kolhapuri
              sandals to modern sports sneakers — we have it all.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[oklch(0.65_0.22_40)] text-white/70 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Products", href: "#products" },
                { label: "Special Offers", href: "#offers" },
                { label: "Collections", href: "#collections" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleScroll(link.href)}
                    className="text-white/60 hover:text-[oklch(0.82_0.17_85)] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[oklch(0.65_0.22_40)] flex-shrink-0 mt-0.5" />
                123, Footwear Market, Main Bazaar, Kolkata – 700001
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[oklch(0.65_0.22_40)] flex-shrink-0" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[oklch(0.65_0.22_40)] flex-shrink-0" />
                charansparsh@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>© {year} चरण स्पर्श. All rights reserved. | Owned by Ayush Saha</p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.65_0.22_40)] hover:text-[oklch(0.82_0.17_85)] transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ProductsSection />
        <OffersSection />
        <CollectionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
