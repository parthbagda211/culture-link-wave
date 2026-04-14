import { useNavigate } from "react-router-dom";
import { MockUser } from "@/data/mockUsers";
import { ChevronRight } from "lucide-react";

interface UserCardProps {
  user: MockUser;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const genderIcon = (gender: MockUser["gender"]) => {
  if (gender === "male")
    return <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-500">♂</span>;
  if (gender === "female")
    return <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-pink-100 text-[10px] font-bold text-pink-500">♀</span>;
  return <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-purple-100 text-[10px] font-bold text-purple-500">⚧</span>;
};

const UserCard = ({ user, onClick, style }: UserCardProps) => {
  const navigate = useNavigate();
  const timeLabel = user.status === "online" ? "Active now" : (user.lastActive ?? "Offline");

  const handleChevron = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/user/${user.id}`);
  };

  return (
    <div
      onClick={onClick}
      style={style}
      className="group flex cursor-pointer items-center gap-4 rounded-2xl bg-card px-4 py-3.5 shadow-card transition-all duration-200 hover:shadow-elevated active:scale-[0.98]"
    >
      {/* Square avatar with rounded corners + status dot */}
      <div className="relative flex-shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-[56px] w-[56px] rounded-2xl object-cover"
          loading="lazy"
          width={56}
          height={56}
        />
        {user.status === "online" && (
          <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-[hsl(152,70%,45%)]" />
        )}
        {user.status === "away" && (
          <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-[hsl(42,95%,55%)]" />
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[15px] font-bold text-foreground leading-snug">
            {user.name}, {user.age}
          </span>
          {genderIcon(user.gender)}
          <span className="text-[15px] leading-none">{user.flag}</span>
        </div>
        <p className="mt-0.5 truncate text-[12.5px] text-muted-foreground">{user.bio}</p>

        {/* Language tags */}
        <div className="mt-1.5 flex flex-wrap gap-1">
          {user.languages.map((lang) => (
            <span
              key={lang}
              className="rounded-lg bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground"
            >
              {lang}
            </span>
          ))}
          <span className={`text-[11px] font-medium self-center ml-0.5 ${user.status === "online" ? "text-[hsl(145,65%,42%)]" : "text-muted-foreground/60"}`}>
            · {timeLabel}
          </span>
        </div>
      </div>

      {/* Chevron → navigates to user profile */}
      <button
        onClick={handleChevron}
        className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-muted transition-all hover:bg-accent hover:text-white active:scale-90"
      >
        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-muted-foreground" />
      </button>
    </div>
  );
};

export default UserCard;
