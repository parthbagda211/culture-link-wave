import { useNavigate } from "react-router-dom";
import globeHero from "@/assets/globe-hero.png";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Mock sign in
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-10">
      <div />

      <div className="flex flex-col items-center text-center">
        <img src={globeHero} alt="Globzy" width={160} height={160} className="mb-6" />
        <h1 className="mb-2 text-3xl font-extrabold text-foreground">
          Welcome to <span className="text-primary">Globzy</span>
        </h1>
        <p className="max-w-xs text-sm text-muted-foreground">
          Connect with people across the globe. Learn, chat, play & explore cultures together.
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-3 pb-10">
        <button
          onClick={handleGoogleSignIn}
          className="flex w-full max-w-xs items-center justify-center gap-3 rounded-xl border border-border bg-card py-3.5 text-sm font-semibold text-foreground shadow-card transition-all hover:shadow-elevated active:scale-[0.97]"
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
          className="w-full max-w-xs rounded-xl gradient-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform active:scale-[0.97]"
        >
          Sign in with Email
        </button>

        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          By continuing you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
