import { Home, Grid3X3, ShoppingCart, Search, User } from "lucide-react";

type Screen = "home" | "categories" | "product" | "cart" | "search" | "profile";

const navItems: { id: Screen; label: string; icon: typeof Home; activeColor: string }[] = [
  { id: "home", label: "Home", icon: Home, activeColor: "text-sky" },
  { id: "categories", label: "Categories", icon: Grid3X3, activeColor: "text-saffron" },
  { id: "search", label: "Search", icon: Search, activeColor: "text-emerald" },
  { id: "cart", label: "Cart", icon: ShoppingCart, activeColor: "text-plum" },
  { id: "profile", label: "Profile", icon: User, activeColor: "text-rose" },
];

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav = ({ active, onNavigate }: BottomNavProps) => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card/92 backdrop-blur-xl border-t border-border flex z-[100] pb-3.5 pt-2 shadow-lg">
    {navItems.map((item) => {
      const isActive = active === item.id || (active === "product" && item.id === "home");
      const Icon = item.icon;
      return (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex-1 flex flex-col items-center gap-1 py-1 transition-opacity active:scale-90 ${
            isActive ? "opacity-100" : "opacity-[0.38]"
          }`}
        >
          <Icon className={`w-[22px] h-[22px] ${isActive ? item.activeColor : ""}`} strokeWidth={1.8} />
          <span className={`text-[10px] font-semibold tracking-wide font-body ${isActive ? item.activeColor : ""}`}>
            {item.label}
          </span>
        </button>
      );
    })}
  </div>
);

export default BottomNav;
