import React, { useState, useEffect, useRef } from 'react';
import {
  ScrollText,
  Heart,
  Shield,
  ClipboardList,
  Briefcase,
  BookMarked,
  Building2,
  Gavel,
  Users as Users2,
  Scale,
  ShieldAlert,
  RefreshCw,
  Flag,
  ChevronUp,
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  _items?: string[]; // For sections with bullet lists
}

const sections: Section[] = [
  {
    id: 'preamble',
    title: 'Preamble',
    icon: <ScrollText className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed">
        This charter establishes the guiding principles, rights, and responsibilities of all members
        of the school community. It promotes a safe, respectful, inclusive, and academically
        enriching environment where students and teachers can thrive.
      </p>
    ),
  },
  {
    id: 'core-values',
    title: 'Core Values',
    icon: <Heart className="w-6 h-6" />,
    content: (
      <ul className="space-y-2">
        {['Respect', 'Integrity', 'Responsibility', 'Excellence', 'Inclusiveness', 'Accountability'].map(
          (value) => (
            <li key={value} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-gray-700">{value}</span>
            </li>
          )
        )}
      </ul>
    ),
  },
  {
    id: 'students-rights',
    title: "Students' Rights",
    icon: <Shield className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed mb-4">Every student has the right to:</p>
    ),
    _items: [
      'Receive quality education in a supportive environment',
      'Be treated with respect, fairness, and dignity',
      'Learn in a safe and secure environment free from bullying or discrimination',
      'Express opinions respectfully',
      'Access school facilities and learning resources',
      'Receive academic and emotional support',
      'Privacy of personal information',
      'Participate in school activities without discrimination',
    ],
  },
  {
    id: 'students-responsibilities',
    title: "Students' Responsibilities",
    icon: <ClipboardList className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed mb-4">Every student is expected to:</p>
    ),
    _items: [
      'Attend classes regularly and be punctual',
      'Respect teachers, staff, and fellow students',
      'Complete assignments and participate actively',
      'Follow school rules and regulations',
      'Take care of school property and environment',
      'Maintain honesty in all academic work',
      'Dress appropriately according to school guidelines',
      'Report unsafe situations or misconduct',
      'Promote a positive school environment',
    ],
  },
  {
    id: 'teachers-rights',
    title: "Teachers' Rights",
    icon: <Briefcase className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed mb-4">Every teacher has the right to:</p>
    ),
    _items: [
      'Work in a safe and respectful environment',
      'Be treated with dignity by students, parents, and colleagues',
      'Teach without disruption',
      'Receive administrative support',
      'Access professional development opportunities',
      'Fair evaluation and recognition',
      'Use appropriate teaching methods',
    ],
  },
  {
    id: 'teachers-responsibilities',
    title: "Teachers' Responsibilities",
    icon: <BookMarked className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed mb-4">Every teacher is expected to:</p>
    ),
    _items: [
      'Deliver quality instruction and prepare adequately',
      'Treat all students fairly and respectfully',
      'Maintain constructive discipline',
      'Encourage participation and critical thinking',
      'Provide timely assessment and feedback',
      'Serve as role models',
      'Communicate effectively with students and parents',
      'Ensure student safety and well-being',
      'Uphold school policies and ethics',
    ],
  },
  {
    id: 'administration',
    title: 'School Administration Responsibilities',
    icon: <Building2 className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed mb-4">The school leadership shall:</p>
    ),
    _items: [
      'Provide a safe and conducive learning environment',
      'Ensure fair enforcement of rules',
      'Support teachers and students',
      'Maintain facilities and resources',
      'Promote continuous improvement',
      'Encourage open communication',
    ],
  },
  {
    id: 'discipline',
    title: 'Discipline and Conduct',
    icon: <Gavel className="w-6 h-6" />,
    content: (
      <ul className="space-y-2">
        {[
          'Rules must be followed by all members',
          'Discipline shall be fair, consistent, and corrective',
          'Bullying, harassment, and discrimination are prohibited',
          'Conflict resolution should prioritize dialogue',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'parent-involvement',
    title: 'Parent/Guardian Involvement',
    icon: <Users2 className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed mb-4">Parents/Guardians are expected to:</p>
    ),
    _items: [
      "Support their child's education and discipline",
      'Communicate with teachers and school authorities',
      'Ensure regular attendance and punctuality',
      'Participate in school activities',
    ],
  },
  {
    id: 'equality',
    title: 'Equality and Inclusion',
    icon: <Scale className="w-6 h-6" />,
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          The school promotes equal opportunities regardless of:
        </p>
        <ul className="space-y-2 mb-4">
          {['Gender', 'Religion', 'Ethnicity', 'Background', 'Ability'].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed">Discrimination in any form is not tolerated.</p>
      </>
    ),
  },
  {
    id: 'safety',
    title: 'Safety and Welfare',
    icon: <ShieldAlert className="w-6 h-6" />,
    content: (
      <ul className="space-y-2">
        {[
          'Commitment to protecting students and staff',
          'Emergency procedures must be followed',
          'Health and safety standards maintained',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'review',
    title: 'Review and Amendment',
    icon: <RefreshCw className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed">
        This charter shall be reviewed periodically and may be amended in consultation with
        stakeholders.
      </p>
    ),
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    icon: <Flag className="w-6 h-6" />,
    content: (
      <p className="text-gray-700 leading-relaxed">
        This charter serves as a guide for building a respectful, disciplined, and thriving school
        community. Every member is responsible for upholding these principles.
      </p>
    ),
  },
];

function SectionContent({ section }: { section: Section }) {
  const items = section._items;

  return (
    <div className="space-y-3">
      {section.content}
      {items && (
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Charter() {
  const [activeSection, setActiveSection] = useState('preamble');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Skip if a click-triggered smooth scroll is in progress
      if (isManualScrolling.current) return;

      const headerOffset = 100;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Immediately highlight the clicked section
    setActiveSection(id);

    // Block scroll handler from interfering
    isManualScrolling.current = true;

    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Re-enable scroll spy after smooth scroll finishes (approx 800ms)
      setTimeout(() => {
        isManualScrolling.current = false;
        // NO final check—let the next manual scroll update the active section naturally
      }, 800);
    } else {
      isManualScrolling.current = false;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#2E5A27] text-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="absolute inset-0 bg-[#2E5A27] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#FFC857] drop-shadow-lg">
            School Charter
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow">
            Our guiding principles, rights, and responsibilities for all members of the school community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="hidden lg:block lg:col-span-1 sticky top-24 h-fit">
            <nav className="bg-white rounded-2xl shadow-sm border border-primary-100 p-6">
              <h3 className="font-bold text-primary mb-4 text-sm tracking-widest uppercase">
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-sm transition-colors text-left w-full px-3 py-2 rounded-lg ${
                        activeSection === section.id
                          ? 'bg-primary text-white font-semibold'
                          : 'text-gray-600 hover:bg-primary-50 hover:text-primary'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            {sections.map((section) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="bg-white rounded-2xl shadow-sm border border-primary-100 p-8 scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <SectionContent section={section} />
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}