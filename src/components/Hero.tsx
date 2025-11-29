import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950 opacity-90"></div>

      <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-light tracking-wider">SPECIALIST VIDEO EDITOR</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="block text-white">Short-Form</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 neon-glow">
            Video Editing
          </span>
          <span className="block text-white text-5xl md:text-7xl mt-4">
            for Car Detailers &
          </span>
          <span className="block text-white text-5xl md:text-7xl">
            Wrapping Companies
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light">
          High-impact content that attracts clients, boosts bookings, and grows your brand.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" />
            View Portfolio
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
            Book a Call
          </button>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </section>
  );
}
