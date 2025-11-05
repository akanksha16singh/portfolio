import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Learning & Development Director',
      company: 'Tech Solutions Inc.',
      text: 'Akanksha transformed our onboarding process completely. The engagement levels we\'re seeing are unprecedented, and new hires are reaching productivity 40% faster. Her attention to detail and understanding of learner psychology is exceptional.',
      avatar: 'SM',
    },
    {
      name: 'James Rodriguez',
      role: 'VP of Sales',
      company: 'Global Enterprises',
      text: 'The microlearning solution Akanksha designed for our sales team has been a game-changer. Our reps love the quick, actionable content, and we\'ve seen a measurable improvement in their product knowledge and confidence.',
      avatar: 'JR',
    },
    {
      name: 'Priya Sharma',
      role: 'HR Manager',
      company: 'Innovation Corp',
      text: 'Working with Akanksha was a pleasure. She took the time to understand our unique challenges and created a leadership development program that truly resonates with our managers. The feedback has been overwhelmingly positive.',
      avatar: 'PS',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operating Officer',
      company: 'FinTech Solutions',
      text: 'Akanksha\'s compliance training redesign turned our most dreaded mandatory training into an engaging experience. The completion rates speak for themselves, but more importantly, our team actually retains and applies what they learn.',
      avatar: 'MC',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've had the pleasure to work with
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-coral-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="w-16 h-16 text-coral-300 mb-6" />

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 min-h-[200px] md:min-h-[160px]">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-coral-500 font-semibold">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-coral-500"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-coral-500 to-purple-500'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-coral-500"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
