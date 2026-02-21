import { SectionTitle, Card, CardBody } from "../components/ui";
import { brand } from "../data/content";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="container py-12">
      <SectionTitle
        eyebrow="Contact"
        title="Get a quote or book a measurement"
        subtitle="This form works on Netlify (no backend needed)."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardBody>
            <div className="font-semibold">Send a request</div>
            <p className="mt-2 text-sm text-black/70">
              Tell us what you need. We’ll reply with next steps, timelines, and a price range.
            </p>

            {/* Netlify Forms */}
            <form
              className="mt-6 space-y-4"
              name="quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <Field label="Full name">
                <input name="name" required className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3" />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email">
                  <input type="email" name="email" required className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3" />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input name="phone" className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3" />
                </Field>
              </div>

              <Field label="Service needed">
                <select name="service" className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3">
                  <option>Measurement consultation</option>
                  <option>Custom curtains</option>
                  <option>Rods / rails</option>
                  <option>Installation</option>
                  <option>Repairs / reinstallation</option>
                </select>
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3"
                  placeholder="Rooms/windows, preferred style, location, and your timeline…"
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
              >
                Send <Send className="h-4 w-4" />
              </button>
            </form>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Direct contact</div>
            <ul className="mt-4 space-y-3 text-sm text-black/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> <a className="hover:underline" href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> <a className="hover:underline" href={`tel:${brand.phoneE164}`}>{brand.phoneDisplay}</a>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl bg-sand/60 border border-black/5 p-5">
              <div className="font-semibold">Fastest option</div>
              <p className="mt-2 text-sm text-black/70">
                WhatsApp us photos + measurements (if you have them) and we’ll guide you.
              </p>
              <a
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95"
                href={`https://wa.me/${brand.phoneE164.replace("+", "")}?text=${encodeURIComponent(
                  "Hi Curtain Studio! I'd like a quote. My location is _____."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-medium">{label}</div>
      <div className="mt-2">{children}</div>
    </label>
  );
}
