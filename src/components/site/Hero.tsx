import { Clock, EyeOff, FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Clock, text: "24–72 hour turnaround" },
  { icon: EyeOff, text: "Non-invasive, external only" },
  { icon: FileBarChart, text: "Visual risk scorecard" },
];

export function Hero() {
  return (
    <section id="top" className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <span className="inline-flex items-center rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-3 py-1 text-xs font-medium tracking-wide uppercase">
          Cyber Risk Audits for professional service firms
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-semibold md:text-6xl">
          Know your real-world cyber exposure — without the $10,000 security engagement
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-navy-foreground/75">
          Lotus Security runs a fast, non-invasive external Cyber Risk Audit for law firms, CPA and
          accounting practices, title &amp; escrow companies, and wealth managers. We check your
          email spoofing defenses, staff breach exposure, and domain security — then deliver a clear
          visual scorecard with a prioritized fix list in 24–72 hours. Nothing is touched inside
          your network.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Get Your Free Audit Quote</a>
          </Button>
          <Button variant="onNavy" size="xl" asChild>
            <a href="#how-it-works">See how it works</a>
          </Button>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {points.map((p) => (
            <li
              key={p.text}
              className="flex items-center gap-3 rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-3 text-sm"
            >
              <p.icon className="size-4 text-teal" aria-hidden="true" />
              {p.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
