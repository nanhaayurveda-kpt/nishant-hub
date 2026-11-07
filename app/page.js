import Link from "next/link";

export const metadata = {
  title:
    "Nishant Softwares — Low-cost websites in Go, React, Next.js & Zoho Catalyst",
  description:
    "Websites built with Go backends, React or Next.js frontends, and Zoho Catalyst. Designed to cost far less to host than WordPress.",
};

// Renders Hindi first, then the English version of the same text
function Bi({ hi, en, hiClass = "", enClass = "" }) {
  return (
    <>
      <p className={hiClass}>{hi}</p>
      <p className={enClass}>{en}</p>
    </>
  );
}

const comparison = [
  {
    hiLabel: "रनटाइम",
    enLabel: "Runtime",
    hiWp: "PHP + MySQL सर्वर",
    enWp: "PHP + MySQL server",
    hiOurs: "एक ही कंपाइल्ड Go बाइनरी",
    enOurs: "One compiled Go binary",
  },
  {
    hiLabel: "सर्वर का आकार",
    enLabel: "Server size",
    hiWp: "ट्रैफ़िक और प्लगइन बढ़ने पर भारी सर्वर चाहिए",
    enWp: "Needs a heavier server as traffic and plugins grow",
    hiOurs: "सबसे छोटे सर्वर पर भी चल जाती है",
    enOurs: "Runs on the smallest server tiers",
  },
  {
    hiLabel: "प्लगइन",
    enLabel: "Plugins",
    hiWp: "कई थर्ड-पार्टी प्लगइन, जिन्हें अपडेट और सुरक्षित रखना पड़ता है",
    enWp: "Many third-party plugins to update and secure",
    hiOurs: "कोई प्लगइन नहीं, सिर्फ़ आपके लिए लिखा गया कोड",
    enOurs: "No plugin stack, only the code written for you",
  },
];

const stacks = [
  {
    name: "React + Go",
    hi: "React फ्रंटएंड और Go एपीआई। फ्रंटएंड सादी स्टैटिक फाइलों की तरह चल सकता है, इसलिए सिर्फ़ Go बाइनरी को सर्वर चाहिए।",
    en: "A React frontend with a Go API. The frontend can be served as plain static files, so only the Go binary needs a server.",
  },
  {
    name: "Next.js + Go",
    hi: "SEO के लिए Next.js फ्रंटएंड और उसके पीछे Go एपीआई। Next.js सिर्फ़ फ्रंटएंड के लिए है, बैकएंड के लिए नहीं।",
    en: "A Next.js frontend for SEO-friendly pages, with a Go API behind it. Next.js is used only for the frontend, never for the backend.",
  },
  {
    name: "React + Zoho Catalyst",
    hi: "React फ्रंटएंड और जोहो कैटालिस्ट पर बना बैकएंड। हम कैटालिस्ट पर भी काम करते हैं।",
    en: "A React frontend with a backend built on Zoho Catalyst. We work on Catalyst too.",
  },
];

