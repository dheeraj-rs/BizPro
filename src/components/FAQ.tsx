import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive business solutions including consulting, development, marketing, analytics, 24/7 support, and training programs tailored to your specific needs.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple project may take 2-4 weeks, while comprehensive solutions can take 2-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. Our solutions are scalable and customized to fit your budget and requirements.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including project-based, monthly retainers, and hourly rates. Contact us for a custom quote based on your specific needs.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer 24/7 dedicated support packages to ensure your business operations run smoothly. Our support team is always available to assist you.'
  },
  {
    question: 'Can you help with digital transformation?',
    answer: 'Yes, digital transformation is one of our core specialties. We help businesses modernize their operations, implement new technologies, and optimize workflows for better efficiency.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-slate-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-slate-50 transition"
              >
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 bg-slate-50">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
