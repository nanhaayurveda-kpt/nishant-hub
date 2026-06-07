import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Nishant Softwares — College & School Management Software",
  description: "Affordable SaaS for Indian schools, colleges and clinics. Built in Varanasi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}