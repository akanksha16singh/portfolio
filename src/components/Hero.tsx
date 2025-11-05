import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, BookOpen, Puzzle } from 'lucide-react';
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-sage-50 to-purple-50 opacity-60"></div>
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-coral-400 opacity-40" />
      </div>
      <div className="absolute top-40 right-10 animate-float-delayed">
        <BookOpen className="w-10 h-10 text-sage-500 opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow">
        <Puzzle className="w-12 h-12 text-purple-400 opacity-40" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }}
        >
          <div className="mb-6">
            <span className="inline-block text-coral-600 font-semibold text-lg mb-2 animate-fade-in">
              Hello, I'm
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-slide-up">
            Akanksha Singh
          </h1>
          <div className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
            <span className="inline-block animate-fade-in-delayed">Crafting Learning Experiences</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-coral-500 via-sage-500 to-purple-500 bg-clip-text text-transparent font-semibold animate-fade-in-more-delayed">
              That Stick
            </span>
          </div>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Instructional Designer & Learning Experience Designer passionate about creating
            engaging, effective, and memorable learning journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToPortfolio}
              className="group px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-slate-800 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-slate-200"
            >
              Let's Connect
            </button>
          </div>
          <div className="animate-bounce mt-12">
            <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
    </section>
  );
} 
