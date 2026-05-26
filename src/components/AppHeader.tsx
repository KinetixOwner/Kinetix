import { Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppHeader() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <Logo size={32} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-blue-600 outline-none transition-colors">
              Solutions <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-2xl p-2">
              <DropdownMenuItem asChild>
                <Link to="/for-students" className="font-bold cursor-pointer">For Students</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/for-parents" className="font-bold cursor-pointer">For Parents</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/curriculum" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
            Curriculum
          </Link>
          <Link to="/pricing" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link to="/faq" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
               <Link to="/dashboard" className="text-sm font-black text-blue-600 uppercase tracking-widest hover:text-blue-700">
                The Lab
              </Link>
              <Button
                variant="ghost"
                className="font-bold"
                onClick={async () => {
                  await signOut();
                  navigate({ to: "/" });
                }}
              >
                Sign out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" asChild className="hidden sm:inline-flex font-bold">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}