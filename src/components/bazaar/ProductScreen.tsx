import { useState } from "react";
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react";

interface ProductScreenProps {
  onNavigate: (screen: string) => void;
  showToast: (msg: string) => void;
  onAddToCart: () => void;
}

const ProductScreen = ({ onNavigate, showToast, onAddToCart }: ProductScreenProps) => {
  const [selectedSize, setSelectedSize] = useState("256GB");
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = ["#000000", "#888888", "#444444", "#CCCCCC"];
  const sizes = ["256GB", "512GB", "1TB"];

  return (
    <div className="animate-screen-in pb-[75px]">
      <div className="bg-card px-4 py-3 flex items-center justify-between border-b-[2.5px] border-foreground sticky top-0 z-50">
        <button onClick={() => onNavigate("home")} className="w-[38px] h-[38px] rounded-xl bg-card flex items-center justify-center border-[2.5px] border-foreground active:bg-foreground active:text-primary-foreground transition-colors">
          <ArrowLeft className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </button>
        <div className="flex gap-2">
          {[{ icon: Heart, action: () => showToast("❤️ Added to Wishlist") }, { icon: Share2, action: () => showToast("🔗 Link copied!") }, { icon: ShoppingCart, action: () => onNavigate("cart") }].map(({ icon: Icon, action }, i) => (
            <button key={i} onClick={action} className="w-[38px] h-[38px] rounded-xl bg-card flex items-center justify-center border-[2.5px] border-foreground active:bg-foreground active:text-primary-foreground transition-colors">
              <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card p-6 flex items-center justify-center h-[268px] md:h-[380px] lg:h-[460px] text-[120px] md:text-[160px] border-b-[2.5px] border-foreground">📱</div>
      <div className="flex justify-center gap-1.5 py-3 bg-card border-b-[2.5px] border-foreground">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-1.5 rounded-full ${i === 0 ? "w-[18px] bg-foreground" : "w-1.5 bg-foreground/20"}`} />
        ))}
      </div>

      <div className="bg-card p-4 mt-2 border-y-[2.5px] border-foreground">
        <span className="text-[10px] font-bold uppercase tracking-[2px] font-display">SAMSUNG</span>
        <h1 className="font-display text-[17px] font-bold leading-snug mb-2.5 text-foreground uppercase tracking-wider mt-1">Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB, Titanium Black)</h1>
        <div className="flex items-center gap-2 mb-3.5">
          <span className="bg-foreground text-primary-foreground text-xs font-bold rounded-lg px-2 py-1 flex items-center gap-1 font-display">★ 4.5</span>
          <span className="text-xs text-muted-foreground">2,341 Ratings · 812 Reviews</span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[28px] font-extrabold font-display text-foreground">₹49,999</span>
          <span className="text-sm text-muted2 line-through">₹1,39,999</span>
          <span className="text-sm text-foreground font-bold">64% off</span>
        </div>
        <p className="text-[11px] text-muted-foreground mb-2.5">Inclusive of all taxes</p>
        <div className="bg-secondary rounded-xl p-3 border-[2px] border-foreground">
          {["🏷️ Bank Offer: 10% off on HDFC Bank Cards", "🔄 No Cost EMI from ₹4,167/month", "📦 Free Delivery by Tomorrow", "🔁 7 Days Easy Return Policy"].map((o, i) => (
            <div key={i} className="text-[11.5px] font-medium text-foreground leading-relaxed mb-1 last:mb-0">{o}</div>
          ))}
        </div>
      </div>

      <div className="bg-card p-4 mt-2 border-y-[2.5px] border-foreground">
        <h3 className="font-display text-sm font-bold mb-3 text-foreground uppercase tracking-wider">Select Color</h3>
        <div className="flex gap-2.5 mb-4">
          {colors.map((c, i) => (
            <button key={i} onClick={() => setSelectedColor(i)} className={`w-8 h-8 rounded-full border-[3px] transition-all ${selectedColor === i ? "border-foreground outline outline-2 outline-offset-2 outline-foreground" : "border-foreground/30"}`} style={{ background: c }} />
          ))}
        </div>
        <h3 className="font-display text-sm font-bold mb-3 text-foreground uppercase tracking-wider">Select Storage</h3>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((s) => (
            <button key={s} onClick={() => setSelectedSize(s)} className={`min-w-[48px] h-11 rounded-xl border-[2.5px] px-3 text-xs font-bold transition-all font-display tracking-wider ${selectedSize === s ? "border-foreground bg-foreground text-primary-foreground" : "border-foreground text-foreground"}`}>{s}</button>
          ))}
        </div>
      </div>

      <div className="bg-card p-4 mt-2 border-y-[2.5px] border-foreground">
        <h3 className="font-display text-sm font-bold mb-3 text-foreground uppercase tracking-wider">Key Specifications</h3>
        {[["Display", "6.8\" QHD+ Dynamic AMOLED 2X 120Hz"], ["Processor", "Snapdragon 8 Gen 3"], ["RAM", "12GB LPDDR5X"], ["Camera", "200MP + 12MP + 10MP + 50MP"], ["Battery", "5000 mAh · 45W Fast Charging"]].map(([k, v]) => (
          <div key={k} className="flex py-2 border-b border-foreground/10 last:border-0">
            <span className="w-[120px] text-xs text-muted-foreground shrink-0 font-medium">{k}</span>
            <span className="text-xs font-medium text-foreground">{v}</span>
          </div>
        ))}
      </div>

      <div className="bg-card p-4 mt-2 mb-20 border-y-[2.5px] border-foreground">
        <h3 className="font-display text-sm font-bold mb-3 text-foreground uppercase tracking-wider">Customer Reviews</h3>
        {[{ name: "Arjun Sharma", rating: 5, text: "Absolutely stunning phone! The camera is unreal, S-Pen integration is seamless.", date: "March 28, 2025" }, { name: "Priya Menon", rating: 4, text: "Great phone overall. Battery life is excellent, display is gorgeous.", date: "March 15, 2025" }].map((r, i) => (
          <div key={i} className="bg-secondary rounded-xl p-3.5 mb-2.5 border-[2px] border-foreground">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-foreground font-display uppercase tracking-wider">{r.name}</span>
              <span className="bg-foreground text-primary-foreground text-[10.5px] font-bold rounded px-1.5 py-0.5 font-display">★ {r.rating}</span>
            </div>
            <p className="text-xs text-foreground leading-relaxed">{r.text}</p>
            <p className="text-[10px] text-muted2 mt-1.5">{r.date} · Verified Purchase</p>
          </div>
        ))}
      </div>

      <div className="sticky bottom-[60px] bg-card border-t-[2.5px] border-foreground p-3 flex gap-2.5 z-40">
        <button onClick={onAddToCart} className="flex-1 bg-foreground text-primary-foreground rounded-xl py-3.5 text-[13px] font-bold text-center active:scale-[0.97] transition-transform font-display tracking-wider uppercase">🛒 Add to Cart</button>
        <button onClick={() => showToast("🎉 Redirecting to checkout!")} className="flex-1 bg-card text-foreground border-[2.5px] border-foreground rounded-xl py-3.5 text-[13px] font-bold text-center active:scale-[0.97] active:bg-foreground active:text-primary-foreground transition-all font-display tracking-wider uppercase">⚡ Buy Now</button>
      </div>
    </div>
  );
};

export default ProductScreen;
