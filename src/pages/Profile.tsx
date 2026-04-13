import { useState } from "react";
import { Camera, Edit2, Globe, Book } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const [name, setName] = useState("Alex Johnson");
  const [age, setAge] = useState("25");
  const [bio, setBio] = useState("Traveler & language enthusiast 🌍 Learning Japanese and Spanish. Love meeting new people!");
  const [editing, setEditing] = useState(false);

  const photos = [
    "https://i.pravatar.cc/300?img=32",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="gradient-hero px-4 pb-8 pt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-primary-foreground">My Profile</h1>
          <button
            onClick={() => setEditing(!editing)}
            className="rounded-lg bg-primary-foreground/20 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm"
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="mt-5 flex flex-col items-center">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="h-24 w-24 rounded-full border-4 border-primary-foreground/30 object-cover"
              width={96}
              height={96}
            />
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-card">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          {editing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3 rounded-lg bg-primary-foreground/20 px-3 py-1.5 text-center text-lg font-bold text-primary-foreground backdrop-blur-sm"
            />
          ) : (
            <h2 className="mt-3 text-lg font-bold text-primary-foreground">{name}</h2>
          )}
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs text-primary-foreground/80">🇺🇸 USA</span>
            <span className="text-primary-foreground/40">•</span>
            <span className="text-xs text-primary-foreground/80">Age {age}</span>
          </div>
        </div>
      </div>

      <div className="space-y-5 px-4 pt-5">
        {/* Bio */}
        <div className="rounded-xl bg-card p-4 shadow-card">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Edit2 className="h-4 w-4 text-primary" /> Bio
          </div>
          {editing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-input bg-background p-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          ) : (
            <p className="text-sm text-muted-foreground">{bio}</p>
          )}
        </div>

        {/* Languages */}
        <div className="rounded-xl bg-card p-4 shadow-card">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Book className="h-4 w-4 text-primary" /> Languages
          </div>
          <div className="flex flex-wrap gap-2">
            {["English (Native)", "Japanese (Learning)", "Spanish (Learning)"].map((lang) => (
              <span key={lang} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Photos */}
        <div className="rounded-xl bg-card p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Globe className="h-4 w-4 text-primary" /> Photos
          </div>
          <div className="grid grid-cols-3 gap-2">
            {photos.map((p, i) => (
              <img
                key={i}
                src={p}
                alt="Photo"
                className="aspect-square rounded-lg object-cover"
                loading="lazy"
                width={120}
                height={120}
              />
            ))}
            <button className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-border text-muted-foreground">
              <Camera className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
