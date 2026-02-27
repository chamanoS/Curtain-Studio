// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero_living_room.png";
import processImg from "../assets/process_img.jpg";
import { brand } from "../data/content";
import { SectionTitle } from "../components/ui";
import {
  ArrowRight,
  Clock3,
  Drill,
  Home as HomeIcon,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ✅ Home gallery preview (keep this light + clean)
// Add more images later (just import and extend this array)
const homeGallery = [
  { src: heroImg, alt: "Living room curtains" },
  { src: processImg, alt: "Interior inspiration" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-black/5">
        <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-2 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {brand.name}
              <span className="block text-black/60 text-2xl md:text-3xl mt-2">
                {brand.tagline}
              </span>
            </h1>

            <p className="mt-4 text-black/70 max-w-prose">
              Custom curtains and professional installation — measured at your home,
              made to fit, and finished cleanly.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/quote"
                className="rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
              >
                Get an estimate <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95 inline-flex items-center justify-center border border-black/5"
              >
                Book a measurement
              </Link>
            </div>

            {/* Minimal brand stats (clear + not salesy) */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <BrandStat
                icon={<HomeIcon className="h-4 w-4 text-brass" />}
                value="At-home consult"
                label="Measure & advise"
              />
              <BrandStat
                icon={<Clock3 className="h-4 w-4 text-brass" />}
                value="Fast booking"
                label="Quick scheduling"
              />
              <BrandStat
                icon={<ShieldCheck className="h-4 w-4 text-brass" />}
                value="Clean finish"
                label="Neat install"
              />
            </div>
          </div>

          {/* Right (hero image) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={heroImg}
              alt="Styled living room with curtains"
              className="w-full h-[360px] md:h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Small elegant badge */}
            <div className="absolute left-4 bottom-4 rounded-2xl bg-paper/85 backdrop-blur border border-black/10 shadow-soft px-3 py-2 text-xs text-black/70 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brass" />
              Measure • Make • Install
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US (simple, no long repeating lists) */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="container py-12">
          <SectionTitle
            eyebrow="Why Curtain Studio"
            title="Beautiful curtains. Clean installation."
            subtitle="A simple service designed for busy people — we measure, make, and install."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <ValueCard
              icon={<Ruler className="h-5 w-5 text-brass" />}
              title="Measured properly"
              text="We measure at your home and guide you on the best fit and style."
            />
            <ValueCard
              icon={<Sparkles className="h-5 w-5 text-brass" />}
              title="Made to fit"
              text="Neat stitching and a balanced drape — tailored for your windows."
            />
            <ValueCard
              icon={<Drill className="h-5 w-5 text-brass" />}
              title="Installed cleanly"
              text="Rods/rails installed right, curtains hung straight, and the look finished."
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/products"
              className="rounded-xl bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95 inline-flex items-center justify-center border border-black/5"
            >
              View products
            </Link>
            <Link
              to="/downloads"
              className="rounded-xl bg-white px-5 py-3 text-ink shadow-soft hover:bg-black/5 inline-flex items-center justify-center border border-black/10"
            >
              Download brochure
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (compact + clean) */}
      <section className="border-t border-black/5">
        <div className="container py-12">
          <SectionTitle
            eyebrow="How it works"
            title="Three simple steps"
            subtitle="From measurement to install — straightforward and professional."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <Ruler className="h-5 w-5 text-brass" />,
                title: "Measure",
                text: "We visit your home and measure accurately.",
              },
              {
                icon: <Scissors className="h-5 w-5 text-brass" />,
                title: "Make",
                text: "Your curtains are made to fit your space.",
              },
              {
                icon: <Drill className="h-5 w-5 text-brass" />,
                title: "Install",
                text: "We install and finish the look neatly.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur shadow-soft p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
                  {s.icon}
                </div>
                <div className="mt-4 font-semibold text-lg">{s.title}</div>
                <div className="mt-2 text-sm text-black/70">{s.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-black/70">
            <span className="font-medium text-ink">Promise:</span> accurate measurement, quality finish, clean installation.
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW (keep home light; full gallery on /gallery) */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="container py-12">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Gallery"
              title="A few recent looks"
              subtitle="Explore styles and finishes — then pick what fits your space."
            />
            <Link
              to="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-brass hover:underline"
            >
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {homeGallery.map((img) => (
              <div
                key={img.alt}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-brass hover:underline">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Final CTA */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-paper/70 backdrop-blur shadow-soft p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <div className="text-sm text-black/60">Ready when you are</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold">
                  Get an estimate, then we’ll confirm with measurements.
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Simple steps. Clear communication. Clean results.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/quote"
                  className="rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
                >
                  Get an estimate <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95 inline-flex items-center justify-center border border-black/5"
                >
                  Book a measurement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- small UI helpers (keep in same file for simplicity) ---------- */

function BrandStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-paper/70 backdrop-blur border border-black/10 shadow-soft px-3 py-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sand border border-black/10">
          {icon}
        </span>
        <div className="text-sm font-semibold text-ink">{value}</div>
      </div>
      <div className="text-xs text-black/60 mt-2">{label}</div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur shadow-soft p-6">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
        {icon}
      </div>
      <div className="mt-4 font-semibold text-lg">{title}</div>
      <div className="mt-2 text-sm text-black/70">{text}</div>
    </div>
  );
}