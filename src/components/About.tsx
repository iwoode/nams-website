import { Target, Eye, Star, Users, BookOpen, Award } from 'lucide-react';

const values = [
  { icon: Star, label: 'Excellence', desc: 'Striving for the highest academic and personal standards.' },
  { icon: Users, label: 'Community', desc: 'Building strong bonds among students, staff, and families.' },
  { icon: BookOpen, label: 'Learning', desc: 'Fostering a lifelong love of curiosity and discovery.' },
  { icon: Award, label: 'Integrity', desc: 'Acting with honesty and strong moral character.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            About <span className="text-primary">Our School</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="School building"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-accent text-primary-900 font-bold text-sm px-3 py-1.5 rounded-lg">
                Est. 2000
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Our History</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nana Amoakwa Model School was founded in 2000 with a vision to provide
              quality basic education in a nurturing and disciplined environment. Named
              in honour of the local chief and patron of education, the school has grown
              from a modest classroom setting into a thriving institution serving hundreds
              of students from across the community.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, our graduates have gone on to excel in secondary schools,
              universities, and careers nationwide, a testament to the solid foundation
              laid within our walls. We continue to invest in modern facilities, qualified
              teachers, and innovative teaching methods to keep pace with a changing world.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-primary rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To provide a safe, inclusive, and stimulating learning environment where
                every child is empowered to achieve academic excellence and develop into
                a well-rounded, morally upright individual who positively contributes to
                society.
              </p>
            </div>

            <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most outstanding model school in the region, recognized for
                academic excellence, character development, and producing future leaders
                who embody the motto: <span className="font-semibold text-primary italic">"Ma Wo Kan Nhyiren"</span> — Let Your Light Shine.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-primary-50 rounded-2xl p-6 text-center hover:bg-primary hover:text-white transition-all duration-300 group border border-primary-100"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{label}</h4>
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-snug transition-colors">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
