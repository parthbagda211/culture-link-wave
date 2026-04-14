import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Orange gradient top section */}
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(14,92%,55%)] via-[hsl(20,90%,52%)] to-[hsl(30,88%,48%)]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -left-20 top-8 h-40 w-40 rounded-full bg-white/8" />
        <div className="pointer-events-none absolute right-8 bottom-12 h-24 w-24 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute left-12 bottom-4 h-16 w-16 rounded-full bg-white/8" />

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 animate-fade-up">
          <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-white/20 shadow-lg backdrop-blur-sm border border-white/30">
            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
          </div>
          <span className="text-3xl font-extrabold text-white tracking-tight">Globzy</span>
        </div>
      </div>

      {/* White bottom card */}
      <div className="rounded-t-[32px] bg-background px-6 pb-6 pt-8 shadow-elevated animate-slide-up">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-extrabold text-foreground">Sign in to continue</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Join millions connecting worldwide</p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Google */}
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

        </div>

        <p className="mt-6 text-center text-[11px] text-muted-foreground/60 safe-bottom">
          By continuing, you agree to our{" "}
          <span className="font-semibold text-accent underline-offset-2 underline">Terms of Service</span>{" "}
          and{" "}
          <span className="font-semibold text-accent underline-offset-2 underline">Privacy Policy</span>
        </p>

        <p className="mt-3 text-center text-[12px] text-muted-foreground">
          New to Globzy?{" "}
          <span className="font-bold text-accent cursor-pointer">Create Account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
