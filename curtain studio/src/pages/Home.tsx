import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brand, sections, milestones } from "../data/content";
import { Card, CardBody, SectionTitle } from "../components/ui";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Drill,
  Home as HomeIcon,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
  Layers3,
  PanelTop,
} from "lucide-react";

import heroImg from "../assets/hero_living_room.png";
import galleryImg1 from "../assets/WhatsApp Image 2026-02-21 at 23.04.00.jpeg";
import galleryImg2 from "../assets/WhatsApp Image 2026-02-21 at 23.04.12.jpeg";
import galleryImg3 from "../assets/WhatsApp Image 2026-02-21 at 23.05.06.jpeg";
import rodImg from "../assets/curt-4.jpeg";
import curt1 from "../assets/curt-1.jpeg";
import curt2 from "../assets/curt-2.jpeg";
import curt3 from "../assets/curt-3.jpeg";
import curt4 from "../assets/curt.jpeg";

const homeGallery = [
  { src: galleryImg1, alt: "Double layer bedroom curtains", tag: "Double Layer" },
  { src: galleryImg2, alt: "Soft sheer and curtain combination", tag: "Sheers" },
  { src: galleryImg3, alt: "Full bedroom curtain styling", tag: "Blackout" },
  { src: curt1, alt: "Elegant finished curtain setup", tag: "Bedroom" },
  { src: curt2, alt: "Close-up sheer curtain detail", tag: "Sheers" },
  { src: curt3, alt: "Wide window curtain installation", tag: "Installation" },
];

