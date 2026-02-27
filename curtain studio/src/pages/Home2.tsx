import { motion } from "framer-motion";
import heroImg from "../assets/hero_living_room.png";
import productsImg from "../assets/products_collage.png";
import timelineImg from "../assets/timeline.png";
import processImg from "../assets/process_img.jpg";
import { brand, sections, milestones } from "../data/content";
import { Card, CardBody, SectionTitle } from "../components/ui";
import { Link } from "react-router-dom";
import Gallery from "../pages/Gallery";
import QuoteEstimator from "../components/quote/QuoteEstimator";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Ruler,
  Drill,
  Scissors,
  Clock3,
  ShieldCheck,
  Home as HomeIcon,
} from "lucide-react";

const homeGallery = [
  { src: processImg, alt: "Interior inspiration" },
  { src: heroImg, alt: "Living room curtains" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-black/5">
        <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-xs text-black/70">
              <Sparkles className="h-4 w-4 text-brass" />
              Custom curtains • Mobile consultations • Professional installation
            </div> */}
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              {brand.name}
              <span className="block text-black/60 text-2xl md:text-3xl mt-2">
                {brand.tagline}
              </span>
            </h1>
            <p className="mt-4 text-black/70">
              A growing décor brand specialising in custom curtains, rods,
              rails, accessories, and installation — structured around a clear deposit 
              and booking process for smooth project delivery.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
              >
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="rounded-xl bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95 inline-flex items-center justify-center"
              >
                View products
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <BrandStat
                icon={<HomeIcon className="h-4 w-4 text-brass" />}
                value="At-home consult"
                label="We come measure & advise"
              />
              <BrandStat
                icon={<Clock3 className="h-4 w-4 text-brass" />}
                value="Fast turnaround"
                label="Quick quote + scheduling"
              />
              <BrandStat
                icon={<ShieldCheck className="h-4 w-4 text-brass" />}
                value="Pro finish"
                label="Neat install & styling"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-soft border border-black/5 bg-white"
          >
            <img
              src={heroImg}
              alt="Styled living room with curtains"
             className="w-full h-[350px] md:h-[450px] object-cover"

            />
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

          {/* Bottom CTA strip */}
          <div className="mt-10 rounded-3xl border border-black/10 bg-paper/70 backdrop-blur shadow-soft p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <div className="text-sm text-black/60">Ready to start?</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold">
                  Get a quick estimate, then we’ll confirm with measurements.
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Use the estimator to get a range — we’ll refine it based on your space and fabric choice.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/quote"
                  className="rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
                >
                  Estimate my project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95 inline-flex items-center justify-center border border-black/5"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Gallery */}
      <Gallery />

      {/* ✅ REPLACED MILESTONES: conversion-focused “How it works” + “Promise” */}
      <section className="border-t border-black/5">
        <div className="container py-12">
          <SectionTitle
            eyebrow="How it works"
            title="A simple, clean process — from measurement to install"
            subtitle="Designed for convenience and a premium finish."
          />


          <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-soft bg-white">
              <img
                src={processImg}
                alt="Interior styling inspiration"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>

            <Card>
              <CardBody>
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="h-5 w-5 text-brass" />
                  The Curtain Studio Promise
                </div>

                <ul className="mt-3 space-y-2 text-black/70">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0" />
                    <span>Accurate measurements and clear recommendations</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0" />
                    <span>
                      Quality materials + a neat, professional install
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brass shrink-0" />
                    <span>
                      Simple booking, simple communication, clean results
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/quote"
                    className="rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
                  >
                    Estimate my project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-xl bg-sand px-5 py-3 text-ink shadow-soft hover:opacity-95 inline-flex items-center justify-center"
                  >
                    Book a consultation
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/60 border border-black/5 shadow-soft px-3 py-3">
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-xs text-black/60 mt-1">{label}</div>
    </div>
  );
}

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
function ProcessCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur border border-black/10 shadow-soft p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sand border border-black/10">
        {icon}
      </div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-black/70">{text}</div>
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