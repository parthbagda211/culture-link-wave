import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, MoreVertical, Phone, Video, Smile, Paperclip, Mic } from "lucide-react";
import { mockUsers, chatMessages } from "@/data/mockUsers";

const ChatScreen = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chatMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const user = mockUsers.find((u) => u.id === userId) || mockUsers[0];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        senderId: "me",
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isMe: true,
      },
    ]);
    setMessage("");
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b border-border/50 glass px-3 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-foreground transition-transform active:scale-90"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>

        <div
          className="flex flex-1 cursor-pointer items-center gap-2.5"
          onClick={() => {}}
        >
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-10 w-10 rounded-xl object-cover"
              width={40}
              height={40}
            />
            {user.status === "online" && (
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-online" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-foreground">{user.name}</span>
              <span className="text-xs">{user.flag}</span>
            </div>
            <span className={`text-[10px] font-semibold ${
              user.status === "online" ? "text-online" : "text-muted-foreground"
            }`}>
              {user.status === "online" ? "Online now" : user.lastActive}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/60">
            <Phone className="h-4 w-4" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/60">
            <Video className="h-4 w-4" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted/60">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Date divider */}
        <div className="mb-4 flex justify-center">
          <span className="rounded-full bg-muted/60 px-3 py-1 text-[10px] font-semibold text-muted-foreground">Today</span>
        </div>

        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
              style={{ animation: `fade-up 0.3s ease-out ${Math.min(i * 0.03, 0.3)}s both` }}
            >
              {!msg.isMe && (
                <img
                  src={user.avatar}
                  alt=""
                  className="mr-2 mt-auto h-6 w-6 rounded-lg object-cover"
                  width={24}
                  height={24}
                />
              )}
              <div
                className={`max-w-[72%] rounded-2xl px-4 py-2.5 ${
                  msg.isMe
                    ? "gradient-primary text-primary-foreground rounded-br-lg"
                    : "bg-card text-foreground shadow-card rounded-bl-lg"
                }`}
              >
                <p className="text-[14px] leading-relaxed">{msg.text}</p>
                <p className={`mt-1 text-right text-[9px] font-medium ${
                  msg.isMe ? "text-primary-foreground/60" : "text-muted-foreground"
                }`}>
                  {msg.timestamp}
                  {msg.isMe && " ✓✓"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 border-t border-border/50 glass px-3 py-3 safe-bottom">
        <div className="flex items-end gap-2">
          <div className="flex gap-1">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors active:bg-muted/60">
              <Paperclip className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Smile className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={message.trim() ? handleSend : undefined}
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-200 ${
              message.trim()
                ? "gradient-primary text-primary-foreground shadow-glow scale-100"
                : "bg-muted text-muted-foreground scale-95"
            } active:scale-90`}
          >
            {message.trim() ? <Send className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
