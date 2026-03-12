import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/content";
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
  PanelTop,
} from "lucide-react";

import heroImg from "../assets/home.jpg";
import galleryImg1 from "../assets/curt1.jpg";
import galleryImg2 from "../assets/curt2.jpg";
import galleryImg3 from "../assets/curt3.jpg";
import curt1 from "../assets/curt-1.jpeg";
import curt2 from "../assets/curt-2.jpeg";
import curt3 from "../assets/curt-3.jpeg";

const homeGallery = [
  {
    src: galleryImg1,
    alt: "Elegant double layer living room curtains",
    tag: "Double Layer",
  },
  {
    src: galleryImg2,
    alt: "Soft neutral bedroom curtains",
    tag: "Sheers",
  },
  {
    src: galleryImg3,
    alt: "Bedroom blackout curtain styling",
    tag: "Blackout",
  },
  {
    src: curt1,
    alt: "Light-filtering sheer installation",
    tag: "Sheers",
  },
  {
    src: curt2,
    alt: "Pleated curtain detail",
    tag: "Rails & Rods",
  },
  {
    src: curt3,
    alt: "Warm-toned curtain installation",
    tag: "Double Layer",
  },
];

const testimonials = [
  {
    quote:
      "Absolutely stunning work. The team was professional from start to finish, and our living room looks completely transformed.",
    name: "Sarah M.",
    location: "Sandton",
  },
  {
    quote:
      "We had our home fitted with custom curtains and were impressed by the attention to detail, fabric quality, and neat installation.",
    name: "James & Linda T.",
    location: "Centurion",
  },
  {
    quote:
      "The mobile consultation made everything easy. We got helpful advice, the right style for our space, and a flawless final result.",
    name: "Nomsa K.",
    location: "Midrand",
  },
];

const galleryTabs = ["All", "Sheers", "Blackout", "Double Layer", "Rails & Rods"];

