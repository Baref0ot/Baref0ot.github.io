import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Cloud,
  Shield,
  Zap,
  Terminal,
} from "lucide-react";

const techStack = {
  languages: ["C#", "HTML", "CSS", "JavaScript", "Tailwind"],
  frameworks: [
    ".NET Core",
    "React",
    ".NET Framework",
    "Entity Framework Core",
    "jQuery",
  ],
  databases: ["MySQL", "TSQL", "PostgreSQL", "MongoDB", "Redis"],
  tools: [
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "Microsoft Message Queues",
    "Azure App Services",
    "Azure Functions",
    "Postman",
    "CI/CD",
  ],
  practices: [
    "Microservices",
    "REST APIs",
    "WebSockets",
    "Webhooks",
    "TCP Sockets",
    "Pub/Sub",
    "GraphQL",
    "CI/CD",
    "Event-Driven APIs",
  ],
};

const expertise = [
  { icon: Server, title: "System Design", desc: "Scalable architectures" },
  { icon: Database, title: "Database Design", desc: "Optimized schemas" },
  { icon: Cloud, title: "Cloud Services", desc: "AWS, GCP, Azure" },
  { icon: Shield, title: "Security", desc: "Auth & encryption" },
  { icon: Zap, title: "Performance", desc: "Low-latency systems" },
  { icon: GitBranch, title: "DevOps", desc: "CI/CD pipelines" },
];

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 text-green-400 font-mono">
            <span className="text-slate-600">//</span>
            <span>01</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Backend engineer focused on building robust, scalable systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4 text-green-400 font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>$ whoami</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Backend software engineer with 5+ years of experience building
                high-performance, scalable systems. Specialized in distributed
                architectures, microservices, and API design.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I focus on writing clean, maintainable code and designing
                systems that can handle millions of requests. Passionate about
                performance optimization, database design, and cloud
                infrastructure.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-bold text-green-400">5+</div>
                  <div className="text-xs text-slate-500">Years Exp</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">50+</div>
                  <div className="text-xs text-slate-500">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-slate-500">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-950 border border-slate-800 rounded-lg p-4 hover:border-green-500/50 transition-all"
              >
                <item.icon className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 border border-slate-800 rounded-lg p-8"
        >
          <div className="flex items-center gap-2 mb-6 text-green-400 font-mono">
            <Code2 className="w-5 h-5" />
            <span>Tech Stack</span>
          </div>
          <div className="space-y-6">
            {Object.entries(techStack).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-sm text-slate-500 font-mono mb-3 capitalize">
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-sm text-slate-300 hover:border-green-500/50 hover:text-green-400 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
