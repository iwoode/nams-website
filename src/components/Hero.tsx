import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToWelcome = () => {
    document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/75 to-primary-900/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Website still under Development, Stay Updated!
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Nana Amoakwa
          <br />
          <span className="text-accent">Model School</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-16 bg-accent/60" />
          <p className="text-accent font-semibold text-lg sm:text-xl tracking-widest uppercase">
            Ma Wo Kan Nhyiren
          </p>
          <div className="h-px w-16 bg-accent/60" />
        </div>

        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Nurturing young minds to reach their full potential through quality education,
          discipline, and character development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-accent text-primary-900 font-bold text-base rounded-2xl hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
          >
            Enroll Now
          </button>
          <button
            onClick={scrollToWelcome}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-200"
          >
            Discover More
          </button>
        </div>
      </div>

      <button
        onClick={scrollToWelcome}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
