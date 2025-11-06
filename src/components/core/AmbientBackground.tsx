"use client";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#0A0A0A]"
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "400% 400%",
      }}
    />
  );
}
