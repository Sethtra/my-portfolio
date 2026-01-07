"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Background() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Base background with visible grid */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-[#0d1117]" : "bg-white"
        }`}
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(88, 166, 255, 0.15) 1px, transparent 1px)"
            : "radial-gradient(rgba(9, 105, 218, 0.25) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Large animated gradient orbs - MUCH more visible in light mode */}
      <motion.div
        className="absolute top-[5%] right-[10%] w-[700px] h-[700px] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(88, 166, 255, 0.25) 0%, rgba(88, 166, 255, 0.12) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(9, 105, 218, 0.4) 0%, rgba(9, 105, 218, 0.2) 40%, transparent 70%)",
          filter: "blur(35px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[650px] h-[650px] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(87, 171, 90, 0.2) 0%, rgba(87, 171, 90, 0.1) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(31, 136, 61, 0.35) 0%, rgba(31, 136, 61, 0.18) 40%, transparent 70%)",
          filter: "blur(35px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] left-[45%] w-[600px] h-[600px] rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(255, 212, 59, 0.15) 0%, rgba(255, 212, 59, 0.06) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(251, 192, 45, 0.3) 0%, rgba(251, 192, 45, 0.15) 40%, transparent 70%)",
          filter: "blur(45px)",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles - 2x more visible in light */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 2 === 0 ? "8px" : "6px",
            height: i % 2 === 0 ? "8px" : "6px",
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 4) * 18}%`,
            background: isDark
              ? i % 3 === 0
                ? "rgba(88, 166, 255, 0.5)"
                : i % 3 === 1
                ? "rgba(87, 171, 90, 0.4)"
                : "rgba(255, 212, 59, 0.4)"
              : i % 3 === 0
              ? "rgba(9, 105, 218, 0.8)"
              : i % 3 === 1
              ? "rgba(31, 136, 61, 0.7)"
              : "rgba(251, 192, 45, 0.7)",
            boxShadow: isDark
              ? "0 0 10px rgba(88, 166, 255, 0.4)"
              : "0 0 15px rgba(9, 105, 218, 0.6)",
            willChange: "transform",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Accent lines - much more visible in light */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "80px",
            left: `${25 + i * 25}%`,
            top: `${10 + i * 30}%`,
            background: isDark
              ? "linear-gradient(to bottom, transparent, rgba(88, 166, 255, 0.3), transparent)"
              : "linear-gradient(to bottom, transparent, rgba(9, 105, 218, 0.6), transparent)",
            willChange: "transform",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
