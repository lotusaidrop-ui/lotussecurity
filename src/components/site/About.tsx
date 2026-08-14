import { ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-py bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex size-11 items-center justify-center rounded-lg bg-navy-foreground/10">
          <ShieldCheck className="size-5 text-teal" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold md:text-4xl">About Lotus Security</h2>
        <p className="mt-5 text-navy-foreground/80">
          Lotus Security is a small, deliberately focused practice founded by a cybersecurity
          analyst who kept seeing the same pattern: professional service firms hold extremely
          sensitive client data and move money on behalf of their clients, yet the security services
          marketed to them are priced and scoped for enterprises.
        </p>
        <p className="mt-4 text-navy-foreground/80">
          So the work here is narrow on purpose. One service, one clear deliverable, one type of
          client — law firms, accounting and CPA practices, title &amp; escrow companies, and wealth
          management firms. That focus is what makes a same-week, flat-fee audit possible without
          cutting corners on the analysis.
        </p>
        <p className="mt-4 text-navy-foreground/80">
          This is a new practice, and we say so plainly. What we offer instead of a long client list
          is a transparent scope, a sample report you can read before you buy, and a direct line to
          the analyst doing the work.
        </p>
      </div>
    </section>
  );
}
