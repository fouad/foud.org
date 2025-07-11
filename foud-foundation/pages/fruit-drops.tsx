import Layout from "../components/Layout";

export default function FruitDrops() {
  return (
    <Layout title="Fruit Drops | Foud Foundation">
      <section className="w-full max-w-4xl my-12 sm:my-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 text-center mb-6">
          Weekly Fruit Drops
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          Every Monday morning, our volunteers curate and deliver boxes of fresh,
          seasonal fruit to coworking spaces, startups, and home offices across
          San Francisco. By replacing sugary snacks with nutrient-dense options,
          we help engineers stay energized and focused throughout the week.
        </p>

        <h3 className="font-semibold text-emerald-800 mt-8 mb-2">How It Works</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>Companies or individuals sign up through our website.</li>
          <li>We match each participant with a nearby volunteer driver.</li>
          <li>Fruit is sourced locally from farmers’ markets to ensure quality.</li>
          <li>Boxes are delivered contact-free every week between 9–11 AM.</li>
        </ul>

        <h3 className="font-semibold text-emerald-800 mt-8 mb-2">Interested in Receiving Fruit?</h3>
        <p className="text-sm text-gray-700">
          Head over to the <a href="/get-involved" className="text-emerald-700 underline">Get Involved</a>{" "}
          page and fill out the request form. We’ll reach out within 48 hours.
        </p>
      </section>
    </Layout>
  );
}
