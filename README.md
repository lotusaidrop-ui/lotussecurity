# Lotus Security Website

Build a clean, professional, trustworthy one-page marketing website for a B2B cybersecurity consulting business called Lotus Security.

BUSINESS CONTEXT
Lotus Security offers fast, affordable Cyber Risk Audits (NOT penetration tests — this distinction matters and should be reflected in the copy) for small-to-medium professional service businesses: law firms, CPA/accounting firms, title & escrow companies, and wealth management practices. We replace expensive traditional penetration tests with a same-day, non-invasive external audit that checks email spoofing defenses, staff breach exposure, and domain security — delivered as a clear, visual risk scorecard with a prioritized fix list.

Contact email: lotusaidrop@gmail.com

DESIGN DIRECTION
Professional, calm, trustworthy — think modern security/fintech SaaS aesthetic, not flashy or "hacker" themed. Clean typography, generous whitespace, a restrained color palette (deep navy/charcoal + one accent color, e.g. teal or amber for risk indicators). Avoid stock hacker imagery (hoodies, green matrix code, skulls). Fully responsive.

PAGE SECTIONS (single page, anchor-linked nav)

1. Hero: Headline focused on the core value prop (e.g. "Know your real-world cyber exposure — without the $10,000 penetration test"). Subheadline explaining the 24-72hr turnaround and non-invasive nature. Primary CTA button "Get Your Free Audit Quote" linking to a contact form or mailto:lotusaidrop@gmail.com.

2. What We Check: A grid/list of what the audit covers — Email Spoofing Defense (DMARC/SPF/DKIM), Staff Breach & Dark Web Exposure, Domain & Infrastructure Security, (Premium tier) SSL/Port Configuration Review. Use icons, not decorative hacking graphics.

3. How It Works: A simple 4-step process — (1) You share your domain and scope, (2) We run a non-invasive external scan, (3) You receive a 2-page visual risk scorecard, (4) We walk you through prioritized fixes. Keep this honest and simple — do not imply we access internal systems.

4. Pricing: Three tiers as a comparison table — Basic ($295, 1-day delivery, 10-email breach scan, DMARC/SPF/DKIM analysis), Standard ($495, 2-day delivery, 25-email scan, AI data-leak check, endpoint questionnaire, 15-min briefing), Premium ($895, 3-day delivery, 100-email scan, dark web executive search, SSL/port review, remediation guide).

5. Sample Report: A section inviting visitors to request a free sample report by email, showcasing that we produce real, professional deliverables. Do NOT display fabricated testimonials, review scores, client logos, or claims like "trusted by X businesses" — we have no real clients yet, and any such claims must not be invented. Instead, be honest and confident: frame this as a new, specialized practice run by a credentialed security analyst, and let the sample report and clear process speak for themselves.

6. Why Not a Full Penetration Test: A short section transparently explaining what this audit is and isn't — an external, non-invasive risk assessment (OSINT-based), not a penetration test involving exploitation. This builds trust through honesty rather than overclaiming.

7. About: A brief, honest founder section — a cybersecurity-focused analyst/consultant building a specialized practice for professional service firms. No fabricated years of experience or credentials beyond what's true.

8. FAQ: 4-5 questions such as "Is this a penetration test?", "Will this disrupt our systems?", "What do you need from us to start?", "Is our data kept confidential?"

9. Contact / CTA footer: Simple contact form (name, email, company domain, message) that mailto's to lotusaidrop@gmail.com, plus the email listed directly. Footer disclaimer line: "Lotus Security provides external Cyber Risk Audits, not penetration testing services. All engagements are governed by our Terms of Service."

IMPORTANT CONSTRAINTS
- Do not generate or display any fake reviews, testimonials, client names, client logos, star ratings, or usage statistics anywhere on the site — we have zero real clients so far and the site must not imply otherwise.
- Do not use the word "penetration test" to describe our service anywhere except in the section explicitly explaining that we are NOT one.
- Keep copy confident but honest — no exaggerated claims about guaranteed security or eliminating all risk.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lotussecurity.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d959869a-5856-4cb5-941f-cfadb38c6110).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
