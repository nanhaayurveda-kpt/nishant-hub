export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 text-center text-white">
      <p className="mb-4 text-2xl font-extrabold text-yellow-400">
        🖥️ Nishant Softwares
      </p>
      <p className="mb-4 text-lg font-bold">
        <a href="tel:+919996865069" className="hover:text-yellow-300">
          📞 9996865069
        </a>
        {" | "}
        <a
          href="https://wa.me/919996865069"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300"
        >
          💬 WhatsApp
        </a>
      </p>
      <p className="text-base font-semibold text-gray-200">
        © 2026 Nishant Softwares — Varanasi
      </p>
    </footer>
  );
}