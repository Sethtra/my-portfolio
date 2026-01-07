"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-gradient-to-t from-secondary/10 to-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I'm currently open for
          new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through email or connect with me on social
              media.
            </p>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Me</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </a>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const name = formData.get("name");
              // In a real app, you would send this data to a server
              alert(
                `Thanks ${name}! This is a demo form. In a real application, this would send an email to you. For now, it just demonstrates the UI.`
              );
              form.reset();
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <FaPaperPlane size={14} />
            </button>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}
