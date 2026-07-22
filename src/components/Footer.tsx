import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import logo from '../assets/footer-logo.png';

interface FooterProps {
  dark: boolean;
  showBackToTop: boolean;
}

export default function Footer({ dark, showBackToTop }: FooterProps) {
  return (
    <>
      {/* Back to top */}
      <button
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        } bg-primary-600 hover:bg-primary-700 text-white`}
      >
        <ArrowUp size={20} />
      </button>

      <footer className={`py-10 ${dark ? 'bg-dark-800 border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <a href="#home" className="font-mono font-semibold text-base">
              <img src={footer-logo} alt="Logo" className="h-8 w-auto" />
              <span className={dark ? 'text-white' : 'text-gray-900'}></span>
             
            </a>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/mohamadnawaf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className={`p-2 rounded-lg transition-colors ${dark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'}`}>
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nawaf-kamil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className={`p-2 rounded-lg transition-colors ${dark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'}`}>
                <Linkedin size={18} />
              </a>
              <a href="mailto:mhdnawaf2003@gmail.com" aria-label="Email"
                className={`p-2 rounded-lg transition-colors ${dark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-500 hover:text-primary-600'}`}>
                <Mail size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className={`text-xs text-center sm:text-right ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
              © {new Date().getFullYear()} Mohamad Nawaf. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
