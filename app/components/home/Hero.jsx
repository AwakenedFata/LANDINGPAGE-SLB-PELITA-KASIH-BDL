"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/SISWA.avif"
          alt="Siswa SLB Pelita Kasih"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl mt-16 font-poppins">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm md:text-lg font-medium border border-white/30 text-blue-100">
            Selamat Datang di SLB Pelita Kasih
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            Membangun Kemandirian dan Karakter Peserta Didik
          </h1>
          <p className="text-base md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
            SLB Pelita Kasih memberikan layanan pendidikan khusus yang berfokus pada pengembangan kemampuan, kemandirian dan karakter peserta didik di Bandar Lampung
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#ppdb"
              className="w-full sm:w-auto px-8 py-3 md:py-4 text-white font-bold rounded-full text-base md:text-lg shadow-xl hover:scale-105 transition-all"
              style={{ backgroundColor: '#0b0378', boxShadow: '0 10px 25px rgba(11, 3, 120, 0.3)' }}
            >
              Daftar Sekarang
            </Link>
            <Link
              href="#profil"
              className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold rounded-full text-base md:text-lg border border-white/30 transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
