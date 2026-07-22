import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps { dark: boolean; }

export default function Contact({ dark }: ContactProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: in a real app this would POST to an API or Supabase function.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  const contactInfo = [
    { icon: Mail,     label: 'Email',    value: 'mhdnawaf2003@gmail.com', href: 'mailto:mhdnawaf2003@gmail.com' },
    { icon: Phone,    label: 'Phone',    value: '+94 77 123 4567',       href: 'tel:+94771234567' },
    { icon: Linkedin, label: 'LinkedIn', value: 'nawaf-kamil',            href: 'https://www.linkedin.com/in/nawaf-kamil' },
    { icon: Github,   label: 'GitHub',   value: 'mohamadnawaf',           href: 'https://github.com/mohamadnawaf' },
    { icon: MapPin,   label: 'Location', value: 'Colombo, Sri Lanka',     href: null },
  ];

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 ${dark ? 'bg-dark-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's build something together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="reveal-left space-y-4">
            {contactInfo.map((c) => {
              const Wrapper = c.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    c.href
                      ? dark
                        ? 'bg-dark-800 border-gray-800 hover:border-primary-500/50 hover:scale-[1.02] cursor-pointer'
                        : 'bg-white border-gray-100 hover:border-primary-500/50 hover:scale-[1.02] cursor-pointer shadow-sm'
                      : dark
                        ? 'bg-dark-800 border-gray-800'
                        : 'bg-white border-gray-100 shadow-sm'
                  }`}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <c.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wide ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {c.label}
                    </p>
                    <p className={`text-sm font-medium ${dark ? 'text-gray-200' : 'text-gray-800'}`}>
                      {c.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="reveal-right">
            <form
              onSubmit={handleSubmit}
              className={`p-6 rounded-2xl border space-y-4 ${
                dark ? 'bg-dark-800 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1.5 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={`form-input w-full px-4 py-2.5 rounded-lg border text-sm ${
                    dark
                      ? 'bg-dark-700 border-gray-700 text-white placeholder-gray-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`form-input w-full px-4 py-2.5 rounded-lg border text-sm ${
                    dark
                      ? 'bg-dark-700 border-gray-700 text-white placeholder-gray-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1.5 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  className={`form-input w-full px-4 py-2.5 rounded-lg border text-sm resize-none ${
                    dark
                      ? 'bg-dark-700 border-gray-700 text-white placeholder-gray-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  sent
                    ? 'bg-accent-500 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white hover:scale-[1.02] shadow-lg shadow-primary-600/30'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
