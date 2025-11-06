"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollStorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // parallax depth layers
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* parallax background gradient */}
      <motion.div
        style={{ y: yBg, opacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] opacity-80 blur-2xl"
      />

      {/* large storytelling heading */}
      <motion.h2
        style={{ y: yText }}
        className="text-[clamp(2.5rem,6vw,5rem)] font-semibold text-center leading-tight max-w-5xl"
      >
        Every <span className="text-[#FF6F61]">Pixel</span> Has a{" "}
        <span className="text-[#FF6F61]">Purpose</span>
      </motion.h2>

      {/* supporting copy */}
      <motion.p
        style={{ y: yText }}
        className="text-[#999] text-center mt-10 text-lg md:text-2xl max-w-3xl leading-relaxed font-light"
      >
        Each scroll unveils a new perspective — transitions are not just motion,
        but emotion. The design breathes, reacts, and guides the user through a
        visual narrative.
      </motion.p>
    </section>
  );
}
