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

const SITE_URL = "https://slbpelitakasihbdl.sch.id";
const SITE_NAME = "SLB Pelita Kasih Bandar Lampung";
const SITE_DESCRIPTION =
  "SLB Pelita Kasih Bandar Lampung — Sekolah Luar Biasa di bawah naungan Yayasan Sosial Pelita Kasih yang berkomitmen memberikan pendidikan terbaik bagi peserta didik berkebutuhan khusus, meliputi Tunarungu, Tunagrahita, Autisme, dan Tunaganda.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SLB Pelita Kasih Bandar Lampung — Sekolah Luar Biasa",
    template: "%s | SLB Pelita Kasih Bandar Lampung",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "SLB Pelita Kasih",
    "Sekolah Luar Biasa",
    "SLB Bandar Lampung",
    "Pendidikan Khusus",
    "Pendidikan Inklusif",
    "Tunarungu",
    "Tunagrahita",
    "Autisme",
    "Tunaganda",
    "Sekolah Berkebutuhan Khusus Lampung",
    "PPDB SLB Lampung",
    "Terapi Anak Berkebutuhan Khusus",
    "Yayasan Pelita Kasih",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SLB Pelita Kasih Bandar Lampung — Sekolah Luar Biasa",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Logo SLB Pelita Kasih Bandar Lampung",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "SLB Pelita Kasih Bandar Lampung — Sekolah Luar Biasa",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "SLB & Terapi Pelita Kasih",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pangeran Antasari",
    addressLocality: "Bandar Lampung",
    addressRegion: "Lampung",
    addressCountry: "ID",
  },
  telephone: "+62-812-3193-7744",
  email: "slbpelitakasihbdl19@gmail.com",
  foundingDate: "2019",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-812-3193-7744",
      contactType: "Kepala Sekolah",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
    {
      "@type": "ContactPoint",
      telephone: "+62-896-8083-3967",
      contactType: "Informasi & Pendaftaran",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
