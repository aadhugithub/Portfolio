"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* logo / name */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-white hover:text-[#FF6F61] transition-colors"
        >
          Adarsh<span className="text-[#FF6F61]">.</span>
        </Link>

        {/* nav links */}
        <div className="flex gap-8 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = path === link.href || (link.href === "/#about" && path === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                scroll={link.href.startsWith("/#") ? false : true}
                className="relative group"
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-[#FF6F61]" : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FF6F61] rounded-full"
                    transition={{ duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
