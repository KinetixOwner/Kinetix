import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Logo size={28} />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kinetix. Where kids discover the joy of coding.
        </p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}
