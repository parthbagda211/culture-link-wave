import { MockUser } from "@/data/mockUsers";
import { MessageCircle } from "lucide-react";

interface UserCardProps {
  user: MockUser;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const UserCard = ({ user, onClick, style }: UserCardProps) => {
  const statusColor = user.status === "online" ? "bg-online" : user.status === "away" ? "bg-away" : "bg-offline";

  return (
    <div
      onClick={onClick}
      style={style}
      className="group flex cursor-pointer items-center gap-3.5 rounded-2xl bg-card p-3.5 shadow-card transition-all duration-200 hover:shadow-elevated active:scale-[0.98]"
    >
      {/* Avatar with status */}
      <div className="relative flex-shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-14 w-14 rounded-2xl object-cover"
          loading="lazy"
          width={56}
          height={56}
        />
        <span
          className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-[2.5px] border-card ${statusColor} ${
            user.status === "online" ? "status-pulse" : ""
          }`}
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[15px] font-bold text-foreground">
            {user.name}
          </span>
          <span className="text-base">{user.flag}</span>
        </div>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">{user.bio}</p>
        <div className="mt-1.5 flex items-center gap-1.5">
          {user.languages.slice(0, 2).map((lang) => (
            <span
              key={lang}
              className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-secondary-foreground"
            >
              {lang}
            </span>
          ))}
          <span className="text-[10px] text-muted-foreground">
            • {user.age}y • {user.gender === "male" ? "♂" : user.gender === "female" ? "♀" : "⚧"}
          </span>
        </div>
      </div>

      {/* Action */}
      <div className="flex flex-col items-end gap-2">
        <span className={`text-[10px] font-semibold ${
          user.status === "online" ? "text-online" : "text-muted-foreground"
        }`}>
          {user.status === "online" ? "Online" : user.lastActive || "Offline"}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary opacity-0 transition-opacity group-hover:opacity-100">
          <MessageCircle className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
