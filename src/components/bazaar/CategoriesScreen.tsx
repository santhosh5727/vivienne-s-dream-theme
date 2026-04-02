import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const catData: Record<string, { emoji: string; subs: string[] }> = {
  Electronics: { emoji: "📱", subs: ["📱 Smartphones", "💻 Laptops", "🎧 Audio", "📷 Cameras", "🖥️ Monitors", "⌚ Smartwatch", "🎮 Gaming", "🔌 Accessories", "🖨️ Printers"] },
  Fashion: { emoji: "👗", subs: ["👗 Women", "👔 Men", "👶 Kids", "👟 Footwear", "👜 Bags", "💍 Jewellery", "🕶️ Sunglasses", "🧥 Winter", "🩲 Innerwear"] },
  Home: { emoji: "🏠", subs: ["🛋️ Furniture", "🍳 Cookware", "🛏️ Bedding", "🚿 Bathroom", "💡 Lighting", "🌿 Plants", "🎨 Decor", "🧹 Cleaning", "❄️ Appliances"] },
  Beauty: { emoji: "💄", subs: ["💄 Makeup", "🧴 Skincare", "💇 Haircare", "🧴 Body Care", "🌸 Fragrance", "💅 Nail Care", "🪒 Grooming", "🌿 Organic", "💊 Supplements"] },
  Sports: { emoji: "🏃", subs: ["🏃 Running", "🏋️ Gym", "🧘 Yoga", "🏊 Swimming", "⚽ Football", "🎾 Tennis", "🏏 Cricket", "🚴 Cycling", "🥊 Boxing"] },
  Grocery: { emoji: "🍎", subs: ["🍎 Fruits", "🥦 Vegetables", "🥛 Dairy", "🍞 Bakery", "🌾 Atta & Rice", "🫙 Snacks", "☕ Beverages", "🍯 Health", "🧂 Spices"] },
};

const sidebarItems = [
  { emoji: "📱", label: "Electronics", key: "Electronics" },
  { emoji: "👗", label: "Fashion", key: "Fashion" },
  { emoji: "🏠", label: "Home", key: "Home" },
  { emoji: "💄", label: "Beauty", key: "Beauty" },
  { emoji: "🏃", label: "Sports", key: "Sports" },
  { emoji: "🍎", label: "Grocery", key: "Grocery" },
];

interface CategoriesScreenProps {
  onNavigate: (screen: string) => void;
}

const CategoriesScreen = ({ onNavigate }: CategoriesScreenProps) => {
  const [activeCat, setActiveCat] = useState("Electronics");
  const cat = catData[activeCat];

  return (
    <div className="animate-screen-in pb-[75px]">
      <div className="bg-card px-4 py-3.5 flex items-center gap-3 border-b-[2.5px] border-foreground sticky top-0 z-50">
        <button onClick={() => onNavigate("home")} className="w-[38px] h-[38px] rounded-xl bg-card flex items-center justify-center border-[2.5px] border-foreground active:bg-foreground active:text-primary-foreground transition-colors">
          <ArrowLeft className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </button>
        <span className="font-display text-[17px] font-bold tracking-wider uppercase">All Categories</span>
      </div>
      <div className="flex h-[calc(100vh-130px)]">
        <div className="w-[88px] bg-card border-r-[2.5px] border-foreground overflow-y-auto shrink-0 scrollbar-hide">
          {sidebarItems.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveCat(s.key)}
              className={`w-full py-3.5 px-2 text-center border-l-[3px] transition-all ${
                activeCat === s.key ? "border-l-foreground bg-secondary" : "border-l-transparent"
              }`}
            >
              <div className="text-[22px] mb-1">{s.emoji}</div>
              <div className={`text-[8px] font-bold leading-tight tracking-[1px] uppercase font-display ${activeCat === s.key ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</div>
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-3.5 scrollbar-hide">
          <div className="rounded-xl p-4 mb-4 relative overflow-hidden border-[2.5px] border-foreground bg-foreground">
            <h3 className="font-display text-[22px] text-primary-foreground font-extrabold tracking-wider uppercase">{activeCat} Sale</h3>
            <p className="text-[11px] text-primary-foreground/70 mt-0.5 font-body">Best deals today</p>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[44px] opacity-40">{cat.emoji}</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {cat.subs.map((s, i) => {
              const emoji = s.split(" ")[0];
              const label = s.split(" ").slice(1).join(" ");
              return (
                <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-xl p-3 text-center border-[2.5px] border-foreground active:scale-[0.94] active:bg-secondary transition-all">
                  <div className="text-[26px] mb-1.5">{emoji}</div>
                  <div className="text-[9px] font-bold leading-tight text-foreground tracking-wider uppercase font-display">{label}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesScreen;
