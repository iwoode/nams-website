import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'Welcome', to: '/#welcome' },
  { label: 'About', to: '/#about' },
  { label: 'Staff', to: '/#staff' },
  { label: 'Events', to: '/#events' },
  { label: 'Charter', to: '/charter' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Resources', to: '/downloads' },
  { label: 'Contact', to: '/#contact' },
  { label: 'E‑Learning', to: 'https://learn.nams-edu.netlify.app' }
];

// Key pages for mobile quick nav (condensed set)
const mobileQuickLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Staff', to: '/#staff' },
  { label: 'Events', to: '/#events' },
  { label: 'News', to: '/news' },
  { label: 'Resources', to: '/downloads' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/#home" className="flex items-center gap-2.5 group" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.jpg"
                alt="NAMS Logo"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-primary font-extrabold text-sm tracking-tight">NAMS</span>
                <span className="text-gray-500 text-[10px] font-medium tracking-wide hidden sm:block">
                  MODEL SCHOOL
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-wrap justify-center items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary-50 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/#contact"
              onClick={closeMenu}
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Enroll Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Quick Navigation Bar (Scrollable) - NEW */}
      <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-4 py-2 whitespace-nowrap">
            {mobileQuickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="px-4 py-1.5 text-sm font-medium text-gray-700 rounded-full hover:bg-primary-50 hover:text-primary transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={closeMenu}
              className="px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-all duration-200 shadow-sm"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu (Full Screen Dropdown) */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-primary hover:bg-primary-50 transition-all duration-200 block"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              to="/#contact"
              onClick={closeMenu}
              className="w-full px-4 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors block text-center"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}