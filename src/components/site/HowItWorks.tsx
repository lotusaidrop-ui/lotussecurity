const steps = [
  {
    title: "You share your domain and scope",
    body: "A short intake: your domain name, roughly how many staff mailboxes to include, and any subsidiaries. No credentials, no software, no access to your systems.",
  },
  {
    title: "We run a non-invasive external scan",
    body: "Everything is gathered from public and third-party sources (OSINT) and passive checks against your public records. Nothing is exploited and nothing is disrupted.",
  },
  {
    title: "You receive a 2-page visual risk scorecard",
    body: "Plain-English findings, severity ratings, and what each issue would actually mean for your firm and your clients — not a raw tool dump.",
  },
  {
    title: "We walk you through prioritized fixes",
    body: "A ranked remediation list you can hand to your IT provider, plus a briefing call on the Standard and Premium tiers to answer questions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Four steps, no installs, no downtime. We never access internal systems or client data.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-border bg-card p-6">
              <span className="font-display text-sm font-semibold text-teal">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
