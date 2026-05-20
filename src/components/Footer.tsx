"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Dev Portfolio. All rights reserved.
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/lu.fii.35"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/Sethtra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bo-sethtra-27bb05305/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
