import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroParallax() {
  const { scrollY } = useScroll();
  // Parallax effect: translateY and opacity based on scroll
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5]);

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500">
      <motion.div
        style={{ y, opacity }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="mb-8 text-lg text-white">
          I'm Noah Gallasic, a passionate developer creating amazing digital experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-teal-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-teal-100 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
