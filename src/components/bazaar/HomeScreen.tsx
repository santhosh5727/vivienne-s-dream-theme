import { useState, useEffect } from "react";
import { Bell, ShoppingCart, Search, MapPin, Mic } from "lucide-react";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  showToast: (msg: string) => void;
  cartCount: number;
}

const slides = [
  { emoji: "📱", title: "MEGA\nSALE", sub: "Up to 80% off electronics" },
  { emoji: "👗", title: "FASHION\nFEVER", sub: "Flat 60% off top brands" },
  { emoji: "🏠", title: "HOME\nMAKEOVER", sub: "Refresh your space from ₹199" },
];

const categories = [
  { emoji: "📱", label: "Electronics" },
  { emoji: "👗", label: "Fashion" },
  { emoji: "🏠", label: "Home" },
  { emoji: "💄", label: "Beauty" },
  { emoji: "🧸", label: "Toys" },
  { emoji: "📚", label: "Books" },
  { emoji: "🏃", label: "Sports" },
  { emoji: "🍎", label: "Grocery" },
];

const flashProducts = [
  { emoji: "📱", name: "Samsung Galaxy S24 5G 256GB", brand: "SAMSUNG", price: "₹49,999", old: "₹1,39,999", disc: "64%", rating: "4.5", reviews: "2,341" },
  { emoji: "💻", name: "Apple MacBook Air M2 8GB", brand: "APPLE", price: "₹89,990", old: "₹1,49,990", disc: "40%", rating: "4.7", reviews: "5,872" },
  { emoji: "🎧", name: "Sony WH-1000XM5 Wireless", brand: "SONY", price: "₹17,990", old: "₹39,990", disc: "55%", rating: "4.6", reviews: "8,102" },
  { emoji: "⌚", name: "boAt Smartwatch Wave SpO2", brand: "BOAT", price: "₹1,299", old: "₹4,599", disc: "72%", rating: "4.1", reviews: "42,100" },
];

const deals = [
  { emoji: "👗", label: "Fashion & Apparel", title: "Min 60% Off", arrow: "Top Brands →" },
  { emoji: "🏠", label: "Home & Kitchen", title: "From ₹199", arrow: "Shop Now →" },
  { emoji: "💄", label: "Beauty & Skincare", title: "Buy 2 Get 1", arrow: "Explore →" },
  { emoji: "📚", label: "Books & Stationery", title: "Flat 30% Off", arrow: "Browse →" },
];

const miniBanners = [
  { title: "NEW FASHION ARRIVALS", sub: "From ₹299", emoji: "👗" },
  { title: "FRESH GROCERY DEALS", sub: "10 min delivery", emoji: "🥦" },
  { title: "GAMING ZONE", sub: "Up to 50% off", emoji: "🎮" },
  { title: "MOBILES & TABLETS", sub: "Exchange offers", emoji: "📱" },
];

const trendingProducts = [
  { emoji: "👟", brand: "NIKE", name: "Air Max 270 Running Shoes", price: "₹5,499", old: "₹8,895", disc: "38%", rating: "4.4", reviews: "3,201" },
  { emoji: "🎧", brand: "JBL", name: "JBL Flip 6 Portable Speaker", price: "₹7,499", old: "₹15,499", disc: "52%", rating: "4.6", reviews: "9,884" },
  { emoji: "🍳", brand: "PRESTIGE", name: "Smart Induction Cooktop 2000W", price: "₹2,199", old: "₹3,095", disc: "29%", rating: "4.3", reviews: "12,440" },
  { emoji: "💄", brand: "MAYBELLINE", name: "Fit Me Matte Foundation SPF22", price: "₹369", old: "₹675", disc: "45%", rating: "4.2", reviews: "22,110" },
];

const brands = ["Samsung", "Apple", "Nike", "Boat", "Prestige", "Lakme", "Puma", "Milton"];

