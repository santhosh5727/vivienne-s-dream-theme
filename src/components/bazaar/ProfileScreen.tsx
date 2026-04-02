import { ChevronRight } from "lucide-react";

interface ProfileScreenProps {
  showToast: (msg: string) => void;
}

const sections = [
  {
    title: "MY ACTIVITY",
    items: [
      { icon: "📦", label: "My Orders", right: "12 orders" },
      { icon: "❤️", label: "Wishlist", right: "28 items" },
      { icon: "⭐", label: "My Reviews", right: "5 reviews" },
      { icon: "🏷️", label: "My Coupons", right: "3 active" },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    items: [
      { icon: "📍", label: "Saved Addresses", right: "2 saved" },
      { icon: "💳", label: "Payment Methods", right: "" },
      { icon: "🔔", label: "Notifications", right: "On" },
    ],
  },
  {
    title: "HELP & MORE",
    items: [
      { icon: "❓", label: "Help & Support", right: "" },
      { icon: "📜", label: "Terms & Policies", right: "" },
      { icon: "🚪", label: "Logout", right: "" },
    ],
  },
];

const ProfileScreen = ({ showToast }: ProfileScreenProps) => (
  <div className="animate-screen-in pb-[75px]">
    <div className="bg-foreground px-5 pt-7 pb-11 relative overflow-hidden">
      <div className="w-[72px] h-[72px] rounded-2xl bg-primary-foreground border-[3px] border-primary-foreground/30 flex items-center justify-center font-display text-2xl font-extrabold text-foreground mb-3 relative z-10">
        AK
      </div>
      <div className="font-display text-[22px] font-extrabold text-primary-foreground mb-0.5 relative z-10 uppercase tracking-wider">Arjun Kumar</div>
      <div className="text-xs text-primary-foreground/50 relative z-10 font-body">arjun.k@gmail.com · +91 98765 43210</div>
    </div>

    <div className="flex bg-card mx-3.5 rounded-xl border-[2.5px] border-foreground -translate-y-[26px]">
      {[{ num: "12", label: "Orders" }, { num: "28", label: "Wishlist" }, { num: "₹240", label: "Rewards" }].map((s, i) => (
        <button key={s.label} onClick={() => showToast(`Viewing ${s.label.toLowerCase()}...`)} className={`flex-1 text-center py-4 px-2 cursor-pointer active:bg-secondary transition-colors ${i < 2 ? "border-r-[2.5px] border-foreground" : ""}`}>
          <div className="font-display text-xl font-extrabold mb-0.5 text-foreground">{s.num}</div>
          <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-[1.5px] font-display">{s.label}</div>
        </button>
      ))}
    </div>

    <div className="-mt-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:px-3.5">
      {sections.map((section) => (
        <div key={section.title} className="bg-card rounded-xl mx-3.5 mb-3 border-[2.5px] border-foreground overflow-hidden">
          <div className="text-[9px] font-bold text-muted-foreground px-4 pt-3 pb-1.5 uppercase tracking-[2px] font-display">{section.title}</div>
          {section.items.map((item) => (
            <button key={item.label} onClick={() => showToast(`Opening ${item.label}...`)} className="w-full flex items-center gap-3 px-4 py-3.5 border-t border-foreground/10 active:bg-secondary transition-colors text-left">
              <div className="w-[38px] h-[38px] rounded-xl flex items-center justify-center text-lg shrink-0 bg-secondary border-[2px] border-foreground">{item.icon}</div>
              <span className="flex-1 text-[13px] font-semibold text-foreground">{item.label}</span>
              {item.right && <span className="text-[11px] text-muted-foreground font-medium">{item.right}</span>}
              <ChevronRight className="w-4 h-4 text-foreground" strokeWidth={2.5} />
            </button>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ProfileScreen;
