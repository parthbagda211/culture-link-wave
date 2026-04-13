import { useState } from "react";
import { useNavigate } from "react-router-dom";
import globeHero from "@/assets/globe-hero.png";

const onboardingSlides = [
  {
    title: "Meet People Worldwide",
    description: "Connect with strangers from different countries, learn about their culture, and make lifelong friends.",
    emoji: "🌍",
  },
  {
    title: "Learn Languages",
    description: "Practice languages with native speakers. Exchange knowledge and grow together.",
    emoji: "🗣️",
  },
  {
    title: "Play & Have Fun",
    description: "Play games, share stories, and explore the world from your phone.",
    emoji: "🎮",
  },
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/login");
    }
  };

  const slide = onboardingSlides[currentSlide];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-8">
      <div className="flex items-center gap-2 pt-4">
        <span className="text-2xl font-bold text-primary">Globzy</span>
        <span className="text-2xl">🌐</span>
      </div>

      <div className="flex flex-col items-center text-center" key={currentSlide}>
        <div className="mb-6 animate-fade-up">
          {currentSlide === 0 ? (
            <img src={globeHero} alt="Globe" width={220} height={220} className="mx-auto" />
          ) : (
            <span className="text-8xl">{slide.emoji}</span>
          )}
        </div>
        <h2 className="mb-3 animate-fade-up text-2xl font-bold text-foreground" style={{ animationDelay: "0.1s" }}>
          {slide.title}
        </h2>
        <p className="max-w-xs animate-fade-up text-sm text-muted-foreground" style={{ animationDelay: "0.2s" }}>
          {slide.description}
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-4 pb-8">
        <div className="flex gap-2">
          {onboardingSlides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 gradient-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-full max-w-xs rounded-xl gradient-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform active:scale-[0.97]"
        >
          {currentSlide === onboardingSlides.length - 1 ? "Get Started" : "Next"}
        </button>
        {currentSlide < onboardingSlides.length - 1 && (
          <button
            onClick={() => navigate("/login")}
            className="text-xs text-muted-foreground"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
