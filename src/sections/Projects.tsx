"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-scale e-commerce solution built with Laravel API and React frontend. Features include user authentication, cart management, and payment processing.",
    tags: ["React", "Laravel", "MySQL", "Tailwind"],
    links: { demo: "#", github: "#" },
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging application using Next.js and Firebase. Supports private messaging, image sharing, and online status indicators.",
    tags: ["Next.js", "Firebase", "TypeScript"],
    links: { demo: "#", github: "#" },
  },
  {
    title: "Task Management System",
    description:
      "A productivity tool for teams to manage tasks and projects. Built with React and Node.js with drag-and-drop functionality.",
    tags: ["React", "Node.js", "MongoDB"],
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
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
          >
            {/* Placeholder for project image */}
            <div className="h-48 bg-muted group-hover:bg-muted/80 transition-colors flex items-center justify-center text-muted-foreground">
              Project Preview
            </div>

            <div className="p-6">
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

              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.links.demo}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
