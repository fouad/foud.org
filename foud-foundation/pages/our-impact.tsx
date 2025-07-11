import Layout from "../components/Layout";

const stats = [
  { value: "12,500+", label: "Fruit servings delivered" },
  { value: "180", label: "Engineers served weekly" },
  { value: "25", label: "Volunteer drivers" },
  { value: "92%", label: "Reported focus improvement" },
];

export default function OurImpact() {
  return (
    <Layout title="Our Impact | Foud Foundation">
      <section className="w-full max-w-4xl my-12 sm:my-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-6">
          Measuring the Difference a Piece of Fruit Can Make
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white shadow-sm rounded-md p-4">
              <p className="text-emerald-800 text-xl font-semibold">{s.value}</p>
              <p className="text-gray-600 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-emerald-800 mb-4">
          Success Stories
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          “I used to skip breakfast and reach for energy drinks by midday. Since Foud Foundation
          started delivering fruit, I’ve replaced that habit with fresh oranges—my afternoon slumps
          are gone.” — <span className="italic">Sarah L., Backend Engineer, SOMA</span>
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mt-4">
          “Our remote team looks forward to the weekly ‘fruit drop call’ where we unbox together.
          It’s boosted morale more than any swag.” — <span className="italic">Jin P., DevOps Lead, Potrero Hill</span>
        </p>
      </section>
    </Layout>
  );
}
