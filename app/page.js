import Link from "next/link";

const products = [
  {
    icon: "🏫",
    title: "School ERP",
    desc: "Students, fees, attendance, homework, transport — complete school management on mobile.",
    url: "https://school.nishantsoftwares.in",
    color: "blue",
  },
  {
    icon: "🎓",
    title: "PG College Software",
    desc: "Semester-wise students, fees, attendance, exams, marksheet and certificates for degree colleges.",
    url: "https://college.nishantsoftwares.in",
    color: "purple",
  },
  {
    icon: "🌿",
    title: "Ayurveda College Software",
    desc: "BAMS course management — Professional Year-wise students, fees, attendance, exams and certificates.",
    url: "https://ayurveda.nishantsoftwares.in",
    color: "green",
  },
  {
    icon: "🧠",
    title: "Psychiatrist Pro",
    desc: "Patient records, prescriptions, custom medicines library and follow-up management for clinics.",
    url: "https://psychiatrist.nishantsoftwares.in",
    color: "teal",
  },
  {
    icon: "💊",
    title: "Pharmacy Pro",
    desc: "Stock, billing, expiry alerts, reorder alerts, GST export and Tally export for medical stores.",
    url: "https://pharma.nishantsoftwares.in",
    color: "orange",
  },
  {
    icon: "⚖️",
    title: "Legal Pro",
    desc: "Case management, hearing dates, client reminders via WhatsApp — complete law practice management on mobile.",
    url: "https://legal.nishantsoftwares.in",
    color: "slate",
  },
  {
    icon: "🧾",
    title: "Tax Advocate Pro",
    desc: "Tax case management with AI draft generator for notice replies & appeals, case-law search, and hearing reminders via WhatsApp.",
    url: "https://tax-advocate.nishantsoftwares.in",
    color: "indigo",
  },
];

const colorMap = {
  blue: "bg-blue-100 text-blue-800 border-blue-300 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-100",
  purple:
    "bg-purple-100 text-purple-800 border-purple-300 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-100",
  green:
    "bg-green-100 text-green-800 border-green-300 hover:border-green-600 hover:shadow-lg hover:shadow-green-100",
  teal: "bg-teal-100 text-teal-800 border-teal-300 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-100",
  orange:
    "bg-orange-100 text-orange-800 border-orange-300 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-100",
  slate:
    "bg-slate-100 text-slate-800 border-slate-300 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-100",
  indigo:
    "bg-indigo-100 text-indigo-800 border-indigo-300 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-100",
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 bg-green-600 text-white rounded-full text-sm font-bold mb-5">
          Made in Varanasi — For Indian Businesses
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Affordable Software for
          <br />
          <span className="text-green-600">Schools, Colleges & Clinics</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Single-tenant SaaS — your data, your software. No sharing, no
          compromise. Works on mobile and desktop both.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#products"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-bold text-sm shadow-md shadow-green-200"
          >
            See All Products →
          </Link>
          <Link
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-400 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 font-bold text-sm"
          >
            💬 WhatsApp Us
          </Link>
        </div>
      </div>

      {/* Products */}
      <div id="products" className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Our Products
        </h2>
        <p className="text-center text-gray-600 text-sm mb-8 font-medium">
          ₹4,999/year — 7 days free trial — direct support from developer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Link
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border-2 transition ${colorMap[p.color]}`}
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
              <p className="text-sm font-bold mt-4">View Demo →</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
          <Link
            href="tel:+919996865069"
            className="border-2 border-gray-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 font-bold"
          >
            📞 9996865069
          </Link>
          <Link
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-bold shadow-md shadow-green-200"
          >
            💬 WhatsApp
          </Link>
          <Link
            href="mailto:prasad.kamta@gmail.com"
            className="border-2 border-gray-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 font-bold"
          >
            ✉️ prasad.kamta@gmail.com
          </Link>
        </div>
      </div>

      {/* Footer - Sales Executive */}
      <footer className="border-t-2 border-gray-200 pt-8 text-center">
        <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">
          Sales Executive
        </p>
        <div className="inline-block bg-green-50 border-2 border-green-300 rounded-xl px-8 py-5">
          <p className="text-lg font-extrabold text-gray-900">राजीव कुमार झा</p>
          <p className="text-sm text-gray-700 mt-1">संपर्क: इंदुपुर</p>
          <p className="text-sm text-gray-700">पोस्ट: बड़हिया</p>
          <p className="text-sm text-gray-700">जिला: लखीसराय</p>
          <p className="text-sm text-gray-700">बिहार 811302</p>
          <Link
            href="tel:+916206756085"
            className="inline-block mt-3 text-green-700 font-bold text-sm hover:underline"
          >
            📞 6206756085
          </Link>
        </div>
      </footer>
    </div>
  );
}