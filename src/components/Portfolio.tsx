import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Development',
    description: 'Built a scalable platform serving 100K+ daily users',
    gradient: 'from-blue-400 to-blue-600',
    results: '300% revenue increase'
  },
  {
    title: 'Brand Transformation',
    category: 'Marketing',
    description: 'Complete rebrand and digital marketing strategy',
    gradient: 'from-purple-400 to-purple-600',
    results: '5x engagement boost'
  },
  {
    title: 'Operations Optimization',
    category: 'Consulting',
    description: 'Streamlined processes for Fortune 500 company',
    gradient: 'from-orange-400 to-orange-600',
    results: '40% cost reduction'
  },
  {
    title: 'Data Analytics Suite',
    category: 'Analytics',
    description: 'Real-time dashboard for business intelligence',
    gradient: 'from-emerald-400 to-emerald-600',
    results: '10x faster insights'
  }
];

export function Portfolio() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Success Stories</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Real results for real businesses across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className={`h-48 sm:h-64 bg-gradient-to-br ${project.gradient} p-6 sm:p-8 flex flex-col justify-between`}>
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{project.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm sm:text-base">{project.results}</span>
                  <ArrowRight className="text-white transform group-hover:translate-x-2 transition" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
