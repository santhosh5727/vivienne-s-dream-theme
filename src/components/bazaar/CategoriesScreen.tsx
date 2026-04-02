import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const catData: Record<string, { color1: string; color2: string; emoji: string; subs: string[] }> = {
  Electronics: { color1: "#0A3498", color2: "#1356D4", emoji: "📱", subs: ["📱 Smartphones", "💻 Laptops", "🎧 Audio", "📷 Cameras", "🖥️ Monitors", "⌚ Smartwatch", "🎮 Gaming", "🔌 Accessories", "🖨️ Printers"] },
  Fashion: { color1: "#9C1A65", color2: "#D92672", emoji: "👗", subs: ["👗 Women", "👔 Men", "👶 Kids", "👟 Footwear", "👜 Bags", "💍 Jewellery", "🕶️ Sunglasses", "🧥 Winter Wear", "🩲 Innerwear"] },
  Home: { color1: "#006B52", color2: "#009B5E", emoji: "🏠", subs: ["🛋️ Furniture", "🍳 Cookware", "🛏️ Bedding", "🚿 Bathroom", "💡 Lighting", "🌿 Plants", "🎨 Decor", "🧹 Cleaning", "❄️ Appliances"] },
  Beauty: { color1: "#4B189A", color2: "#6B27CC", emoji: "💄", subs: ["💄 Makeup", "🧴 Skincare", "💇 Haircare", "🧴 Body Care", "🌸 Fragrance", "💅 Nail Care", "🪒 Grooming", "🌿 Organic", "💊 Supplements"] },
  Sports: { color1: "#C44700", color2: "#F4600A", emoji: "🏃", subs: ["🏃 Running", "🏋️ Gym", "🧘 Yoga", "🏊 Swimming", "⚽ Football", "🎾 Tennis", "🏏 Cricket", "🚴 Cycling", "🥊 Boxing"] },
  Grocery: { color1: "#006B52", color2: "#009B5E", emoji: "🍎", subs: ["🍎 Fruits", "🥦 Vegetables", "🥛 Dairy", "🍞 Bakery", "🌾 Atta & Rice", "🫙 Snacks", "☕ Beverages", "🍯 Health", "🧂 Spices"] },
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
      <div className="bg-card px-4 py-3.5 flex items-center gap-3 border-b border-border sticky top-0 z-50">
        <button onClick={() => onNavigate("home")} className="w-[38px] h-[38px] rounded-xl bg-sand flex items-center justify-center border border-border active:bg-border transition-colors">
          <ArrowLeft className="w-[18px] h-[18px]" strokeWidth={1.8} />
        </button>
        <span className="font-display text-[17px] font-bold">All Categories</span>
      </div>
      <div className="flex h-[calc(100vh-130px)]">
        <div className="w-[88px] bg-card border-r border-border overflow-y-auto shrink-0 scrollbar-hide">
          {sidebarItems.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveCat(s.key)}
              className={`w-full py-3.5 px-2 text-center border-l-[3px] transition-all ${
                activeCat === s.key ? "border-l-saffron bg-saffron-soft" : "border-l-transparent"
              }`}
            >
              <div className="text-[22px] mb-1">{s.emoji}</div>
              <div className={`text-[8.5px] font-semibold leading-tight ${activeCat === s.key ? "text-saffron" : "text-muted-foreground"}`}>{s.label}</div>
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-3.5 scrollbar-hide">
          <div className="rounded-lg p-4 mb-4 relative overflow-hidden shadow-sm" style={{ background: `linear-gradient(135deg, ${cat.color1}, ${cat.color2})` }}>
            <h3 className="font-display text-[22px] text-primary-foreground font-extrabold tracking-wider">{activeCat} Sale</h3>
            <p className="text-[11px] text-primary-foreground/80 mt-0.5">Best deals today</p>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[44px] opacity-80">{cat.emoji}</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {cat.subs.map((s, i) => {
              const emoji = s.split(" ")[0];
              const label = s.split(" ").slice(1).join(" ");
              return (
                <button key={i} onClick={() => onNavigate("product")} className="bg-card rounded-xl p-3 text-center shadow-sm border border-border active:scale-[0.94] transition-transform">
                  <div className="text-[26px] mb-1.5">{emoji}</div>
                  <div className="text-[10px] font-semibold leading-tight text-foreground">{label}</div>
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
