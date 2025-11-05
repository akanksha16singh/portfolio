import { useState } from 'react';
import { ExternalLink, Award, Users, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Employee Onboarding Experience',
      category: 'elearning',
      description: 'Interactive onboarding program for new hires',
      challenge: 'High dropout rates in traditional orientation programs',
      solution: 'Gamified learning journey with interactive scenarios and progress tracking',
      results: '85% completion rate, 40% reduction in time-to-productivity',
      tools: ['Articulate Storyline', 'Adobe Illustrator', 'LMS Integration'],
      image: 'bg-gradient-to-br from-coral-400 to-purple-400',
    },
    {
      id: 2,
      title: 'Leadership Development Program',
      category: 'blended',
      description: 'Comprehensive leadership training for managers',
      challenge: 'Need for scalable leadership development across multiple locations',
      solution: 'Blended learning approach combining eLearning modules with virtual workshops',
      results: '92% participant satisfaction, 35% improvement in leadership competencies',
      tools: ['Articulate Rise', 'Zoom', 'Assessment Tools'],
      image: 'bg-gradient-to-br from-sage-400 to-teal-400',
    },
    {
      id: 3,
      title: 'Sales Enablement Microlearning',
      category: 'microlearning',
      description: 'Just-in-time learning for sales teams',
      challenge: 'Sales team needed quick access to product information on-the-go',
      solution: '3-5 minute mobile-friendly learning nuggets with searchable library',
      results: '70% daily active usage, 50% increase in product knowledge scores',
      tools: ['Articulate Rise', 'Video Production', 'Mobile Optimization'],
      image: 'bg-gradient-to-br from-purple-400 to-pink-400',
    },
    {
      id: 4,
      title: 'Compliance Training Redesign',
      category: 'elearning',
      description: 'Engaging compliance training for regulated industry',
      challenge: 'Low engagement with mandatory compliance training',
      solution: 'Scenario-based learning with branching narratives and realistic consequences',
      results: '95% completion rate, 60% improvement in knowledge retention',
      tools: ['Articulate Storyline', 'Branching Scenarios', 'Assessment Design'],
      image: 'bg-gradient-to-br from-coral-400 to-orange-400',
    },
    {
      id: 5,
      title: 'Technical Skills Academy',
      category: 'blended',
      description: 'Upskilling program for technical professionals',
      challenge: 'Rapid technology changes requiring continuous learning',
      solution: 'Self-paced learning paths with hands-on labs and peer collaboration',
      results: '200+ learners enrolled, 88% skills application on the job',
      tools: ['LMS Platform', 'Virtual Labs', 'Community Building'],
      image: 'bg-gradient-to-br from-sage-400 to-emerald-400',
    },
    {
      id: 6,
      title: 'Customer Service Excellence',
      category: 'microlearning',
      description: 'Performance support for customer service representatives',
      challenge: 'High variability in customer service quality',
      solution: 'Interactive job aids and video-based soft skills training',
      results: '45% improvement in customer satisfaction scores',
      tools: ['Vyond', 'Canva', 'Performance Support Design'],
      image: 'bg-gradient-to-br from-purple-400 to-indigo-400',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'elearning', label: 'eLearning Modules' },
    { id: 'blended', label: 'Blended Learning' },
    { id: 'microlearning', label: 'Microlearning' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of impactful learning experiences I've designed
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-section">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-coral-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="fade-in-section group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <ExternalLink className="w-12 h-12 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-coral-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <Award className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">Challenge</p>
                        <p className="text-sm text-slate-600">{project.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">Solution</p>
                        <p className="text-sm text-slate-600">{project.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-700">Results</p>
                        <p className="text-sm text-slate-600">{project.results}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-gradient-to-r from-coral-50 to-purple-50 text-slate-700 rounded-full border border-coral-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
