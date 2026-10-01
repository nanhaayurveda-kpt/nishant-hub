import Link from "next/link";

export const metadata = {
  title: "Nishant Softwares — Websites & SaaS Built in Varanasi",
  description:
    "React websites with a Zoho Catalyst backend, plus affordable SaaS for Indian schools, colleges and clinics. Built in Varanasi.",
};

const products = [
  { name: "School ERP", url: "https://school.nishantsoftwares.in" },
  { name: "PG College", url: "https://college.nishantsoftwares.in" },
  { name: "Ayurveda College", url: "https://ayurveda.nishantsoftwares.in" },
  { name: "Psychiatrist Pro", url: "https://psychiatrist.nishantsoftwares.in" },
  { name: "Pharmacy Pro", url: "https://pharma.nishantsoftwares.in" },
  { name: "Legal Pro", url: "https://legal.nishantsoftwares.in" },
  {
    name: "Tax Advocate Pro",
    url: "https://tax-advocate.nishantsoftwares.in",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-50">
        <Link href="/" className="text-lg font-bold text-blue-700">
          🖥️ Nishant Softwares
        </Link>
        <div className="flex gap-4 text-sm font-semibold">
          <Link href="#products" className="text-gray-600 hover:text-blue-700">
            Products
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-700">
            Contact
          </Link>
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-16 bg-gradient-to-b from-blue-50 to-white">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Made in Varanasi — For Indian Businesses
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          वेबसाइट और न्यूज़ पोर्टल
          <br />
          <span className="text-blue-600">बिना होस्टिंग खर्च के</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          React फ्रंटएंड, Zoho Catalyst बैकएंड — स्वदेशी तकनीक पर बनी वेबसाइट।
        </p>
        <a
          href="https://wa.me/919996865069"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition text-lg"
        >
          💬 WhatsApp पर बात करें
        </a>
      </section>

      {/* WEBSITES / ZOHO HIGHLIGHT */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="bg-yellow-100 border-l-8 border-yellow-500 rounded-xl p-8">
          <p className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed mb-4">
            हम React पर ऐसी वेबसाइट बनाते हैं, जिसका बैकएंड{" "}
            <mark className="bg-yellow-300 px-1 rounded">
              जोहो के कैटालिस्ट (Zoho Catalyst)
            </mark>{" "}
            पर बना होता है।
          </p>
          <p className="text-gray-800 mb-4">
            इससे मध्यम दर्जे तक की वेबसाइट और न्यूज़ पोर्टल लंबे समय तक बिना
            होस्टिंग का खर्च उठाए चल सकते हैं।
          </p>
          <p className="font-bold text-gray-900">
            🇮🇳 हमें जोहो को सपोर्ट करना चाहिए, क्योंकि वह स्वदेशी है।
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-gray-50 px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">
            हमारे SaaS सॉफ्टवेयर भी हैं
          </h2>
          <p className="text-gray-600 mb-3">
            {products.map((p, i) => (
              <span key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {p.name}
                </a>
                {i < products.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <p className="text-sm text-gray-500">
            Single-tenant — ₹4,999/year — 7 days free trial
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-16 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-700">
          <a href="tel:+919996865069" className="hover:text-blue-600">
            📞 9996865069
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            💬 WhatsApp
          </a>
          &nbsp;|&nbsp;
          <a
            href="mailto:prasad.kamta@gmail.com"
            className="hover:text-blue-600"
          >
            ✉️ prasad.kamta@gmail.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-400 px-6 py-8 border-t border-gray-100">
        <p className="mb-1">Varanasi, Uttar Pradesh — India</p>
        <p className="mb-1">
          Powered by{" "}
          <a href="https://vercel.com" className="hover:text-blue-600">
            Vercel
          </a>{" "}
          &amp;{" "}
          <a href="https://turso.tech" className="hover:text-blue-600">
            Turso
          </a>
        </p>
        <p>© 2026 Nishant Softwares. All rights reserved.</p>
      </footer>
    </main>
  );
}
