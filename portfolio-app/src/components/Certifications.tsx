import { motion } from 'framer-motion';
import { Award, ExternalLink, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: '100xDevs by Harkirat Singh',
      description: 'Comprehensive training in MERN Stack — React.js, Node.js, Express.js, MongoDB, and deployment pipelines.',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CI/CD'],
      date: '2024',
      certificateUrl: 'https://www.linkedin.com/posts/krishna-chaitanya-koti-162b71279_webdevelopment-fullstackdeveloper-mernstack-activity-7317542141507837952-BAQp',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Generative AI Workshop – LLMs & Hugging Face',
      issuer: 'Cuvette Tech',
      description: 'Hands-on experience building NLP-powered chatbots, summarization tools, and text-generation applications.',
      skills: ['LLMs', 'Hugging Face', 'NLP', 'RAG', 'GenAI'],
      date: '2024',
      certificateUrl: 'https://www.linkedin.com/posts/krishna-chaitanya-koti-162b71279_webdevelopment-fullstackdeveloper-mernstack-activity-7317542141507837952-BAQp',
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'AWS SimuLearn Certifications',
      issuer: 'AWS Training & Certification',
      description: 'Completed "Cloud First Steps" and "Cloud Computing Essentials," learning cloud architecture and AWS fundamentals.',
      skills: ['AWS', 'Cloud Computing', 'Cloud Architecture', 'S3', 'EC2'],
      date: '2024',
      certificateUrl: 'https://drive.google.com/file/d/1aJOqscSHTlSg0m8y1rH8AnQq29SQkQ5C/view?usp=sharing',
      gradient: 'from-teal-600 to-green-600',
    },
  ];

  return (
    <section id="certifications" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
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
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Continuous learning through industry-recognized programs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setSelectedCert(index)}
              onHoverEnd={() => setSelectedCert(null)}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}
                style={{
                  transform: selectedCert === index ? 'rotate(-1deg)' : 'rotate(0deg)',
                }}
              ></div>

              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700 p-6 h-full flex flex-col"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${cert.gradient} w-fit mb-4`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <p className="text-blue-400 font-semibold text-sm">{cert.issuer}</p>
                </div>

                <p className="text-slate-300 mb-4 flex-grow leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-slate-400 text-sm font-medium">{cert.date}</span>
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.gradient} text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    View
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-full border border-blue-500/30">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-slate-300 font-medium">
              Solved 400+ coding problems on LeetCode
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
