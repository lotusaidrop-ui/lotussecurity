import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#what-we-check", label: "What We Check" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <ShieldCheck className="size-5 text-teal" aria-hidden="true" />
          Lotus Security
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" asChild>
            <a href="#contact">Get Your Free Audit Quote</a>
          </Button>
        </div>

        <button
          className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get Your Free Audit Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
