import { Mail, GraduationCap } from 'lucide-react';

const staffMembers = [
  {
    name: 'Mr. Emmanuel Boakye Gyan',
    title: 'Assistant Headmaster',
    subject: 'Academics',
    photo: '/images/staff1.jpg',
    email: 'emmanuelboakyegyan@gmail.com',
  },
  {
    name: 'Ms Victorial Efua Amoaful',
    title: 'Assistant Headmistress',
    subject: 'Administration',
    photo: '/images/staff2.jpg',
    email: 'victoriaefuaamoaful@gmail.com',
  },
  {
    name: 'Mr. Frederick Joe Obeng',
    title: 'Head of Department',
    subject: 'Upper Primary',
    photo: '/images/staff3.png',
    email: 'fjobeng78@gmail.com',
  },
  {
    name: 'Mrs Sandra Gymah',
    title: 'Head of Department',
    subject: 'Lower Primary',
    photo: '/images/staff4.jpg',
    email: 'sandygyimah1990@gmail.com',
  },
  {
    name: 'Mr. Philip Korang',
    title: 'Head of Department',
    subject: 'JHS',
    photo: '/images/staff5.png',
    email: 'philip.korang@yahoo.com',
  },
    ];

export default function Staff() {
  return (
    <section id="staff" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Meet The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our <span className="text-primary">Dedicated Heads of Department</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Our experienced and passionate educators are committed to bringing out
            the best in every student.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex items-center gap-1.5 bg-accent rounded-full px-3 py-1">
                    <GraduationCap className="w-3 h-3 text-primary-900" />
                    <span className="text-primary-900 text-xs font-bold">{member.title}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.subject}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
          <p className="text-white/80 text-sm mb-4 max-w-md mx-auto">
            We are always looking for passionate educators who want to make a difference.
          </p>
          <a
            href="mailto:careers@nams.edu.gh"
            className="inline-flex items-center gap-2 bg-accent text-primary-900 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-accent-light transition-colors"
          >
            <Mail className="w-4 h-4" />
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
