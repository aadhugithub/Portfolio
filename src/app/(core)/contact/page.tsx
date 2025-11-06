"use client";
import { motion } from "framer-motion";
import { FaBehance, FaGithub, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  const links = [
  { name: "Behance", url: "https://www.behance.net/yourusername" },
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { name: "Instagram", url: "https://instagram.com/yourusername" },
  { name: "Call", url: "tel:+911234567890" },
];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-[4vw] py-32 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-tight mb-8"
      >
        Let’s <span className="text-[#FF6F61]">Connect</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-[#888] text-lg md:text-xl mb-16 max-w-2xl"
      >
        You can find me on the platforms below — I’m always open for creative
        collaborations, design talks, or just a friendly hello 👋
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-8 md:gap-12"
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center text-white/80 hover:text-[#FF6F61] transition-colors"
          >
            <div className="text-4xl md:text-5xl mb-3">{link.icon}</div>
            <span className="text-sm md:text-base tracking-wide uppercase font-medium">
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
