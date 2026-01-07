"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 tracking-tight leading-tight">
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                experiences
              </span>{" "}
              that matter.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl"
          >
            Fresh graduate specializing in React, Next.js, Laravel, and
            Firebase. Ready to turn ideas into clean, functional code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full border border-border bg-card hover:bg-muted transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-500 blur-2xl opacity-30 animate-pulse" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-purple-500/10">
              {/* Placeholder - Replace with your actual image */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <p className="text-sm">Your Photo Here</p>
                  <p className="text-xs mt-2 px-4">
                    Place your image in
                    <br />
                    `/public/profile.jpg`
                  </p>
                </div>
              </div>
              {/* Uncomment when you add your image:
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
