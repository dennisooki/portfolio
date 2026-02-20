"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold">DM</span>
            <span className="text-accent">.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-highlight fill-current" />
            <span>in Nairobi</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-muted">
              © {new Date().getFullYear()} Dennis Ooki Magolo
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="p-2 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
