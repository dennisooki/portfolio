"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Github, Linkedin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      const j = await res.json()
      if (j.success) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        alert(j.error === 'rate' ? 'Too many messages. Try later.' : 'Failed to send')
      }
    } catch (e) {
      console.error(e)
      alert('Failed to send')
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Let&apos;s Connect
          </h2>
          <div className="section-divider w-24 mx-auto mb-8" />
          <p className="text-muted max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted leading-relaxed">
                  Whether you&apos;re looking for a developer to join your team, need help with a project,
                  or just want to connect, feel free to reach out.
                </p>
              </div>

              <a
                href="mailto:dennisooki@icloud.com"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                  <p className="text-foreground">dennisooki@icloud.com</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/dennisooki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/dennisooki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:dennisooki@icloud.com"
                  className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-muted mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
