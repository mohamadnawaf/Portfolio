import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const links = [
  { href: '#home',           label: 'Home' },
  { href: '#about',          label: 'About' },
  { href: '#skills',         label: 'Skills' },
  { href: '#education',      label: 'Education' },
  { href: '#projects',       label: 'Projects' },
  { href: '#experience',     label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
];

interface NavbarProps {
  dark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map(l => l.href.slice(1));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive('#' + current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono font-semibold text-lg tracking-tight"
          >
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className={dark ? 'text-white' : 'text-gray-900'}></span>
            
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link-custom text-sm font-medium transition-colors ${
                  active === l.href
                    ? 'text-primary-500 active'
                    : dark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-lg transition-colors ${
                dark
                  ? 'text-yellow-400 hover:bg-white/10'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X size={20} className={dark ? 'text-white' : 'text-gray-900'} />
              ) : (
                <Menu size={20} className={dark ? 'text-white' : 'text-gray-900'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        } ${dark ? 'bg-dark-800/98' : 'bg-white/98'} backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === l.href
                  ? 'bg-primary-500/10 text-primary-500'
                  : dark
                  ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
