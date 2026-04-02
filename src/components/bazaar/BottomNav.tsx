import { Home, Grid3X3, ShoppingCart, Search, User } from "lucide-react";

type Screen = "home" | "categories" | "product" | "cart" | "search" | "profile";

const navItems: { id: Screen; label: string; icon: typeof Home }[] = [
  { id: "home", label: "HOME", icon: Home },
  { id: "categories", label: "CATEGORIES", icon: Grid3X3 },
  { id: "search", label: "SEARCH", icon: Search },
  { id: "cart", label: "CART", icon: ShoppingCart },
  { id: "profile", label: "PROFILE", icon: User },
];

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav = ({ active, onNavigate }: BottomNavProps) => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] md:max-w-[768px] lg:max-w-[1200px] bg-card border-t-[2.5px] border-foreground flex z-[100] pb-3.5 pt-2 md:pb-2 md:pt-1.5">
    {navItems.map((item) => {
      const isActive = active === item.id || (active === "product" && item.id === "home");
      const Icon = item.icon;
      return (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex-1 flex flex-col items-center gap-1 py-1 transition-opacity active:scale-90 ${
            isActive ? "opacity-100" : "opacity-30"
          }`}
        >
          <Icon className="w-[22px] h-[22px]" strokeWidth={isActive ? 2.5 : 1.8} />
          <span className="text-[9px] font-bold tracking-[1.5px] font-display uppercase">
            {item.label}
          </span>
        </button>
      );
    })}
  </div>
);

export default BottomNav;
