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

  const colors = ["#1A1A2E", "#C0B8A8", "#4A6741", "#6B3A4D"];
  const sizes = ["256GB", "512GB", "1TB"];

  return (
    <div className="animate-screen-in pb-[75px]">
      {/* Topbar */}
      <div className="bg-card px-4 py-3 flex items-center justify-between border-b border-border sticky top-0 z-50">
        <button onClick={() => onNavigate("home")} className="w-[38px] h-[38px] rounded-xl bg-sand flex items-center justify-center border border-border active:bg-border">
          <ArrowLeft className="w-[18px] h-[18px]" strokeWidth={1.8} />
        </button>
        <div className="flex gap-2">
          <button onClick={() => showToast("❤️ Added to Wishlist")} className="w-[38px] h-[38px] rounded-xl bg-sand flex items-center justify-center border border-border active:bg-border">
            <Heart className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </button>
          <button onClick={() => showToast("🔗 Link copied!")} className="w-[38px] h-[38px] rounded-xl bg-sand flex items-center justify-center border border-border active:bg-border">
            <Share2 className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </button>
          <button onClick={() => onNavigate("cart")} className="w-[38px] h-[38px] rounded-xl bg-sand flex items-center justify-center border border-border active:bg-border">
            <ShoppingCart className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="bg-card p-6 flex items-center justify-center h-[268px] text-[120px] border-b border-border">📱</div>
      <div className="flex justify-center gap-1.5 py-3 bg-card border-b border-border">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-1.5 rounded-full ${i === 0 ? "w-[18px] bg-sky" : "w-1.5 bg-border"}`} />
        ))}
      </div>

      {/* Info */}
      <div className="bg-card p-4 mt-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-bold text-sky uppercase tracking-[1.5px]">SAMSUNG</span>
        </div>
        <h1 className="font-display text-[17px] font-bold leading-snug mb-2.5 text-foreground">Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB, Titanium Black)</h1>
        <div className="flex items-center gap-2 mb-3.5">
          <span className="bg-emerald text-primary-foreground text-xs font-bold rounded-[7px] px-2 py-1 flex items-center gap-1">★ 4.5</span>
          <span className="text-xs text-muted-foreground">2,341 Ratings · 812 Reviews</span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[28px] font-extrabold font-display text-foreground">₹49,999</span>
          <span className="text-sm text-muted2 line-through">₹1,39,999</span>
          <span className="text-sm text-emerald font-bold">64% off</span>
        </div>
        <p className="text-[11px] text-muted-foreground mb-2.5">Inclusive of all taxes</p>
        <div className="bg-emerald-soft rounded-xl p-3 border border-emerald/[0.15]">
          {["🏷️ Bank Offer: 10% off on HDFC Bank Cards", "🔄 No Cost EMI from ₹4,167/month", "📦 Free Delivery by Tomorrow", "🔁 7 Days Easy Return Policy"].map((o, i) => (
            <div key={i} className="text-[11.5px] font-medium text-teal leading-relaxed mb-1 last:mb-0">{o}</div>
          ))}
        </div>
      </div>

      {/* Options */}
      <div className="h-2 bg-sand" />
      <div className="bg-card p-4">
        <h3 className="font-display text-sm font-bold mb-3 text-foreground">Select Color</h3>
        <div className="flex gap-2.5 mb-4">
          {colors.map((c, i) => (
            <button key={i} onClick={() => setSelectedColor(i)} className={`w-8 h-8 rounded-full border-[3px] border-transparent outline-2 outline-offset-2 transition-all ${selectedColor === i ? "outline-sky" : "outline-transparent"}`} style={{ background: c }} />
          ))}
        </div>
        <h3 className="font-display text-sm font-bold mb-3 text-foreground">Select Storage</h3>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((s) => (
            <button key={s} onClick={() => setSelectedSize(s)} className={`min-w-[48px] h-11 rounded-[10px] border-[1.5px] px-3 text-xs font-semibold transition-all ${selectedSize === s ? "border-sky bg-sky-soft text-sky" : "border-border text-foreground"}`}>{s}</button>
          ))}
        </div>
      </div>

      {/* Specs */}
      <div className="h-2 bg-sand" />
      <div className="bg-card p-4">
        <h3 className="font-display text-sm font-bold mb-3 text-foreground">Key Specifications</h3>
        {[["Display", "6.8\" QHD+ Dynamic AMOLED 2X 120Hz"], ["Processor", "Snapdragon 8 Gen 3"], ["RAM", "12GB LPDDR5X"], ["Camera", "200MP + 12MP + 10MP + 50MP"], ["Battery", "5000 mAh · 45W Fast Charging"]].map(([k, v]) => (
          <div key={k} className="flex py-2 border-b border-sand last:border-0">
            <span className="w-[120px] text-xs text-muted-foreground shrink-0">{k}</span>
            <span className="text-xs font-medium text-foreground">{v}</span>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="h-2 bg-sand" />
      <div className="bg-card p-4 mb-20">
        <h3 className="font-display text-sm font-bold mb-3 text-foreground">Customer Reviews</h3>
        {[{ name: "Arjun Sharma", rating: 5, text: "Absolutely stunning phone! The camera is unreal, S-Pen integration is seamless.", date: "March 28, 2025" }, { name: "Priya Menon", rating: 4, text: "Great phone overall. Battery life is excellent, display is gorgeous.", date: "March 15, 2025" }].map((r, i) => (
          <div key={i} className="bg-sand rounded-xl p-3.5 mb-2.5 border border-border">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-foreground">{r.name}</span>
              <span className="bg-emerald text-primary-foreground text-[10.5px] font-bold rounded-[5px] px-1.5 py-0.5">★ {r.rating}</span>
            </div>
            <p className="text-xs text-foreground leading-relaxed">{r.text}</p>
            <p className="text-[10px] text-muted2 mt-1.5">{r.date} · Verified Purchase</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="sticky bottom-[60px] bg-card/95 backdrop-blur-lg p-3 border-t border-border flex gap-2.5 z-40">
        <button onClick={onAddToCart} className="flex-1 bg-saffron text-primary-foreground rounded-xl py-3.5 text-[13px] font-bold text-center active:scale-[0.97] shadow-[0_4px_14px_rgba(244,96,10,0.3)] transition-transform">🛒 Add to Cart</button>
        <button onClick={() => showToast("🎉 Redirecting to checkout!")} className="flex-1 bg-ink text-primary-foreground rounded-xl py-3.5 text-[13px] font-bold text-center active:scale-[0.97] shadow-[0_4px_14px_rgba(15,15,20,0.2)] transition-transform">⚡ Buy Now</button>
      </div>
    </div>
  );
};

export default ProductScreen;
