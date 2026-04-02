import { useState } from "react";
import { Truck, Shield } from "lucide-react";

interface CartScreenProps {
  showToast: (msg: string) => void;
}

const initialItems = [
  { emoji: "📱", name: "Samsung Galaxy S24 Ultra 5G 256GB Titanium Black", brand: "Samsung · 256GB · Black", price: "₹49,999", old: "₹1,39,999" },
  { emoji: "🎧", name: "Sony WH-1000XM5 Wireless Noise Cancelling", brand: "Sony · Black", price: "₹17,990", old: "₹39,990" },
  { emoji: "👟", name: "Nike Air Max 270 Running Shoes Men UK8", brand: "Nike · UK 8 · Blue", price: "₹5,499", old: "₹8,895" },
];

const CartScreen = ({ showToast }: CartScreenProps) => {
  const [quantities, setQuantities] = useState([1, 1, 1]);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const updateQty = (idx: number, delta: number) => {
    setQuantities((q) => q.map((v, i) => i === idx ? Math.min(10, Math.max(1, v + delta)) : v));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "BAZAAR50") {
      setCouponDiscount(500);
      showToast("🎉 Coupon BAZAAR50 applied! ₹500 off");
    } else if (couponCode.toUpperCase() === "FIRST100") {
      setCouponDiscount(100);
      showToast("✅ Coupon FIRST100 applied! ₹100 off");
    } else {
      showToast("❌ Invalid coupon code");
    }
  };

  const total = 73491 - couponDiscount;

  return (
    <div className="animate-screen-in pb-[75px]">
      <div className="bg-ink2 px-4 pt-4 pb-4">
        <h2 className="font-display text-[22px] font-bold text-primary-foreground mb-0.5">My Cart 🛒</h2>
        <p className="text-xs text-primary-foreground/65">3 items in your bag</p>
        <span className="inline-flex items-center gap-1.5 bg-emerald/25 border border-emerald/40 rounded-[7px] px-2.5 py-1 text-[11px] font-semibold text-[#5DDEAA] mt-2">✨ ₹1,58,656 saved on this order</span>
      </div>

      <div className="mt-3.5">
        <div className="bg-emerald-soft rounded-lg mx-3.5 mb-2.5 p-3 flex items-center gap-2.5 border border-emerald/20">
          <Truck className="w-5 h-5 text-emerald shrink-0" strokeWidth={1.8} />
          <span className="text-[12.5px] font-semibold text-emerald">🎉 Yay! FREE delivery on this order</span>
        </div>

        {initialItems.map((item, i) => (
          <div key={i} className="bg-card rounded-lg mx-3.5 mb-2.5 p-3.5 shadow-sm flex gap-3 border border-border">
            <div className="w-[78px] h-[78px] bg-sand rounded-xl flex items-center justify-center text-4xl shrink-0 border border-border">{item.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium leading-snug line-clamp-2 text-foreground mb-0.5">{item.name}</div>
              <div className="text-[10px] text-muted-foreground mb-2 tracking-wider">{item.brand}</div>
              <div className="text-base font-bold font-display text-foreground mb-2">{item.price} <span className="text-[11px] text-muted2 font-normal line-through">{item.old}</span></div>
              <div className="flex items-center gap-2.5">
                <button onClick={() => updateQty(i, -1)} className="w-[30px] h-[30px] rounded-lg border-[1.5px] border-border bg-sand flex items-center justify-center text-base font-semibold active:bg-ink active:text-primary-foreground active:border-ink transition-colors">−</button>
                <span className="text-sm font-bold font-display min-w-[20px] text-center">{quantities[i]}</span>
                <button onClick={() => updateQty(i, 1)} className="w-[30px] h-[30px] rounded-lg border-[1.5px] border-border bg-sand flex items-center justify-center text-base font-semibold active:bg-ink active:text-primary-foreground active:border-ink transition-colors">+</button>
                <button onClick={() => showToast("🗑️ Item removed")} className="ml-auto text-[11px] text-rose font-semibold">Remove</button>
              </div>
            </div>
          </div>
        ))}

        {/* Coupon */}
        <div className="bg-card rounded-lg mx-3.5 mb-2.5 p-3.5 shadow-sm border border-border">
          <div className="text-[13px] font-bold mb-2.5 font-display">🏷️ Apply Coupon</div>
          <div className="flex gap-2">
            <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter coupon code" className="flex-1 border-[1.5px] border-border rounded-[10px] px-3 py-2.5 text-[13px] bg-sand outline-none focus:border-sky focus:bg-card transition-colors text-foreground" />
            <button onClick={applyCoupon} className="bg-sky text-primary-foreground rounded-[10px] px-4 py-2.5 text-[13px] font-bold whitespace-nowrap active:scale-[0.97] shadow-[0_3px_10px_rgba(19,86,212,0.3)] transition-transform">Apply</button>
          </div>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            {["BAZAAR50", "HDFC10", "FIRST100"].map((c) => (
              <button key={c} onClick={() => setCouponCode(c)} className="bg-card border-[1.5px] border-border rounded-full px-2.5 py-1 text-[10px] font-medium shadow-sm active:bg-sky active:text-primary-foreground active:border-sky transition-all">{c}</button>
            ))}
          </div>
        </div>

        {/* Price Details */}
        <div className="bg-card rounded-lg mx-3.5 mb-2.5 p-4 shadow-sm border border-border">
          <h3 className="font-display text-sm font-bold mb-3.5 pb-3 border-b border-border text-foreground">Price Details (3 items)</h3>
          {[["Total MRP", "₹1,88,884", ""], ["Discount on MRP", "−₹1,58,656", "text-emerald"], ["Coupon Discount", `−₹${couponDiscount}`, "text-emerald"], ["Delivery Charges", "FREE 🎉", "text-emerald"], ["Platform Fee", "+₹3", "text-rose"]].map(([label, val, color]) => (
            <div key={label} className="flex items-center justify-between mb-2.5">
              <span className="text-[13px] text-muted-foreground">{label}</span>
              <span className={`text-[13px] font-semibold ${color || "text-foreground"}`}>{val}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-3 border-t-[1.5px] border-border mt-1">
            <span className="text-[15px] font-semibold font-display">Total Amount</span>
            <span className="text-xl font-extrabold font-display text-foreground">₹{total.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-20" />
      </div>

      {/* Checkout */}
      <div className="sticky bottom-[60px] bg-card/95 backdrop-blur-lg p-3 border-t border-border z-40">
        <button onClick={() => showToast("🎊 Order placed successfully!")} className="w-full bg-saffron text-primary-foreground rounded-xl py-4 text-[15px] font-bold text-center flex items-center justify-center gap-2 active:scale-[0.98] shadow-[0_4px_18px_rgba(244,96,10,0.35)] transition-transform">
          Place Order · ₹{total.toLocaleString()}
        </button>
        <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted-foreground">
          <Shield className="w-[13px] h-[13px] text-emerald" strokeWidth={2} />
          Safe & Secure Payments · 100% Genuine Products
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
