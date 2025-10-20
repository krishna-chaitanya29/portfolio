import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Brain, Cloud, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Production-Grade RAG FAQ Chatbot',
      subtitle: 'College Bot',
      description: 'Cloud-native RAG-based chatbot for college FAQs with real-time streaming responses and sub-1500ms latency.',
      technologies: ['GenAI', 'FastAPI', 'React.js', 'Zilliz Cloud', 'Docker', 'Hugging Face'],
      highlights: [
        'Real-time streaming responses < 1500ms',
        'Integrated Zilliz Cloud vector DB',
        'Deployed on Hugging Face Spaces',
        'OpenRouter.ai LLM integration',
      ],
      icon: MessageSquare,
      gradient: 'from-blue-600 to-cyan-600',
      liveUrl: 'https://collagebot1184.netlify.app/',
      githubUrl: 'https://github.com/krishna-chaitanya29/chatbot_faq',
    },
    {
      title: 'Registration Info LLM',
      subtitle: 'AI-Powered Public Info Guide',
      description: 'AI-driven Q&A system using NLP and RAG for public registration information retrieval with optimized query performance.',
      technologies: ['NLP', 'RAG', 'Node.js', 'Express.js', 'MongoDB', 'React'],
      highlights: [
        'Scalable backend architecture',
        'Optimized query performance',
        'Real-time information retrieval',
        'Natural language processing',
      ],
      icon: Brain,
      gradient: 'from-cyan-600 to-teal-600',
      githubUrl: 'https://github.com/krishna-chaitanya29/Registration_info_LLM',
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Real-world applications showcasing cloud deployment, AI integration, and scalable architecture
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>

              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700 overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-8 p-8">
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient}`}>
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105`}
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-full font-semibold hover:bg-slate-600 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="bg-slate-900/50 rounded-2xl p-6 h-full flex flex-col justify-center">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-blue-400" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 rounded-lg text-sm font-medium border border-slate-500"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
