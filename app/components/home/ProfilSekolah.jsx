"use client";

import { motion } from "framer-motion";

export default function ProfilSekolah() {
  return (
    <section id="profil" className="relative py-12 lg:py-20 bg-gradient-to-b from-purple-100/70 to-purple-100/70 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-5 py-2 sm:px-8 sm:py-3 rounded-full bg-white text-[#0b0378] text-lg sm:text-2xl font-semibold border-4 border-[#0b0378] shadow-sm font-poppins">
            Profil Sekolah
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-video overflow-hidden shadow-2xl bg-white">
            <iframe
              src="https://www.youtube.com/embed/KGGBXJFcQNA"
              title="Profil SLB Pelita Kasih Bandar Lampung"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
