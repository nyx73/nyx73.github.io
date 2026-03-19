"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((er) => ({ ...er, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // Simulate submission (replace with actual API call if needed)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 glass`;

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-8 overflow-hidden" ref={ref}>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full filter blur-3xl opacity-10"
        style={{ backgroundColor: "var(--gradient-2)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-sm font-medium tracking-widest mb-3 uppercase"
            style={{ color: "var(--accent)" }}
          >
            Let&apos;s connect
          </p>
          <h2 className="section-heading" style={{ color: "var(--foreground)" }}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--foreground)", opacity: 0.65 }}
            >
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a great conversation about tech.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--gradient-1)22",
                    border: "1px solid var(--gradient-1)44",
                  }}
                >
                  <Mail size={16} style={{ color: "var(--gradient-1)" }} />
                </div>
                <div>
                  <p
                    className="text-xs opacity-50 mb-0.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    rhythmchavda073@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--gradient-3)22",
                    border: "1px solid var(--gradient-3)44",
                  }}
                >
                  <MapPin size={16} style={{ color: "var(--gradient-3)" }} />
                </div>
                <div>
                  <p
                    className="text-xs opacity-50 mb-0.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-5 rounded-2xl glass"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--foreground)" }}
              >
                Open to
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Internships",
                  "Projects",
                  "Hackathons",
                  "Collaborations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "var(--gradient-1)18",
                      color: "var(--gradient-1)",
                      border: "1px solid var(--gradient-1)33",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                style={{
                  color: "var(--foreground)",
                  backgroundColor: "var(--glass)",
                  border: errors.name
                    ? "1px solid #ef4444"
                    : "1px solid var(--glass-border)",
                }}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                style={{
                  color: "var(--foreground)",
                  backgroundColor: "var(--glass)",
                  border: errors.email
                    ? "1px solid #ef4444"
                    : "1px solid var(--glass-border)",
                }}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClass} resize-none`}
                style={{
                  color: "var(--foreground)",
                  backgroundColor: "var(--glass)",
                  border: errors.message
                    ? "1px solid #ef4444"
                    : "1px solid var(--glass-border)",
                }}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background:
                  status === "sent"
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                color: "#fff",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "idle" && (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
              {status === "sending" && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle size={15} /> Message Sent!
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
