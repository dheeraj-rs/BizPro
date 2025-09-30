import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Newsletter } from './components/Newsletter';
import { CTABanner } from './components/CTABanner';
import { ContactForm } from './components/ContactForm';
import { Notification } from './components/Notification';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleContactSuccess = () => {
    showNotification('success', 'Message sent successfully! We\'ll get back to you soon.');
  };

  const handleContactError = () => {
    showNotification('error', 'Failed to send message. Please try again.');
  };

  return (
    <div className="min-h-screen bg-white">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold text-slate-900">
              BizPro
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-900 transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-900 transition">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-slate-900 transition">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-slate-900 transition">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 animate-fade-in">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 transition rounded-lg">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 transition rounded-lg">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 transition rounded-lg">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 transition rounded-lg">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 transition rounded-lg">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 transition rounded-lg">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Transform Your Business
              <span className="block text-emerald-600 mt-2">Into Success</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              We deliver innovative solutions tailored to help your business grow and thrive in today's competitive market
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                title: 'Consulting',
                description: 'Expert guidance to optimize your business operations and strategy',
                icon: '💼'
              },
              {
                title: 'Development',
                description: 'Custom software solutions built to your exact specifications',
                icon: '⚙️'
              },
              {
                title: 'Marketing',
                description: 'Data-driven campaigns that drive growth and engagement',
                icon: '📈'
              },
              {
                title: 'Analytics',
                description: 'Actionable insights from your business data',
                icon: '📊'
              },
              {
                title: 'Support',
                description: '24/7 dedicated support to keep your business running smoothly',
                icon: '🤝'
              },
              {
                title: 'Training',
                description: 'Empower your team with comprehensive training programs',
                icon: '🎓'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-slate-50 rounded-xl hover:shadow-lg transition border border-slate-200 hover:border-emerald-200 group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* CTA Banner 1 */}
      <CTABanner onGetStarted={() => scrollToSection('contact')} />

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">About Us</h2>
              <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                With over 15 years of experience, we've helped hundreds of businesses achieve their goals through innovative solutions and dedicated support.
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Our team of experts is committed to delivering exceptional results that drive growth and success for your organization.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                {[
                  'Industry-leading expertise',
                  'Proven track record of success',
                  'Customer-first approach',
                  'Cutting-edge technology'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl h-64 sm:h-96 lg:h-full min-h-[300px] shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Contact Section */}
      <ContactForm
        onSuccess={handleContactSuccess}
        onError={handleContactError}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BizPro</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Transforming businesses through innovation and excellence.
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-slate-800 rounded-full hover:bg-emerald-600 transition flex items-center justify-center">
                  <span className="text-sm">in</span>
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-full hover:bg-emerald-600 transition flex items-center justify-center">
                  <span className="text-sm">tw</span>
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-full hover:bg-emerald-600 transition flex items-center justify-center">
                  <span className="text-sm">fb</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition">Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">Consulting</li>
                <li className="text-slate-400">Development</li>
                <li className="text-slate-400">Marketing</li>
                <li className="text-slate-400">Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+1 (555) 123-4567</li>
                <li>contact@bizpro.com</li>
                <li>123 Business Ave<br />New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 BizPro. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
