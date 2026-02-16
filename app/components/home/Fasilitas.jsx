"use client";

import { motion } from "framer-motion";
import { LuSchool } from "react-icons/lu";
import { MdOutlineMeetingRoom, MdOutlineSportsSoccer } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";

const facilities = [
  {
    icon: LuSchool,
    title: "Gedung Milik Sendiri",
    description: "Gedung sekolah yang nyaman dan aman sebagai ruang belajar yang mendukung aktivitas pendidikan sehari-hari",
    iconBg: "bg-primary-800",
  },
  {
    icon: MdOutlineMeetingRoom,
    title: "Ruang Kelas",
    description: "Ruang kelas yang kondusif dengan sarana pembelajaran yang disesuaikan untuk mendukung proses belajar siswa",
    iconBg: "bg-primary-800",
  },
  {
    icon: MdOutlineSportsSoccer,
    title: "Sarana Olahraga",
    description: "Fasilitas olahraga untuk menunjang perkembangan fisik, motorik, dan kebugaran siswa",
    iconBg: "bg-amber-500",
  },
  {
    icon: IoMusicalNotesOutline,
    title: "Ruang Ekstrakurikuler",
    description: "Ruang khusus untuk kegiatan seni, musik, keterampilan, dan pengembangan minat siswa",
    iconBg: "bg-primary-800",
  },
  {
    icon: GoTrophy,
    title: "Beasiswa Prestasi",
    description: "Program beasiswa bagi siswa yang menunjukkan potensi dan prestasi di berbagai bidang",
    iconBg: "bg-amber-500",
  },
  {
    icon: IoIosPeople,
    title: "Tenaga Pendidik Bersertifikasi",
    description: "Didukung oleh guru dan tenaga pendidik profesional yang berpengalaman dalam pendidikan khusus",
    iconBg: "bg-primary-800",
  },
];

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="relative py-12 lg:py-20 bg-[#e6e5f1] overflow-hidden font-poppins">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0378] mb-4">
            Fasilitas & Lingkungan
          </h2>
          <p className="max-w-[40rem] mx-auto text-lg text-[#6b6b6b] font-normal">
            Fasilitas dan lingkungan belajar yang dirancang untuk mendukung proses pendidikan secara optimal dan berkelanjutan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-5 sm:p-6 rounded-lg bg-white shadow-lg border border-primary-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#0b0378]/60 to-[#0b0378] flex items-center justify-center mb-4 sm:mb-5 mx-auto shadow-md">
                  <facility.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#d6a143]" />
                </div>
                <h3 className="text-base sm:text-lg font-poppins font-medium text-[#0b0378] text-center sm:mb-3">
                  {facility.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-[14px] text-center leading-tight font-['Calibri',sans-serif] font-normal max-w-[250px] mx-auto">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
