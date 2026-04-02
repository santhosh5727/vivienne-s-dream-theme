import { useState, useEffect } from "react";
import { Bell, ShoppingCart, Search, MapPin, Mic } from "lucide-react";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  showToast: (msg: string) => void;
  cartCount: number;
}

const slides = [
  { bg: "from-[#C44700] via-saffron to-[#FF9A5C]", emoji: "📱", title: "MEGA\nSALE", sub: "Up to 80% off electronics", btnColor: "text-saffron" },
  { bg: "from-[#0A3498] via-sky to-[#5090FF]", emoji: "👗", title: "FASHION\nFEVER", sub: "Flat 60% off top brands", btnColor: "text-sky" },
  { bg: "from-[#45149A] via-plum to-[#9B5CFF]", emoji: "🏠", title: "HOME\nMAKEOVER", sub: "Refresh your space from ₹199", btnColor: "text-plum" },
];

const categories = [
  { emoji: "📱", label: "Electronics", bg: "from-sky-soft to-[#D5E4FF]" },
  { emoji: "👗", label: "Fashion", bg: "from-rose-soft to-[#FBCEE8]" },
  { emoji: "🏠", label: "Home", bg: "from-emerald-soft to-[#C8EEE0]" },
  { emoji: "💄", label: "Beauty", bg: "from-plum-soft to-[#E1D2FF]" },
  { emoji: "🧸", label: "Toys", bg: "from-saffron-soft to-[#FFE0CE]" },
  { emoji: "📚", label: "Books", bg: "from-[#ECF0FF] to-[#D8E1FF]" },
  { emoji: "🏃", label: "Sports", bg: "from-[#FEEAEB] to-[#FDCECE]" },
  { emoji: "🍎", label: "Grocery", bg: "from-emerald-soft to-[#C8EEE0]" },
];

const flashProducts = [
  { emoji: "📱", name: "Samsung Galaxy S24 5G 256GB", brand: "Samsung", price: "₹49,999", old: "₹1,39,999", disc: "64%", rating: "4.5", reviews: "2,341", bg: "from-sky-soft to-[#D5E4FF]" },
  { emoji: "💻", name: "Apple MacBook Air M2 8GB", brand: "Apple", price: "₹89,990", old: "₹1,49,990", disc: "40%", rating: "4.7", reviews: "5,872", bg: "from-saffron-soft to-[#FFE0CE]" },
  { emoji: "🎧", name: "Sony WH-1000XM5 Wireless", brand: "Sony", price: "₹17,990", old: "₹39,990", disc: "55%", rating: "4.6", reviews: "8,102", bg: "from-rose-soft to-[#FBCEE8]" },
  { emoji: "⌚", name: "boAt Smartwatch Wave SpO2", brand: "boAt", price: "₹1,299", old: "₹4,599", disc: "72%", rating: "4.1", reviews: "42,100", bg: "from-emerald-soft to-[#C8EEE0]" },
];

const deals = [
  { emoji: "👗", label: "Fashion & Apparel", title: "Min 60% Off", color: "text-saffron", arrow: "Top Brands →" },
  { emoji: "🏠", label: "Home & Kitchen", title: "From ₹199", color: "text-sky", arrow: "Shop Now →" },
  { emoji: "💄", label: "Beauty & Skincare", title: "Buy 2 Get 1", color: "text-rose", arrow: "Explore →" },
  { emoji: "📚", label: "Books & Stationery", title: "Flat 30% Off", color: "text-emerald", arrow: "Browse →" },
];

const miniBanners = [
  { title: "New Fashion Arrivals", sub: "From ₹299", emoji: "👗", bg: "from-[#9C1A65] to-rose" },
  { title: "Fresh Grocery Deals", sub: "10 min delivery", emoji: "🥦", bg: "from-[#006B52] to-emerald" },
  { title: "Gaming Zone", sub: "Up to 50% off", emoji: "🎮", bg: "from-[#4B189A] to-plum" },
  { title: "Mobiles & Tablets", sub: "Exchange offers", emoji: "📱", bg: "from-[#C44700] to-saffron" },
];

