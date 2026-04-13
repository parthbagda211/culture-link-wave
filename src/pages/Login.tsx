import { useNavigate } from "react-router-dom";
import onboardingConnect from "@/assets/onboarding-connect.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-32 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2 animate-fade-up">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary shadow-glow">
            <span className="text-xl font-extrabold text-primary-foreground">G</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="mb-8 w-48 animate-float">
          <img src={onboardingConnect} alt="Globe" width={800} height={800} className="w-full" />
        </div>

        <h1 className="mb-2 text-center text-3xl font-extrabold text-foreground animate-fade-up">
          Welcome to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Globzy</span>
        </h1>
        <p className="mb-10 max-w-[280px] text-center text-sm leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Your passport to global friendships, languages, and cultures.
        </p>

        {/* Buttons */}
        <div className="flex w-full max-w-xs flex-col gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={() => navigate("/home")}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-border bg-card py-4 text-sm font-bold text-foreground shadow-card transition-all hover:shadow-elevated active:scale-[0.97]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <button
            onClick={() => navigate("/home")}
            className="w-full rounded-2xl gradient-primary py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform active:scale-[0.97]"
          >
            Sign in with Email
          </button>

          <button
            onClick={() => navigate("/home")}
            className="w-full rounded-2xl bg-foreground py-4 text-sm font-bold text-background transition-transform active:scale-[0.97]"
          >
             Continue with Apple
          </button>
        </div>
      </div>

      <p className="pb-8 text-center text-[11px] text-muted-foreground/60 safe-bottom">
        By continuing you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span>
      </p>
    </div>
  );
};

export default Login;
