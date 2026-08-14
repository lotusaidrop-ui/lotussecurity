import { CheckCircle2, XCircle } from "lucide-react";

const isList = [
  "An external, non-invasive risk assessment based on OSINT and public records",
  "A review of email authentication, breach exposure, and domain/infrastructure hygiene",
  "A plain-English scorecard with prioritized, actionable remediation steps",
  "A fast, affordable first look at the exposure attackers can see today",
];

const isNotList = [
  "A penetration test — we do not exploit systems, escalate privileges, or bypass controls",
  "An internal network, application, or configuration audit",
  "A compliance certification or formal attestation",
  "A guarantee that your firm cannot be breached — no assessment can promise that",
];

export function Transparency() {
  return (
    <section id="scope" className="section-py">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Why this isn&apos;t a full penetration test
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          A penetration test is a deep, hands-on exercise where a tester actively attempts to
          exploit your systems. It is valuable, and it typically costs five figures and takes weeks.
          Our Cyber Risk Audit is a different, lighter-weight service — and we would rather be
          precise about that up front than let you buy the wrong thing.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold">What our audit is</h3>
            <ul className="mt-4 space-y-3">
              {isList.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold">What it isn&apos;t</h3>
            <ul className="mt-4 space-y-3">
              {isNotList.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <XCircle
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          If a deeper engagement is the right fit for your firm, we will say so — and point you
          toward the type of assessment you actually need.
        </p>
      </div>
    </section>
  );
}
