import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/id/20/800/600', alt: 'Students in classroom', category: 'academics', caption: 'Engaged learning in our modern classrooms' },
  { id: 2, src: 'https://picsum.photos/id/26/800/600', alt: 'Sports day', category: 'sports', caption: 'Annual inter-house sports competition' },
  { id: 3, src: 'https://picsum.photos/id/35/800/600', alt: 'Science fair project', category: 'academics', caption: 'Innovative science fair projects by our students' },
  { id: 4, src: 'https://picsum.photos/id/47/800/600', alt: 'Traditional dance', category: 'cultural', caption: 'Celebrating our rich culture with traditional dance' },
  { id: 5, src: 'https://picsum.photos/id/56/800/600', alt: 'School event', category: 'events', caption: 'Annual school speech and prize-giving day' },
  { id: 6, src: 'https://picsum.photos/id/64/800/600', alt: 'School campus', category: 'campus', caption: 'Beautiful and serene learning environment' },
  { id: 7, src: 'https://picsum.photos/id/72/800/600', alt: 'Football match', category: 'sports', caption: 'Exciting inter-school football match' },
  { id: 8, src: 'https://picsum.photos/id/88/800/600', alt: 'Library session', category: 'academics', caption: 'Quiet reading time in the school library' },
  { id: 9, src: 'https://picsum.photos/id/90/800/600', alt: 'Cultural festival', category: 'cultural', caption: 'Students showcasing various cultural attires' },
  { id: 10, src: 'https://picsum.photos/id/101/800/600', alt: 'Graduation ceremony', category: 'events', caption: 'Graduation day for our final year students' },
  { id: 11, src: 'https://picsum.photos/id/105/800/600', alt: 'School playground', category: 'campus', caption: 'Fun and games on the school playground' },
  { id: 12, src: 'https://picsum.photos/id/117/800/600', alt: 'Art class', category: 'academics', caption: 'Creative expressions in the art class' },
];

const categories = ['All', 'Sports', 'Academics', 'Cultural', 'Events', 'Campus'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory.toLowerCase());

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex, filteredImages.length]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Fixed background image */}
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
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow">
            A glimpse into life at Nana Amoakwa Model School.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === category
                  ? 'bg-[#FFC857] text-[#2E5A27] shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {image.caption && (
                <div className="absolute inset-0 bg-[#2E5A27] bg-opacity-80 flex items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-center font-medium text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && filteredImages.length > 0 && (
          <div
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-[#FFC857] transition-colors"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>
              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              {filteredImages[currentImageIndex].caption && (
                <p className="text-white text-center mt-4 text-base md:text-lg">
                  {filteredImages[currentImageIndex].caption}
                </p>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
                aria-label="Previous image"
              >
                ❮
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}