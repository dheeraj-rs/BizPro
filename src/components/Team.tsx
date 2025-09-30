import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    avatar: '👨‍💼',
    bio: 'Visionary leader with 20+ years in business transformation'
  },
  {
    name: 'Jessica Martinez',
    role: 'Chief Technology Officer',
    avatar: '👩‍💻',
    bio: 'Tech innovator specializing in scalable solutions'
  },
  {
    name: 'Ryan Foster',
    role: 'Head of Marketing',
    avatar: '👨‍💻',
    bio: 'Data-driven strategist with proven ROI track record'
  },
  {
    name: 'Sophia Chen',
    role: 'Lead Consultant',
    avatar: '👩‍💼',
    bio: 'Business optimization expert with MBA from Harvard'
  }
];

export function Team() {
  return (
    <section className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Meet Our Team</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition">
                {member.avatar}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-emerald-600 font-medium text-sm mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <button className="p-2 bg-slate-100 rounded-full hover:bg-emerald-100 transition">
                  <Linkedin size={16} className="text-slate-600 hover:text-emerald-600" />
                </button>
                <button className="p-2 bg-slate-100 rounded-full hover:bg-emerald-100 transition">
                  <Twitter size={16} className="text-slate-600 hover:text-emerald-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
