"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Dev Portfolio. All rights reserved.
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors text-xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
