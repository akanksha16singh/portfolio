import { Heart, Target, Lightbulb, Coffee } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Instructional Design', level: 95 },
    { name: 'eLearning Development', level: 90 },
    { name: 'Learning Strategy', level: 88 },
    { name: 'Content Design', level: 92 },
    { name: 'User Experience', level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-section">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-coral-200 to-purple-200 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-gradient-to-br from-coral-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-coral-500 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                    AS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-section space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Hi there! I'm Akanksha, and I believe that learning should be an adventure, not a chore.
              With a passion for blending psychology, creativity, and technology, I design learning
              experiences that resonate, engage, and create lasting impact.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              My approach combines evidence-based instructional design methodologies with innovative
              thinking to solve complex learning challenges. Whether it's crafting interactive eLearning
              modules, designing comprehensive training programs, or creating microlearning experiences,
              I'm committed to making learning stick.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Results-Driven</h4>
                  <p className="text-sm text-slate-600">Focused on measurable outcomes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-sage-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Creative Solutions</h4>
                  <p className="text-sm text-slate-600">Innovative design thinking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Learner-Centric</h4>
                  <p className="text-sm text-slate-600">Always putting users first</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Coffee className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Fun Fact</h4>
                  <p className="text-sm text-slate-600">Coffee-powered designer!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-section">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">My Expertise</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700">{skill.name}</span>
                  <span className="text-slate-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-coral-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
