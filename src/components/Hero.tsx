import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import profilePic from '../assets/portfolio.jpeg';

const TYPING_STRINGS = [
  'Backend Developer',
  'PHP & Laravel Developer',
  'Full Stack Enthusiast',
  'Problem Solver',
  'HNDIT Student',
];

interface HeroProps { dark: boolean; }

export default function Hero({ dark }: HeroProps) {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    if (!deleting && charIndex < current.length) {
      timeoutRef.current = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIndex, deleting, stringIndex]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        dark ? 'bg-dark-900' : 'bg-gray-50'
      }`}
    >
      {/* Background shapes */}
      <div
        className="shape w-96 h-96 top-10 -left-24"
        style={{ background: '#3b82f6' }}
      />
      <div
        className="shape w-80 h-80 bottom-20 right-0"
        style={{ background: '#10b981', animationDelay: '3s' }}
      />
      <div
        className="shape w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: '#6366f1', animationDelay: '1.5s' }}
      />

      {/* Grid overlay */}
      <div
        className={`absolute inset-0 opacity-[0.03] ${dark ? 'invert-0' : 'invert'}`}
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="reveal mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-medium"
              style={{
                borderColor: dark ? 'rgba(59,130,246,0.4)' : 'rgba(59,130,246,0.3)',
                color: '#3b82f6',
                background: dark ? 'rgba(59,130,246,0.08)' : 'rgba(59,130,246,0.05)',
              }}>
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Available for Internship
            </div>

            <h1 className={`reveal text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Mohamad Nawaf</span>
            </h1>

            <p className={`reveal text-xl sm:text-2xl font-medium mb-4 h-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}
              style={{ animationDelay: '0.2s' }}>
              <span className="typing-cursor">{text}</span>
            </p>

            <p className={`reveal text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}
              style={{ animationDelay: '0.3s' }}>
              Motivated HNDIT student with expertise in web development, PHP, Laravel, JavaScript, and MySQL.
              Eager to contribute to real-world projects and grow as a backend software engineer.
            </p>

            <div className="reveal flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              style={{ animationDelay: '0.4s' }}>
              <a
                href="/Nawaf-Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-600/30"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-200 hover:scale-105 ${
                  dark
                    ? 'border-primary-500 text-primary-400 hover:bg-primary-500/10'
                    : 'border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            <div className="reveal flex items-center gap-4 justify-center lg:justify-start"
              style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/mohamadnawaf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`p-2.5 rounded-lg border transition-all hover:scale-110 ${
                  dark
                    ? 'border-gray-700 text-gray-400 hover:border-primary-500 hover:text-primary-400'
                    : 'border-gray-200 text-gray-500 hover:border-primary-500 hover:text-primary-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nawaf-kamil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-2.5 rounded-lg border transition-all hover:scale-110 ${
                  dark
                    ? 'border-gray-700 text-gray-400 hover:border-primary-500 hover:text-primary-400'
                    : 'border-gray-200 text-gray-500 hover:border-primary-500 hover:text-primary-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mhdnawaf2003@gmail.com"
                aria-label="Email"
                className={`p-2.5 rounded-lg border transition-all hover:scale-110 ${
                  dark
                    ? 'border-gray-700 text-gray-400 hover:border-primary-500 hover:text-primary-400'
                    : 'border-gray-200 text-gray-500 hover:border-primary-500 hover:text-primary-600'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Avatar graphic */}
          <div className="reveal flex-shrink-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 animate-pulse-slow" />
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-primary-500/30">
                <img
                  src={profilePic}
                  alt="Mohamad Nawaf"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tech badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-mono font-semibold shadow-lg animate-float">
                PHP
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-mono font-semibold shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                Laravel
              </div>
              <div className="absolute top-1/2 -right-6 px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-mono font-semibold shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                JS
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className={`text-xs font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Scroll down</span>
          <ArrowDown size={16} className={`animate-bounce ${dark ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </div>
    </section>
  );
}
