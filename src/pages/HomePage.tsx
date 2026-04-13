import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import { mockUsers } from "@/data/mockUsers";
import UserCard from "@/components/UserCard";
import BottomNav from "@/components/BottomNav";

const countries = ["All", "Japan", "Mexico", "Egypt", "Ireland", "South Korea", "Germany", "India", "France", "UAE", "Brazil"];
const genders = ["All", "Male", "Female", "Other"];
const ageRanges = ["All", "18-22", "23-26", "27-30", "30+"];

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");

  const filteredUsers = useMemo(() => {
    let users = mockUsers;
    if (search) {
      users = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (selectedCountry !== "All") {
      users = users.filter((u) => u.country === selectedCountry);
    }
    if (selectedGender !== "All") {
      users = users.filter((u) => u.gender === selectedGender.toLowerCase());
    }
    if (selectedAge !== "All") {
      const [min, max] = selectedAge.includes("+")
        ? [30, 999]
        : selectedAge.split("-").map(Number);
      users = users.filter((u) => u.age >= min && u.age <= max);
    }
    // Sort: online first, then away, then offline
    return users.sort((a, b) => {
      const order = { online: 0, away: 1, offline: 2 };
      return order[a.status] - order[b.status];
    });
  }, [search, selectedCountry, selectedGender, selectedAge]);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/95 px-4 pb-3 pt-4 backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">
            <span className="text-primary">Globzy</span> 🌐
          </h1>
          <span className="text-xs text-muted-foreground">{filteredUsers.length} people</span>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search people..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
              showFilters ? "border-primary bg-secondary text-primary" : "border-input bg-card text-muted-foreground"
            }`}
          >
            <Filter className="h-3.5 w-3.5" />
            Filter
          </button>
        </div>

        {showFilters && (
          <div className="mt-3 space-y-2 animate-fade-up">
            <FilterRow label="Country" options={countries} selected={selectedCountry} onSelect={setSelectedCountry} />
            <FilterRow label="Gender" options={genders} selected={selectedGender} onSelect={setSelectedGender} />
            <FilterRow label="Age" options={ageRanges} selected={selectedAge} onSelect={setSelectedAge} />
            {(selectedCountry !== "All" || selectedGender !== "All" || selectedAge !== "All") && (
              <button
                onClick={() => { setSelectedCountry("All"); setSelectedGender("All"); setSelectedAge("All"); }}
                className="flex items-center gap-1 text-xs text-accent"
              >
                <X className="h-3 w-3" /> Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* User List */}
      <div className="space-y-2 px-4 pt-3">
        {filteredUsers.map((user, i) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => navigate(`/chat/${user.id}`)}
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center py-16 text-muted-foreground">
            <span className="mb-2 text-4xl">🔍</span>
            <p className="text-sm">No users found</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

const FilterRow = ({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) => (
  <div className="flex items-center gap-2">
    <span className="w-14 text-[11px] font-medium text-muted-foreground">{label}</span>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
            selected === opt
              ? "gradient-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default HomePage;
