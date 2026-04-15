import React from 'react';
import { FileText, File, Download, CalendarDays, BookOpen, Newspaper } from 'lucide-react';

interface Resource {
  category: string;
  title: string;
  description?: string;
  fileType: string;
  fileUrl: string;
}

const resources: Resource[] = [
  { category: 'Admission Forms', title: '2026/2027 Admission Form', description: 'Application for new students', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Admission Forms', title: 'Scholarship Application', description: 'For eligible candidates', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Academic Calendar', title: '2025/2026 Academic Calendar', description: 'Term dates and holidays', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Academic Calendar', title: 'Exam Timetable - Term 2', description: 'BECE and internal exams', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'School Policies', title: 'Code of Conduct', description: 'Student behavior expectations', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'School Policies', title: 'Anti-Bullying Policy', description: 'Our commitment to safety', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Newsletters', title: 'Term 1 Newsletter 2026', description: 'Highlights and achievements', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Newsletters', title: 'PTA Meeting Minutes - March 2026', description: 'Summary of discussions', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Other', title: 'School Uniform Guidelines', description: 'Approved vendors and styles', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { category: 'Other', title: 'Medical Form', description: 'For student health records', fileType: 'PDF', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Admission Forms':
      return <BookOpen className="text-[#FFC857]" size={24} />;
    case 'Academic Calendar':
      return <CalendarDays className="text-[#FFC857]" size={24} />;
    case 'School Policies':
      return <FileText className="text-[#FFC857]" size={24} />;
    case 'Newsletters':
      return <Newspaper className="text-[#FFC857]" size={24} />;
    default:
      return <File className="text-[#FFC857]" size={24} />;
  }
};

const Downloads: React.FC = () => {
  const categories = Array.from(new Set(resources.map(res => res.category)));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image */}
     {/* Hero Section with Background Image */}
<section className="relative bg-[#2E5A27] text-white py-16 md:py-24 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        'url(https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1920)',
    }}
  ></div>
  {/* Fallback background color if image fails */}
  <div className="absolute inset-0 bg-[#2E5A27] opacity-70"></div>
  <div className="container mx-auto px-4 relative z-10 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#FFC857] drop-shadow-lg">
      Downloads & Resources
    </h1>
    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow">
      Important forms, calendars, and documents for parents and students.
    </p>
  </div>
</section>

      {/* Resources Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {categories.map(category => (
          <section key={category} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              {getCategoryIcon(category)}
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E5A27] border-b-2 border-[#FFC857] pb-2">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.filter(res => res.category === category).map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      {resource.fileType === 'PDF' && <FileText className="text-red-500" size={20} />}
                      {resource.fileType === 'DOCX' && <File className="text-blue-500" size={20} />}
                      <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
                    </div>
                    {resource.description && (
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <a
                      href={resource.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#FFC857] text-[#2E5A27] rounded-lg font-medium text-sm hover:bg-[#e5b04a] transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Downloads;