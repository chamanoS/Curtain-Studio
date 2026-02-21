import founderImg from "../assets/founder_temogo.png";
import { Card, CardBody, SectionTitle } from "../components/ui";
import { sections } from "../data/content";

export default function About() {
  return (
    <div className="container py-12">
      <SectionTitle
        eyebrow="The organization"
        title="Founder-led, quality-assured"
        subtitle="Curtain Studio is led by Temogo Silowa and partners with vetted freelance installers."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
        <Card>
          <CardBody>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl overflow-hidden border border-black/5 bg-white">
                <img src={founderImg} alt="Founder portrait" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-semibold">Temogo Silowa</div>
                <div className="text-sm text-black/60">Founder & Managing Director</div>
              </div>
            </div>

            <p className="mt-4 text-black/70">
              Temogo oversees all aspects of operations — sales, customer relations, bookings, marketing, and
              strategic growth — bringing creative flair and operational discipline.
            </p>

            <div className="mt-5 rounded-xl bg-sand/60 border border-black/5 p-4 text-sm text-black/70">
              <div className="font-medium text-ink">Mission</div>
              <div className="mt-1">{sections.executiveSummary.mission}</div>
              <div className="mt-4 font-medium text-ink">Vision</div>
              <div className="mt-1">{sections.executiveSummary.vision}</div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Installation team</div>
            <p className="mt-3 text-black/70">
              Curtain Studio partners with skilled freelance installers to deliver professional fittings, including rod
              fitting, curtain hanging, adjustments, and reinstallation — with bookings and quality checks managed by
              Curtain Studio.
            </p>
            <ul className="mt-4 text-sm text-black/70 list-disc pl-5 space-y-1">
              <li>Vetted for quality, punctuality, and experience</li>
              <li>Flexible for homes, guesthouses, lodges, and small businesses</li>
              <li>High-end precision made accessible</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
