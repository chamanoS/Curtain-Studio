import { Card, CardBody, SectionTitle } from "../components/ui";
import { capitalRequirements, monthlyProjection } from "../data/content";

export default function Investors() {
  const totalDesired = "R100,000";

  return (
    <div className="container py-12">
      <SectionTitle
        eyebrow="Financial plan"
        title="Investment-ready, low-risk model"
        subtitle="Funding supports tools, stock, marketing, transport buffer, and working capital reserve."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardBody>
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="font-semibold">Capital requirements</div>
                <div className="text-sm text-black/60 mt-1">Total desired capital: {totalDesired}</div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {capitalRequirements.map((c) => (
                <div key={c.item} className="flex items-start justify-between gap-4 rounded-xl bg-white/50 border border-black/5 p-4">
                  <div className="text-sm text-black/70">{c.item}</div>
                  <div className="text-sm font-semibold whitespace-nowrap">{c.amount}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-black/60">
              *Models offered: equity or fixed-return investor structures (as stated in the plan).
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="font-semibold">Monthly profit projection</div>
            <div className="text-sm text-black/60 mt-1">Assumes average profit per client of R1,000.</div>

            <div className="mt-5 overflow-hidden rounded-xl border border-black/5">
              <table className="w-full text-sm">
                <thead className="bg-sand/60">
                  <tr>
                    <th className="text-left p-3 font-medium">Scenario</th>
                    <th className="text-right p-3 font-medium">Clients</th>
                    <th className="text-right p-3 font-medium">Total profit</th>
                  </tr>
                </thead>
                <tbody className="bg-white/50">
                  {monthlyProjection.map((m) => (
                    <tr key={m.tier} className="border-t border-black/5">
                      <td className="p-3">{m.tier}</td>
                      <td className="p-3 text-right">{m.clients}</td>
                      <td className="p-3 text-right">R{m.totalProfit.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl bg-sand/60 border border-black/5 p-4 text-sm text-black/70">
              Want the full business plan PDF included in your pitch pack? Add a “Downloads” section with the PDF and
              a one-page investor summary.
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
