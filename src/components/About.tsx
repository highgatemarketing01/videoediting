export default function About() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="inline-block mb-6 px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5">
              <span className="text-cyan-400 text-sm font-light tracking-wider">ABOUT ME</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
              Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Am</span>
            </h2>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                I specialise in creating <span className="text-cyan-400 font-semibold">high-performing short-form content</span> for car detailers and wrapping companies. My editing style is built around clarity, retention, and brand identity.
              </p>

              <p>
                I help businesses improve their social media presence and turn viewers into paying clients through well-structured video content. My service is results driven so I aim to improve views, engagement and followers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
