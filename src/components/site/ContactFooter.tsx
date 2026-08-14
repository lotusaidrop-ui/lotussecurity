import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "lotusaidrop@gmail.com";

export function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", domain: "", message: "" });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Cyber Risk Audit inquiry — ${form.domain || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company domain: ${form.domain}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-py">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Get your free audit quote</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us your domain and roughly how many staff mailboxes you would like included. We
            will reply with the right tier, the price, and a delivery date — usually the same
            business day.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            <Mail className="size-4 text-teal" aria-hidden="true" />
            {EMAIL}
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-border bg-card p-6 shadow-soft"
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required value={form.name} onChange={set("name")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={set("email")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="domain">Company domain</Label>
              <Input
                id="domain"
                placeholder="yourfirm.com"
                required
                value={form.domain}
                onChange={set("domain")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Firm type, number of staff mailboxes, anything specific you're worried about."
                value={form.message}
                onChange={set("message")}
              />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-2 w-full">
              Send inquiry
            </Button>
            <p className="text-xs text-muted-foreground">
              This opens your email client with the details pre-filled — nothing is stored on this
              site.
            </p>
          </div>
        </form>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-border px-5 pt-8">
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display font-semibold text-foreground">Lotus Security</span>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
            {EMAIL}
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Lotus Security provides external Cyber Risk Audits, not penetration testing services. All
          engagements are governed by our Terms of Service.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lotus Security. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
