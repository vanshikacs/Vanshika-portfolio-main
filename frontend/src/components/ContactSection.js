import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Instagram, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'vs.vs9411@gmail.com';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    setErrorMsg('');

    const emailSubject = `Portfolio message from ${form.name}`;
    const emailBody = `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && !serviceId.includes('your_')) {
        await emailjs.send(serviceId, templateId, {
          to_email: CONTACT_EMAIL,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        }, publicKey);

        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }

      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 7000);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please email me directly at vs.vs9411@gmail.com.');
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-handwriting text-2xl text-pink-accent mb-2">Let's build something meaningful.</p>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-charcoal">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-base text-charcoal/70 leading-relaxed mb-8">
              Open to internships, hackathons, collaborations, and meaningful tech opportunities. 
              Drop me a message and I'll get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:vs.vs9411@gmail.com" className="flex items-center gap-3 font-body text-sm text-charcoal/70 hover:text-pink-accent transition-colors" data-testid="contact-email-link">
                <Mail size={18} className="text-pink-accent" /> {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-charcoal/60">
                <MapPin size={18} className="text-pink-accent" /> Lucknow, India
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/vanshikacs" target="_blank" rel="noopener noreferrer" data-testid="contact-github-link" className="w-10 h-10 rounded-xl bg-white border border-border-subtle/50 flex items-center justify-center hover:bg-pink-light hover:border-pink-accent/30 transition-all">
                <Github size={18} className="text-charcoal/70" />
              </a>
              <a href="https://www.linkedin.com/in/vanshika-saxena-039518329" target="_blank" rel="noopener noreferrer" data-testid="contact-linkedin-link" className="w-10 h-10 rounded-xl bg-white border border-border-subtle/50 flex items-center justify-center hover:bg-pink-light hover:border-pink-accent/30 transition-all">
                <Linkedin size={18} className="text-charcoal/70" />
              </a>
              <a href="https://instagram.com/_.vanshikaxo" target="_blank" rel="noopener noreferrer" data-testid="contact-instagram-link" className="w-10 h-10 rounded-xl bg-white border border-border-subtle/50 flex items-center justify-center hover:bg-pink-light hover:border-pink-accent/30 transition-all">
                <Instagram size={18} className="text-charcoal/70" />
              </a>
              {/* Replace with actual Medium URL */}
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" data-testid="contact-medium-link" className="w-10 h-10 rounded-xl bg-white border border-border-subtle/50 flex items-center justify-center hover:bg-pink-light hover:border-pink-accent/30 transition-all">
                <span className="font-editorial text-sm font-bold text-charcoal/70">M</span>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sticky-note rotate-[-2deg] inline-block mt-8"
            >
              "Open to meaningful conversations and collaborations."
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-border-subtle/40 shadow-sm"
            data-testid="contact-form"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="font-body text-sm font-medium text-charcoal/80 block mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-border-subtle/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-pink-accent/40 focus:border-pink-accent/40 transition-all"
                  data-testid="contact-name-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-body text-sm font-medium text-charcoal/80 block mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-border-subtle/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-pink-accent/40 focus:border-pink-accent/40 transition-all"
                  data-testid="contact-email-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-body text-sm font-medium text-charcoal/80 block mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me what's on your mind..."
                  className="w-full px-4 py-3 rounded-xl bg-cream border border-border-subtle/50 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-pink-accent/40 focus:border-pink-accent/40 transition-all resize-none"
                  data-testid="contact-message-input"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <CheckCircle size={16} className="text-green-600" />
                  <p className="font-body text-sm text-green-800">Message ready! Your email app should open, or I’ll receive it through EmailJS if configured.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle size={16} className="text-red-600" />
                  <p className="font-body text-sm text-red-800">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                data-testid="contact-submit-btn"
                className="w-full py-3 px-6 bg-charcoal text-cream font-body text-sm font-medium rounded-full hover:bg-charcoal/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-handwriting text-lg text-charcoal/40 text-center mt-20"
        >
          "and that's a wrap. thanks for scrolling through my world."
        </motion.p>

        <p className="font-body text-xs text-charcoal/30 text-center mt-8">
          Built with love, code, and too much coffee. &copy; {new Date().getFullYear()} Vanshika Saxena
        </p>
      </div>
    </section>
  );
}

