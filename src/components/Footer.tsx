import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Welcome', href: '/#welcome' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Staff', href: '/#staff' },
  { label: 'Events', href: '/#events' },
  { label: 'Contact', href: '/#contact' },
];

const quickLinks = [
  { label: 'Admissions', href: '/#contact' },
  { label: 'Academic Calendar', href: '/#events' },
  { label: 'School Charter', href: '/charter' },
  { label: 'News', href: '/news' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Staff Portal', href: '#' },
  { label: 'Parent Resources', href: '#' },
  { label: 'School Fees', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-900" />
              </div>
              <div>
                <p className="font-extrabold text-sm">NANA AMOAKWA</p>
                <p className="text-white/60 text-[10px] font-medium tracking-widest">MODEL SCHOOL</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Nurturing young minds with quality education, discipline, and character
              since 2000. Let your light shine.
            </p>
            <p className="text-accent font-semibold text-sm italic mb-5">
              "Ma Wo Kan Nhyiren"
            </p>
           <div className="flex gap-3">
  {/* Facebook */}
  <a
    href="https://web.facebook.com/NAMSNANAAMOAKWAMODELSCHOOL/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary-900 transition-all duration-200"
    aria-label="Facebook"
  >
    <Facebook className="w-4 h-4" />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@nana.amoakwah.mod"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary-900 transition-all duration-200"
    aria-label="TikTok"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.05-.28-2.22-.13-3.11.37-1.01.57-1.76 1.57-1.99 2.7-.12.55-.11 1.12.04 1.65.3 1.07 1.13 1.98 2.2 2.38.9.33 1.95.25 2.82-.16.9-.43 1.58-1.28 1.79-2.25.12-.63.08-1.27.08-1.9.01-5.26-.01-10.52.02-15.78z" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/233242247980"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary-900 transition-all duration-200"
    aria-label="WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.04 6.54 2.04 12c0 1.77.47 3.5 1.37 5l-1.35 4.96 5.08-1.33c1.44.84 3.07 1.29 4.76 1.29 5.46 0 9.96-4.5 9.96-10 0-5.5-4.5-10-10-10zm5.93 14.16c-.22.63-1.1 1.2-1.52 1.28-.42.08-3.67.87-4.53-.53-.86-1.4-1.57-2.58-2.86-4.2-1.3-1.62.86-2.45 1.7-3.58.42-.57.57-1.07.85-1.07.28 0 .57-.14.85-.14.28 0 .57.02.8.6.23.57.78 1.9.85 2.04.07.14.07.42-.07.64-.14.22-.28.36-.5.57-.22.21-.42.5-.28.85.14.35.64 1.05 1.36 1.7.93.83 1.72 1.1 1.97 1.22.25.12.5.1.7-.02.2-.12 1.13-1.32 1.28-1.75.15-.43.15-.8-.07-1.12z" />
    </svg>
      </a>
        </div>
          </div>

          
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5 text-white/90">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5 text-white/90">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href === '#' ? (
                    <span className="text-white/60 text-sm cursor-default">
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-accent text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5 text-white/90">Contact Info</h4>
            <ul className="space-y-3.5">
              {[
                { icon: MapPin, text: 'Wassa Damang, Western Region, Ghana' },
                { icon: Phone, text: '0242247980' },
                { icon: Mail, text: 'nanaamoakwamodelbsch@ges.gov.gh' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Nana Amoakwa Model School. All rights reserved. &nbsp;|&nbsp; Powered By: NAMS IT
          </p>
          <p className="text-white/40 text-xs">
            Western Region, Ghana &nbsp;&middot;&nbsp; GES Accredited
          </p>
        </div>
      </div>
    </footer>
  );
}