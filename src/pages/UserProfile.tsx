import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Globe, BookOpen } from "lucide-react";
import { mockUsers } from "@/data/mockUsers";

const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background">
        <p className="text-muted-foreground">User not found</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-primary font-semibold">Go back</button>
      </div>
    );
  }

  const statusLabel = user.status === "online" ? "Active now" : user.lastActive ?? "Offline";
  const statusColor = user.status === "online" ? "text-[hsl(145,65%,42%)]" : "text-muted-foreground";

  return (
    <div className="min-h-[100dvh] bg-background pb-8">
      {/* Hero header */}
      <div className="relative overflow-hidden gradient-hero pb-20 pt-6 px-4">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -left-8 bottom-4 h-28 w-28 rounded-full bg-white/5" />

        <button
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-transform active:scale-95"
        >
          <ArrowLeft className="h-4.5 w-4.5 text-white" />
        </button>
      </div>

      {/* Profile card overlapping header */}
      <div className="relative -mt-14 px-4">
        <div className="rounded-3xl bg-card p-5 shadow-elevated">
          <div className="flex items-start gap-4">
            {/* Square avatar with rounded corners */}
            <div className="relative -mt-12 flex-shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-20 w-20 rounded-2xl border-4 border-card object-cover shadow-card"
                width={80}
                height={80}
              />
              {user.status === "online" && (
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-card bg-[hsl(152,70%,45%)]" />
              )}
            </div>

            <div className="flex-1 pt-1">
              <h2 className="text-[18px] font-extrabold text-foreground leading-tight">
                {user.name}, {user.age}
              </h2>
              <div className="mt-0.5 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <span>{user.flag}</span>
                <span>{user.country}</span>
              </div>
              <p className={`mt-1 text-[12px] font-medium ${statusColor}`}>{statusLabel}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { icon: "🌍", label: "Country", value: user.countryCode },
              { icon: "🎂", label: "Age", value: `${user.age}y` },
              { icon: user.gender === "male" ? "♂" : user.gender === "female" ? "♀" : "⚧", label: "Gender", value: user.gender.charAt(0).toUpperCase() + user.gender.slice(1) },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center rounded-xl bg-muted/40 py-3 gap-0.5">
                <span className="text-lg">{s.icon}</span>
                <span className="text-[13px] font-extrabold text-foreground">{s.value}</span>
                <span className="text-[10px] font-medium text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-3 px-4">
        {/* Bio */}
        <div className="rounded-2xl bg-card p-4 shadow-card">
          <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-3.5 w-3.5 text-primary" />
            </div>
            About
          </div>
          <p className="text-[13px] leading-relaxed text-muted-foreground">{user.bio}</p>
        </div>

        {/* Languages */}
        <div className="rounded-2xl bg-card p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2 text-[13px] font-bold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
            </div>
            Languages
          </div>
          <div className="flex flex-wrap gap-2">
            {user.languages.map((lang) => (
              <span
                key={lang}
                className="rounded-xl bg-secondary px-3 py-1.5 text-[12px] font-semibold text-secondary-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Message button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-border/40">
        <button
          onClick={() => navigate(`/chat/${user.id}`)}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl gradient-primary py-4 text-[15px] font-bold text-white shadow-glow transition-transform active:scale-[0.97]"
        >
          <MessageCircle className="h-5 w-5" />
          Message {user.name.split(" ")[0]}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