const trendingProducts = [
  { emoji: "👟", brand: "Nike", name: "Air Max 270 Running Shoes", price: "₹5,499", old: "₹8,895", disc: "38%", rating: "4.4", reviews: "3,201", bg: "from-saffron-soft to-[#FFE0CE]" },
  { emoji: "🎧", brand: "JBL", name: "JBL Flip 6 Portable Speaker", price: "₹7,499", old: "₹15,499", disc: "52%", rating: "4.6", reviews: "9,884", bg: "from-rose-soft to-[#FBCEE8]" },
  { emoji: "🍳", brand: "Prestige", name: "Smart Induction Cooktop 2000W", price: "₹2,199", old: "₹3,095", disc: "29%", rating: "4.3", reviews: "12,440", bg: "from-emerald-soft to-[#C8EEE0]" },
  { emoji: "💄", brand: "Maybelline", name: "Fit Me Matte Foundation SPF22", price: "₹369", old: "₹675", disc: "45%", rating: "4.2", reviews: "22,110", bg: "from-plum-soft to-[#E1D2FF]" },
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
      {/* Topbar */}
      <div className="bg-ink2 px-4 pt-3.5 pb-3 sticky top-0 z-50">
        <div className="flex items-center justify-between mb-2.5">
          <div className="font-display text-[26px] font-extrabold tracking-[3px] text-primary-foreground leading-none">
            BAZ<span className="text-saffron">AAR</span>
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-marigold ml-0.5 align-middle mb-0.5" />
          </div>
          <div className="flex gap-2">
            <button onClick={() => showToast("🔔 No new notifications")} className="w-[38px] h-[38px] rounded-xl bg-primary-foreground/10 border border-primary-foreground/[0.08] flex items-center justify-center relative active:scale-90 transition-transform">
              <Bell className="w-[18px] h-[18px] text-primary-foreground" strokeWidth={1.8} />
              <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] bg-saffron rounded-full text-[9px] font-bold text-primary-foreground flex items-center justify-center border-2 border-ink2 px-0.5 font-display">3</span>
            </button>
            <button onClick={() => onNavigate("cart")} className="w-[38px] h-[38px] rounded-xl bg-primary-foreground/10 border border-primary-foreground/[0.08] flex items-center justify-center relative active:scale-90 transition-transform">
              <ShoppingCart className="w-[18px] h-[18px] text-primary-foreground" strokeWidth={1.8} />
              <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] bg-saffron rounded-full text-[9px] font-bold text-primary-foreground flex items-center justify-center border-2 border-ink2 px-0.5 font-display">{cartCount}</span>
            </button>
          </div>
        </div>
        <button onClick={() => onNavigate("search")} className="w-full bg-primary-foreground/10 rounded-xl flex items-center px-3 h-[42px] gap-2 border border-primary-foreground/10 active:bg-primary-foreground/[0.15] transition-colors">
          <Search className="w-4 h-4 text-primary-foreground/50 shrink-0" strokeWidth={1.8} />
          <span className="flex-1 text-left text-[13px] text-primary-foreground/70">Search "Samsung Galaxy S24"</span>
          <div className="w-[30px] h-[30px] bg-saffron rounded-[9px] flex items-center justify-center shrink-0 active:scale-90 transition-transform">
            <Mic className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={1.8} />
          </div>
        </button>
        <div className="flex items-center gap-1.5 mt-2">
          <MapPin className="w-[13px] h-[13px] text-marigold" strokeWidth={2} />
          <span className="text-[11.5px] text-primary-foreground/65">Deliver to <b className="text-primary-foreground font-semibold">Sai Nagar, Madurai 625014</b></span>
          <span className="inline-flex items-center gap-1 bg-emerald/25 border border-emerald/35 rounded-[5px] px-1.5 py-0.5 text-[9.5px] font-bold text-[#5DDEAA] ml-1.5">⚡ 10 min</span>
          <span className="ml-auto bg-primary-foreground/[0.12] border border-primary-foreground/[0.15] rounded-md px-2 py-0.5 text-[10px] text-marigold font-semibold cursor-pointer">Change</span>
        </div>
      </div>

      {/* Banner */}
      <div className="mx-3.5 mt-4 relative">
        <div className={`rounded-[20px] overflow-hidden h-[168px] relative cursor-pointer shadow-md bg-gradient-to-br ${slide.bg}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/[0.18] to-transparent" />
          <div className="relative z-10 flex items-center h-full px-5">
            <div>
              <h2 className="font-display text-[32px] text-primary-foreground font-extrabold leading-none tracking-wide drop-shadow-lg whitespace-pre-line">{slide.title}</h2>
              <p className="text-xs text-primary-foreground/85 mt-1.5 mb-3">{slide.sub}</p>
              <span className={`bg-card rounded-lg px-4 py-1.5 text-[11px] font-bold inline-flex items-center gap-1 ${slide.btnColor}`}>Shop Now →</span>
            </div>
          </div>
          <span className="absolute right-[-8px] top-1/2 -translate-y-1/2 text-[90px] opacity-[0.22] blur-[1px]">{slide.emoji}</span>
          <span className="absolute right-[18px] top-1/2 -translate-y-1/2 text-[68px] z-10 drop-shadow-xl animate-float">{slide.emoji}</span>
        </div>
        <div className="flex justify-center gap-1.5 mt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-[5px] rounded-full transition-all ${i === currentSlide ? "w-[22px] bg-sky" : "w-[5px] bg-border"}`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-[15.5px] font-bold">Shop by Category</h3>
          <button onClick={() => onNavigate("categories")} className="text-xs font-semibold text-sky bg-sky-soft rounded-full px-2.5 py-1 active:bg-sky active:text-primary-foreground transition-colors">See All</button>
        </div>
        <div className="flex gap-2.5 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {categories.map((c) => (
            <button key={c.label} onClick={() => onNavigate("categories")} className="shrink-0 flex flex-col items-center gap-1.5 group">
              <div className={`w-[60px] h-[60px] rounded-[18px] flex items-center justify-center text-[26px] shadow-sm border border-foreground/[0.04] bg-gradient-to-br ${c.bg} group-active:scale-[0.92] transition-transform`}>
                {c.emoji}
              </div>
              <span className="text-[10px] font-semibold text-foreground text-center max-w-[62px] leading-tight">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      <div className="mt-6">
        <div className="flex items-center gap-2.5 px-4 mb-3">
          <span className="bg-saffron text-primary-foreground rounded-lg px-3 py-1 text-[11px] font-bold flex items-center gap-1.5 shadow-[0_2px_8px_rgba(244,96,10,0.3)]">⚡ Flash Sale</span>
          <span className="bg-ink text-marigold rounded-lg px-3 py-1 text-[13px] font-bold tracking-[2.5px] font-mono">{formatTime(timer)}</span>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {flashProducts.map((p, i) => (
            <button key={i} onClick={() => onNavigate("product")} className="shrink-0 w-[148px] bg-card rounded-lg p-3 shadow-sm border border-border active:scale-[0.97] transition-transform text-left">
              <div className={`w-full h-[108px] rounded-[10px] flex items-center justify-center text-[50px] mb-2 relative bg-gradient-to-br ${p.bg}`}>
                <span className="absolute top-1.5 left-1.5 bg-saffron text-primary-foreground text-[9px] font-bold rounded-[5px] px-1.5 py-0.5">-{p.disc}</span>
                {p.emoji}
              </div>
              <div className="text-[11.5px] font-medium leading-tight line-clamp-2 text-foreground mb-1">{p.name}</div>
              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-1.5">{p.brand}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold font-display text-foreground">{p.price}</span>
                <span className="text-[10.5px] text-muted2 line-through">{p.old}</span>
              </div>
              <div className="text-[10px] text-emerald font-semibold mt-0.5">{p.disc} off</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="bg-emerald text-primary-foreground text-[9.5px] font-bold rounded-[5px] px-1.5 py-0.5">★ {p.rating}</span>
                <span className="text-[10px] text-muted2">({p.reviews})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Deals */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-[15.5px] font-bold">Best Deals Today 🔥</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {deals.map((d, i) => (
            <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-lg p-3.5 shadow-sm border border-border active:scale-[0.97] transition-transform text-left">
              <span className="text-4xl mb-2 block">{d.emoji}</span>
              <div className="text-[10px] font-medium text-muted-foreground mb-0.5 tracking-wider">{d.label}</div>
              <div className="text-sm font-bold font-display text-foreground mb-1">{d.title}</div>
              <div className={`text-[11.5px] font-semibold ${d.color}`}>{d.arrow}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Mini Banners */}
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-3 px-4">
          {miniBanners.map((b, i) => (
            <div key={i} className={`rounded-lg p-4 min-h-[94px] relative overflow-hidden shadow-sm cursor-pointer active:scale-[0.97] transition-transform bg-gradient-to-br ${b.bg}`}>
              <div className="absolute w-20 h-20 rounded-full bg-primary-foreground/10 -right-5 -bottom-5" />
              <h4 className="font-display text-[13.5px] font-bold text-primary-foreground mb-1 relative z-10 leading-tight">{b.title}</h4>
              <p className="text-[10px] text-primary-foreground/80 relative z-10">{b.sub}</p>
              <span className="absolute right-2.5 bottom-2 text-[34px] opacity-75">{b.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Brands */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-[15.5px] font-bold">Top Brands</h3>
          <span className="text-xs font-semibold text-sky bg-sky-soft rounded-full px-2.5 py-1">See All</span>
        </div>
        <div className="flex gap-2.5 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {brands.map((b) => (
            <span key={b} className="shrink-0 bg-card rounded-[10px] px-4 py-2 text-xs font-bold shadow-sm border-[1.5px] border-transparent font-display tracking-wider cursor-pointer active:border-sky active:bg-sky-soft transition-all">{b}</span>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="mt-6 mb-5">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-display text-[15.5px] font-bold">Trending Right Now 📈</h3>
          <span className="text-xs font-semibold text-sky bg-sky-soft rounded-full px-2.5 py-1">See All</span>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {trendingProducts.map((p, i) => (
            <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-lg p-3 shadow-sm border border-border active:scale-[0.97] transition-transform text-left">
              <div className={`w-full h-[128px] rounded-[10px] flex items-center justify-center text-[58px] mb-2.5 relative bg-gradient-to-br ${p.bg}`}>
                <span className="absolute top-1.5 left-1.5 bg-saffron text-primary-foreground text-[9px] font-bold rounded-[5px] px-1.5 py-0.5">-{p.disc}</span>
                <span className="absolute top-2 right-2 w-7 h-7 bg-card/[0.92] rounded-full flex items-center justify-center text-sm cursor-pointer shadow-sm">♡</span>
                {p.emoji}
              </div>
              <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{p.brand}</div>
              <div className="text-xs font-medium leading-tight line-clamp-2 text-foreground mb-0.5">{p.name}</div>
              <span className="text-sm font-bold font-display text-foreground">{p.price}</span>
              <div className="text-[10.5px] text-muted2 line-through">{p.old}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="bg-emerald text-primary-foreground text-[9.5px] font-bold rounded-[5px] px-1.5 py-0.5">★ {p.rating}</span>
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
