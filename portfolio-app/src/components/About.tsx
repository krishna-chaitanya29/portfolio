import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelectorAll('.timeline-item'),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );
    }
  }, []);

  const education = [
    {
      institution: 'Keshav Memorial Institute of Technology',
      degree: 'B.Tech in Information Technology',
      period: 'Expected June 2026',
      gpa: 'GPA: 7.14 / 10',
      icon: GraduationCap,
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate — Math, Physics, Chemistry',
      period: 'May 2022',
      gpa: '96.7%',
      icon: Award,
    },
    {
      institution: 'Brilliant Grammar High School',
      degree: 'SSC',
      period: 'June 2020',
      gpa: 'GPA: 9.7 / 10',
      icon: Sparkles,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
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
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm an <span className="text-blue-400 font-semibold">Information Technology undergraduate</span> passionate about building end-to-end systems that combine intelligent software with automation.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I specialize in <span className="text-cyan-400 font-semibold">cloud deployment</span>, <span className="text-cyan-400 font-semibold">AI integration</span>, and <span className="text-cyan-400 font-semibold">scalable app design</span>.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  My focus is on delivering <span className="text-blue-400 font-semibold">efficient</span>, <span className="text-blue-400 font-semibold">reliable</span>, and <span className="text-blue-400 font-semibold">high-performance solutions</span> that make a real impact.
                </p>
              </div>
            </div>
          </motion.div>

          <div ref={timelineRef} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-8 h-8 text-blue-400" />
              Education Journey
            </motion.h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="timeline-item relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <edu.icon className="w-3 h-3 text-white" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.institution}</h4>
                  <p className="text-blue-400 font-semibold mb-1">{edu.degree}</p>
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <span>{edu.period}</span>
                    <span className="text-cyan-400 font-semibold">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