const curtainStyles = [
  {
    title: "Grommet",
    text: "Modern and clean with easy sliding on decorative rods.",
  },
  {
    title: "Tab Top",
    text: "Soft casual styling that gives a relaxed decorative finish.",
  },
  {
    title: "Pinch Pleat",
    text: "A fuller classic look with elegant folds and structured drape.",
  },
  {
    title: "Ripple Fold",
    text: "Smooth wave finish for a sleek and contemporary interior feel.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Elegant curtain installation in a living room"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative container flex min-h-[88vh] items-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-white"
          >
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur">
              Elegant Window Dressing
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              {brand.name}
              <span className="mt-3 block text-xl font-normal text-white/80 md:text-2xl">
                {brand.tagline}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Custom curtains and professional installation for homes that need a
              soft, polished, finished look. We measure at your home, help you choose
              the right style, and install neatly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c49a6c] px-6 py-3 text-white shadow-soft hover:opacity-95"
              >
                Get an estimate <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/15"
              >
                View gallery
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <BrandStat
                icon={<HomeIcon className="h-4 w-4 text-[#c49a6c]" />}
                value="At-home consult"
                label="Measure & advise"
                dark
              />
              <BrandStat
                icon={<Clock3 className="h-4 w-4 text-[#c49a6c]" />}
                value="Quick turnaround"
                label="Fast booking"
                dark
              />
              <BrandStat
                icon={<ShieldCheck className="h-4 w-4 text-[#c49a6c]" />}
                value="Professional finish"
                label="Neat installation"
                dark
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}  
     <section className="border-t border-black/5 bg-white/40">
             <div className="container py-12">
               <SectionTitle
                 eyebrow="Why Curtain Studio"
                 title="Affordable style — professionally installed"
                 subtitle={sections.executiveSummary.mission}
               />
     
               {/* Top value cards */}
               <div className="mt-8 grid gap-6 lg:grid-cols-3">
                 <ValueCard
                   icon={<Ruler className="h-5 w-5 text-brass" />}
                   title="Measure & advise"
                   text="We help you choose the right style, fabric and fit — then measure accurately for a clean result."
                 />
                 <ValueCard
                   icon={<Sparkles className="h-5 w-5 text-brass" />}
                   title="Custom-made finish"
                   text="Neat stitching, balanced drape, and attention to detail — built to look premium in your space."
                 />
                 <ValueCard
                   icon={<Drill className="h-5 w-5 text-brass" />}
                   title="Install & style"
                   text="Rods/rails installed properly, curtains hung correctly, and the final look finished professionally."
                 />
               </div>
     
               {/* The “promise” card that keeps your real business plan content */}
               <div className="mt-8 grid gap-6 md:grid-cols-2">
                 <Card>
                   <CardBody>
                     <div className="flex items-center gap-2 font-semibold">
                       <CheckCircle2 className="h-5 w-5 text-brass" />
                       What we do
                     </div>
     
                     <ul className="mt-4 space-y-2 text-black/70">
                       {sections.executiveSummary.highlights.map((h) => (
                         <li key={h} className="flex gap-2">
                           <CheckCircle2 className="h-5 w-5 text-brass shrink-0" />
                           <span>{h}</span>
                         </li>
                       ))}
                     </ul>
                   </CardBody>
                 </Card>
     
                 <Card>
                   <CardBody>
                     <div className="flex items-center gap-2 font-semibold">
                       <CheckCircle2 className="h-5 w-5 text-brass" />
                       What makes us different
                     </div>
     
                     <ul className="mt-4 space-y-2 text-black/70">
                       {sections.whatMakesDifferent.map((h) => (
                         <li key={h} className="flex gap-2">
                           <CheckCircle2 className="h-5 w-5 text-brass shrink-0" />
                           <span>{h}</span>
                         </li>
                       ))}
                     </ul>
                   </CardBody>
                 </Card>
               </div>
     
             </div>
     </section>

      {/* SERVICES / FEATURED LOOKS */}
      <section className="border-t border-black/5">
        <div className="container py-14">
          <SectionTitle
            eyebrow="Featured looks"
            title="Designed for real homes"
            subtitle="From soft sheers to full blackout combinations, we create curtain solutions that feel warm, elegant, and practical."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-soft">
              <img
                src={galleryImg1}
                alt="Elegant bedroom curtains"
                className="h-[340px] w-full object-cover"
              />
              <div className="p-6">
                <div className="text-lg font-semibold">Double layer elegance</div>
                <div className="mt-2 text-sm text-black/70">
                  A soft sheer layer for daytime light and a heavier curtain layer for
                  privacy, warmth, and a refined finish.
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
                  <Scissors className="h-5 w-5 text-brass" />
                </div>
                <div className="mt-4 text-lg font-semibold">Custom curtains</div>
                <div className="mt-2 text-sm text-black/70">
                  Tailored to your exact measurements with quality fabric, soft drape,
                  and a finish that suits your room.
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
                  <PanelTop className="h-5 w-5 text-brass" />
                </div>
                <div className="mt-4 text-lg font-semibold">Rods & rails</div>
                <div className="mt-2 text-sm text-black/70">
                  Decorative rods, practical rails, and hardware options that match
                  both the curtain style and your interior.
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
                  <Layers3 className="h-5 w-5 text-brass" />
                </div>
                <div className="mt-4 text-lg font-semibold">Layered styling</div>
                <div className="mt-2 text-sm text-black/70">
                  Combine sheers with dimout or blackout curtains for a fuller, richer,
                  more flexible window treatment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURTAIN STYLES */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="container py-14">
          <SectionTitle
            eyebrow="Curtain styles"
            title="Choose the finish that suits your space"
            subtitle="Different headings create different moods — modern, classic, soft, or structured."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {curtainStyles.map((style) => (
              <div
                key={style.title}
                className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-soft"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-sand">
                  <Sparkles className="h-5 w-5 text-brass" />
                </div>
                <div className="mt-4 text-lg font-semibold">{style.title}</div>
                <div className="mt-2 text-sm text-black/70">{style.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODS & RAILS FEATURE */}
      <section className="border-t border-black/5">
        <div className="container py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-black/10 shadow-soft">
              <img
                src={rodImg}
                alt="Curtain rods and rails display"
                className="h-[460px] w-full object-cover"
              />
            </div>

            <div>
              <SectionTitle
                eyebrow="Rods & rails"
                title="Hardware that completes the look"
                subtitle="The right rod or rail can completely change the final feel of a room."
              />

              <div className="mt-6 grid gap-4">
                <FeatureRow
                  title="Decorative rods"
                  text="Ideal for visible curtain styling with elegant finials and a stronger design statement."
                />
                <FeatureRow
                  title="Practical rails"
                  text="Great for smooth movement, layered curtains, and a cleaner fitted look."
                />
                <FeatureRow
                  title="Matched finishes"
                  text="Choose tones and hardware styles that suit your curtains, wall colour, and room aesthetic."
                />
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95"
                >
                  Book a consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-black/5">
        <div className="container py-14">
          <SectionTitle
            eyebrow="How it works"
            title="Three simple steps"
            subtitle="From measurement to install — straightforward, professional, and stress-free."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <Ruler className="h-5 w-5 text-brass" />,
                title: "Measure",
                text: "We visit your home and measure your windows accurately.",
              },
              {
                icon: <Scissors className="h-5 w-5 text-brass" />,
                title: "Make",
                text: "Your curtains are prepared to fit your chosen style and space.",
              },
              {
                icon: <Drill className="h-5 w-5 text-brass" />,
                title: "Install",
                text: "We install rods or rails and hang everything neatly.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
                  {s.icon}
                </div>
                <div className="mt-4 text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-black/70">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="container py-14">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Gallery"
              title="Recent curtain installations"
              subtitle="A few finished looks using your actual curtain images."
            />
            <Link
              to="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-brass hover:underline"
            >
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeGallery.map((img) => (
              <div
                key={img.alt}
                className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                    {img.tag}
                  </div>
                  <div className="mt-2 text-sm font-medium">{img.alt}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-brass hover:underline"
            >
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-paper/70 p-6 shadow-soft md:p-8">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div>
                <div className="text-sm text-black/60">Ready when you are</div>
                <div className="mt-1 text-xl font-semibold md:text-2xl">
                  Get an estimate, then we’ll confirm everything with measurements.
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Simple steps. Clear communication. Beautiful results.
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95"
                >
                  Get an estimate <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-black/5 bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95"
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

function BrandStat({
  icon,
  value,
  label,
  dark = false,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-4 py-4 shadow-soft backdrop-blur ${
        dark
          ? "border-white/15 bg-white/10 text-white"
          : "border-black/10 bg-paper/70"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-xl ${
            dark ? "bg-white/10 border border-white/10" : "bg-sand border border-black/10"
          }`}
        >
          {icon}
        </span>
        <div className={`text-sm font-semibold ${dark ? "text-white" : "text-ink"}`}>
          {value}
        </div>
      </div>
      <div className={`mt-2 text-xs ${dark ? "text-white/70" : "text-black/60"}`}>
        {label}
      </div>
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
    <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sand border border-black/10">
        {icon}
      </div>
      <div className="mt-4 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-black/70">{text}</div>
    </div>
  );
}

function FeatureRow({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-soft">
      <div className="font-semibold text-ink">{title}</div>
      <div className="mt-2 text-sm text-black/70">{text}</div>
    </div>
  );
}