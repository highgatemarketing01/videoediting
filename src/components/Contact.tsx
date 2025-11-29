import { Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[200px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5">
            <span className="text-cyan-400 text-sm font-light tracking-wider">LET'S WORK TOGETHER</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Ready to Grow Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Business?
            </span>
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            Let's build content that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

              <div>
                <a
                  href="mailto:Lucas@highgatemarketing.com"
                  className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-cyan-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/50">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 mb-1">Email</div>
                    <div className="text-white font-semibold">Lucas@highgatemarketing.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-3">
                Fast Response Time
              </h4>
              <p className="text-zinc-400">
                I typically respond within 2-4 hours during business hours. Let's discuss how I can help grow your detailing business.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="@yourhandle"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-2">
                  Business Website
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="https://yourbusiness.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Tell me about your business and how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-20 pt-12 border-t border-zinc-800">
        <div className="text-center text-zinc-500 text-sm">
          <p>&copy; 2024 Highgate Marketing. Specialising in Car Detailing & Wrapping Content.</p>
        </div>
      </div>
    </section>
  );
}
