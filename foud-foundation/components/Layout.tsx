import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ?? "Foud Foundation"}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      {/* Header */}
      <header>
        <div className="bg-emerald-800 text-white text-center py-3">
          <h1 className="text-lg sm:text-xl font-semibold">Foud Foundation</h1>
          <p className="text-xs sm:text-sm opacity-80">Delivering Fruit Drops to SF Engineers</p>
        </div>
        <nav className="bg-emerald-700 text-emerald-50 text-sm sm:text-base">
          <ul className="flex justify-center gap-6 py-2">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/fruit-drops" className="hover:text-white">Fruit Drops</Link>
            </li>
            <li>
              <Link href="/our-impact" className="hover:text-white">Our Impact</Link>
            </li>
            <li>
              <Link href="/get-involved" className="hover:text-white">Get Involved</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-[60vh] bg-gradient-to-b from-white via-emerald-50 to-emerald-100 flex flex-col items-center px-4 sm:px-6 md:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center text-xs bg-emerald-800 text-emerald-50 py-8">
        <div className="space-y-1 mb-4">
          <p>Contact Us</p>
          <p>44 Tehama St, San Francisco, CA 94105</p>
          <p>Email: hello@foud.org</p>
          <p>Phone: (415) 555-0123</p>
        </div>
        <div className="bg-emerald-900 py-2 mt-2">
          © {new Date().getFullYear()} Foud Foundation. All rights reserved.
        </div>
      </footer>
    </>
  );
}
