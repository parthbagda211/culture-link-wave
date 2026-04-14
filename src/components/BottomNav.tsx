import { Home, MessageCircle, User, Settings } from "lucide-react";
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 glass safe-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || location.pathname.startsWith(item.to + "/");
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to !== "/messages"}
              className="relative flex flex-col items-center gap-0.5 rounded-xl px-5 py-2 transition-all duration-200"
              activeClassName=""
            >
              {isActive && (
                <span className="absolute inset-0 rounded-xl gradient-primary opacity-10" />
              )}
              <item.icon
                className={`relative h-5 w-5 transition-all duration-200 ${
                  isActive ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              />
              <span
                className={`relative text-[10px] font-semibold transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full gradient-primary" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
