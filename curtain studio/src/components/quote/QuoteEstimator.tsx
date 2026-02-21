import { useMemo, useState } from "react";
import { brand, productRanges } from "../../data/content";
import { Card, CardBody, SectionTitle } from "../ui";
import { addRanges, formatZAR, mulRange, parseZARRange, type PriceRange } from "../../utils/pricing";
import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

type CurtainOption = (typeof productRanges.curtainRange)[number];
type RodOption = (typeof productRanges.rodsAndRails)[number];

function toRange(price: string): PriceRange {
  return parseZARRange(price);
}

export default function QuoteEstimator({ compact }: { compact?: boolean }) {
  const curtains = productRanges.curtainRange;
  const rods = productRanges.rodsAndRails;
  const installSvc = productRanges.services.find((s) => s.label.toLowerCase().includes("installation"));
  const installRange = toRange(installSvc?.price ?? "R0");

  const [windows, setWindows] = useState(2);
  const [curtain, setCurtain] = useState<CurtainOption>(curtains[0]);
  const [rod, setRod] = useState<RodOption>(rods[0]);
  const [includeInstallation, setIncludeInstallation] = useState(true);
  const [includeRods, setIncludeRods] = useState(true);
  const [delivery, setDelivery] = useState<"pickup" | "mobile">("mobile");

  const estimate = useMemo(() => {
    const curtainRange = mulRange(toRange(curtain.price), windows);
    const rodRange = includeRods ? mulRange(toRange(rod.price), windows) : { min: 0, max: 0 };
    const install = includeInstallation ? mulRange(installRange, windows) : { min: 0, max: 0 };

    // Mobile consultation is mentioned as a core service; we keep it as a small buffer only when selected.
    const consult = delivery === "mobile" ? { min: 0, max: Math.round(150 * Math.max(1, Math.min(windows, 4))) } : { min: 0, max: 0 };

    return addRanges(addRanges(curtainRange, rodRange), addRanges(install, consult));
  }, [curtain.price, delivery, includeInstallation, includeRods, installRange, rod.price, windows]);

  const whatsAppHref = useMemo(() => {
    const text = `Hi Curtain Studio! I'd like an estimate.\n\nWindows: ${windows}\nCurtain: ${curtain.label}\nRods/Rails: ${includeRods ? rod.label : "No"}\nInstallation: ${includeInstallation ? "Yes" : "No"}\nService: ${delivery === "mobile" ? "Mobile consult" : "Pickup/drop-off"}\n\nEstimated range: ${formatZAR(estimate.min)} – ${formatZAR(estimate.max)}`;
    return `https://wa.me/${brand.phoneE164.replace("+", "")}?text=${encodeURIComponent(text)}`;
  }, [curtain.label, delivery, estimate.max, estimate.min, includeInstallation, includeRods, rod.label, windows]);

  return (
    <div>
      {!compact && (
        <SectionTitle
          eyebrow="Instant estimate"
          title="Get a quick price range (no login, no waiting)"
          subtitle="This is a guide estimate based on your selected curtain style, rods/rails, and installation per window."
        />
      )}

      <div className={compact ? "grid gap-4" : "mt-8 grid gap-6 md:grid-cols-2 items-start"}>
        <Card>
          <CardBody>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Number of windows</label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={windows}
                  onChange={(e) => setWindows(Math.max(1, Math.min(50, Number(e.target.value) || 1)))}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                />
                <div className="text-xs text-black/60 flex items-start gap-2">
                  <Info className="h-4 w-4 mt-0.5" />
                  <span>Tip: if you’re not sure, start with the rooms you want done first (living room + bedroom).</span>
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Curtain style</label>
                <select
                  value={curtain.label}
                  onChange={(e) => setCurtain(curtains.find((c) => c.label === e.target.value) ?? curtains[0])}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                >
                  {curtains.map((c) => (
                    <option key={c.label} value={c.label}>
                      {c.label} ({c.price})
                    </option>
                  ))}
                </select>
                <div className="text-xs text-black/60">{curtain.description}</div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Rods / rails</label>
                <select
                  value={rod.label}
                  onChange={(e) => setRod(rods.find((r) => r.label === e.target.value) ?? rods[0])}
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                  disabled={!includeRods}
                >
                  {rods.map((r) => (
                    <option key={r.label} value={r.label}>
                      {r.label} ({r.price})
                    </option>
                  ))}
                </select>

                <div className="flex flex-wrap gap-3">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={includeRods}
                      onChange={(e) => setIncludeRods(e.target.checked)}
                    />
                    Include rods/rails
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={includeInstallation}
                      onChange={(e) => setIncludeInstallation(e.target.checked)}
                    />
                    Include installation
                  </label>
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Service option</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDelivery("mobile")}
                    className={
                      delivery === "mobile"
                        ? "rounded-xl bg-sand px-4 py-3 text-left shadow-soft border border-black/5"
                        : "rounded-xl bg-white px-4 py-3 text-left border border-black/10 hover:bg-black/5"
                    }
                  >
                    <div className="font-medium">Mobile consult</div>
                    <div className="text-xs text-black/60">We come to you for measurement & advice.</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDelivery("pickup")}
                    className={
                      delivery === "pickup"
                        ? "rounded-xl bg-sand px-4 py-3 text-left shadow-soft border border-black/5"
                        : "rounded-xl bg-white px-4 py-3 text-left border border-black/10 hover:bg-black/5"
                    }
                  >
                    <div className="font-medium">Pickup / drop-off</div>
                    <div className="text-xs text-black/60">If you already have measurements.</div>
                  </button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-black/60">Estimated total</div>
                <div className="mt-1 text-2xl md:text-3xl font-semibold">
                  {formatZAR(estimate.min)} <span className="text-black/40">–</span> {formatZAR(estimate.max)}
                </div>
                <div className="mt-2 text-xs text-black/60">
                  This is a guide estimate. Final pricing depends on exact measurements, fabric availability, and any special finishing.
                </div>
              </div>
              <div className="rounded-2xl bg-sand px-3 py-2 text-xs text-black/70">
                Deposit-based model
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-ink px-5 py-3 text-paper shadow-soft hover:opacity-95 inline-flex items-center justify-center gap-2"
              >
                Send this estimate on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="rounded-xl bg-white px-5 py-3 text-ink shadow-soft border border-black/10 hover:bg-black/5 inline-flex items-center justify-center"
              >
                Request an official quote
              </Link>
            </div>

            {!compact && (
              <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/70">
                <div className="font-medium text-ink">Next step</div>
                <div className="mt-1">
                  Share photos of your space + your suburb, and we’ll confirm measurements and availability.
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
