"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const SLIDES = [
  {
    id: 1,
    image: "/images/SISWA.avif",
    title: "Membangun Kemandirian dan Karakter Peserta Didik",
    subtitle: (
      <>
        SLB Pelita Kasih memberikan layanan pendidikan khusus yang <br className="hidden md:block" />
        berfokus pada pengembangan kemampuan, kemandirian <br className="hidden md:block" />
        dan karakter peserta didik di Bandar Lampung
      </>
    ),
    cta: "Daftar Sekarang",
    ctaLink: "https://wa.me/6289680833967?text=Halo%20Bu%20Suranti%2C%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20di%20SLB%20Pelita%20Kasih.",
    ctaExternal: true,
    cta2: "Tentang Kami",
    cta2Link: "#profil",
  },
  {
    id: 2,
    image: "/images/FOTBAR-GURU.JPEG",
    title: "Pengajarr Profesional & Berpengalaman",
    subtitle: "Guru-guru bersertifikasi yang penuh kasih dan dedikasi dalam mendidik.",
    cta: "Profil Guru",
    ctaLink: "#profil",
    ctaExternal: false,
    cta2: "Tentang Kami",
    cta2Link: "#profil",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -80 });
      } else {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused || SLIDES.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <section
      id="beranda"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image
            src={currentSlide.image}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl font-poppins">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-[5px] text-sm md:text-lg font-medium border border-white/30 text-white">
              Selamat Datang di SLB Pelita Kasih
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-lg">
              {currentSlide.title}
            </h1>
            <div className="text-base md:text-2xl text-white/90 font-extralight max-w-2xl md:max-w-4xl mx-auto drop-shadow-md text-justify md:text-center">
              {currentSlide.subtitle}
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {currentSlide.ctaExternal ? (
                <a
                  href={currentSlide.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 md:py-4 text-white font-medium rounded-full text-base md:text-lg shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: '#0b0378', boxShadow: '0 10px 25px rgba(11, 3, 120, 0.3)' }}
                >
                  {currentSlide.cta}
                </a>
              ) : (
                <Link
                  href={currentSlide.ctaLink}
                  onClick={(e) => currentSlide.ctaLink.startsWith("#") && handleScrollTo(e, currentSlide.ctaLink)}
                  className="w-full sm:w-auto px-8 py-3 md:py-4 text-white font-medium rounded-full text-base md:text-lg shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: '#0b0378', boxShadow: '0 10px 25px rgba(11, 3, 120, 0.3)' }}
                >
                  {currentSlide.cta}
                </Link>
              )}
              <Link
                href={currentSlide.cta2Link}
                onClick={(e) => currentSlide.cta2Link.startsWith("#") && handleScrollTo(e, currentSlide.cta2Link)}
                className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-[5px] text-white font-medium rounded-full text-base md:text-lg border border-white/30 transition-all"
              >
                {currentSlide.cta2}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {SLIDES.length > 1 && (
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white pointer-events-auto transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <HiChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white pointer-events-auto transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <HiChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Dots */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-sky-500 w-10'
                  : 'bg-white/50 hover:bg-white w-3'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
