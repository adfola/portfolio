import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Download, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import ScrollFloat from '@/components/ui/ScrollFloat';
import { Badge } from '@/components/ui/badge';
import { personalInfo } from '@/data/personalInfo';

const whatsappLink = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
  "Hi Adekola — I'd like to get in touch about a project."
)}`;
const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
  "Let's build something great"
)}&body=${encodeURIComponent("Hi Adekola,\n\nI'd love to discuss an opportunity.")}`;

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setFormStatus('sending');
    // Simulate sending — replace with your email service (e.g. EmailJS, Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    // Open mailto as fallback with form data
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setFormStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      {/* Accent blobs */}
      <div className="pointer-events-none absolute -bottom-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">
              Contact
            </Badge>
            <ScrollFloat
              containerClassName="text-3xl md:text-5xl font-bold mb-4"
              scrollStart="top bottom-=20%"
              scrollEnd="bottom top+=30%"
            >
              Let's Connect
            </ScrollFloat>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you have an exciting project, a job opportunity, or just want to chat — I'm all ears.
              Pick the channel that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — Info + Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick contact cards */}
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: personalInfo.email,
                  href: mailto,
                  color: 'text-purple-400',
                  bg: 'bg-purple-500/10 border-purple-500/20',
                  description: 'Best for detailed inquiries',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: `+${personalInfo.phone}`,
                  href: whatsappLink,
                  color: 'text-green-400',
                  bg: 'bg-green-500/10 border-green-500/20',
                  description: 'Quick back-and-forth',
                  external: true,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 6, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${item.bg} hover:shadow-[var(--shadow-elegant)]`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                      <p className="text-xs text-muted-foreground/70 mt-0.5">{item.description}</p>
                    </div>
                    <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors text-lg">→</span>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-3 pt-2"
              >
                {[
                  { icon: Github,   href: personalInfo.social.github,   label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                  { icon: Mail,     href: personalInfo.social.email,    label: 'Email' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 flex items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-4 border-t border-border"
              >
                <p className="text-sm text-muted-foreground mb-3">Want to review my background?</p>
                <a href={personalInfo.resumePath} download={personalInfo.resumeFileName}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Download className="w-4 h-4 text-primary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">Download My Resume</p>
                      <p className="text-xs text-muted-foreground">{personalInfo.resumeFileName}</p>
                    </div>
                    <span className="ml-auto text-primary text-sm font-medium">PDF →</span>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 space-y-5 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">Send a Message</h3>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="contact-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending' || formStatus === 'success'}
                    whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full btn-neon py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'idle' && (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                    {formStatus === 'sending' && (
                      <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> Sending...</>
                    )}
                    {formStatus === 'success' && (
                      <><CheckCircle className="w-4 h-4 text-green-400" /> Message Sent!</>
                    )}
                    {formStatus === 'error' && (
                      <><AlertCircle className="w-4 h-4 text-red-400" /> Try Again</>
                    )}
                  </motion.button>

                  {formStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-green-500 text-center"
                    >
                      ✓ Your message has been opened in your email client.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;