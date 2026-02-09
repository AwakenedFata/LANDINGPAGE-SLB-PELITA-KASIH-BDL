import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "SLB Pelita Kasih Bandar Lampung - Sekolah Luar Biasa",
  description:
    "SLB Pelita Kasih Bandar Lampung merupakan Sekolah Luar Biasa di bawah naungan Yayasan Sosial Pelita Kasih yang berkomitmen memberikan pendidikan terbaik bagi peserta didik berkebutuhan khusus.",
  keywords: [
    "SLB",
    "Sekolah Luar Biasa",
    "Pelita Kasih",
    "Bandar Lampung",
    "Pendidikan Inklusif",
    "Tunanetra",
    "Tunarungu",
    "Tunagrahita",
    "Tunadaksa",
    "Autisme",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <a href="#main-content" className="skip-link">
            Langsung ke Konten Utama
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
