"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);

  // observe scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // animation transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    // 👇 wrapper ensures a non-static position (fixes warning)
    <div className="relative">
      <section
        ref={ref}
        className="min-h-screen flex flex-col justify-center items-center px-[4vw] overflow-hidden"
      >
        {/* animated background blur */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] opacity-80 blur-3xl"
        />

        {/* content */}
        <div className="max-w-4xl text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-tight"
          >
            Designing with <span className="text-[#FF6F61]">Emotion</span> &amp;{" "}
            <span className="text-[#FF6F61]">Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="text-[#888] text-lg md:text-2xl leading-relaxed font-light"
          >
            I’m <span className="text-white">Adarsh N</span>, a UI/UX Designer who
            believes every interface tells a story. I craft digital experiences
            that connect design, interaction, and human emotion — transforming
            ideas into visuals that resonate.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            className="text-[#666] text-base md:text-lg leading-relaxed font-light"
          >
            My work blends minimalism with motion — creating balance between
            functionality and creative exploration. From conceptual branding to
            interactive design systems, I translate complexity into clarity.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
