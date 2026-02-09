"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Berapa kisaran biaya pendidikan dan apakah bisa dikonsultasikan?",
    answer: "Untuk informasi biaya pendidikan, kami menyediakan konsultasi khusus agar dapat menyesuaikan dengan kebutuhan dan kemampuan keluarga. Silakan hubungi kami di 0896-8083-3967 untuk informasi lebih detail.",
  },
  {
    question: "Berapa usia minimal dan maksimal siswa yang dapat mendaftar?",
    answer: "Usia minimal untuk mendaftar adalah 4 tahun untuk jenjang TKLB. Untuk jenjang SDLB, usia minimal adalah 6 tahun. Untuk usia maksimal, kami menerima siswa hingga usia sekolah menengah sesuai dengan kebutuhan pendidikan khusus.",
  },
  {
    question: "Bagaimana proses pendaftaran siswa baru di SLB Pelita Kasih?",
    answer: "Proses penerimaan siswa baru meliputi pengisian formulir pendaftaran, pengumpulan dokumen persyaratan, dan asesmen awal untuk menentukan kebutuhan pendidikan yang sesuai bagi calon peserta didik.",
  },
  {
    question: "Jenis kebutuhan khusus apa saja yang dilayani di SLB Pelita Kasih?",
    answer: "SLB Pelita Kasih melayani peserta didik dengan berbagai jenis ketunaan, termasuk Tunanetra (gangguan penglihatan), Tunarungu (gangguan pendengaran), Tunagrahita (hambatan intelektual), Tunadaksa (hambatan fisik), dan Autisme.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-12 lg:py-20 bg-[#e6e5f1] overflow-hidden font-poppins">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0378] mb-4">
            Pertanyaan Umum (FAQ)
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={`rounded-xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white shadow-lg"
                    : "bg-white shadow-md hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-[#0b0378] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0b0378] shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
