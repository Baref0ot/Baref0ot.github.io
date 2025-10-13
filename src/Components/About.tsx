import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Coffee, Users } from "lucide-react";

const skills = [
  { icon: Code2, label: "Clean Code", color: "from-blue-500 to-cyan-500" },
  {
    icon: Palette,
    label: "UI/UX Design",
    color: "from-purple-500 to-pink-500",
  },
  { icon: Zap, label: "Performance", color: "from-yellow-500 to-orange-500" },
  {
    icon: Coffee,
    label: "Problem Solving",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "5+", label: "Years Experience" },
  { number: "30+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-sm font-medium text-purple-900 dark:text-purple-300">
              About Me
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight"
          >
            Who I Am
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Building digital products with passion and precision
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                I'm a passionate developer who loves creating beautiful,
                functional digital experiences. With a keen eye for design and a
                deep understanding of modern web technologies, I transform
                complex problems into elegant solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                Every project is an opportunity to push boundaries and create
                something remarkable. I believe in writing clean, maintainable
                code and designing interfaces that users love.
              </motion.p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, rotate: 2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {skill.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Tech Stack
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "Next.js",
              "PostgreSQL",
              "Figma",
              "Git",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
