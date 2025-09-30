import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';

interface ContactFormProps {
  onSuccess: () => void;
  onError: () => void;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submission:', formData);

      setFormData({ name: '', email: '', phone: '', message: '' });
      onSuccess();
    } catch (error) {
      onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Phone className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
                <p className="text-slate-500 text-sm mt-1">Mon-Fri 9am-6pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Mail className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">contact@bizpro.com</p>
                <p className="text-slate-500 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <MapPin className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                <p className="text-slate-600">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                <p className="text-slate-500 text-sm mt-1">Visit by appointment</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-emerald-900 mb-2">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>✓ 15+ years of experience</li>
                <li>✓ 500+ successful projects</li>
                <li>✓ 98% client satisfaction</li>
                <li>✓ 24/7 support available</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By submitting this form, you agree to our privacy policy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
