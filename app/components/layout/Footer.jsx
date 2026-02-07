"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Program", href: "#program" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "PPDB", href: "#ppdb" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/slb_pelitakasih" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@slb.pelita.kasih_" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/PelitaKasih.slb" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0b0378]/75 to-[#0b0378] text-white overflow-hidden font-poppins">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:pr-12"
          >
            <Link href="#beranda" className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 shadow">
                <Image
                  src="/images/slblogo.png"
                  alt="Logo SLB Pelita Kasih"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">SLB Pelita Kasih</p>
                <p className="text-xs text-white/70">Bandar Lampung</p>
              </div>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
              Sekolah Luar Biasa yang berkomitmen memberikan pendidikan terbaik
              bagi peserta didik berkebutuhan khusus dalam suasana kasih dan
              persaudaraan yang hangat, aman, dan inklusif.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold text-base mb-4 tracking-wide">Tautan Cepat</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/80 hover:text-white transition text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-semibold text-base mb-4 tracking-wide">Kontak</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-white/70 shrink-0" />
                <span>
                  Sukabumi Indah, Kec. Sukabumi, Kota Bandar Lampung, Lampung 35122
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/70 shrink-0" />
                <a href="tel:+6289680833967" className="hover:text-white transition">
                  0896-8083-3967
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/70 shrink-0" />
                <a href="mailto:slbpelitakasih6420@gmail.com" className="hover:text-white transition">
                  slbpelitakasih6420@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Operational Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 lg:col-start-11"
          >
            <h3 className="font-semibold text-base mb-4 tracking-wide">Jam Operasional</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Senin – Jumat</p>
                  <p className="text-primary-200">08.00 – 15.00 WIB</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Sabtu – Minggu</p>
                  <p className="text-primary-200">Tutup</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-primary-200 text-center sm:text-left">
              © {currentYear} SLB Pelita Kasih Bandar Lampung. Hak Cipta Dilindungi.
            </p>

            <p className="text-primary-300 text-xs text-center sm:text-right">
              Semua anak berhak mendapatkan pendidikan yang lebih baik
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
