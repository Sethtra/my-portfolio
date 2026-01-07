"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="text-muted-foreground text-lg space-y-6 leading-relaxed">
          <p>
            Hello! I'm a passionate developer who recently graduated with a
            focus on modern web technologies. I love creating intuitive and
            dynamic user experiences using the latest tools.
          </p>
          <p>
            With a strong foundation in{" "}
            <strong className="text-foreground">React</strong> and{" "}
            <strong className="text-foreground">Next.js</strong> for the
            frontend, and <strong className="text-foreground">Laravel</strong>{" "}
            for the backend, I bridge the gap between design and functionality.
            I also have experience with{" "}
            <strong className="text-foreground">Firebase</strong> for real-time
            applications.
          </p>
          <p>
            I am always eager to learn new things and take on challenging
            projects.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
