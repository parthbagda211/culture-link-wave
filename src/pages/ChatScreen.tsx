import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, MoreVertical } from "lucide-react";
import { mockUsers, chatMessages } from "@/data/mockUsers";

const ChatScreen = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chatMessages);

  const user = mockUsers.find((u) => u.id === userId) || mockUsers[0];

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
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b border-border bg-card/95 px-3 py-3 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-1 text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <img src={user.avatar} alt={user.name} className="h-9 w-9 rounded-full object-cover" width={36} height={36} />
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">{user.name}</span>
            <span className="text-xs">{user.flag}</span>
          </div>
          <span className="text-[10px] text-online font-medium">
            {user.status === "online" ? "Online" : user.lastActive}
          </span>
        </div>
        <button className="p-1 text-muted-foreground">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 ${
                msg.isMe
                  ? "gradient-primary text-primary-foreground rounded-br-md"
                  : "bg-muted text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`mt-1 text-right text-[10px] ${msg.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="sticky bottom-0 border-t border-border bg-card/95 px-3 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={handleSend}
            className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-card transition-transform active:scale-90"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
