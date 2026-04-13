import { Home, MessageCircle, User, Settings, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

const navItems = [
  { to: "/home", icon: Home, label: "Explore" },
  { to: "/messages", icon: MessageCircle, label: "Chats" },
  { to: "/profile", icon: User, label: "Profile" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 glass safe-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || location.pathname.startsWith(item.to + "/");
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to !== "/messages"}
              className="relative flex flex-col items-center gap-0.5 rounded-xl px-4 py-2 text-muted-foreground transition-all duration-200"
              activeClassName="text-primary"
            >
              {isActive && (
                <span className="absolute inset-0 rounded-xl bg-primary/8" />
              )}
              <item.icon className={`relative h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : ""}`} />
              <span className={`relative text-[10px] font-semibold ${isActive ? "text-primary" : ""}`}>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
