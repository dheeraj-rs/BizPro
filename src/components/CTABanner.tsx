import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  onGetStarted: () => void;
}

export function CTABanner({ onGetStarted }: CTABannerProps) {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of successful businesses that have achieved their goals with our expert solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-slate-100 transition shadow-xl w-full sm:w-auto justify-center"
          >
            Schedule a Consultation
          </button>
        </div>
        <p className="text-slate-400 text-sm mt-6">
          No credit card required • Free consultation • Quick response
        </p>
      </div>
    </section>
  );
}
