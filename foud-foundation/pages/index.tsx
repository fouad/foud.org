import { useState } from "react";
import Head from "next/head";

export default function Home() {
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
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        accountNumber,
      }),
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
        <title>Foud Foundation – Fruit Drops for SF Engineers</title>
        <meta
          name="description"
          content="Foud Foundation is a nonprofit delivering healthy fruit drops to underfed software engineers across San Francisco."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 flex flex-col">
        <header className="p-6 sm:p-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-semibold text-rose-700">
            Foud Foundation
          </h1>
          <p className="mt-2 text-lg sm:text-2xl text-rose-600">
            Delivering Fruit Drops to Underfed Software Engineers in San
            Francisco
          </p>
        </header>

        <main className="flex-1 flex items-center justify-center px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <h2 className="text-xl font-medium text-gray-800">
              Request Your Fruit Drop
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="accountNumber" className="text-sm font-medium">
                Account Number
              </label>
              <input
                id="accountNumber"
                name="accountNumber"
                type="text"
                required
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Submit
            </button>

            {status && (
              <p className="text-center text-sm text-rose-700 font-medium">
                {status}
              </p>
            )}
          </form>
        </main>

        <footer className="p-6 text-center text-xs text-rose-700">
          © {new Date().getFullYear()} Foud Foundation. All rights reserved.
        </footer>
      </div>
    </>
  );
}
