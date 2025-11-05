import { Search, Lightbulb, PenTool, Rocket, BarChart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Analyze',
      description: 'Understanding learning needs, audience, and success metrics',
      color: 'from-coral-500 to-coral-600',
    },
    {
      icon: Lightbulb,
      title: 'Design',
      description: 'Creating learning objectives and instructional strategies',
      color: 'from-sage-500 to-sage-600',
    },
    {
      icon: PenTool,
      title: 'Develop',
      description: 'Building engaging content and interactive experiences',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Rocket,
      title: 'Implement',
      description: 'Launching and delivering the learning solution',
      color: 'from-coral-500 to-purple-500',
    },
    {
      icon: BarChart,
      title: 'Evaluate',
      description: 'Measuring impact and iterating for continuous improvement',
      color: 'from-sage-500 to-coral-500',
    },
  ];

  const tools = [
    'Articulate Storyline',
    'Articulate Rise',
    'Adobe Creative Suite',
    'Camtasia',
    'Vyond',
    'Canva',
    'Figma',
    'LMS Platforms',
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-stone-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A systematic approach to creating impactful learning experiences
          </p>
        </div>

        <div className="relative mb-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-coral-500 via-sage-500 to-purple-500 transform -translate-y-1/2 opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="fade-in-section flex" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative group flex-1 flex flex-col">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 text-center flex-shrink-0">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm text-center leading-relaxed flex-grow flex items-center justify-center whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-coral-50 to-purple-50 rounded-full text-slate-700 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border border-coral-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
