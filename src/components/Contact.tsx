import { useState } from 'react';
import { Mail, Linkedin, FileText, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-stone-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a learning challenge to solve? Let's craft an amazing solution together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="fade-in-section">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <p className="text-xl font-semibold text-slate-800">Message Sent!</p>
                  <p className="text-slate-600 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-coral-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-coral-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-coral-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your learning challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-coral-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="fade-in-section space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Connect With Me</h3>

              <div className="space-y-4">
                <a
                  href="mailto:akanksha.singh@example.com"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-coral-50 to-coral-100 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-coral-500 to-coral-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-sm text-slate-600">akanksha8809singh@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/akanksha16singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-sage-50 to-sage-100 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-sage-500 to-sage-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">LinkedIn</p>
                    <p className="text-sm text-slate-600">Connect professionally</p>
                  </div>
                </a>

                <button className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-slate-800">Download Resume</p>
                    <p className="text-sm text-slate-600">View my full experience</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-coral-500 via-sage-500 to-purple-500 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-lg text-slate-700 font-medium">
                  "Let's create something amazing together"
                </p>
                <p className="text-slate-600 mt-2">
                  Ready to transform your learning programs?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center fade-in-section">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
            <p className="text-slate-600 mb-4">
              © 2025 Akanksha Singh. Crafted with passion for learning.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-600 hover:text-coral-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-slate-300">|</span>
              <a href="#" className="text-slate-600 hover:text-coral-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