export default function Home() {
  const [activeGalleryTab, setActiveGalleryTab] = useState("All");

  const filteredGallery = useMemo(() => {
    if (activeGalleryTab === "All") return homeGallery;
    return homeGallery.filter((item) => item.tag === activeGalleryTab);
  }, [activeGalleryTab]);

  return (
    <div className="bg-white text-[#1f1f1f]">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Elegant curtain installation in a modern home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-black/15" />

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
              Custom Curtains & Professional Installation
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              Transform your home with beautifully finished curtains, expert
              measurements, and neat installation. We help you choose the right
              style, fit your space properly, and deliver a polished final look.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c49a6c] px-6 py-3 text-white shadow-lg hover:opacity-95"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/15"
              >
                Book a Consultation
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <BrandStat
                icon={<HomeIcon className="h-4 w-4 text-[#c49a6c]" />}
                value="At-home consult"
                label="Advice and measurements"
                dark
              />
              <BrandStat
                icon={<Clock3 className="h-4 w-4 text-[#c49a6c]" />}
                value="Simple process"
                label="From quote to install"
                dark
              />
              <BrandStat
                icon={<ShieldCheck className="h-4 w-4 text-[#c49a6c]" />}
                value="Professional finish"
                label="Clean, elegant results"
                dark
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-t border-black/5 bg-[#fbfaf8]">
        <div className="container py-16">
          <SectionHeader
            eyebrow="Why choose us"
            title="A curtain service designed to feel easy, elegant, and professional"
            subtitle="We bring together style guidance, accurate measurements, quality finishing, and neat installation — so your home looks complete without the stress."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <ValueCard
              icon={<Ruler className="h-5 w-5 text-[#b8875c]" />}
              title="Measured properly"
              text="We measure your windows accurately and guide you on what style, width, and drop will work best in your space."
            />
            <ValueCard
              icon={<Sparkles className="h-5 w-5 text-[#b8875c]" />}
              title="Made to suit your home"
              text="From soft sheers to layered combinations, every curtain is chosen and finished to complement your room."
            />
            <ValueCard
              icon={<Drill className="h-5 w-5 text-[#b8875c]" />}
              title="Installed neatly"
              text="We fit rods or rails properly, hang your curtains cleanly, and leave your room looking polished and complete."
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <InfoCard
              title="What you can expect"
              items={[
                "Friendly at-home consultation",
                "Guidance on style, fabric and finish",
                "Accurate measuring for a better fit",
                "Professional installation and final styling",
              ]}
            />

            <InfoCard
              title="Why clients choose us"
              items={[
                "Convenient mobile service",
                "Elegant results tailored to real homes",
                "Attention to detail from start to finish",
                "Clear communication and a smooth process",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="border-t border-black/5 bg-white">
        <div className="container py-16">
          <SectionHeader
            eyebrow="Our services"
            title="What we offer"
            subtitle="Everything you need for a beautiful, complete window treatment — from consultation to final installation."
            center
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <OfferCard
              icon={<Scissors className="h-5 w-5 text-[#b8875c]" />}
              title="Custom Curtains"
              text="Tailored to your space with elegant finishes, balanced drape, and the right look for your home."
            />

            <OfferCard
              icon={<PanelTop className="h-5 w-5 text-[#b8875c]" />}
              title="Rods & Rails"
              text="Quality rods and rails supplied and fitted to match your curtain style and interior aesthetic."
            />

            <OfferCard
              icon={<Drill className="h-5 w-5 text-[#b8875c]" />}
              title="Installation"
              text="Professional fitting that ensures your curtains hang neatly and your final look feels complete."
            />

            <OfferCard
              icon={<HomeIcon className="h-5 w-5 text-[#b8875c]" />}
              title="Mobile Consultation"
              text="Expert advice, measurements, and style guidance in the comfort of your own home."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-black/5 bg-[#f8f6f2]">
        <div className="container py-16">
          <SectionHeader
            eyebrow="How it works"
            title="A simple process from first visit to final install"
            subtitle="We make it easy to move from idea to finished result with a clear, professional process."
            center
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <StepCard
              number="01"
              icon={<Ruler className="h-5 w-5 text-[#b8875c]" />}
              title="Measure & advise"
              text="We visit your home, take measurements, and guide you on styles, fabrics, and the best finish for your space."
            />
            <StepCard
              number="02"
              icon={<Scissors className="h-5 w-5 text-[#b8875c]" />}
              title="Prepare your order"
              text="Your curtains and hardware are arranged according to your selected look, fit, and room requirements."
            />
            <StepCard
              number="03"
              icon={<Drill className="h-5 w-5 text-[#b8875c]" />}
              title="Install beautifully"
              text="We fit everything neatly and make sure the final result feels polished, balanced, and ready to enjoy."
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-black/5 bg-white">
        <div className="container py-16">
          <SectionHeader
            eyebrow="Gallery"
            title="See the look in real spaces"
            subtitle="A selection of finished curtain installations showing different styles, tones, and room settings."
            center
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {galleryTabs.map((tab) => {
              const isActive = activeGalleryTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-[#b8875c] text-white shadow-sm"
                      : "bg-[#ece8e1] text-black/65 hover:bg-[#e4ddd3]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mt-10 mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4">
            {filteredGallery.map((img) => (
              <div
                key={img.alt}
                className="group overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
                      {img.tag}
                    </span>
                    <p className="mt-2 text-sm font-medium text-white">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#b8875c] hover:underline"
            >
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-black/5 bg-[#f8f6f2]">
        <div className="container py-16">
          <SectionHeader
            eyebrow="Client love"
            title="What our clients say"
            subtitle="Real feedback from clients who trusted us to transform their homes."
            center
          />

          <div className="mt-10 mx-auto grid max-w-4xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.name}
                quote={item.quote}
                name={item.name}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-black/5 bg-white">
        <div className="container py-16">
          <div className="mx-auto max-w-5xl rounded-[28px] border border-black/5 bg-[#fbfaf8] px-6 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:px-8 md:py-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                  Ready to start?
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1f1f1f] md:text-3xl">
                  Let’s create a curtain look that suits your home beautifully.
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/65 md:text-base">
                  Book a consultation or request a quote, and we’ll guide you from
                  measurements to final installation with a smooth, professional process.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f1f1f] px-5 py-3 text-white shadow-soft hover:opacity-95"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-black/5 bg-[#f3e7d8] px-5 py-3 text-[#1f1f1f] shadow-soft hover:opacity-95"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs uppercase tracking-[0.25em] text-black/45">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-[#1f1f1f] md:text-5xl">
        {title}
      </h2>
      <div className={`mt-4 h-[2px] w-14 bg-[#c49a6c] ${center ? "mx-auto" : ""}`} />
      <p className="mt-4 text-sm leading-7 text-black/60 md:text-base">{subtitle}</p>
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
          : "border-black/10 bg-[#fbfaf8]"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-xl ${
            dark ? "border border-white/10 bg-white/10" : "border border-black/10 bg-[#f3e7d8]"
          }`}
        >
          {icon}
        </span>
        <div className={`text-sm font-semibold ${dark ? "text-white" : "text-[#1f1f1f]"}`}>
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
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfce] bg-[#f5efe7]">
        {icon}
      </div>
      <div className="mt-4 text-lg font-semibold text-[#1f1f1f]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-black/65">{text}</div>
    </div>
  );
}

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2 text-lg font-semibold text-[#1f1f1f]">
        <CheckCircle2 className="h-5 w-5 text-[#b8875c]" />
        {title}
      </div>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-black/65">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b8875c]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfferCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-black/5 bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.07)]">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#eadfce] bg-[#f5efe7]">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-medium text-[#1f1f1f]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/65">{text}</p>
    </div>
  );
}

function StepCard({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfce] bg-[#f5efe7]">
          {icon}
        </div>
        <span className="text-sm font-semibold text-[#c49a6c]">{number}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#1f1f1f]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/65">{text}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) {
  return (
    <div className="relative rounded-2xl border border-[#ece7df] bg-white px-5 py-5 shadow-[0_6px_16px_rgba(0,0,0,0.03)] transition hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#b8875c] text-sm text-white shadow-sm">
        ❞
      </div>

      <div className="pt-2">
        <div className="flex items-center gap-[2px] text-xs text-[#b8875c]">★★★★★</div>

        <p className="mt-2 text-sm leading-6 text-black/70 italic">“{quote}”</p>

        <div className="mt-4">
          <p className="text-sm font-semibold text-[#1f1f1f]">{name}</p>
          <p className="text-xs text-black/50">{location}</p>
        </div>
      </div>
    </div>
  );
}