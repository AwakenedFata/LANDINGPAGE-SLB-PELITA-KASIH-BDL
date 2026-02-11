"use client";

import { motion } from "framer-motion";

export default function ProfilSekolah() {
  return (
    <section id="profil" className="relative py-12 lg:py-20 bg-[#e6e5f1] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-5 py-2 sm:px-8 sm:py-3 rounded-full bg-white text-[#0b0378] text-lg sm:text-2xl font-semibold border-4 border-[#0b0378] font-poppins" style={{ boxShadow: '0 6px 12px rgba(11, 3, 120, 0.3)' }}>
            Profil Sekolah
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Frame animasi */}
          <motion.div
            initial={{ scale: 0.97 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="aspect-video overflow-hidden shadow-2xl bg-white transform-gpu"
          >
            {/* Iframe statis */}
            <iframe
              src="https://www.youtube.com/embed/KGGBXJFcQNA"
              title="Profil SLB Pelita Kasih Bandar Lampung"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full block"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
