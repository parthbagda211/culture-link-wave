import { ChevronRight, Bell, Lock, Globe, Palette, HelpCircle, LogOut, Shield, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: Bell, label: "Notifications", desc: "Push, email & sounds", color: "bg-accent/10 text-accent" },
      { icon: Lock, label: "Privacy", desc: "Profile visibility & blocking", color: "bg-primary/10 text-primary" },
      { icon: Shield, label: "Security", desc: "Password & 2FA", color: "bg-online/10 text-online" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Globe, label: "Language", desc: "English (US)", color: "bg-primary/10 text-primary" },
      { icon: Palette, label: "Appearance", desc: "Theme & display", color: "bg-accent/10 text-accent" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help Center", desc: "FAQ & contact support", color: "bg-away/10 text-away" },
      { icon: Info, label: "About Globzy", desc: "v1.0.0", color: "bg-muted text-muted-foreground" },
    ],
  },
];

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border/50 glass px-4 pb-3 pt-5">
        <h1 className="text-xl font-extrabold text-foreground">Settings</h1>
      </div>

      {/* Profile card */}
      <div className="px-4 pt-4">
        <div
          onClick={() => navigate("/profile")}
          className="flex cursor-pointer items-center gap-3.5 rounded-2xl bg-card p-4 shadow-card transition-all active:scale-[0.98]"
        >
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="h-16 w-16 rounded-2xl object-cover"
              width={64}
              height={64}
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-card bg-online" />
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-bold text-foreground">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">🇺🇸 United States • Online</p>
            <p className="mt-0.5 text-[11px] text-primary font-semibold">View profile →</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Settings sections */}
      {settingsSections.map((section) => (
        <div key={section.title} className="mt-5 px-4">
          <p className="mb-2 px-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{section.title}</p>
          <div className="divide-y divide-border/50 rounded-2xl bg-card shadow-card">
            {section.items.map((item) => (
              <div
                key={item.label}
                className="flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-all active:bg-muted/30"
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Logout */}
      <div className="mt-6 px-4">
        <button
          onClick={() => navigate("/")}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-destructive py-4 text-[14px] font-bold text-white shadow-card transition-all active:opacity-90 active:scale-[0.98]"
        >
          <LogOut className="h-[18px] w-[18px]" />
          Log Out
        </button>
      </div>

      <p className="mt-5 pb-4 text-center text-[10px] text-muted-foreground/50">Made with ❤️ by Globzy Team</p>

      <BottomNav />
    </div>
  );
};

export default SettingsPage;
