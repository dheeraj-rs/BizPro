import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    content: 'BizPro transformed our business operations completely. Their expertise and dedication are unmatched. We saw a 200% increase in efficiency within the first quarter.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Digital Solutions',
    content: 'Working with BizPro was the best decision we made. Their team delivered exceptional results and exceeded all our expectations. Highly recommended!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, Growth Labs',
    content: 'Professional, reliable, and innovative. BizPro helped us scale our business to new heights. Their strategic approach made all the difference.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'David Park',
    role: 'VP Operations, CloudCore',
    content: 'The ROI we achieved with BizPro has been phenomenal. Their solutions are practical, effective, and delivered on time. A true partner in success.',
    rating: 5,
    avatar: '👨‍💼'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">What Our Clients Say</h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped succeed
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-12 shadow-2xl">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
              ))}
            </div>

            <p className="text-base sm:text-xl text-slate-700 mb-6 sm:mb-8 leading-relaxed text-center">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">{testimonials[currentIndex].avatar}</div>
              <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-slate-600 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-slate-900" size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-slate-900" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
