"use client";
import { motion } from "framer-motion";
import AboutSection from "@/components/core/AboutSection";
import HeroScene from "@/components/core/HeroScene";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        {/* 3D Background */}
        <HeroScene />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tight leading-none cursor-default"
        >
          <span className="text-[#FF6F61]">Adarsh</span> N
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="text-lg md:text-2xl text-[#888] mt-6"
        >
          UI/UX Designer & Storyteller
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10"
        >
          <span className="text-sm text-[#888] tracking-widest uppercase">
            Scroll to Begin
          </span>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />
    </>
  );
}
