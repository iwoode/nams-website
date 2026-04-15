import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface ArticleProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  isFeatured?: boolean;
}

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  date,
  category,
  excerpt,
  imageUrl,
  isFeatured,
}) => {
  const cardClass = isFeatured
    ? 'col-span-1 md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition duration-300 hover:scale-[1.01]'
    : 'bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.01] flex flex-col h-full';

  const imageContainerClass = isFeatured
  ? 'md:w-1/2 flex-shrink-0 h-64 md:h-80'
  : 'w-full h-48 md:h-64 lg:h-56';

  const contentClass = isFeatured
    ? 'md:w-1/2 p-6 flex flex-col justify-between'
    : 'p-6 flex flex-col flex-grow';

  const handleReadMore = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={cardClass}>
      <div className={imageContainerClass}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className={contentClass}>
        <div className="flex-grow">
          <div className="flex items-center space-x-2 mb-2 text-sm text-gray-600">
            <Calendar size={16} className="text-[#2E5A27]" />
            <span>{date}</span>
            <Tag size={16} className="text-[#FFC857]" />
            <span className="font-semibold text-[#2E5A27]">{category}</span>
          </div>
          <h3 className="text-2xl font-bold text-[#2E5A27] mb-3 leading-tight">{title}</h3>
          <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
        </div>
        <button
          onClick={handleReadMore}
          className="text-[#FFC857] hover:text-[#2E5A27] font-semibold flex items-center group mt-2"
        >
          Read More
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const featuredArticle = {
    title: 'NAMS Celebrates 25 Years of Academic Excellence',
    date: 'April 10, 2026',
    category: 'Announcement',
    excerpt:
      'This year marks two decades of shaping young minds. Join us for a grand durbar and anniversary celebrations on May 15, 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format',
  };

  const otherArticles = [
    {
      title: '2026 BECE Examination',
      date: 'May 4, 2026',
      category: 'Academic',
      excerpt:
        'Final preparation for the 2026 Basic Education Certificate Examination is ongoing. Parents are encouraged to assist their wards in learning.',
      imageUrl: 'https://picsum.photos/id/24/400/300',
    },
    {
      title: 'NAMS Wins Lower Primary OLINGA Reading Festival Competition 2026',
      date: 'March 28, 2026',
      category: 'Achievement',
      excerpt:
        'Our talented student, Akua Serwaa, emerged victorious at the Ashanti Regional Spelling Bee. She will represent the region at the national finals.',
      imageUrl: 'https://picsum.photos/id/26/400/300',
    },
    {
      title: 'New ICT Lab Commissioned',
      date: 'March 15, 2026',
      category: 'Announcement',
      excerpt:
        'We are proud to unveil our state-of-the-art ICT laboratory, equipped with 50 new computers to enhance digital literacy.',
      imageUrl: 'https://picsum.photos/id/30/400/300',
    },
    {
      title: 'PTA Meeting Scheduled for May 5',
      date: 'April 12, 2026',
      category: 'Event',
      excerpt:
        'All parents and guardians are invited to the second term PTA meeting to discuss student progress and upcoming events.',
      imageUrl: 'https://picsum.photos/id/42/400/300',
    },
  ];

  return (
    <div className="bg-gray-50 font-inter">
      {/* Hero Section with Background Image */}
      <section className="relative bg-[#2E5A27] text-white py-20 md:py-32 overflow-hidden">
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
            News & Announcements
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow">
            Stay updated with the latest from Nana Amoakwa Model School.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <ArticleCard {...featuredArticle} isFeatured={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;