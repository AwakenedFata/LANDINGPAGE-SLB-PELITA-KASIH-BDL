"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Pangeran Antasari, Bandar Lampung, Lampung",
    iconBg: "bg-[#e6e5f1]",
    iconColor: "text-[#0b0378]",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    content: "0896-8083-3967 (Suranti)",
    iconBg: "bg-[#e6e5f1]",
    iconColor: "text-[#0b0378]",
  },
  {
    icon: Mail,
    title: "Email",
    content: "slbpelitakasihbdl19@gmail.com",
    iconBg: "bg-[#e6e5f1]",
    iconColor: "text-[#0b0378]",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin – Jumat\n08.00 – 15.00 WIB",
    iconBg: "bg-[#e6e5f1]",
    iconColor: "text-[#0b0378]",
  },
];

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "6289680833967";
    const text = `Nama: ${formData.name}\n\nPesan: ${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="kontak" className="relative py-12 lg:py-20 bg-[#e6e5f1] overflow-hidden font-poppins">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0378] mb-4">
            Kontak & Lokasi Sekolah
          </h2>
          <p className="max-w-md mx-auto text-lg text-gray-600 leading-tight">
            Silakan hubungi kami untuk informasi lebih lanjut atau menjadwalkan kunjungan ke sekolah
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Info Cards + Map */}
          <div className="flex flex-col gap-6 h-full">
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-3"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-sm ${info.iconBg} ${info.iconColor} flex items-center justify-center`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#0b0378] text-sm mb-0.5">{info.title}</h3>
                    <p className="text-gray-600 text-xs whitespace-pre-line leading-relaxed">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-3 shadow-md flex-1 min-h-[200px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=SLB%20Pelita%20Kasih%20Bandar%20Lampung&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SLB Pelita Kasih Bandar Lampung"
                className="rounded-lg h-full w-full"
              />
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-5 sm:p-8 shadow-md h-full"
          >
            <h3 className="text-2xl font-semibold text-[#0b0378] mb-6">
              Hubungi Kami
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 border border-[#0b0378] rounded-lg placeholder-[#0b0378] focus:outline-none focus:ring-2 focus:ring-[#0b0378] focus:border-[#0b0378] transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan pesan Anda di sini..."
                  rows="6"
                  className="w-full px-4 py-3 border border-[#0b0378] rounded-lg placeholder-[#0b0378] focus:outline-none focus:ring-2 focus:ring-[#0b0378] focus:border-[#0b0378] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#0b0378] text-white font-semibold rounded-lg hover:bg-[#0b0378]/90 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Kirim Pesan via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
