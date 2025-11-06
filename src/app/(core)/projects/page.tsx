"use client";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-dark text-light px-8 py-16">
      <h1 className="text-5xl font-bold text-primary mb-12 text-center">
        Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.slug} // ✅ unique key added
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-soft"
          >
            <Link href={`/projects/${project.slug}`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-gray-700 flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
