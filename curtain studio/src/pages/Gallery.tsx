import { useMemo, useState } from "react";
import { Card, CardBody, SectionTitle } from "../components/ui";
import heroImg from "../assets/hero_living_room.png";
import productsImg from "../assets/products_collage.png";
import founderImg from "../assets/founder_temogo.png";
import timelineImg from "../assets/timeline.png";
import Lightbox from "../components/Lightbox";
import BeforeAfterSlider from "../components/quote/BeforeAfterSlider";

type GalleryItem = {
  src: string;
  alt: string;
  tag: "Rooms" | "Products" | "Team" | "Growth";
};

export default function Gallery() {
  const items = useMemo<GalleryItem[]>(
    () => [
      { src: heroImg, alt: "Styled living room curtains", tag: "Rooms" },
      { src: productsImg, alt: "Curtain and décor product collage", tag: "Products" },
      { src: founderImg, alt: "Founder portrait", tag: "Team" },
      { src: timelineImg, alt: "Business milestones timeline", tag: "Growth" },
    ],
    []
  );

  const [activeTag, setActiveTag] = useState<"All" | GalleryItem["tag"]>("All");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<GalleryItem>(items[0]);

  const filtered = items.filter((i) => (activeTag === "All" ? true : i.tag === activeTag));
  const tags: ("All" | GalleryItem["tag"])[] = ["All", "Rooms", "Products", "Team", "Growth"];

  return (
    <div className="container py-12">
      <SectionTitle
        eyebrow="Gallery"
        title="See the style, finish, and growth"
        subtitle="A visual look at our curtain styles, product range, and the brand journey."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTag(t)}
            className={
              t === activeTag
                ? "rounded-full bg-ink px-4 py-2 text-sm text-paper shadow-soft"
                : "rounded-full bg-white px-4 py-2 text-sm text-ink border border-black/10 hover:bg-black/5"
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 items-start">
        <Card>
          <CardBody>
            <div className="font-semibold">Before / After preview</div>
            <div className="mt-4 grid gap-5">
              <BeforeAfterSlider
                beforeSrc={heroImg}
                afterSrc={productsImg}
                beforeAlt="Room before curtains"
                afterAlt="Room after curtains"
              />
              <div className="text-xs text-black/60">
                Replace these with your real client before/after photos anytime — the component is ready.
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Image grid</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {filtered.map((i) => (
                <button
                  key={i.alt}
                  type="button"
                  className="group rounded-2xl overflow-hidden border border-black/5 bg-white shadow-soft"
                  onClick={() => {
                    setCurrent(i);
                    setOpen(true);
                  }}
                >
                  <img src={i.src} alt={i.alt} className="h-40 w-full object-cover group-hover:scale-[1.02] transition" />
                  <div className="px-3 py-2 text-left">
                    <div className="text-xs text-black/60">{i.tag}</div>
                    <div className="text-sm font-medium truncate">{i.alt}</div>
                  </div>
                </button>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <Lightbox open={open} src={current.src} alt={current.alt} onClose={() => setOpen(false)} />
    </div>
  );
}
