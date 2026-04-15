import { Quote } from 'lucide-react';

export default function Welcome() {
  return (
    <section id="welcome" className="py-20 lg:py-28 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            A Message From Our Headteacher
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Welcome to <span className="text-primary">Nana Amoakwa</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-primary-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative">
              <div className="h-72 lg:h-full min-h-[320px] relative overflow-hidden">
              <img
  src="/images/headteacher.jpg"
  alt="Headteacher of Nana Amoakwa Model School"
  className="w-full h-full object-cover object-top"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <p className="text-white font-bold text-lg">Mr. Alex Gyan</p>
                <p className="text-white/80 text-sm">Headteacher</p>
              </div>
            </div>

            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "It is with great pride and joy that I welcome you to Nana Amoakwa Model School.
                Our institution stands as a beacon of academic excellence and moral development.
                We are committed to equipping each child with the knowledge, skills, and values
                they need to become responsible citizens and future leaders of our nation."
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Here at NAMS, we believe every child has unique potential waiting to be
                unlocked. Our dedicated staff, enriching curriculum, and supportive learning
                environment ensure that every student thrives. We warmly invite you to join
                our growing family of learners.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-accent" />
                <div>
                  <p className="font-bold text-gray-900">Mr. Alex Gyan</p>
                  <p className="text-primary text-sm font-medium">Headteacher, NAMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
