import { Card, CardBody, SectionTitle } from "../components/ui";
import { Download, FileText } from "lucide-react";

type DownloadItem = {
  title: string;
  desc: string;
  href: string;
};

export default function Downloads() {
  const items: DownloadItem[] = [
    {
      title: "Full Business Plan (PDF)",
      desc: "The complete plan: mission, products, pricing ranges, projections, and milestones.",
      href: "/downloads/business-plan.pdf",
    },
    {
      title: "Pricing Sheet (PDF)",
      desc: "A clean 1-page pricing overview you can send to clients.",
      href: "/downloads/pricing-sheet.pdf",
    },
    {
      title: "Investor Snapshot (PDF)",
      desc: "Quick summary for investors: capital requirements + projections.",
      href: "/downloads/investor-snapshot.pdf",
    },
  ];

  return (
    <div className="container py-12">
      <SectionTitle
        eyebrow="Downloads"
        title="Share-ready documents"
        subtitle="Grab the key documents for clients, partners, or investors."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <Card key={i.href}>
            <CardBody>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sand">
                <FileText className="h-5 w-5 text-brass" />
              </div>
              <div className="mt-4 font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-black/70">{i.desc}</div>
              <a
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-2 text-sm text-paper shadow-soft hover:opacity-95"
                href={i.href}
                download
              >
                Download <Download className="h-4 w-4" />
              </a>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 px-5 py-4 text-sm text-black/70">
        Tip: You can add your own catalogue images to <code className="px-1">/src/assets</code> and link them here too.
      </div>
    </div>
  );
}
