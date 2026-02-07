"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, MapPin, Phone, Clock } from "lucide-react";

const jadwal = [
  { title: "Pendaftaran Dibuka", date: "2 Juni 2026" },
  { title: "Pendaftaran Ditutup", date: "9 Juli 2026" },
  { title: "Verifikasi & Validasi Data", date: "23 - 26 Juni 2026" },
  { title: "Pengumuman Diterima", date: "10 Juli 2026" },
  { title: "Masuk Sekolah", date: "14 Juli 2026" },
];

const syarat = [
  "Surat Keterangan Hasil Asesmen",
  "Mengisi formulir pendaftaran yang telah disediakan",
  "Pasfoto 3×4 (4 lembar)",
  "Fotokopi akta kelahiran (2 lembar)",
  "Fotokopi kartu keluarga (2 lembar)",
  "Fotokopi KTP kedua orang tua (masing-masing 2 lembar)",
  "Hasil tes IQ dan data pendukung lainnya (jika ada)",
];

export default function PPDB() {
  return (
    <section id="ppdb" className="relative py-12 lg:py-20 bg-gradient-to-b from-purple-100/70 to-purple-100/70 overflow-hidden font-poppins">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0378] mb-4">
            Informasi PPDB
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Informasi lengkap mengenai proses, jadwal, dan persyaratan pendaftaran peserta didik baru
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl p-5 sm:p-8 lg:p-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#0b0378] text-center mb-8 sm:mb-10">
            Informasi Pendaftaran Tahun Ajaran 2026/2027
          </h3>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Jadwal Pendaftaran */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0b0378]/40 to-[#0b0378] flex items-center justify-center">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#0b0378]">Waktu Pendaftaran</h4>
              </div>
              
              <div className="space-y-6 sm:space-y-8 relative before:absolute before:left-3 sm:before:left-4 before:top-3 sm:before:top-4 before:bottom-3 sm:before:bottom-4 before:w-0.5 before:bg-purple-200">
                {jadwal.map((item, index) => (
                  <div key={index} className="relative pl-10 sm:pl-12">
                    <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#0b0378]/40 to-[#0b0378] text-white flex items-center justify-center font-bold text-xs sm:text-sm ring-4 ring-white">
                      {index + 1}
                    </div>
                    <h5 className="text-base sm:text-lg font-semibold text-[#0b0378]">{item.title}</h5>
                    <p className="text-purple-600 font-semibold text-xs sm:text-sm">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Syarat Pendaftaran */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b0378]/40 to-[#0b0378] flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#0b0378]">Syarat Pendaftaran</h4>
              </div>
              <ul className="space-y-3">
                {syarat.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#0b0378] mt-2 shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Informasi Kontak */}
          <div className="mt-10 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b0378]/40 to-[#0b0378] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-[#0b0378] mb-1">Tempat Pendaftaran</h5>
                <p className="text-gray-700 text-sm mb-1">SLB & Terapi Pelita Kasih Bandar Lampung</p>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Senin – Jumat | 08.00 – 15.00 WIB</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b0378]/40 to-[#0b0378] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-[#0b0378] mb-1">Informasi Daring</h5>
                <p className="text-gray-700 text-sm">0896-8083-3967 (Suranti)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
