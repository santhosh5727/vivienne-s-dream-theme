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
      <div className="bg-foreground px-4 pt-4 pb-4 border-b-[2.5px] border-foreground">
        <h2 className="font-display text-[22px] font-bold text-primary-foreground mb-0.5 uppercase tracking-wider">My Cart 🛒</h2>
        <p className="text-xs text-primary-foreground/60 font-body">3 items in your bag</p>
        <span className="inline-flex items-center gap-1.5 bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg px-2.5 py-1 text-[11px] font-bold text-primary-foreground mt-2 font-display tracking-wider">✨ ₹1,58,656 SAVED</span>
      </div>

      <div className="mt-3.5 md:grid md:grid-cols-[1fr_360px] md:gap-4 md:px-3.5">
        <div className="bg-secondary rounded-xl mx-3.5 mb-2.5 p-3 flex items-center gap-2.5 border-[2.5px] border-foreground">
          <Truck className="w-5 h-5 text-foreground shrink-0" strokeWidth={2.5} />
          <span className="text-[12.5px] font-bold text-foreground font-display tracking-wider uppercase">🎉 FREE delivery on this order</span>
        </div>

        {initialItems.map((item, i) => (
          <div key={i} className="bg-card rounded-xl mx-3.5 mb-2.5 p-3.5 flex gap-3 border-[2.5px] border-foreground">
            <div className="w-[78px] h-[78px] bg-secondary rounded-xl flex items-center justify-center text-4xl shrink-0 border-[2px] border-foreground">{item.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium leading-snug line-clamp-2 text-foreground mb-0.5">{item.name}</div>
              <div className="text-[9px] text-muted-foreground mb-2 tracking-[1.5px] uppercase font-bold font-display">{item.brand}</div>
              <div className="text-base font-bold font-display text-foreground mb-2">{item.price} <span className="text-[11px] text-muted2 font-normal line-through">{item.old}</span></div>
              <div className="flex items-center gap-2.5">
                <button onClick={() => updateQty(i, -1)} className="w-[30px] h-[30px] rounded-lg border-[2.5px] border-foreground bg-card flex items-center justify-center text-base font-bold active:bg-foreground active:text-primary-foreground transition-colors">−</button>
                <span className="text-sm font-bold font-display min-w-[20px] text-center">{quantities[i]}</span>
                <button onClick={() => updateQty(i, 1)} className="w-[30px] h-[30px] rounded-lg border-[2.5px] border-foreground bg-card flex items-center justify-center text-base font-bold active:bg-foreground active:text-primary-foreground transition-colors">+</button>
                <button onClick={() => showToast("🗑️ Item removed")} className="ml-auto text-[10px] text-foreground font-bold font-display tracking-wider uppercase">Remove</button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-card rounded-xl mx-3.5 mb-2.5 p-3.5 border-[2.5px] border-foreground">
          <div className="text-[13px] font-bold mb-2.5 font-display tracking-wider uppercase">🏷️ Apply Coupon</div>
          <div className="flex gap-2">
            <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter coupon code" className="flex-1 border-[2.5px] border-foreground rounded-xl px-3 py-2.5 text-[13px] bg-card outline-none focus:bg-secondary transition-colors text-foreground font-body uppercase tracking-wider" />
            <button onClick={applyCoupon} className="bg-foreground text-primary-foreground rounded-xl px-4 py-2.5 text-[13px] font-bold whitespace-nowrap active:scale-[0.97] transition-transform font-display tracking-wider uppercase">Apply</button>
          </div>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            {["BAZAAR50", "HDFC10", "FIRST100"].map((c) => (
              <button key={c} onClick={() => setCouponCode(c)} className="bg-card border-[2px] border-foreground rounded-full px-2.5 py-1 text-[10px] font-bold active:bg-foreground active:text-primary-foreground transition-all font-display tracking-wider uppercase">{c}</button>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl mx-3.5 mb-2.5 p-4 border-[2.5px] border-foreground">
          <h3 className="font-display text-sm font-bold mb-3.5 pb-3 border-b-[2px] border-foreground text-foreground uppercase tracking-wider">Price Details (3 items)</h3>
          {[["Total MRP", "₹1,88,884"], ["Discount on MRP", "−₹1,58,656"], ["Coupon Discount", `−₹${couponDiscount}`], ["Delivery Charges", "FREE 🎉"], ["Platform Fee", "+₹3"]].map(([label, val]) => (
            <div key={label} className="flex items-center justify-between mb-2.5">
              <span className="text-[13px] text-muted-foreground">{label}</span>
              <span className="text-[13px] font-semibold text-foreground">{val}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-3 border-t-[2.5px] border-foreground mt-1">
            <span className="text-[15px] font-bold font-display uppercase tracking-wider">Total</span>
            <span className="text-xl font-extrabold font-display text-foreground">₹{total.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-20" />
      </div>

      <div className="sticky bottom-[60px] bg-card border-t-[2.5px] border-foreground p-3 z-40">
        <button onClick={() => showToast("🎊 Order placed successfully!")} className="w-full bg-foreground text-primary-foreground rounded-xl py-4 text-[15px] font-bold text-center flex items-center justify-center gap-2 active:scale-[0.98] transition-transform font-display tracking-wider uppercase">
          Place Order · ₹{total.toLocaleString()}
        </button>
        <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted-foreground font-body">
          <Shield className="w-[13px] h-[13px] text-foreground" strokeWidth={2.5} />
          Safe & Secure Payments · 100% Genuine Products
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
