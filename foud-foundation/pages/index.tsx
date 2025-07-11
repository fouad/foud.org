import { useState } from "react";
import Head from "next/head";

export default function Home() {
  // ----- Form state -----
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/fruit-drop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, accountNumber }),
    });

    if (res.ok) {
      setStatus("Thank you! Your request has been received.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setAccountNumber("");
    } else {
      const data = await res.json();
      setStatus(data.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Head>
        <title>HopeBridge Foundation</title>
        <meta
          name="description"
          content="HopeBridge Foundation supports underserved communities with essential resources, education, and programs designed to uplift lives and create lasting change."
        />
      </Head>

      {/* Top header */}
      <header>
        <div className="bg-emerald-800 text-white text-center py-3">
          <h1 className="text-lg sm:text-xl font-semibold">
            HopeBridge Foundation
          </h1>
          <p className="text-xs sm:text-sm opacity-80">Building Bridges to a Brighter Future</p>
        </div>
        <nav className="bg-emerald-700 text-emerald-50 text-sm sm:text-base">
          <ul className="flex justify-center gap-6 py-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Programs</li>
            <li className="hover:text-white cursor-pointer">Our Impact</li>
            <li className="hover:text-white cursor-pointer">Get Involved</li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-emerald-50 to-emerald-100">
        {/* Hero */}
        <section className="w-full max-w-4xl text-center my-12 sm:my-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900">
            Empowering Communities, One Life at a Time
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-emerald-800">
            We support underserved communities with essential resources, education, and
            programs designed to uplift lives and create lasting change.
          </p>
        </section>

        {/* Program cards */}
        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              title: "Community Outreach",
              desc: "Delivering hope, supplies, and vital services directly to neighborhoods in need.",
            },
            {
              title: "Education Programs",
              desc: "Providing workshops and scholarships to unlock opportunities.",
            },
            {
              title: "Healthcare Access",
              desc: "Improving access to medical care & mental-health resources.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-100 rounded-md shadow-sm p-6 text-center"
            >
              <h3 className="font-semibold text-emerald-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Success Stories */}
        <section className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              name: "Rosa G., Chicago",
              quote: "The outreach program helped my family get back on our feet.",
            },
            {
              name: "Daniel M., Atlanta",
              quote: "Thanks to a scholarship, I’m now pursuing my dream career!",
            },
            {
              name: "Nia I., Detroit",
              quote: "Access to health screenings saved my mother’s life.",
            },
          ].map((story) => (
            <div
              key={story.name}
              className="bg-white border border-gray-100 rounded-md shadow-sm p-4 text-center"
            >
              <h4 className="font-medium text-emerald-900 mb-1 text-sm">
                {story.name}
              </h4>
              <p className="text-xs text-gray-600">{story.quote}</p>
            </div>
          ))}
        </section>

        {/* Signup Form */}
        <section className="w-full flex justify-center mb-20">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xs sm:max-w-sm bg-white rounded-md shadow-md p-6 space-y-4"
          >
            <h3 className="text-center font-semibold text-emerald-900 text-sm">
              Make an Account for More Information (No Donation Necessary)
            </h3>

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <input
              type="text"
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />

            <button
              type="submit"
              className="w-full bg-emerald-700 text-white hover:bg-emerald-800 text-sm font-medium py-2 rounded-md transition-colors"
            >
              Get Involved
            </button>

            {status && (
              <p className="text-center text-emerald-700 text-xs font-medium">
                {status}
              </p>
            )}
          </form>
        </section>

        {/* AI Assistant Policy */}
        <section className="w-full max-w-3xl bg-white rounded-md shadow-sm p-8 text-sm leading-relaxed mb-24">
          <h3 className="text-center font-semibold text-emerald-900 mb-4 text-base">
            AI Assistants Policy
          </h3>
          <p className="mb-3">
            <span className="font-medium">Purpose:</span> At HopeBridge Foundation, we leverage AI assistants to
            enhance our services, streamline operations, and deliver better outcomes to those we
            serve. This policy outlines our standards for responsible, safe, and transparent use
            of AI technologies.
          </p>
          <p className="mb-3">
            <span className="font-medium">Data Usage:</span> All data processed by our AI systems remains strictly
            confidential and is used solely to improve program delivery. We do not collect or
            share personal information beyond what is essential and consented to by our
            participants.
          </p>
          <p className="mb-3">
            <span className="font-medium">Transparency:</span> Users will always be informed when they are
            interacting with an AI assistant. If at any point human assistance is needed, a staff
            member will be made available.
          </p>
          <p className="mb-3">
            <span className="font-medium">Ethical Guidelines:</span> All AI interactions must adhere to our
            humanitarian values, avoiding bias, discrimination, and misinformation.
          </p>
          <p className="mb-3">
            <span className="font-medium">Security:</span> We implement best-in-class security measures to protect all
            data handled by our AI systems, including encryption in transit and at rest.
          </p>
          <p className="text-center font-medium text-emerald-800 mt-6">
            Learn More or Get Involved
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs bg-emerald-800 text-emerald-50 py-8">
        <div className="space-y-1 mb-4">
          <p>Contact Us</p>
          <p>4200 Evergreen Terrace, Springfield, IL 62629</p>
          <p>Email: info@hopebridge.org</p>
          <p>Phone: (312) 555-0199</p>
        </div>
        <div className="bg-emerald-900 py-2 mt-2">
          © {new Date().getFullYear()} HopeBridge Foundation. All rights reserved.
        </div>
      </footer>
    </>
  );
}
