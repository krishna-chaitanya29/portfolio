import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Github, Code2, Trophy, Star } from 'lucide-react';

const Stats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    commits: 0,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/krishna-chaitanya29');
        const data = await response.json();
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          stars: 0,
          commits: 0,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGitHubStats();
  }, []);

  const statCards = [
    {
      label: 'Public Repos',
      value: stats.repos,
      icon: Github,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      label: 'Followers',
      value: stats.followers,
      icon: Star,
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      label: 'LeetCode Solved',
      value: '400+',
      icon: Code2,
      gradient: 'from-teal-600 to-green-600',
    },
    {
      label: 'Certifications',
      value: '3+',
      icon: Trophy,
      gradient: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section id="stats" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
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
            GitHub & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Consistent learning and building, one commit at a time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Github className="w-7 h-7 text-blue-400" />
                Contribution Activity
              </h3>
              <div className="flex justify-center">
                <GitHubCalendar
                  username="krishna-chaitanya29"
                  colorScheme="dark"
                  theme={{
                    dark: ['#0d1117', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <img
                src="https://github-readme-stats.vercel.app/api?username=krishna-chaitanya29&show_icons=true&theme=transparent&title_color=3b82f6&text_color=e2e8f0&icon_color=06b6d4&border_color=334155&bg_color=00000000"
                alt="GitHub Stats"
                className="w-full"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=krishna-chaitanya29&layout=compact&theme=transparent&title_color=3b82f6&text_color=e2e8f0&border_color=334155&bg_color=00000000"
                alt="Top Languages"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/krishna-chaitanya29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-6 h-6" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
