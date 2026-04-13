import { ChevronRight, Bell, Lock, Globe, Palette, HelpCircle, LogOut, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const settingsItems = [
  { icon: Bell, label: "Notifications", desc: "Manage push notifications" },
  { icon: Lock, label: "Privacy", desc: "Who can see your profile" },
  { icon: Globe, label: "Language", desc: "English" },
  { icon: Palette, label: "Appearance", desc: "Theme & display" },
  { icon: HelpCircle, label: "Help & Support", desc: "FAQ and contact us" },
];

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 border-b border-border bg-card/95 px-4 pb-3 pt-4 backdrop-blur-md">
        <h1 className="text-xl font-bold text-foreground">Settings</h1>
      </div>

      {/* Profile preview */}
      <div
        className="mx-4 mt-4 flex cursor-pointer items-center gap-3 rounded-xl bg-card p-4 shadow-card"
        onClick={() => navigate("/profile")}
      >
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Profile"
          className="h-14 w-14 rounded-full object-cover"
          width={56}
          height={56}
        />
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Alex Johnson</p>
          <p className="text-xs text-muted-foreground">View and edit profile</p>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Settings list */}
      <div className="mx-4 mt-4 divide-y divide-border rounded-xl bg-card shadow-card">
        {settingsItems.map((item) => (
          <div
            key={item.label}
            className="flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-colors active:bg-muted/50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-[11px] text-muted-foreground">{item.desc}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>

      <div className="mx-4 mt-4">
        <button
          onClick={() => navigate("/")}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-destructive/30 py-3 text-sm font-medium text-destructive transition-colors active:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>

      <p className="mt-6 text-center text-[11px] text-muted-foreground">Globzy v1.0.0</p>

      <BottomNav />
    </div>
  );
};

export default SettingsPage;
