import { MailWarning, UserSearch, Globe2, Lock } from "lucide-react";

const items = [
  {
    icon: MailWarning,
    title: "Email Spoofing Defense",
    body: "DMARC, SPF, and DKIM records reviewed for gaps that let attackers impersonate your firm in client-facing email — the most common route into wire fraud attempts.",
  },
  {
    icon: UserSearch,
    title: "Staff Breach & Dark Web Exposure",
    body: "We check publicly available breach data for staff addresses tied to your domain, so you know which accounts and passwords are already circulating.",
  },
  {
    icon: Globe2,
    title: "Domain & Infrastructure Security",
    body: "Domain registration hygiene, DNS configuration, exposed records, and lookalike-domain risk that could be used against your clients.",
  },
  {
    icon: Lock,
    title: "SSL / Port Configuration Review",
    body: "Premium tier. An external look at certificate health and publicly reachable services on your perimeter — observation only, never exploitation.",
    premium: true,
  },
];

export function WhatWeCheck() {
  return (
    <section id="what-we-check" className="section-py">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold md:text-4xl">What we check</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Every audit looks at the exposure that is visible from the outside — the same surface an
          attacker would study before targeting your firm or your clients.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent">
                <item.icon className="size-5 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="mt-4 flex flex-wrap items-center gap-2 text-lg font-semibold">
                {item.title}
                {item.premium && (
                  <span className="rounded-full bg-amber/25 px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase">
                    Premium
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
