"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Gradient Blob - Optimized */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -z-10"
        style={{ willChange: "opacity" }}
      />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[60px] -z-10" />

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

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <a
              href="https://facebook.com/YOUR_FACEBOOK"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook
                size={20}
                className="text-foreground hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub
                size={20}
                className="text-foreground hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://twitter.com/YOUR_TWITTER"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter
                size={20}
                className="text-foreground hover:text-primary transition-colors"
              />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={20}
                className="text-foreground hover:text-primary transition-colors"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
