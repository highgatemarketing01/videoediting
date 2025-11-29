import { useEffect } from 'react';

export default function Portfolio() {
  const videos = [
    '1141710372',
    '1141709707',
    '1141709871',
    '1141709824',
    '1141709793',
    '1141709719'
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 carbon-fiber opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Edits</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            A selection of recent videos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((videoId, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-black border border-zinc-800 hover:border-cyan-500 transition-all duration-500"
              style={{ paddingBottom: '177.78%', position: 'relative' }}
            >
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`Video ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </section>
  );
}
