"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = Array.from({ length: 21 }, (_, i) => `/merch${i + 1}.JPG`);

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(199,36,177,0.15), transparent 60%), radial-gradient(circle at 70% 80%, rgba(123,63,228,0.15), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-400 bg-clip-text text-transparent"
        >
          Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-3 text-gray-400"
        >
          Moments, merch & memories from Santa Loca events.
        </motion.p>

        {/* ==== Image Grid ==== */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt={`Merch ${i + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
