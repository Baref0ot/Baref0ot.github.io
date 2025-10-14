import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Server,
  Database,
  Zap,
  Shield,
} from "lucide-react";

const iconMap = {
  API: Server,
  Database: Database,
  Performance: Zap,
  Security: Shield,
};

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 text-green-400 font-mono">
            <span className="text-slate-600">//</span>
            <span>02</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects & Systems
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Backend architectures and scalable systems I've built
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-slate-800 rounded-lg bg-slate-900/50"
          >
            <Server className="w-16 h-16 mx-auto mb-4 text-slate-700" />
            <h3 className="text-2xl font-bold text-slate-300 mb-2">
              No Projects Yet
            </h3>
            <p className="text-slate-500 font-mono text-sm">
              $ git push origin main
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Project Image/Visual */}
                    <div className="lg:col-span-1 relative bg-slate-800 aspect-video lg:aspect-auto">
                      {project.image_url ? (
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Server className="w-16 h-16 text-slate-700" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-slate-950 text-xs font-bold rounded">
                          FEATURED
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          {project.project_url && (
                            <a
                              href={project.project_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          <a
                            href={project.project_url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-xs font-mono text-green-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Technical Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800">
                        <div>
                          <div className="text-xs text-slate-500 font-mono mb-1">
                            Performance
                          </div>
                          <div className="text-green-400 font-bold">
                            &lt;100ms
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono mb-1">
                            Uptime
                          </div>
                          <div className="text-green-400 font-bold">99.9%</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono mb-1">
                            Load
                          </div>
                          <div className="text-green-400 font-bold">
                            10K+ req/s
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono mb-1">
                            Scale
                          </div>
                          <div className="text-green-400 font-bold">
                            Microservices
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
