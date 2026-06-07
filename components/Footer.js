export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-white font-bold text-lg mb-2">🖥️ Nishant Softwares</p>
        <p className="text-sm mb-4">Varanasi, Uttar Pradesh — India</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm mb-6">
          <a href="tel:+919996865069" className="hover:text-white">📞 9996865069</a>
          <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:text-white">💬 WhatsApp</a>
          <a href="mailto:prasad.kamta@gmail.com" className="hover:text-white">✉️ prasad.kamta@gmail.com</a>
        </div>
        <p className="text-xs text-gray-600">
          Powered by{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Vercel</a>
          {" "}& {" "}
          <a href="https://turso.tech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Turso</a>
          {" "}— Fast, secure, always online.
        </p>
        <p className="text-xs text-gray-700 mt-2">© 2026 Nishant Softwares. All rights reserved.</p>
      </div>
    </footer>
  );
}