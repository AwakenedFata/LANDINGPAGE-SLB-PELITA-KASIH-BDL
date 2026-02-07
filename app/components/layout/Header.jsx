"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Program", href: "#program" },
  { label: "Profil", href: "#profil" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
  { label: "PPDB", href: "#ppdb", highlight: true },
];

// Define sections in DOM order for correct scroll spy behavior
const spySections = [
  "beranda",
  "program", 
  "profil",
  "fasilitas",
  "ppdb",
  "faq",
  "kontak"
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [...spySections]; // Copy to avoid mutating if we reversed in place (though map creates new array usually)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-lg border-b border-primary-100/30 shadow-sm"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <Link
                href="#beranda"
                onClick={(e) => handleNavClick(e, "#beranda")}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-32 h-12 lg:w-40 lg:h-14 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/slblogonav.png"
                    alt="Logo SLB Pelita Kasih Bandar Lampung"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              <ul className="hidden lg:flex items-center gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.highlight ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="px-5 py-2 rounded-full bg-primary-800 text-white font-medium text-sm hover:bg-primary-700 transition-colors ml-2"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="px-4 py-2 text-sm font-medium transition-colors rounded-lg"
                        style={{
                          color: activeSection === item.href.replace("#", "") ? "#0b0378" : "#6b7280",
                          fontWeight: activeSection === item.href.replace("#", "") ? "700" : "500"
                        }}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
                aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary-700" />
                ) : (
                  <Menu className="w-6 h-6 text-primary-700" />
                )}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-primary-100 overflow-hidden"
              >
                <nav className="max-w-7xl mx-auto px-4 py-4">
                  <ul className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                            item.highlight
                              ? "bg-primary-800 text-white"
                              : ""
                          }`}
                          style={!item.highlight ? {
                            color: activeSection === item.href.replace("#", "") ? "#0b0378" : "#404040",
                            backgroundColor: activeSection === item.href.replace("#", "") ? "#f0f9ff" : "transparent"
                          } : {}}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
