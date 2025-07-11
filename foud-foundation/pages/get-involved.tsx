import { useState } from "react";
import Layout from "../components/Layout";

export default function GetInvolved() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Simple fake success message
    setMessage("Thank you! We will be in touch shortly.");
    setEmail("");
  }

  return (
    <Layout title="Get Involved | Foud Foundation">
      <section className="w-full max-w-lg my-12 sm:my-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 text-center mb-6">
          Join the Movement
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 text-center">
          Whether you want to volunteer, receive fruit, or sponsor deliveries, we’d love to hear
          from you. Enter your email and we’ll reach out with next steps.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md shadow-md p-6 space-y-4 mx-auto"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
          <button
            type="submit"
            className="w-full bg-emerald-700 text-white hover:bg-emerald-800 text-sm font-medium py-2 rounded-md transition-colors"
          >
            Submit
          </button>

          {message && (
            <p className="text-center text-emerald-700 text-xs font-medium">{message}</p>
          )}
        </form>
      </section>
    </Layout>
  );
}
