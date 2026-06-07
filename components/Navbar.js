import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-700">
          🖥️ Nishant Softwares
        </Link>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#products" className="hover:text-green-700">Products</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
          <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-1.5 rounded-lg hover:bg-green-700">
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}