const catalystPoints = [
  {
    hi: "मुफ़्त टियर हर महीने नया होता है, इसलिए छोटी वेबसाइट की होस्टिंग का बिल लगभग शून्य रह सकता है।",
    en: "The free tier renews every month, so a small website can run with a near-zero hosting bill.",
  },
  {
    hi: "मुफ़्त सीमा के बाद सिर्फ़ उपयोग के हिसाब से भुगतान होता है।",
    en: "Beyond the free limit, you pay only for what you use.",
  },
  {
    hi: "फंक्शन, फ्रंटएंड होस्टिंग, डेटाबेस और फाइल स्टोरेज, सब एक ही कंसोल में।",
    en: "Functions, frontend hosting, database and file storage, all in one console.",
  },
  {
    hi: "AI और ML सेवाएँ (जैसे OCR) प्लेटफ़ॉर्म में पहले से मौजूद हैं।",
    en: "AI and ML services (such as OCR) are built into the platform.",
  },
  {
    hi: "जोहो एक भारतीय कंपनी है, और हमें स्वदेशी तकनीक को सपोर्ट करना चाहिए।",
    en: "Zoho is an Indian company, and we should support homegrown technology.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
        <Link href="/" className="text-lg font-bold text-blue-700">
          Nishant Softwares
        </Link>
        <div className="flex gap-4 text-sm font-semibold">
          <a href="#why-go" className="text-gray-600 hover:text-blue-700">
            क्यों Go · Why Go
          </a>
          <a href="#catalyst" className="text-gray-600 hover:text-blue-700">
            Zoho Catalyst
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-700">
            संपर्क · Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20 text-center">
        <span className="mb-5 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          वाराणसी में निर्मित · Made in Varanasi
        </span>
        <h1 className="mx-auto mb-5 max-w-3xl text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          वर्डप्रेस से भी सस्ती होस्टिंग वाली वेबसाइट
        </h1>
        <p className="mx-auto mb-5 max-w-3xl text-2xl font-bold leading-tight text-blue-600 md:text-3xl">
          Websites that cost less to host than WordPress
        </p>
        <Bi
          hi="Go, React, Next.js और Zoho Catalyst पर बनी वेबसाइट। छोटा सर्वर, कम बिल, तेज़ पेज।"
          en="Built with Go, React, Next.js and Zoho Catalyst. Small server, low bill, fast pages."
          hiClass="mx-auto mb-1 max-w-xl text-lg text-gray-600"
          enClass="mx-auto mb-8 max-w-xl text-lg text-gray-500"
        />
        <a
          href="https://wa.me/919996865069"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
        >
          WhatsApp पर बात करें · Talk on WhatsApp
        </a>
      </section>

      {/* WHY GO */}
      <section id="why-go" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">
          Go से होस्टिंग सस्ती क्यों रहती है
        </h2>
        <h2 className="mb-4 text-center text-xl font-bold text-gray-500">
          Why Go keeps hosting cheap
        </h2>
        <Bi
          hi="Go एक ही बाइनरी में कंपाइल होती है और बहुत कम मेमोरी लेती है। इसलिए आपकी वेबसाइट बड़े सर्वर की जगह छोटे सर्वर पर आ जाती है।"
          en="Go compiles to a single binary and uses very little memory. That means your site fits on a small server instead of a large one."
          hiClass="mx-auto mb-1 max-w-2xl text-center text-gray-700"
          enClass="mx-auto mb-10 max-w-2xl text-center text-gray-500"
        />

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50 text-sm font-bold text-gray-700">
            <div className="px-4 py-3" />
            <div className="px-4 py-3">WordPress</div>
            <div className="bg-blue-50 px-4 py-3 text-blue-700">
              Go (हमारा तरीका · our approach)
            </div>
          </div>
          {comparison.map((row) => (
            <div
              key={row.enLabel}
              className="grid grid-cols-3 border-t border-gray-100 text-sm"
            >
              <div className="px-4 py-4 font-semibold text-gray-900">
                <p>{row.hiLabel}</p>
                <p className="text-gray-500">{row.enLabel}</p>
              </div>
              <div className="px-4 py-4 text-gray-700">
                <p>{row.hiWp}</p>
                <p className="text-gray-500">{row.enWp}</p>
              </div>
              <div className="bg-blue-50/50 px-4 py-4 text-gray-900">
                <p>{row.hiOurs}</p>
                <p className="text-gray-500">{row.enOurs}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACKS */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">
            हम किस पर काम करते हैं
          </h2>
          <h2 className="mb-10 text-center text-xl font-bold text-gray-500">
            What we build with
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {stacks.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <h3 className="mb-3 text-xl font-bold text-blue-700">
                  {s.name}
                </h3>
                <Bi
                  hi={s.hi}
                  en={s.en}
                  hiClass="mb-2 text-gray-700"
                  enClass="text-gray-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZOHO CATALYST */}
      <section id="catalyst" className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-xl border-l-8 border-yellow-500 bg-yellow-100 p-8">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            जोहो कैटालिस्ट (Zoho Catalyst) की खासियत
          </h2>
          <h2 className="mb-6 text-lg font-bold text-gray-600">
            Why Zoho Catalyst
          </h2>
          <ul className="space-y-4">
            {catalystPoints.map((p) => (
              <li key={p.en}>
                <Bi
                  hi={p.hi}
                  en={p.en}
                  hiClass="font-semibold text-gray-900"
                  enClass="text-gray-600"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-3xl px-6 py-16 text-center"
      >
        <h2 className="mb-1 text-2xl font-bold">संपर्क करें</h2>
        <h2 className="mb-6 text-lg font-bold text-gray-500">Get in Touch</h2>
        <p className="mb-8 text-gray-700">
          <a href="tel:+919996865069" className="hover:text-blue-600">
            9996865069
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            WhatsApp
          </a>
          &nbsp;|&nbsp;
          <a
            href="mailto:prasad.kamta@gmail.com"
            className="hover:text-blue-600"
          >
            prasad.kamta@gmail.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        <p className="mb-1">वाराणसी, उत्तर प्रदेश — भारत</p>
        <p className="mb-1">Varanasi, Uttar Pradesh — India</p>
        <p>© 2026 Nishant Softwares. All rights reserved.</p>
      </footer>
    </main>
  );
}
