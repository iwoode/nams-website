import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const termDates = [
  {
    term: 'First Term 2025/2026',
    opens: 'September 2, 2025',
    closes: 'December 18, 2025',
    color: 'bg-primary',
  },
  {
    term: 'Second Term 2025/2026',
    opens: 'January 8, 2026',
    closes: 'April 1, 2026',
    color: 'bg-primary-700',
  },
  {
    term: 'Third Term 2025/2026',
    opens: 'April 21, 2026',
    closes: 'July 23, 2026',
    color: 'bg-primary-800',
  },
];

const upcomingEvents = [
  {
    date: { day: '18', month: 'APR' },
    title: 'Parents & Teachers Meeting (PTM)',
    time: '9:00 AM – 12:00 PM',
    location: 'School Assembly Hall',
    category: 'Academic',
  },
  {
    date: { day: '25', month: 'APR' },
    title: 'Inter-House Spelling Bee Competition',
    time: '10:00 AM',
    location: 'School Premises',
    category: 'Competition',
  },
  {
    date: { day: '02', month: 'MAY' },
    title: 'Annual School Cultural Day',
    time: '8:00 AM – 4:00 PM',
    location: 'School Sports Field',
    category: 'Sports',
  },
  {
    date: { day: '16', month: 'July 13' },
    title: 'End-of-Term Examination Begins',
    time: '8:00 AM - 3:30 PM',
    location: 'School Classrooms',
    category: 'Exams',
  },
   {
        date: { day: '4', month: 'MAY 4' },  
        title: 'BECE 2026',
        time: '8:00 AM - 4:00 PM',                  
        location: 'Designated Exam Center',  
        category: 'Exams',                   
    },
];

const categoryColors: Record<string, string> = {
  Academic: 'bg-blue-100 text-blue-700',
  Competition: 'bg-accent/20 text-amber-700',
  Sports: 'bg-green-100 text-green-700',
  Exams: 'bg-red-100 text-red-700',
};

export default function Events() {
  return (
    <section id="events" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Academic Calendar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Events &amp; <span className="text-primary">Term Dates</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Stay up to date with our academic calendar, term schedules, and school events.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Academic Year 2025/2026
            </h3>
            <div className="space-y-4">
              {termDates.map((term) => (
                <div
                  key={term.term}
                  className={`${term.color} rounded-2xl p-6 text-white`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-3">{term.term}</h4>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span>Opens: <span className="font-semibold">{term.opens}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <div className="w-2 h-2 bg-white/50 rounded-full flex-shrink-0" />
                          <span>Closes: <span className="font-semibold">{term.closes}</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-2">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-primary-200 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-50 rounded-xl flex flex-col items-center justify-center border border-primary-100 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <span className="text-primary group-hover:text-white text-xl font-extrabold leading-none transition-colors">
                      {event.date.day}
                    </span>
                    <span className="text-primary/70 group-hover:text-white/80 text-[10px] font-bold tracking-wider transition-colors">
                      {event.date.month}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-snug">{event.title}</h4>
                      <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                    <span className={`inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