const HomeScreen = ({ onNavigate, showToast, cartCount }: HomeScreenProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timer, setTimer] = useState(7 * 3600 + 14 * 60 + 37);

  useEffect(() => {
    const slideInterval = setInterval(() => setCurrentSlide((s) => (s + 1) % slides.length), 3200);
    const timerInterval = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => { clearInterval(slideInterval); clearInterval(timerInterval); };
  }, []);

  const formatTime = (s: number) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const slide = slides[currentSlide];

  return (
    <div className="animate-screen-in pb-[75px]">
      {/* Marquee Ticker */}
      <div className="bg-foreground overflow-hidden whitespace-nowrap py-1.5">
        <div className="animate-marquee inline-block">
          {Array(8).fill("BAZAAR MEGA SALE — UP TO 80% OFF ★ ").map((t, i) => (
            <span key={i} className="text-[11px] font-bold tracking-[2px] text-primary-foreground font-display uppercase">{t}</span>
          ))}
        </div>
      </div>

      {/* Topbar */}
      <div className="bg-foreground px-4 pt-3 pb-3 border-b-[2.5px] border-foreground">
        <div className="flex items-center justify-between mb-2.5">
          <div className="font-display text-[28px] font-extrabold tracking-[4px] text-primary-foreground leading-none uppercase">
            BAZAAR
          </div>
          <div className="flex gap-2">
            <button onClick={() => showToast("🔔 No new notifications")} className="w-[38px] h-[38px] rounded-xl bg-primary-foreground/10 border-[2px] border-primary-foreground/30 flex items-center justify-center relative active:scale-90 transition-transform">
              <Bell className="w-[18px] h-[18px] text-primary-foreground" strokeWidth={2} />
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-primary-foreground text-foreground rounded-full text-[9px] font-bold flex items-center justify-center px-0.5 font-display">3</span>
            </button>
            <button onClick={() => onNavigate("cart")} className="w-[38px] h-[38px] rounded-xl bg-primary-foreground/10 border-[2px] border-primary-foreground/30 flex items-center justify-center relative active:scale-90 transition-transform">
              <ShoppingCart className="w-[18px] h-[18px] text-primary-foreground" strokeWidth={2} />
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-primary-foreground text-foreground rounded-full text-[9px] font-bold flex items-center justify-center px-0.5 font-display">{cartCount}</span>
            </button>
          </div>
        </div>
        <button onClick={() => onNavigate("search")} className="w-full bg-primary-foreground/10 rounded-xl flex items-center px-3 h-[42px] gap-2 border-[2px] border-primary-foreground/30 active:bg-primary-foreground/20 transition-colors">
          <Search className="w-4 h-4 text-primary-foreground/50 shrink-0" strokeWidth={2} />
          <span className="flex-1 text-left text-[13px] text-primary-foreground/70 font-body">Search "Samsung Galaxy S24"</span>
          <div className="w-[30px] h-[30px] bg-primary-foreground rounded-lg flex items-center justify-center shrink-0">
            <Mic className="w-3.5 h-3.5 text-foreground" strokeWidth={2} />
          </div>
        </button>
        <div className="flex items-center gap-1.5 mt-2">
          <MapPin className="w-[13px] h-[13px] text-primary-foreground" strokeWidth={2.5} />
          <span className="text-[11.5px] text-primary-foreground/65">Deliver to <b className="text-primary-foreground font-semibold">Sai Nagar, Madurai 625014</b></span>
          <span className="inline-flex items-center gap-1 bg-primary-foreground/20 border border-primary-foreground/30 rounded px-1.5 py-0.5 text-[9.5px] font-bold text-primary-foreground ml-1.5">⚡ 10 min</span>
          <span className="ml-auto bg-primary-foreground/[0.12] border border-primary-foreground/[0.15] rounded-md px-2 py-0.5 text-[10px] text-primary-foreground font-bold tracking-wider cursor-pointer uppercase">Change</span>
        </div>
      </div>

      {/* Banner */}
      <div className="mx-3.5 mt-4 relative">
        <div className="rounded-2xl overflow-hidden h-[168px] md:h-[240px] lg:h-[320px] relative cursor-pointer border-[2.5px] border-foreground bg-foreground">
          <div className="relative z-10 flex items-center h-full px-5">
            <div>
              <h2 className="font-display text-[32px] text-primary-foreground font-extrabold leading-none tracking-wider whitespace-pre-line uppercase">{slide.title}</h2>
              <p className="text-xs text-primary-foreground/80 mt-1.5 mb-3 font-body">{slide.sub}</p>
              <span className="bg-primary-foreground text-foreground rounded-lg px-4 py-1.5 text-[11px] font-bold inline-flex items-center gap-1 font-display tracking-wider uppercase">Shop Now →</span>
            </div>
          </div>
          <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 text-[90px] opacity-20">{slide.emoji}</span>
          <span className="absolute right-[18px] top-1/2 -translate-y-1/2 text-[68px] z-10 animate-float">{slide.emoji}</span>
        </div>
        <div className="flex justify-center gap-1.5 mt-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-[5px] rounded-full transition-all ${i === currentSlide ? "w-[22px] bg-foreground" : "w-[5px] bg-foreground/20"}`} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-base tracking-wider uppercase">Shop by Category</h3>
          <button onClick={() => onNavigate("categories")} className="text-[10px] font-bold tracking-[1.5px] border-[2px] border-foreground rounded-full px-3 py-1 active:bg-foreground active:text-primary-foreground transition-colors uppercase font-display">See All</button>
        </div>
        <div className="flex gap-2.5 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {categories.map((c) => (
            <button key={c.label} onClick={() => onNavigate("categories")} className="shrink-0 flex flex-col items-center gap-1.5 group">
              <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[26px] border-[2.5px] border-foreground bg-card group-active:bg-foreground group-active:scale-[0.92] transition-all">
                {c.emoji}
              </div>
              <span className="text-[9px] font-bold text-foreground text-center max-w-[62px] leading-tight tracking-wider uppercase font-display">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      <div className="mt-6">
        <div className="flex items-center gap-2.5 px-4 mb-3">
          <span className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-[11px] font-bold flex items-center gap-1.5 font-display tracking-wider uppercase">⚡ Flash Sale</span>
          <span className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-[13px] font-bold tracking-[2.5px] font-mono">{formatTime(timer)}</span>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {flashProducts.map((p, i) => (
            <button key={i} onClick={() => onNavigate("product")} className="shrink-0 w-[148px] bg-card rounded-xl p-3 border-[2.5px] border-foreground active:scale-[0.97] transition-transform text-left">
              <div className="w-full h-[108px] rounded-lg flex items-center justify-center text-[50px] mb-2 relative border-[2px] border-foreground bg-secondary">
                <span className="absolute top-1.5 left-1.5 bg-foreground text-primary-foreground text-[9px] font-bold rounded px-1.5 py-0.5 font-display">-{p.disc}</span>
                {p.emoji}
              </div>
              <div className="text-[11.5px] font-medium leading-tight line-clamp-2 text-foreground mb-1">{p.name}</div>
              <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1.5px] mb-1.5 font-display">{p.brand}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold font-display text-foreground">{p.price}</span>
                <span className="text-[10.5px] text-muted2 line-through">{p.old}</span>
              </div>
              <div className="text-[10px] text-foreground font-bold mt-0.5">{p.disc} off</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="bg-foreground text-primary-foreground text-[9.5px] font-bold rounded px-1.5 py-0.5 font-display">★ {p.rating}</span>
                <span className="text-[10px] text-muted2">({p.reviews})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Deals */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-base tracking-wider uppercase">Best Deals Today 🔥</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {deals.map((d, i) => (
            <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-xl p-3.5 border-[2.5px] border-foreground active:scale-[0.97] active:bg-secondary transition-all text-left">
              <span className="text-4xl mb-2 block">{d.emoji}</span>
              <div className="text-[9px] font-bold text-muted-foreground mb-0.5 tracking-[1.5px] uppercase font-display">{d.label}</div>
              <div className="text-sm font-bold font-display text-foreground mb-1 uppercase tracking-wider">{d.title}</div>
              <div className="text-[11.5px] font-bold text-foreground tracking-wider uppercase font-display">{d.arrow}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Mini Banners */}
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-3 px-4">
          {miniBanners.map((b, i) => (
            <div key={i} className="rounded-xl p-4 min-h-[94px] relative overflow-hidden border-[2.5px] border-foreground bg-foreground cursor-pointer active:scale-[0.97] transition-transform">
              <h4 className="font-display text-[12px] font-bold text-primary-foreground mb-1 relative z-10 leading-tight tracking-wider uppercase">{b.title}</h4>
              <p className="text-[10px] text-primary-foreground/70 relative z-10 font-body">{b.sub}</p>
              <span className="absolute right-2.5 bottom-2 text-[34px] opacity-50">{b.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Brands */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-base tracking-wider uppercase">Top Brands</h3>
          <span className="text-[10px] font-bold tracking-[1.5px] border-[2px] border-foreground rounded-full px-3 py-1 font-display uppercase">See All</span>
        </div>
        <div className="flex gap-2.5 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {brands.map((b) => (
            <span key={b} className="shrink-0 bg-card rounded-xl px-4 py-2 text-[11px] font-bold border-[2.5px] border-foreground cursor-pointer font-display tracking-[1.5px] uppercase active:bg-foreground active:text-primary-foreground transition-all">{b}</span>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="mt-6 mb-5">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-base tracking-wider uppercase">Trending Now 📈</h3>
          <span className="text-[10px] font-bold tracking-[1.5px] border-[2px] border-foreground rounded-full px-3 py-1 font-display uppercase">See All</span>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {trendingProducts.map((p, i) => (
            <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-xl p-3 border-[2.5px] border-foreground active:scale-[0.97] transition-transform text-left">
              <div className="w-full h-[128px] rounded-lg flex items-center justify-center text-[58px] mb-2.5 relative border-[2px] border-foreground bg-secondary">
                <span className="absolute top-1.5 left-1.5 bg-foreground text-primary-foreground text-[9px] font-bold rounded px-1.5 py-0.5 font-display">-{p.disc}</span>
                <span className="absolute top-2 right-2 w-7 h-7 bg-card border-[2px] border-foreground rounded-full flex items-center justify-center text-sm cursor-pointer">♡</span>
                {p.emoji}
              </div>
              <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1.5px] mb-0.5 font-display">{p.brand}</div>
              <div className="text-xs font-medium leading-tight line-clamp-2 text-foreground mb-0.5">{p.name}</div>
              <span className="text-sm font-bold font-display text-foreground">{p.price}</span>
              <div className="text-[10.5px] text-muted2 line-through">{p.old}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="bg-foreground text-primary-foreground text-[9.5px] font-bold rounded px-1.5 py-0.5 font-display">★ {p.rating}</span>
                <span className="text-[10px] text-muted2">({p.reviews})</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
