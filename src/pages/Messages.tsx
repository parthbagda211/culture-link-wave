import { useNavigate } from "react-router-dom";
import { recentChats } from "@/data/mockUsers";
import BottomNav from "@/components/BottomNav";

const Messages = () => {
  const navigate = useNavigate();
  const filtered = recentChats;

  const totalUnread = recentChats.reduce((sum, c) => sum + c.unread, 0);
  const onlineChats = recentChats.filter((c) => c.user.status === "online");

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass border-b border-border/40 px-4 pb-3 pt-5">
        <h1 className="text-[20px] font-extrabold text-foreground">Chats</h1>
        {totalUnread > 0 && (
          <p className="text-[11px] font-medium text-muted-foreground">
            {totalUnread} unread message{totalUnread > 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Online now strip */}
      {onlineChats.length > 0 && (
        <div className="px-4 pt-4 pb-2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Online Now</p>
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {onlineChats.map((c) => (
              <button
                key={c.user.id}
                onClick={() => navigate(`/chat/${c.user.id}`)}
                className="flex flex-shrink-0 flex-col items-center gap-1.5 transition-transform active:scale-95"
              >
                <div className="relative">
                  <img
                    src={c.user.avatar}
                    alt={c.user.name}
                    className="h-14 w-14 rounded-2xl object-cover"
                    width={56}
                    height={56}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-[hsl(152,70%,45%)]" />
                </div>
                <span className="max-w-[56px] truncate text-[10px] font-semibold text-foreground">
                  {c.user.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="mx-4 my-2 h-px bg-border/50" />

      {/* Chat list */}
      <div className="space-y-0.5 px-2">
        {filtered.map((chat, i) => (
          <div
            key={chat.user.id}
            onClick={() => navigate(`/chat/${chat.user.id}`)}
            className="flex cursor-pointer items-center gap-3.5 rounded-2xl px-3 py-3 transition-all hover:bg-card active:bg-muted/50"
            style={{ animation: `fade-up 0.3s ease-out ${i * 0.05}s both` }}
          >
            <div className="relative flex-shrink-0">
              <img
                src={chat.user.avatar}
                alt={chat.user.name}
                className="h-[52px] w-[52px] rounded-2xl object-cover"
                loading="lazy"
                width={52}
                height={52}
              />
              {chat.user.status === "online" && (
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-[hsl(152,70%,45%)]" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[14px] font-bold ${chat.unread > 0 ? "text-foreground" : "text-foreground/80"}`}>
                    {chat.user.name}
                  </span>
                  <span className="text-sm">{chat.user.flag}</span>
                </div>
                <span className={`text-[11px] font-medium ${chat.unread > 0 ? "text-accent" : "text-muted-foreground"}`}>
                  {chat.timestamp}
                </span>
              </div>
              <div className="mt-0.5 flex items-center justify-between gap-2">
                <p className={`truncate text-[12.5px] ${chat.unread > 0 ? "font-semibold text-foreground/70" : "text-muted-foreground"}`}>
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-full gradient-accent px-1.5 text-[10px] font-bold text-white">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center py-20 text-muted-foreground">
          <span className="mb-3 text-4xl animate-bounce-gentle">💬</span>
          <p className="text-sm font-semibold">No chats found</p>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Messages;
