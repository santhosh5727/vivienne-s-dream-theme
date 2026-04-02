import { useState } from "react";
import { Search, Clock, X } from "lucide-react";

interface SearchScreenProps {
  onNavigate: (screen: string) => void;
}

const recentSearches = ["Samsung Galaxy S24", "Nike running shoes men", "Sony headphones under 20000", "Prestige induction cooktop"];
const trendingTags = ["iPhone 15", "Laptops under 50000", "Summer dresses", "Air fryer", "boAt earphones", "Yoga mat", "Vitamin C serum", "Wireless mouse"];

const searchResults = [
  { emoji: "📱", brand: "SAMSUNG", name: "Galaxy S24 Ultra 5G 256GB", price: "₹49,999", old: "₹1,39,999", disc: "64%", rating: "4.5", reviews: "2,341" },
  { emoji: "📱", brand: "SAMSUNG", name: "Galaxy A55 5G 128GB Iceblue", price: "₹24,999", old: "₹38,499", disc: "35%", rating: "4.3", reviews: "8,771" },
  { emoji: "🎧", brand: "SAMSUNG", name: "Galaxy Buds3 Pro TWS ANC", price: "₹11,999", old: "₹14,999", disc: "20%", rating: "4.4", reviews: "1,210" },
  { emoji: "⌚", brand: "SAMSUNG", name: "Galaxy Watch7 44mm LTE", price: "₹22,999", old: "₹32,999", disc: "30%", rating: "4.5", reviews: "3,456" },
];

const SearchScreen = ({ onNavigate }: SearchScreenProps) => {
  const [query, setQuery] = useState("");
  const hasQuery = query.length > 0;

  return (
    <div className="animate-screen-in pb-[75px]">
      <div className="bg-card px-3.5 py-3 border-b-[2.5px] border-foreground sticky top-0 z-50">
        <div className="flex items-center gap-2 bg-card rounded-xl px-3 h-[46px] border-[2.5px] border-foreground focus-within:bg-secondary transition-all">
          <Search className="w-[18px] h-[18px] text-foreground shrink-0" strokeWidth={2.5} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands…"
            className="flex-1 border-none outline-none text-sm bg-transparent text-foreground placeholder:text-muted2 font-body"
            autoFocus
          />
          {query && <button onClick={() => setQuery("")}><X className="w-4 h-4 text-foreground" strokeWidth={2.5} /></button>}
        </div>
      </div>

      {!hasQuery ? (
        <div>
          <div className="px-3.5 pt-3.5 pb-1.5">
            <div className="text-[10px] font-bold text-foreground uppercase tracking-[2px] font-display">Recent Searches</div>
          </div>
          {recentSearches.map((s) => (
            <button key={s} onClick={() => setQuery(s)} className="w-full flex items-center gap-2.5 px-3.5 py-3 border-b border-foreground/10 active:bg-secondary transition-colors text-left">
              <Clock className="w-[15px] h-[15px] text-muted2 shrink-0" strokeWidth={2} />
              <span className="text-[13px] text-foreground flex-1 font-body">{s}</span>
              <span className="text-xs text-muted2 font-bold">✕</span>
            </button>
          ))}
          <div className="px-3.5 pt-4 pb-1.5">
            <div className="text-[10px] font-bold text-foreground uppercase tracking-[2px] font-display">Trending Searches 🔥</div>
          </div>
          <div className="flex flex-wrap gap-2 px-3.5 pb-3.5">
            {trendingTags.map((t) => (
              <button key={t} onClick={() => setQuery(t)} className="bg-card border-[2.5px] border-foreground rounded-full px-3.5 py-1.5 text-xs font-bold active:bg-foreground active:text-primary-foreground transition-all text-foreground font-display tracking-wider uppercase">{t}</button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-2 overflow-x-auto px-3.5 py-3 border-b-[2.5px] border-foreground scrollbar-hide">
            {["Relevance ▾", "Price ▾", "Rating ▾", "Brand ▾", "Discount ▾"].map((f, i) => (
              <button key={f} className={`shrink-0 border-[2.5px] rounded-full px-3.5 py-1.5 text-[10px] font-bold transition-all font-display tracking-wider uppercase ${i === 0 ? "bg-foreground border-foreground text-primary-foreground" : "border-foreground bg-card text-foreground active:bg-foreground active:text-primary-foreground"}`}>{f}</button>
            ))}
          </div>
          <div className="px-3.5 pt-2.5 pb-1 text-xs text-muted-foreground font-body">Showing results for "{query}"</div>
          <div className="grid grid-cols-2 gap-3 px-3.5 mt-2">
            {searchResults.map((p, i) => (
              <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-xl p-3 border-[2.5px] border-foreground active:scale-[0.97] transition-transform text-left">
                <div className="w-full h-[128px] rounded-lg flex items-center justify-center text-[58px] mb-2.5 relative border-[2px] border-foreground bg-secondary">
                  <span className="absolute top-1.5 left-1.5 bg-foreground text-primary-foreground text-[9px] font-bold rounded px-1.5 py-0.5 font-display">-{p.disc}</span>
                  <span className="absolute top-2 right-2 w-7 h-7 bg-card border-[2px] border-foreground rounded-full flex items-center justify-center text-sm">♡</span>
                  {p.emoji}
                </div>
                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-[1.5px] font-display">{p.brand}</div>
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
      )}
    </div>
  );
};

export default SearchScreen;
