import { useState } from "react";
import BottomNav from "@/components/bazaar/BottomNav";
import HomeScreen from "@/components/bazaar/HomeScreen";
import CategoriesScreen from "@/components/bazaar/CategoriesScreen";
import ProductScreen from "@/components/bazaar/ProductScreen";
import CartScreen from "@/components/bazaar/CartScreen";
import SearchScreen from "@/components/bazaar/SearchScreen";
import ProfileScreen from "@/components/bazaar/ProfileScreen";
import Toast, { useToast } from "@/components/bazaar/Toast";

type Screen = "home" | "categories" | "product" | "cart" | "search" | "profile";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [cartCount, setCartCount] = useState(4);
  const { toast, showToast } = useToast();

  const navigate = (s: string) => {
    setScreen(s as Screen);
    window.scrollTo(0, 0);
  };

  const addToCart = () => {
    setCartCount((c) => c + 1);
    showToast(`🛒 Added to cart! ${cartCount + 1} items`);
  };

  return (
    <div className="grain-overlay max-w-[430px] mx-auto min-h-screen relative overflow-x-hidden bg-background">
      {screen === "home" && <HomeScreen onNavigate={navigate} showToast={showToast} cartCount={cartCount} />}
      {screen === "categories" && <CategoriesScreen onNavigate={navigate} />}
      {screen === "product" && <ProductScreen onNavigate={navigate} showToast={showToast} onAddToCart={addToCart} />}
      {screen === "cart" && <CartScreen showToast={showToast} />}
      {screen === "search" && <SearchScreen onNavigate={navigate} />}
      {screen === "profile" && <ProfileScreen showToast={showToast} />}
      <BottomNav active={screen} onNavigate={(s) => navigate(s)} />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default Index;
