import { motion } from "framer-motion";
import heroImg from "../assets/hero_living_room.png";
import productsImg from "../assets/products_collage.png";
import timelineImg from "../assets/timeline.png";
import { brand, sections, milestones } from "../data/content";
import { Card, CardBody, SectionTitle } from "../components/ui";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Gallery from "../pages/Gallery"
import QuoteEstimator from "../components/quote/QuoteEstimator";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-black/5">
        <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-xs text-black/70">
              <Sparkles className="h-4 w-4 text-brass" />
              Custom curtains • Mobile consultations • Professional installation
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              {brand.name}
              <span className="block text-black/60 text-2xl md:text-3xl mt-2">{brand.tagline}</span>
            </h1>
            <p className="mt-4 text-black/70">
              A growing décor brand specialising in custom curtains, rods, rails, accessories, and installation —
              built on a deposit-based, low-risk model.
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

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <Stat label="Avg profit/job" value="R900–R1,100" />
              <Stat label="Monthly potential" value="R4k–R12k" />
              <Stat label="Model" value="Deposit-based" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-soft border border-black/5 bg-white"
          >
            <img src={heroImg} alt="Styled living room with curtains" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section>
        <div className="container py-12">
          <SectionTitle
            eyebrow="Executive summary"
            title="Affordable style — professionally installed"
            subtitle={sections.executiveSummary.mission}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <div className="font-semibold">What we do</div>
                <ul className="mt-3 space-y-2 text-black/70">
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
                <div className="font-semibold">What makes us different</div>
                <ul className="mt-3 space-y-2 text-black/70">
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

      {/*Gallery */}
     <Gallery/>

      {/* Milestones */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="container py-12">
          <SectionTitle
            eyebrow="Future plans"
            title="From curtains to a full décor brand"
            subtitle="Over the next three years, we expand our product range, team, and physical footprint."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 items-start">
            <div className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-soft">
              <img src={timelineImg} alt="Milestones timeline" className="w-full object-cover" />
            </div>

            <Card>
              <CardBody>
                <div className="font-semibold">Milestones</div>
                <ol className="mt-3 space-y-3 text-black/70">
                  {milestones.map((m) => (
                    <li key={m.year} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-14 items-center justify-center rounded-xl bg-sand text-ink text-sm font-semibold">
                        {m.year}
                      </span>
                      <span>{m.text}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-6">
                  <Link to="/investors" className="inline-flex items-center gap-2 text-brass hover:underline">
                    See investment plan <ArrowRight className="h-4 w-4" />
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
