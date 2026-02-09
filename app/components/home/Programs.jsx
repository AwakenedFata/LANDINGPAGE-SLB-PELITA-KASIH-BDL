"use client";

import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import { LuEar, LuBrain} from "react-icons/lu";
import { GiBarefoot } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";

const programs = [
  {
    icon: FaRegEye,
    title: "Tunanetra",
    description: "Layanan pendidikan yang mendukung proses belajar peserta didik dengan gangguan penglihatan melalui pendekatan pembelajaran yang menekankan kemandirian dan pengembangan kemampuan indera lainnya.",
    iconBg: "bg-[#2b7fff]",
    iconColor: "text-white",
  },
  {
    icon: LuEar,
    title: "Tunarungu",
    description: "Pendampingan pendidikan yang berfokus pada pengembangan kemampuan komunikasi dan bahasa, baik secara verbal maupun nonverbal, untuk mendukung interaksi dan proses belajar peserta didik dalam kegiatan pembelajaran sehari-hari.",
    iconBg: "bg-[#00b8db]",
    iconColor: "text-white",
  },
  {
    icon: LuBrain,
    title: "Tunagrahita",
    description: "Pendidikan yang dirancang untuk membantu peserta didik mengembangkan kemampuan dasar, kemandirian, serta keterampilan sosial melalui pembelajaran yang bertahap, terstruktur, dan sesuai dengan kebutuhan masing-masing.",
    iconBg: "bg-[#00bc7d]",
    iconColor: "text-white",
  },
  {
    icon: GiBarefoot,
    title: "Tunadaksa",
    description: "Program pembelajaran yang mendukung pengembangan kemampuan motorik, mobilitas, serta partisipasi aktif peserta didik dalam kegiatan belajar.",
    iconBg: "bg-[#ff6900]",
    iconColor: "text-white",
  },
  {
    icon: FaHeadSideVirus,
    title: "Autisme",
    description: "Pendekatan pembelajaran terstruktur yang mendukung pengembangan komunikasi, interaksi sosial, dan perilaku adaptif peserta didik.",
    iconBg: "bg-[#8949ff]",
    iconColor: "text-white",
  },
];

export default function Programs() {
  return (
    <section id="program" className="relative py-12 lg:py-20 bg-gradient-to-b from-[#494578] to-[#0b0378] overflow-hidden font-poppins">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Program Layanan
          </h2>
          <p className="max-w-3xl mx-auto text-[22px] text-white leading-tight font-light">
            Setiap layanan dirancang untuk mendukung proses belajar dan perkembangan peserta didik sesuai kebutuhannya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-5 sm:p-6 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${program.iconBg} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  <program.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${program.iconColor}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-3">
                  {program.title}
                </h3>
                <p className="text-[#cecece] text-xs sm:text-[13px] text-justify leading-tight font-light font-['Calibri',sans-serif]">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
