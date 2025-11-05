import { BookOpen, Palette, LineChart, Zap, Brain, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: BookOpen,
      title: 'Instructional Design',
      color: 'from-coral-500 to-coral-600',
      skills: ['ADDIE Model', 'SAM Framework', 'Bloom\'s Taxonomy', 'Learning Objectives', 'Assessment Design'],
    },
    {
      icon: Palette,
      title: 'Authoring Tools',
      color: 'from-sage-500 to-sage-600',
      skills: ['Articulate Storyline', 'Articulate Rise', 'Adobe Captivate', 'Vyond', 'Camtasia'],
    },
    {
      icon: Brain,
      title: 'Learning Theory',
      color: 'from-purple-500 to-purple-600',
      skills: ['Adult Learning', 'Cognitive Load Theory', 'Spaced Repetition', 'Microlearning', 'Gamification'],
    },
    {
      icon: Zap,
      title: 'Multimedia Production',
      color: 'from-coral-500 to-pink-500',
      skills: ['Video Editing', 'Graphics Design', 'Audio Production', 'Animation', 'Interactive Media'],
    },
    {
      icon: LineChart,
      title: 'LMS & Analytics',
      color: 'from-sage-500 to-teal-500',
      skills: ['SCORM/xAPI', 'Learning Analytics', 'LMS Administration', 'Reporting', 'Data-Driven Design'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: 'from-purple-500 to-pink-500',
      skills: ['Stakeholder Management', 'Project Management', 'Communication', 'Collaboration', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-stone-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="fade-in-section"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 group/skill"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/skill:scale-150 transition-transform`}></div>
                      <span className="text-slate-700 group-hover/skill:text-slate-900 group-hover/skill:translate-x-1 transition-all">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 fade-in-section">
          <div className="bg-gradient-to-r from-coral-500 via-sage-500 to-purple-500 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                My Design Philosophy
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                "Great learning design is invisible. It guides without controlling, challenges without
                overwhelming, and inspires without preaching. Every interaction should feel natural,
                every lesson should spark curiosity, and every outcome should empower the learner to
                take action. I design not just for knowledge transfer, but for transformation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
