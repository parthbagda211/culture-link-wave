import { useState } from "react";
import { Camera, Edit3, Globe, BookOpen, Heart, MapPin } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const [name, setName] = useState("Alex Johnson");
  const [age, setAge] = useState("25");
  const [bio, setBio] = useState("Traveler & language enthusiast 🌍 Learning Japanese and Spanish. Love meeting new people and exploring cultures!");
  const [editing, setEditing] = useState(false);

  const photos = [
    "https://i.pravatar.cc/300?img=32",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop",
  ];

  const stats = [
    { label: "Friends", value: "248", icon: Heart },
    { label: "Countries", value: "12", icon: MapPin },
    { label: "Languages", value: "3", icon: Globe },
  ];

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      {/* Hero header */}
      <div className="relative overflow-hidden gradient-hero px-4 pb-20 pt-6">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/5" />
        <div className="pointer-events-none absolute -left-8 bottom-4 h-28 w-28 rounded-full bg-primary-foreground/5" />

        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-primary-foreground">My Profile</h1>
          <button
            onClick={() => setEditing(!editing)}
            className="flex items-center gap-1.5 rounded-xl bg-primary-foreground/15 px-3.5 py-2 text-xs font-bold text-primary-foreground backdrop-blur-sm transition-transform active:scale-95"
          >
            <Edit3 className="h-3.5 w-3.5" />
            {editing ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      {/* Profile card overlapping header */}
      <div className="relative -mt-14 px-4">
        <div className="rounded-3xl bg-card p-5 shadow-elevated">
          <div className="flex items-start gap-4">
            <div className="relative -mt-12 flex-shrink-0">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Profile"
                className="h-20 w-20 rounded-2xl border-4 border-card object-cover shadow-card"
                width={80}
                height={80}
              />
              <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-lg gradient-accent text-accent-foreground shadow-card">
                <Camera className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex-1 pt-1">
              {editing ? (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-input bg-muted/50 px-2 py-1 text-lg font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              ) : (
                <h2 className="text-lg font-extrabold text-foreground">{name}</h2>
              )}
              <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                <span>🇺🇸 United States</span>
                <span>•</span>
                <span>{age} years old</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center rounded-xl bg-muted/40 py-3">
                <stat.icon className="mb-1 h-4 w-4 text-primary" />
                <span className="text-lg font-extrabold text-foreground">{stat.value}</span>
                <span className="text-[10px] font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3 px-4">
        {/* Bio */}
        <div className="rounded-2xl bg-card p-4 shadow-card">
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <Edit3 className="h-3.5 w-3.5 text-primary" />
            </div>
            About Me
          </div>
          {editing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-input bg-muted/50 p-3 text-sm text-foreground leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
          )}
        </div>

        {/* Languages */}
        <div className="rounded-2xl bg-card p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
            </div>
            Languages
          </div>
          <div className="space-y-2">
            {[
              { lang: "English", level: "Native", progress: 100, flag: "🇺🇸" },
              { lang: "Japanese", level: "Intermediate", progress: 55, flag: "🇯🇵" },
              { lang: "Spanish", level: "Beginner", progress: 25, flag: "🇪🇸" },
            ].map((l) => (
              <div key={l.lang} className="flex items-center gap-3">
                <span className="text-lg">{l.flag}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">{l.lang}</span>
                    <span className="text-[10px] font-medium text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full gradient-primary transition-all duration-500"
                      style={{ width: `${l.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photos */}
        <div className="rounded-2xl bg-card p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <Camera className="h-3.5 w-3.5 text-primary" />
              </div>
              Photos
            </div>
            <span className="text-[11px] font-semibold text-primary">See all</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {photos.map((p, i) => (
              <img
                key={i}
                src={p}
                alt="Photo"
                className="aspect-square rounded-xl object-cover transition-transform active:scale-[0.97]"
                loading="lazy"
                width={150}
                height={150}
              />
            ))}
            <button className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-border/60 text-muted-foreground transition-colors active:bg-muted/40">
              <div className="flex flex-col items-center gap-1">
                <Camera className="h-6 w-6" />
                <span className="text-[10px] font-medium">Add Photo</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
