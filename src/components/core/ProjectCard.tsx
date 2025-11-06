"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] hover:bg-[#181818] cursor-pointer"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-sm uppercase tracking-widest text-[#FF6F61]">
            {project.category}
          </p>
          <p className="text-[#888] text-base leading-relaxed">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
