import { Card, CardBody, SectionTitle } from "../components/ui";
import productsImg from "../assets/products_collage.png";
import { productRanges } from "../data/content";

export default function Products() {
  return (
    <div className="container py-12">
      <SectionTitle
        eyebrow="Product list"
        title="Curtains, rods, rails & services"
        subtitle="Choose a style, then we measure, advise, supply, and install."
      />

      {/* <div className="mt-8 rounded-2xl overflow-hidden border border-black/5 bg-white shadow-soft">
        <img src={productsImg} alt="Products collage" className="w-full object-cover" />
      </div> */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardBody>
            <div className="font-semibold">Curtain range</div>
            <div className="mt-4 space-y-3">
              {productRanges.curtainRange.map((r) => (
                <Row key={r.label} label={r.label} description={r.description} price={r.price} />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Curtain rods & rails</div>
            <div className="mt-4 space-y-3">
              {productRanges.rodsAndRails.map((r) => (
                <Row key={r.label} label={r.label} description={r.description} price={r.price} />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Services</div>
            <div className="mt-4 space-y-3">
              {productRanges.services.map((r) => (
                <Row key={r.label} label={r.label} description={r.description} price={r.price} />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Future décor additions</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-black/70">
              {productRanges.futureDecorAdditions.map((i) => (
                <li key={i} className="rounded-xl bg-sand/60 px-3 py-2 border border-black/5">
                  {i}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, description, price }: { label: string; description: string; price: string }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white/50 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-medium">{label}</div>
          <div className="text-sm text-black/60 mt-1">{description}</div>
        </div>
        <div className="text-sm font-semibold whitespace-nowrap">{price}</div>
      </div>
    </div>
  );
}
