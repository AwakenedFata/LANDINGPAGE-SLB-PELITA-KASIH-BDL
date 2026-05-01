"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const prestasiList = [
  {
    id: 1,
    image: "/images/OLYMPICSTUDENTWINNER1.jpeg",
    title: "Juara 1 Lomba Jauh",
    description: "Berhasil meraih medali emas pada kompetisi lompat jauh.",
    objectPositionClass: "object-[center_60%]", 
  },
  {
    id: 2,
    image: "/images/OLYMPICSTUDENTWINNER2.jpeg",
    title: "Juara 3 Lomba Lari",
    description: "Meraih medali perunggu pada kejuaraan lari 80 Meter Atletik Putra tingkat provinsi.",
    objectPositionClass: "object-[center_64%]", 
  },
  {
    id: 3,
    image: "/images/OLYMPICSTUDENTWINNER3.jpeg",
    title: "Juara 2 Lomba Lari",
    description: "Meraih medali perak pada kejuaraan lari 80 Meter Atletik Putri tingkat provinsi.",
    objectPositionClass: "object-[center_63%]", 
  },
];

export default function Prestasi() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="prestasi" className="relative py-12 lg:py-20 bg-white overflow-hidden font-poppins">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0378] mb-4">
            Prestasi Siswa
          </h2>
          <p className="max-w-[40rem] mx-auto text-lg text-[#6b6b6b] font-normal">
            Bukti nyata dedikasi dan semangat siswa-siswi kami dalam meraih prestasi di berbagai bidang perlombaan.
          </p>
        </motion.div>

        {/* Banner Utama 16:9 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl mb-12"
        >
          <Image
            src="/images/OLYMPICSTUDENTBANNER.jpeg"
            alt="Banner Prestasi Siswa"
            fill
            className="object-cover object-[center_89%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 sm:p-6 md:p-10 text-white">
              <h3 className="text-lg sm:text-2xl md:text-4xl font-bold mb-1 md:mb-2 shadow-sm">Lampung Student Olympic</h3>
              <p className="text-xs sm:text-sm md:text-lg opacity-90 max-w-2xl line-clamp-2 md:line-clamp-none">
                Para siswa & siswi kami terus menorehkan sejarah dan kebanggaan bagi sekolah.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid Pemenang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prestasiList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${item.objectPositionClass}`}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#0b0378] mb-2">{item.title}</h4>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Image Viewer */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 sm:p-8 transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-[75vh] md:h-[85vh] max-w-4xl bg-transparent">
              <Image
                src={selectedImage}
                alt="Full Image Viewer"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
