import * as React from "react";
import { Outlet, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { Suspense, lazy, useEffect } from "react";
import appCss from "../styles.css?url";
import { AuthProvider, useAuth } from "../lib/auth-context";
import { Toaster } from "../components/ui/sonner";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const TanStackRouterDevtools = process.env.NODE_ENV === 'production'
  ? () => null
  : lazy(() => import('@tanstack/router-devtools').then((res) => ({ default: res.TanStackRouterDevtools })));

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kinetix Lab — Coding for Kids" },
      { name: "description", content: "AI-powered coding platform for kids 8–12+." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootWithAuth,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body className="antialiased bg-white selection:bg-blue-100">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootWithAuth() {
  return (
    <AuthProvider>
      <RootComponent />
    </AuthProvider>
  );
}

function RootComponent() {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // --- THE LOGIC GATE ---

  // 1. Identify "App Pages" (Where we want the Sidebar)
  const appRoutes = ["/dashboard", "/chat", "/certificates", "/settings"];
  const isAppPage = appRoutes.includes(location.pathname);

  // 2. Identify "Auth Pages" (Where we want NO Header, NO Footer, NO Sidebar)
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  // 3. Determine if we should show the Marketing Site (Header/Footer)
  // Logic: Show it if we are NOT in the app and NOT on an auth page
  const showMarketingSite = !isAppPage && !isAuthPage;

  // Prevent white-screen flicker
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  // --- RENDER STRATEGY ---

  // OPTION A: THE LAB (Logged in + App Route)
  if (user && isAppPage) {
    return (
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1 overflow-hidden">
            <header className="flex h-14 items-center px-4 border-b bg-white lg:hidden shrink-0">
              <SidebarTrigger />
              <span className="ml-4 font-black text-xs uppercase tracking-widest text-slate-900">Kinetix Lab</span>
            </header>
            <main className="flex-1 overflow-y-auto relative p-4 lg:p-8">
              <Outlet />
            </main>
          </SidebarInset>
        </div>
        <Toaster richColors position="top-center" />
      </SidebarProvider>
    );
  }

  // OPTION B: THE WEBSITE (Everything else)
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {showMarketingSite && <AppHeader />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {showMarketingSite && <AppFooter />}

      <Toaster richColors position="top-center" />
      <Suspense><TanStackRouterDevtools /></Suspense>
    </div>
  );
}
