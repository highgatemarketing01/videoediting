import { Scissors, Sparkles, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Short-Form Video Editing',
      features: [
        'TikTok, Reels, Shorts',
        'Fast-paced, clean transitions',
        'High retention editing tailored to car content'
      ]
    },
    {
      icon: Sparkles,
      title: 'Branded Content',
      features: [
        'Aesthetic, cinematic car clips',
        'Before/after transformations',
        'Satisfying detailing sequences'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      features: [
        'High-converting scripts',
        'Hook formulas for car content',
        'Monthly performance guidance'
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Do</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            Specialised content services for detailing and wrapping businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                <service.icon className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </section>
  );
}
