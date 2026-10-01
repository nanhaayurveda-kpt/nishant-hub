export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 px-6 py-8 text-center text-sm text-gray-400">
      <p className="mb-2 font-bold text-white">🖥️ Nishant Softwares</p>
      <p className="mb-3">
        <a href="tel:+919996865069" className="hover:text-white">
          📞 9996865069
        </a>
        {" | "}
        <a
          href="https://wa.me/919996865069"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          💬 WhatsApp
        </a>
      </p>
      <p className="text-xs text-gray-500">
        © 2026 Nishant Softwares — Varanasi
      </p>
    </footer>
  );
}