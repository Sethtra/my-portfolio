"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Visible animated gradient blobs - MUCH MORE VISIBLE */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[5%] left-[5%] w-[550px] h-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)",
          filter: "blur(35px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
