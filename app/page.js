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
  blue: "bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300",
  purple:
    "bg-purple-50 text-purple-700 border-purple-100 hover:border-purple-300",
  green: "bg-green-50 text-green-700 border-green-100 hover:border-green-300",
  teal: "bg-teal-50 text-teal-700 border-teal-100 hover:border-teal-300",
  orange:
    "bg-orange-50 text-orange-700 border-orange-100 hover:border-orange-300",
  slate: "bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-300",
  indigo:
    "bg-indigo-50 text-indigo-700 border-indigo-100 hover:border-indigo-300",
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-5">
          🇮🇳 Made in Varanasi — For Indian Businesses
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Affordable Software for
          <br />
          <span className="text-green-600">Schools, Colleges & Clinics</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Single-tenant SaaS — your data, your software. No sharing, no
          compromise. Works on mobile and desktop both.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#products"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium text-sm"
          >
            See All Products →
          </a>
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 font-medium text-sm"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Products */}
      <div id="products" className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Our Products
        </h2>
        <p className="text-center text-gray-400 text-sm mb-8">
          ₹4,999/year — 7 days free trial — direct support from developer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <a
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
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              <p className="text-sm font-medium mt-4">View Demo →</p>
            </a>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
          <a
            href="tel:+919996865069"
            className="border border-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            📞 9996865069
          </a>
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:prasad.kamta@gmail.com"
            className="border border-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            ✉️ prasad.kamta@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}