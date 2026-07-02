"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "T-Store E-Commerce",
    description:
      "A premium e-commerce platform built with a Laravel backend API and Next.js/React frontend. Features include site branding management, dynamic shopping flows, and clean administration controls.",
    tags: ["React", "Laravel", "Supabase", "Tailwind", "Typescript"],
    image: "/t_store_preview.png",
    status: "Production",
    links: { demo: "https://www.t-store.site/", github: "https://github.com/Sethtra/T-Store.git" },
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging application using Next.js and Firebase. Supports private messaging, image sharing, and online status indicators.",
    tags: ["Next.js", "Firebase", "TypeScript"],
    image: "",
    status: "Future Idea (In Development)",
    links: { demo: "#", github: "#" },
  },
  {
    title: "Task Management System",
    description:
      "A productivity tool for teams to manage tasks and projects. Built with React and Node.js with drag-and-drop functionality.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "",
    status: "Future Idea (In Development)",
    links: { demo: "#", github: "#" },
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-muted/20">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-secondary/10" />
              )}
              {project.status !== "Production" && (
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                  {project.status}
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border/50">
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <FaGithub /> Code
                </a>
                {project.status === "Production" ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-not-allowed">
                    <FaExternalLinkAlt /> Coming Soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
