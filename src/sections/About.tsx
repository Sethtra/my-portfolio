"use client";

import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaDownload, FaFileAlt } from "react-icons/fa";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image paths - you can add your 4 images in /public folder
  const images = ["/about1.jpg", "/about2.jpg", "/about3.jpg", "/about4.jpg"];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
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
                frontend, and{" "}
                <strong className="text-foreground">Laravel</strong> for the
                backend, I bridge the gap between design and functionality. I
                also have experience with{" "}
                <strong className="text-foreground">Firebase</strong> for
                real-time applications.
              </p>
              <p>
                I am always eager to learn new things and take on challenging
                projects.
              </p>
            </div>

            {/* CV Download Button */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1cX3TNoNygSITnUYjIdbGzqnQdLBvbIRv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <FaDownload /> Download CV
              </a>
              <a
                href="https://drive.google.com/file/d/1cX3TNoNygSITnUYjIdbGzqnQdLBvbIRv/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-muted transition-all hover:scale-105"
              >
                <FaFileAlt /> Preview CV
              </a>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-2xl" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    {/* Placeholder - Replace when you add images */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center text-muted-foreground p-8">
                        <div className="text-6xl mb-4">📸</div>
                        <p className="text-sm mb-2">
                          Image {currentImageIndex + 1} of 4
                        </p>
                        <p className="text-xs">
                          Place your images in /public:
                          <br />
                          about1.jpg, about2.jpg, about3.jpg, about4.jpg
                        </p>
                      </div>
                    </div>
                    {/* Uncomment when you add your images:
                    <Image
                      src={images[currentImageIndex]}
                      alt={`About image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    */}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image indicator dots */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
