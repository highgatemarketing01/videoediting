import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <WhyChooseMe />
      <Contact />
    </div>
  );
}

export default App;
