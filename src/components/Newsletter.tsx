import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Mail className="text-white" size={28} />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Stay Updated
        </h2>
        <p className="text-emerald-50 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for industry insights, tips, and exclusive offers
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p className="text-white mt-4 text-sm">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
}
