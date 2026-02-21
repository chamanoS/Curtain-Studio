import { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { brand } from "../data/content";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Footer from "./Footer";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/quote", label: "Quote" },
  { to: "/gallery", label: "Gallery" },
  { to: "/downloads", label: "Downloads" },
  { to: "/about", label: "About" },
  { to: "/investors", label: "Investors" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const found = navItems.find((n) => n.to === location.pathname);
    return found?.label ?? "Page";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur">
        <div className="container h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sand shadow-soft">
              <span className="text-sm font-semibold tracking-wide text-brass">CS</span>
            </span>
            <div className="leading-tight">
              <div className="font-semibold">{brand.name}</div>
              <div className="text-xs text-black/60">{brand.tagline}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-3 py-2 text-sm transition",
                    isActive ? "bg-sand text-ink" : "text-black/70 hover:text-ink hover:bg-black/5",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="ml-2 rounded-xl bg-ink px-4 py-2 text-sm text-paper shadow-soft hover:opacity-95"
              href={`https://wa.me/${brand.phoneE164.replace("+", "")}?text=${encodeURIComponent(
                "Hi Curtain Studio! I'd like a quote/measurement consultation."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden rounded-xl p-2 hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-black/5 bg-paper"
            >
              <div className="container py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "rounded-xl px-3 py-2 text-sm transition",
                        isActive ? "bg-sand text-ink" : "text-black/70 hover:text-ink hover:bg-black/5",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  className="mt-2 rounded-xl bg-ink px-4 py-2 text-sm text-paper shadow-soft text-center"
                  href={`https://wa.me/${brand.phoneE164.replace("+", "")}?text=${encodeURIComponent(
                    "Hi Curtain Studio! I'd like a quote/measurement consultation."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <div className="sr-only" aria-live="polite">
          {pageTitle}
        </div>
        {children}
      </main>

      <Footer />
    </div>
  );
}
