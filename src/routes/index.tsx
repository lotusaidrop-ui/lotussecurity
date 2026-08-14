import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { WhatWeCheck } from "@/components/site/WhatWeCheck";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { SampleReport } from "@/components/site/SampleReport";
import { Transparency } from "@/components/site/Transparency";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { ContactFooter } from "@/components/site/ContactFooter";

const title = "Lotus Security — Fast Cyber Risk Audits for Professional Firms";
const description =
  "Non-invasive external Cyber Risk Audits for law, accounting, title & escrow, and wealth firms. Email spoofing, breach exposure, and domain checks in 24–72 hours from $295.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      <SiteNav />
      <main>
        <Hero />
        <WhatWeCheck />
        <HowItWorks />
        <Pricing />
        <SampleReport />
        <Transparency />
        <About />
        <Faq />
        <ContactFooter />
      </main>
    </div>
  );
}
