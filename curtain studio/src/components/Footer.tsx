import { brand } from "../data/content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-paper">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">{brand.name}</div>
          <div className="text-sm text-black/70 mt-1">{brand.tagline}</div>
          <div className="text-sm text-black/60 mt-3">
            Mobile consultations • Custom fit • Professional installation
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-black/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> <a className="hover:underline" href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> <a className="hover:underline" href={`tel:${brand.phoneE164}`}>{brand.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {brand.locationLine}
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Quick actions</div>
          <div className="mt-3 flex flex-col gap-2">
            <a
              className="rounded-xl bg-ink px-4 py-2 text-paper text-center shadow-soft hover:opacity-95"
              href={`https://wa.me/${brand.phoneE164.replace("+", "")}?text=${encodeURIComponent(
                "Hi Curtain Studio! Please share your catalogue and pricing."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Request catalogue (WhatsApp)
            </a>
            <a
              className="rounded-xl bg-sand px-4 py-2 text-ink text-center shadow-soft hover:opacity-95"
              href="/contact"
            >
              Get a quote
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container py-5 text-xs text-black/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span className="hidden md:inline">Built for Netlify • SPA</span>
        </div>
      </div>
    </footer>
  );
}
