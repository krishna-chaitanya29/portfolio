import { motion } from 'framer-motion';
import { Code2, Database, Cloud, GitBranch, Lightbulb, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Java', 'JavaScript', 'Python'],
    },
    {
      title: 'Web & Backend',
      icon: Code2,
      color: 'from-cyan-500 to-teal-500',
      skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-teal-500 to-green-500',
      skills: ['MongoDB', 'SQL', 'Zilliz Cloud'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      skills: ['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Linux', 'AWS'],
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'from-emerald-500 to-blue-500',
      skills: ['Git', 'GitHub', 'GitLab'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      skills: ['Communication', 'Problem Solving', 'Leadership', 'Collaboration'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
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
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition duration-500"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': category.color.split(' ')[1],
                  '--tw-gradient-to': category.color.split(' ')[3],
                } as any}
              ></div>

              <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-full border border-blue-500/30">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-300 font-medium">
              Continuously learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
