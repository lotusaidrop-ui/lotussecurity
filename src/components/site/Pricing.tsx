import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  { name: "Basic", price: "$295", delivery: "1-day delivery" },
  { name: "Standard", price: "$495", delivery: "2-day delivery", featured: true },
  { name: "Premium", price: "$895", delivery: "3-day delivery" },
];

const rows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Delivery time", values: ["1 business day", "2 business days", "3 business days"] },
  { label: "Staff breach scan", values: ["10 emails", "25 emails", "100 emails"] },
  { label: "DMARC / SPF / DKIM analysis", values: [true, true, true] },
  { label: "Visual risk scorecard", values: [true, true, true] },
  { label: "AI data-leak check", values: [false, true, true] },
  { label: "Endpoint questionnaire", values: [false, true, true] },
  { label: "15-minute briefing call", values: [false, true, true] },
  { label: "Dark web executive search", values: [false, false, true] },
  { label: "SSL / port configuration review", values: [false, false, true] },
  { label: "Written remediation guide", values: [false, false, true] },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "string") return <span className="text-sm">{value}</span>;
  return value ? (
    <Check className="mx-auto size-4 text-teal" aria-label="Included" />
  ) : (
    <Minus className="mx-auto size-4 text-muted-foreground/50" aria-label="Not included" />
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section-py">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold md:text-4xl">Pricing</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Flat-fee engagements. One domain per audit, no retainers, no long-term contract.
        </p>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-5 lg:hidden">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`rounded-xl border bg-card p-6 ${tier.featured ? "border-teal shadow-lift" : "border-border shadow-soft"}`}
            >
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-1 font-display text-3xl font-semibold">{tier.price}</p>
              <p className="text-sm text-muted-foreground">{tier.delivery}</p>
              <ul className="mt-4 space-y-2">
                {rows.slice(1).map((row) => {
                  const v = row.values[i];
                  if (v === false) return null;
                  return (
                    <li key={row.label} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                      <span>
                        {row.label}
                        {typeof v === "string" ? `: ${v}` : ""}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Button variant={tier.featured ? "hero" : "navy"} className="mt-6 w-full" asChild>
                <a href="#contact">Request {tier.name}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-hidden rounded-xl border border-border bg-card shadow-soft lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="w-[34%] px-6 py-6 text-left align-bottom text-sm font-medium text-muted-foreground">
                  Included in each tier
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={`px-6 py-6 text-center ${tier.featured ? "bg-accent/50" : ""}`}
                  >
                    <span className="text-sm font-semibold tracking-wide uppercase">
                      {tier.name}
                    </span>
                    <span className="mt-1 block font-display text-3xl font-semibold">
                      {tier.price}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {tier.delivery}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border/70">
                  <td className="px-6 py-3.5 text-sm">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`px-6 py-3.5 text-center ${tiers[i]?.featured ? "bg-accent/30" : ""}`}
                    >
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="px-6 py-6" />
                {tiers.map((tier) => (
                  <td
                    key={tier.name}
                    className={`px-6 py-6 text-center ${tier.featured ? "bg-accent/30" : ""}`}
                  >
                    <Button variant={tier.featured ? "hero" : "navy"} asChild>
                      <a href="#contact">Request {tier.name}</a>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
