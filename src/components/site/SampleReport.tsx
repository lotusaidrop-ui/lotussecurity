import { FileText, ListChecks, Gauge, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Served from /public so the file works on any host (Lovable + custom domain).
const SAMPLE_REPORT_URL = "/Lotus-Security-Sample-Cyber-Risk-Audit-Report.pdf";


const contents = [
  { icon: Gauge, label: "Overall risk score", note: "A single, defensible rating with the reasoning behind it." },
  { icon: FileText, label: "Findings by category", note: "Email, breach exposure, domain and infrastructure." },
  { icon: ListChecks, label: "Prioritized fix list", note: "Ranked by impact and effort, written for your IT provider." },
];

export function SampleReport() {
  return (
    <section id="sample-report" className="section-py bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">See the actual deliverable</h2>
          <p className="mt-4 text-muted-foreground">
            Lotus Security is a new, specialized practice run by a credentialed security analyst
            focused entirely on professional service firms. Rather than asking you to take our word
            for it, we would rather you read the work: download a redacted sample scorecard and judge
            the depth, clarity, and usefulness for yourself.
          </p>
          <p className="mt-4 text-muted-foreground">
            No sales call required — the sample is a PDF you can view instantly.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href={sampleReportAsset.url} download target="_blank" rel="noopener noreferrer">
                <Download className="size-5" aria-hidden="true" />
                Download Sample Report (PDF)
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Sample report shown uses a fictional company for illustration.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-7 shadow-lift">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Inside the 2-page scorecard
          </p>
          <ul className="mt-5 space-y-5">
            {contents.map((c) => (
              <li key={c.label} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                  <c.icon className="size-5 text-accent-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">{c.label}</p>
                  <p className="text-sm text-muted-foreground">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
            Samples are redacted and use illustrative data — no client information is ever shared.
          </p>
        </div>
      </div>
    </section>
  );
}

