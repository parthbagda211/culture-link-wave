import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    emoji: "🌍",
    label: "Meet People",
    title: "Connect with the\nWorld",
    subtitle: "Chat with real people from 190+ countries. Make lifelong friendships across every culture.",
    heroGradient: "from-[hsl(18,92%,52%)] via-[hsl(24,88%,55%)] to-[hsl(32,84%,52%)]",
    accentColor: "hsl(18,92%,52%)",
  },
  {
    emoji: "💬",
    label: "Chat & Connect",
    title: "Talk to Anyone,\nAnywhere",
    subtitle: "Real-time messaging with people across the globe. Share photos, voice notes, and moments.",
    heroGradient: "from-[hsl(170,72%,32%)] via-[hsl(180,68%,38%)] to-[hsl(192,78%,42%)]",
    accentColor: "hsl(170,72%,36%)",
  },
  {
    emoji: "✨",
    label: "Explore Culture",
    title: "Discover &\nExplore",
    subtitle: "Filter by country, language, or interest. Find your perfect conversation partner from home.",
    heroGradient: "from-[hsl(258,65%,52%)] via-[hsl(272,62%,56%)] to-[hsl(286,58%,52%)]",
    accentColor: "hsl(265,65%,54%)",
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const slide = slides[current];

  const handleNext = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else navigate("/login");
  };

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-hidden bg-background">
      {/* Hero gradient section */}
      <div
        key={current}
        className={`relative flex flex-col overflow-hidden bg-gradient-to-br ${slide.heroGradient}`}
        style={{ height: "60dvh" }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -left-10 top-16 h-32 w-32 rounded-full bg-white/8" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-20 w-20 rounded-full bg-white/10" />

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-12 z-10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white">Globzy</span>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-opacity active:opacity-70"
          >
            Skip
          </button>
        </div>

        {/* Main illustration */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 z-10">
          <div className="animate-scale-in text-[88px] drop-shadow-lg select-none">
            {slide.emoji}
          </div>

          {/* Floating chat bubbles */}
          {current === 0 && (
            <>
              <div className="absolute top-28 left-8 animate-float rounded-2xl rounded-tl-sm bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-gray-800 shadow-elevated" style={{ animationDelay: "0s" }}>
                Hola! 👋 from Mexico
              </div>
              <div className="absolute bottom-20 right-6 animate-float rounded-2xl rounded-tr-sm bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-gray-800 shadow-elevated" style={{ animationDelay: "0.8s" }}>
                Konnichiwa! 🇯🇵
              </div>
            </>
          )}
          {current === 1 && (
            <>
              <div className="absolute top-28 left-8 animate-float rounded-2xl rounded-tl-sm bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-gray-800 shadow-elevated" style={{ animationDelay: "0s" }}>
                Hey! How are you? 😊
              </div>
              <div className="absolute bottom-20 right-6 animate-float rounded-2xl rounded-tr-sm bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-gray-800 shadow-elevated" style={{ animationDelay: "0.6s" }}>
                Great, let's talk! 🎉
              </div>
            </>
          )}
          {current === 2 && (
            <>
              <div className="absolute top-28 left-8 animate-float flex items-center gap-2 rounded-2xl bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-gray-800 shadow-elevated" style={{ animationDelay: "0s" }}>
                <span className="h-2 w-2 rounded-full bg-green-500" /> 6 Online now
              </div>
              <div className="absolute bottom-20 right-6 animate-float flex items-center gap-1.5 rounded-2xl bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-gray-800 shadow-elevated" style={{ animationDelay: "0.6s" }}>
                🌍 190+ countries
              </div>
            </>
          )}
        </div>

        {/* Wave cut at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 390 36"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,18 C80,36 310,0 390,18 L390,36 L0,36 Z" fill="hsl(30, 50%, 97%)" />
        </svg>
      </div>

      {/* Text + controls section */}
      <div className="flex flex-1 flex-col justify-between px-6 pb-8 pt-6">
        <div key={`text-${current}`}>
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest animate-fade-up"
            style={{ background: `${slide.accentColor}18`, color: slide.accentColor }}
          >
            {slide.label}
          </span>
          <h1 className="mt-3 animate-fade-up whitespace-pre-line text-[30px] font-extrabold leading-[1.15] text-foreground">
            {slide.title}
          </h1>
          <p
            className="mt-3 animate-fade-up text-[14px] leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            {slide.subtitle}
          </p>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between pt-6">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: i === current ? 28 : 8,
                  background: i === current ? slide.accentColor : i < current ? `${slide.accentColor}50` : "hsl(220,12%,82%)",
                }}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-orange transition-transform active:scale-90"
            style={{ background: `linear-gradient(135deg, ${slide.accentColor}, ${slide.accentColor}cc)` }}
          >
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
