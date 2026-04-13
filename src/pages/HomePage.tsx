import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, X, Sparkles, Globe, Users } from "lucide-react";
import { mockUsers } from "@/data/mockUsers";
import UserCard from "@/components/UserCard";
import BottomNav from "@/components/BottomNav";

const countries = ["All", "Japan", "Mexico", "Egypt", "Ireland", "South Korea", "Germany", "India", "France", "UAE", "Brazil"];
const genders = ["All", "Male", "Female"];
const ageRanges = ["All", "18-22", "23-26", "27-30", "30+"];

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");

  const activeFilterCount = [selectedCountry, selectedGender, selectedAge].filter((f) => f !== "All").length;

  const filteredUsers = useMemo(() => {
    let users = mockUsers;
    if (search) users = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.country.toLowerCase().includes(search.toLowerCase()));
    if (selectedCountry !== "All") users = users.filter((u) => u.country === selectedCountry);
    if (selectedGender !== "All") users = users.filter((u) => u.gender === selectedGender.toLowerCase());
    if (selectedAge !== "All") {
      const [min, max] = selectedAge.includes("+") ? [30, 999] : selectedAge.split("-").map(Number);
      users = users.filter((u) => u.age >= min && u.age <= max);
    }
    return users.sort((a, b) => {
      const order = { online: 0, away: 1, offline: 2 };
      return order[a.status] - order[b.status];
    });
  }, [search, selectedCountry, selectedGender, selectedAge]);

  const onlineCount = mockUsers.filter((u) => u.status === "online").length;

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border/50 glass px-4 pb-3 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-glow">
              <span className="text-sm font-extrabold text-primary-foreground">G</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-foreground">Explore</h1>
              <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-online" />
                {onlineCount} people online now
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate(`/chat/${mockUsers[Math.floor(Math.random() * mockUsers.length)].id}`)}
            className="flex items-center gap-1.5 rounded-xl gradient-accent px-3 py-2 text-xs font-bold text-accent-foreground shadow-accent-glow transition-transform active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Random
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-muted/50 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`relative flex items-center justify-center rounded-xl border px-3 transition-all ${
              showFilters || activeFilterCount > 0
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-muted/50 text-muted-foreground"
            }`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            {activeFilterCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full gradient-accent text-[9px] font-bold text-accent-foreground">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-3 space-y-3 animate-fade-up rounded-xl bg-muted/30 p-3">
            <FilterRow icon={<Globe className="h-3.5 w-3.5" />} label="Country" options={countries} selected={selectedCountry} onSelect={setSelectedCountry} />
            <FilterRow icon={<Users className="h-3.5 w-3.5" />} label="Gender" options={genders} selected={selectedGender} onSelect={setSelectedGender} />
            <FilterRow icon={<span className="text-xs">🎂</span>} label="Age" options={ageRanges} selected={selectedAge} onSelect={setSelectedAge} />
            {activeFilterCount > 0 && (
              <button
                onClick={() => { setSelectedCountry("All"); setSelectedGender("All"); setSelectedAge("All"); }}
                className="flex items-center gap-1.5 rounded-lg bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive transition-colors active:bg-destructive/20"
              >
                <X className="h-3 w-3" /> Clear {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Quick stats */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
        {[
          { icon: "🌍", label: "10 Countries", color: "bg-primary/8 text-primary" },
          { icon: "🟢", label: `${onlineCount} Online`, color: "bg-online/10 text-online" },
          { icon: "🗣️", label: "8 Languages", color: "bg-accent/10 text-accent" },
        ].map((stat) => (
          <div key={stat.label} className={`flex flex-shrink-0 items-center gap-1.5 rounded-xl ${stat.color} px-3 py-2`}>
            <span className="text-sm">{stat.icon}</span>
            <span className="text-[11px] font-bold">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* User List */}
      <div className="space-y-2.5 px-4">
        {filteredUsers.map((user, i) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => navigate(`/chat/${user.id}`)}
            style={{ animation: `fade-up 0.4s ease-out ${i * 0.06}s both` }}
          />
        ))}
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center py-20 text-muted-foreground">
            <span className="mb-3 text-5xl animate-bounce-gentle">🔍</span>
            <p className="text-sm font-semibold">No users found</p>
            <p className="text-xs">Try adjusting your filters</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

const FilterRow = ({
  icon,
  label,
  options,
  selected,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) => (
  <div>
    <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
      {icon} {label}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
            selected === opt
              ? "gradient-primary text-primary-foreground shadow-glow scale-105"
              : "bg-card text-muted-foreground border border-border hover:border-primary/30"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default HomePage;
