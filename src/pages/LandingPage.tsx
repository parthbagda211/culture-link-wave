import { useNavigate } from "react-router-dom";
import { Globe, MessageCircle, Users, Gamepad2, Languages, Shield, Star, ArrowRight, ChevronDown, Sparkles, Heart, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/landing-hero.png";
import mockupsImg from "@/assets/landing-mockups.png";
import { useEffect, useState } from "react";

const stats = [
  { value: "190+", label: "Countries", icon: Globe },
  { value: "2M+", label: "Users", icon: Users },
  { value: "50M+", label: "Messages", icon: MessageCircle },
  { value: "120+", label: "Languages", icon: Languages },
];

const features = [
  {
    icon: Globe,
    title: "Meet People Worldwide",
    desc: "Connect with real people from 190+ countries. Discover cultures, share stories, and build friendships that span the globe.",
    gradient: "gradient-primary",
  },
  {
    icon: Languages,
    title: "Learn Languages Naturally",
    desc: "Practice with native speakers through real conversations. Built-in translation tools and correction features help you learn faster.",
    gradient: "gradient-accent",
  },
  {
    icon: Gamepad2,
    title: "Play Together",
    desc: "Break the ice with fun mini-games — trivia, word challenges, emoji charades. Learning has never been this fun.",
    gradient: "gradient-warm",
  },
  {
    icon: Shield,
    title: "Safe & Moderated",
    desc: "AI-powered moderation, report tools, and verified profiles keep the community safe and welcoming for everyone.",
    gradient: "gradient-primary",
  },
];

const testimonials = [
  { name: "Yuki", flag: "🇯🇵", text: "I found my best friend from Brazil here. We talk every day and I've learned so much Portuguese!", avatar: "https://i.pravatar.cc/100?img=5" },
  { name: "Carlos", flag: "🇲🇽", text: "Globzy helped me practice English with native speakers. My confidence has improved so much!", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Amira", flag: "🇪🇬", text: "The games feature makes it so easy to start conversations. I've connected with people from 20+ countries!", avatar: "https://i.pravatar.cc/100?img=9" },
];

const howItWorks = [
  { step: "01", title: "Create Your Profile", desc: "Sign up in seconds. Add your languages, interests, and a photo.", icon: Sparkles },
  { step: "02", title: "Discover People", desc: "Browse users by country, language, or interests — or try Random Match!", icon: MapPin },
  { step: "03", title: "Start Chatting", desc: "Send messages, voice notes, play games, and learn together.", icon: Heart },
  { step: "04", title: "Grow Together", desc: "Build lasting friendships and become fluent in new languages.", icon: Zap },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-extrabold text-foreground tracking-tight">Globzy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Stories</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button size="sm" onClick={() => navigate("/onboarding")} className="gradient-primary border-0 text-primary-foreground shadow-glow hover:opacity-90 transition-opacity rounded-full px-5">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold animate-fade-up">
              <Sparkles className="w-4 h-4" /> Now in 190+ Countries
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Connect with the <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>World</span>,
              <br />One Chat at a Time
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Meet people from every corner of the planet. Learn languages, explore cultures, play games, and build friendships that know no borders.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" onClick={() => navigate("/onboarding")} className="gradient-primary border-0 text-primary-foreground shadow-glow hover:opacity-90 transition-opacity rounded-full px-8 h-12 text-base font-bold">
                Start Exploring <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/login")} className="rounded-full px-8 h-12 text-base font-semibold border-border">
                I Have an Account
              </Button>
            </div>
            <div className="flex items-center gap-3 pt-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-2.5">
                {[3, 7, 11, 15, 20].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="w-9 h-9 rounded-full border-2 border-background" alt="" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-foreground">2M+</span>{" "}
                <span className="text-muted-foreground">people already connected</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 gradient-primary rounded-full blur-[80px] opacity-15 scale-75" />
            <img src={heroImg} alt="Globzy community" width={1024} height={1024} className="relative w-full max-w-md animate-float-slow" />
          </div>
        </div>
        <div className="flex justify-center mt-12 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center shadow-card hover:shadow-elevated transition-shadow group">
              <s.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-extrabold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide mb-4">
              <Zap className="w-3.5 h-3.5" /> Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Everything You Need to Go Global</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">One app to connect, learn, play, and grow with people from around the world.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group relative rounded-3xl bg-card border border-border p-7 hover:shadow-elevated transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.06] blur-2xl -translate-y-1/2 translate-x-1/2" style={{ background: i % 2 === 0 ? "var(--gradient-primary)" : "var(--gradient-accent)" }} />
                <div className={`w-12 h-12 rounded-2xl ${f.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockups */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-[0.03]" />
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Beautiful Design
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Designed for Conversations</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">A premium mobile experience that makes connecting feel effortless.</p>
          <img src={mockupsImg} alt="Globzy app screens" loading="lazy" width={1280} height={800} className="w-full max-w-3xl mx-auto drop-shadow-2xl" />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
              <Globe className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Start in Under a Minute</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s, i) => (
              <div key={i} className="relative text-center group">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
                )}
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform relative">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-sm">{s.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide mb-4">
              <Heart className="w-3.5 h-3.5" /> Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Loved by People Everywhere</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-sm">{t.name} {t.flag}</div>
                    <div className="text-xs text-muted-foreground">Globzy User</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl gradient-primary p-12 md:p-16 shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 text-6xl">🌍</div>
            <div className="absolute bottom-6 right-12 text-5xl">🗺️</div>
            <div className="absolute top-1/2 left-1/4 text-4xl">💬</div>
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground tracking-tight mb-4">
              Ready to Meet the World?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8 text-lg">
              Join millions of people making friends, learning languages, and exploring cultures every day.
            </p>
            <Button size="lg" onClick={() => navigate("/onboarding")} className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 h-13 text-base font-bold shadow-elevated">
              Get Started Free <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Globzy</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Blog</a>
          </div>
          <div className="text-sm text-muted-foreground">© 2026 Globzy. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
