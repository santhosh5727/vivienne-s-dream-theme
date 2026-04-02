import { Package, Heart, Wallet, MapPin, CreditCard, HelpCircle, FileText, LogOut, ChevronRight, Star, Bell } from "lucide-react";

interface ProfileScreenProps {
  showToast: (msg: string) => void;
}

const sections = [
  {
    title: "MY ACTIVITY",
    items: [
      { icon: "📦", label: "My Orders", right: "12 orders", bg: "bg-sky-soft" },
      { icon: "❤️", label: "Wishlist", right: "28 items", bg: "bg-rose-soft" },
      { icon: "⭐", label: "My Reviews", right: "5 reviews", bg: "bg-marigold-soft" },
      { icon: "🏷️", label: "My Coupons", right: "3 active", bg: "bg-emerald-soft" },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    items: [
      { icon: "📍", label: "Saved Addresses", right: "2 saved", bg: "bg-plum-soft" },
      { icon: "💳", label: "Payment Methods", right: "", bg: "bg-sky-soft" },
      { icon: "🔔", label: "Notifications", right: "On", bg: "bg-saffron-soft" },
    ],
  },
  {
    title: "HELP & MORE",
    items: [
      { icon: "❓", label: "Help & Support", right: "", bg: "bg-emerald-soft" },
      { icon: "📜", label: "Terms & Policies", right: "", bg: "bg-muted" },
      { icon: "🚪", label: "Logout", right: "", bg: "bg-rose-soft" },
    ],
  },
];

const ProfileScreen = ({ showToast }: ProfileScreenProps) => (
  <div className="animate-screen-in pb-[75px]">
    {/* Hero */}
    <div className="bg-ink2 px-5 pt-7 pb-11 relative overflow-hidden">
      <div className="absolute w-60 h-60 rounded-full bg-saffron/[0.12] -right-[60px] -top-20" />
      <div className="absolute w-40 h-40 rounded-full bg-plum/[0.12] -left-10 -bottom-[60px]" />
      <div className="w-[72px] h-[72px] rounded-[22px] bg-gradient-to-br from-saffron to-marigold border-[3px] border-primary-foreground/20 flex items-center justify-center font-display text-2xl font-extrabold text-primary-foreground mb-3 relative z-10 shadow-[0_4px_16px_rgba(244,96,10,0.35)]">
        AK
      </div>
      <div className="font-display text-[22px] font-extrabold text-primary-foreground mb-0.5 relative z-10">Arjun Kumar</div>
      <div className="text-xs text-primary-foreground/60 relative z-10">arjun.k@gmail.com · +91 98765 43210</div>
    </div>

    {/* Stats */}
    <div className="flex bg-card mx-3.5 rounded-lg shadow-lg -translate-y-[26px] border border-border">
      {[{ num: "12", label: "Orders", color: "text-sky" }, { num: "28", label: "Wishlist", color: "text-rose" }, { num: "₹240", label: "Rewards", color: "text-emerald" }].map((s, i) => (
        <button key={s.label} onClick={() => showToast(`Viewing ${s.label.toLowerCase()}...`)} className={`flex-1 text-center py-4 px-2 cursor-pointer active:bg-sand transition-colors ${i < 2 ? "border-r border-border" : ""}`}>
          <div className={`font-display text-xl font-extrabold mb-0.5 ${s.color}`}>{s.num}</div>
          <div className="text-[10px] font-medium text-muted-foreground">{s.label}</div>
        </button>
      ))}
    </div>

    {/* Sections */}
    <div className="-mt-2">
      {sections.map((section) => (
        <div key={section.title} className="bg-card rounded-lg mx-3.5 mb-3 shadow-sm border border-border overflow-hidden">
          <div className="text-[10.5px] font-bold text-muted-foreground px-4 pt-3 pb-1.5 uppercase tracking-[1px]">{section.title}</div>
          {section.items.map((item) => (
            <button key={item.label} onClick={() => showToast(`Opening ${item.label}...`)} className="w-full flex items-center gap-3 px-4 py-3.5 border-t border-border active:bg-sand transition-colors text-left">
              <div className={`w-[38px] h-[38px] rounded-xl flex items-center justify-center text-lg shrink-0 ${item.bg}`}>{item.icon}</div>
              <span className="flex-1 text-[13px] font-medium text-foreground">{item.label}</span>
              {item.right && <span className="text-xs text-muted-foreground font-medium">{item.right}</span>}
              <ChevronRight className="w-4 h-4 text-muted2" strokeWidth={1.8} />
            </button>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ProfileScreen;
