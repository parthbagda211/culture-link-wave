import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { recentChats } from "@/data/mockUsers";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Messages = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = search
    ? recentChats.filter((c) => c.user.name.toLowerCase().includes(search.toLowerCase()))
    : recentChats;

  const totalUnread = recentChats.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border/50 glass px-4 pb-3 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-foreground">Chats</h1>
            {totalUnread > 0 && (
              <p className="text-[11px] text-muted-foreground">{totalUnread} unread message{totalUnread > 1 ? "s" : ""}</p>
            )}
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
            <span className="text-sm">✏️</span>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search chats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-muted/50 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
          />
        </div>
      </div>

      {/* Online avatars strip */}
      <div className="border-b border-border/30 px-4 py-3">
        <p className="mb-2 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Online Now</p>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {recentChats.filter((c) => c.user.status === "online").map((c) => (
            <button
              key={c.user.id}
              onClick={() => navigate(`/chat/${c.user.id}`)}
              className="flex flex-shrink-0 flex-col items-center gap-1 transition-transform active:scale-95"
            >
              <div className="relative">
                <img
                  src={c.user.avatar}
                  alt={c.user.name}
                  className="h-14 w-14 rounded-2xl object-cover ring-2 ring-primary/20"
                  width={56}
                  height={56}
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-online" />
              </div>
              <span className="max-w-14 truncate text-[10px] font-medium text-foreground">{c.user.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat list */}
      <div>
        {filtered.map((chat, i) => (
          <div
            key={chat.user.id}
            onClick={() => navigate(`/chat/${chat.user.id}`)}
            className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-all active:bg-muted/40"
            style={{ animation: `fade-up 0.3s ease-out ${i * 0.05}s both` }}
          >
            <div className="relative flex-shrink-0">
              <img
                src={chat.user.avatar}
                alt={chat.user.name}
                className="h-14 w-14 rounded-2xl object-cover"
                loading="lazy"
                width={56}
                height={56}
              />
              {chat.user.status === "online" && (
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-online" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-bold text-foreground">{chat.user.name}</span>
                  <span className="text-sm">{chat.user.flag}</span>
                </div>
                <span className={`text-[10px] font-medium ${chat.unread > 0 ? "text-primary" : "text-muted-foreground"}`}>
                  {chat.timestamp}
                </span>
              </div>
              <div className="mt-0.5 flex items-center justify-between">
                <p className="truncate text-xs text-muted-foreground pr-2">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="flex h-5 min-w-5 flex-shrink-0 items-center justify-center rounded-full gradient-primary px-1.5 text-[10px] font-bold text-primary-foreground">
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
          <span className="mb-3 text-4xl">💬</span>
          <p className="text-sm font-semibold">No chats found</p>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Messages;
