import { Target, DollarSign, Calendar, Eye, Palette, Zap, Award } from 'lucide-react';

export default function WhyChooseMe() {
  const reasons = [
    {
      icon: Target,
      title: 'Niche-specific expertise'
    },
    {
      icon: DollarSign,
      title: 'Videos designed to convert viewers into bookings'
    },
    {
      icon: Calendar,
      title: 'Consistent posting strategy'
    },
    {
      icon: Eye,
      title: 'Retention-optimised edits'
    },
    {
      icon: Palette,
      title: 'Modern, brand-tight visuals'
    },
    {
      icon: Zap,
      title: 'Fast turnaround'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Choose Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <reason.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                    {reason.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 border-cyan-500 rounded-3xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">
                Specialist in Car Detailing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">& Wrapping</span>
              </h3>
              <p className="text-zinc-400 text-lg">
                I understand the industry, the audience, and what drives results in this niche.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </section>
  );
}
