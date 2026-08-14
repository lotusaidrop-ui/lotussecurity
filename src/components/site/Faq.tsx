import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this a penetration test?",
    a: "No. A penetration test actively attempts to exploit your systems. Our Cyber Risk Audit is an external, non-invasive assessment built on public and third-party data — we observe and analyze, we never exploit.",
  },
  {
    q: "Will this disrupt our systems or alert our IT provider?",
    a: "No. We do not log in, install anything, or send traffic that would degrade a service. The checks rely on public records, DNS, and breach data sources, so your day-to-day operations are unaffected.",
  },
  {
    q: "What do you need from us to start?",
    a: "Your domain name, an approximate list or count of staff mailboxes to include in the breach scan, and written authorization confirming you can request an assessment of that domain. No passwords, no system access.",
  },
  {
    q: "Is our data kept confidential?",
    a: "Yes. Findings are shared only with the person who commissioned the audit, working files are deleted after delivery on request, and we do not publish, resell, or reference your firm without written permission.",
  },
  {
    q: "What happens after we get the scorecard?",
    a: "You own the report and can hand it straight to your IT provider. Standard and Premium tiers include a briefing so someone can talk through the findings and the order to fix them in. There is no retainer and no obligation to continue.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-py bg-surface">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
