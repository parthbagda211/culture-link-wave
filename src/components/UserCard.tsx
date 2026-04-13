import { MockUser } from "@/data/mockUsers";

interface UserCardProps {
  user: MockUser;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const UserCard = ({ user, onClick, style }: UserCardProps) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className="flex cursor-pointer items-center gap-3 rounded-xl bg-card p-3 shadow-card transition-all hover:shadow-elevated active:scale-[0.98]"
    >
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-border"
          loading="lazy"
          width={48}
          height={48}
        />
        <span
          className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card ${
            user.status === "online"
              ? "bg-online"
              : user.status === "away"
              ? "bg-away"
              : "bg-muted-foreground"
          }`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-sm font-semibold text-foreground">
            {user.name}
          </span>
          <span className="text-xs">{user.gender === "male" ? "♂" : user.gender === "female" ? "♀" : "⚧"}</span>
          <span className="text-sm">{user.flag}</span>
        </div>
        <p className="truncate text-xs text-muted-foreground">{user.bio}</p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="text-[10px] font-medium text-muted-foreground">
          {user.status === "online"
            ? "Online"
            : user.lastActive || "Offline"}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
