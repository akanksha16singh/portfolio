import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <Navigation />
      <Hero />
      <About />
      <Process />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
