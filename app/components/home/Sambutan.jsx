"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Sambutan() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#e6e5f1] overflow-hidden font-poppins">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden transform-gpu">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 will-change-transform" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 will-change-transform" />
      </div>

      <div className="relative w-full px-4 py-0 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-static p-6 lg:p-12 shadow-[0_20px_50px_rgba(8,112,184,0.3)] hover:shadow-[0_25px_60px_rgba(8,112,184,0.4)] transition-shadow duration-300 border border-primary-100"
        >
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Photo Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative w-full max-w-[18rem] aspect-[3/4] sm:w-80 sm:h-[28rem]">
                <Image
                  src="/images/KEPSEK.jpeg"
                  alt="Kepala Sekolah SLB Pelita Kasih"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#0b0378] text-sm font-medium mb-6">
                <Quote className="w-4 h-4" />
                Sambutan Kepala Sekolah
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0b0378] mb-2">
                Selamat Datang di SLB Pelita Kasih
              </h2>

              <p className="text-lg text-[#af1616] font-medium mb-6">
                Maria Agustina Mera, ALMA
                <span className="text-neutral-500 font-normal">
                  {" "}
                  — Kepala Sekolah
                </span>
              </p>

              <div className="space-y-4 text-neutral-600 leading-tight text-justify text-[20px] max-w-xl" style={{ fontFamily: "'Calibri Light', Calibri, sans-serif" }}>
                <p>
                  Puji Syukur kepada Tuhan yang Maha Esa atas penyertaannya
                  sehingga SLB Pelita Kasih dapat terus melaksanakan pelayanan
                  Pendidikan khusus dalam suasana belajar yang aman dan
                  mendukung perkembangan pesera didik.
                </p>
                <p>
                  SLB Pelita Kasih berkomitmen memberikan pendampingan
                  pendidikan yang berfokus pada pengembangan karakter,
                  kemandirian, dan keterampilan hidup pesera didik demgan
                  dukungan tenaga pendidik yang berdedikasi.
                </p>
              </div>

              {/* Quote Highlight */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-50 via-purple-50 to-transparent border-l-4 border-[#0b0378]">
                <p className="text-[#0b0378] italic font-medium text-base sm:text-lg">
                  &ldquo;Pendidikan adalah proses pendampingan untuk menumbuhkan
                  kemampuan dan kemandirian.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
