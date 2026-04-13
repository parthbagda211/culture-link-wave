import { useState } from "react";
import { useNavigate } from "react-router-dom";
import onboardingConnect from "@/assets/onboarding-connect.png";
import onboardingLanguage from "@/assets/onboarding-language.png";
import onboardingGames from "@/assets/onboarding-games.png";

const slides = [
  {
    image: onboardingConnect,
    title: "Meet People\nWorldwide",
    subtitle: "Connect with strangers from 190+ countries. Discover cultures, make friends, and broaden your world.",
    gradient: "from-primary/10 to-accent/5",
  },
  {
    image: onboardingLanguage,
    title: "Learn Any\nLanguage",
    subtitle: "Practice with native speakers. Get corrections, share vocabulary, and become fluent together.",
    gradient: "from-accent/10 to-primary/5",
  },
  {
    image: onboardingGames,
    title: "Play & Have\nFun Together",
    subtitle: "Challenge friends to games, quizzes, and cultural trivia. Learning has never been this fun!",
    gradient: "from-primary/5 to-accent/10",
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
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-40 h-48 w-48 rounded-full bg-accent/8 blur-3xl" />

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl gradient-primary">
            <span className="text-sm text-primary-foreground font-bold">G</span>
          </div>
          <span className="text-lg font-extrabold text-foreground">Globzy</span>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="rounded-full bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-colors active:bg-muted/70"
        >
          Skip
        </button>
      </div>

      {/* Image area */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-4" key={current}>
        <div className={`w-full max-w-xs rounded-3xl bg-gradient-to-br ${slide.gradient} p-4`}>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full animate-scale-in"
            width={800}
            height={800}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-4" key={`text-${current}`}>
        <h1 className="animate-fade-up whitespace-pre-line text-[28px] font-extrabold leading-tight text-foreground">
          {slide.title}
        </h1>
        <p
          className="mt-3 animate-fade-up text-sm leading-relaxed text-muted-foreground"
          style={{ animationDelay: "0.1s" }}
        >
          {slide.subtitle}
        </p>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between px-6 pb-8 pt-2 safe-bottom">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 gradient-primary shadow-glow"
                  : i < current
                  ? "w-2 bg-primary/30"
                  : "w-2 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow transition-transform active:scale-90"
        >
          <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
