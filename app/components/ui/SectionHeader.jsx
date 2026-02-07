"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, light = false, badge = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? "bg-white/20 text-white border border-white/30" 
            : "bg-primary-100 text-primary-700 border border-primary-200"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? "text-white" : "text-primary-800"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg ${
          light ? "text-white/80" : "text-neutral-600"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
