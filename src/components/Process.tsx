import { Phone, FileText, Video, Edit3, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: 'Discovery Call',
      description: 'Understand your brand + goals'
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Script hooks, shotlist, content plan'
    },
    {
      icon: Video,
      title: 'Production',
      description: 'Client sends footage or films using my guidance'
    },
    {
      icon: Edit3,
      title: 'Editing',
      description: 'High-quality, fast-turnaround short-form content'
    },
    {
      icon: TrendingUp,
      title: 'Delivery & Growth',
      description: 'Posting guidance and optimisation'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500 to-cyan-500/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border-2 border-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-zinc-900 border-2 border-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-cyan-400">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-8 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-cyan-500/30 rounded-2xl">
            <div className="text-sm text-cyan-400 mb-2 font-semibold tracking-wider">
              AVERAGE TURNAROUND TIME
            </div>
            <div className="text-4xl font-black text-white">
              24-48 <span className="text-zinc-500">Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
