import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const formspreeEndpoint = 'https://formspree.io/f/xwvwglgk';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      }
    } catch {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            We would love to hear from you. Reach out with any questions about admissions,
            programmes, or general enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {status === 'success' && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800 text-sm">Thank you for contacting Nana Amoakwa Model School.</p>
                  <p className="text-green-700 text-sm">We appreciate your inquiry and will respond soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Kwame Mensah"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. kwame@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: MapPin,
                title: 'Our Address',
                lines: ['Damang, P.O. Box 21', 'Wassa Damang', 'Western Region, Ghana'],
              },
              {
                icon: Phone,
                title: 'Phone',
                lines: ['0242247980', '0244752837'],
              },
              {
                icon: Mail,
                title: 'Email',
                lines: ['nanaamoakwamodelbsch@ges.gov.gh'],
              },
              {
                icon: Clock,
                title: 'Office Hours',
                lines: ['Monday – Friday: 7:00 AM – 3:30 PM'],
              },
            ].map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex gap-4"
              >
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-900" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-white/70 text-sm leading-snug">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
