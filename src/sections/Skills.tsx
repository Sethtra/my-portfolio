"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaPhp, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiMysql,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Dark/Light mode handled by class usually, Next.js icon is black/white
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border p-6 rounded-xl flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <skill.icon size={48} style={{ color: skill.color }} />
              <span className="font-medium text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
