import { useNavigate } from "react-router-dom";
import { recentChats } from "@/data/mockUsers";
import BottomNav from "@/components/BottomNav";

const Messages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 border-b border-border bg-card/95 px-4 pb-3 pt-4 backdrop-blur-md">
        <h1 className="text-xl font-bold text-foreground">Messages</h1>
      </div>

      <div className="divide-y divide-border">
        {recentChats.map((chat, i) => (
          <div
            key={chat.user.id}
            onClick={() => navigate(`/chat/${chat.user.id}`)}
            className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors active:bg-muted/50"
            style={{ animation: `slide-in-right 0.3s ease-out ${i * 0.05}s both` }}
          >
            <div className="relative">
              <img
                src={chat.user.avatar}
                alt={chat.user.name}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
                width={48}
                height={48}
              />
              {chat.user.status === "online" && (
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-online" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{chat.user.name}</span>
                <span className="text-[10px] text-muted-foreground">{chat.timestamp}</span>
              </div>
              <p className="truncate text-xs text-muted-foreground">{chat.lastMessage}</p>
            </div>

            {chat.unread > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full gradient-primary px-1.5 text-[10px] font-bold text-primary-foreground">
                {chat.unread}
              </span>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Messages;
