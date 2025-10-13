import React from "react";
import { MotionValue, motion } from "framer-motion";
import { ExternalLink, Tag, Star } from "lucide-react";
//import { Badge } from "@/components/ui/badge";
import Button from "../ui/Button";

export default function Projects({ projects }) {
  const featuredProjects = projects.filter(
    (p: { featured: any }) => p.featured
  );
  const otherProjects = projects.filter((p: { featured: any }) => !p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight"
          >
            Selected Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A collection of my favorite projects
          </motion.p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 sm:py-32"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50"
            >
              <Tag className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 dark:text-slate-600" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              No Projects Yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Start adding your work to build an impressive portfolio
            </p>
          </motion.div>
        ) : (
          <div className="space-y-12 sm:space-y-16">
            {/* Featured Projects */}
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="group"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 aspect-[4/3] shadow-2xl">
                      {project.image_url ? (
                        <motion.img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Tag className="w-16 h-16 sm:w-24 sm:h-24 text-slate-300 dark:text-slate-700" />
                        </div>
                      )}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 mb-4"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Featured Project
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                    {project.tags && project.tags.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {project.tags.map(
                          (
                            tag:
                              | string
                              | number
                              | bigint
                              | boolean
                              | React.ReactElement<
                                  unknown,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | React.ReactPortal
                                  | React.ReactElement<
                                      unknown,
                                      string | React.JSXElementConstructor<any>
                                    >
                                  | Iterable<React.ReactNode>
                                  | null
                                  | undefined
                                >
                              | MotionValue<number>
                              | MotionValue<string>
                              | null
                              | undefined,
                            idx: React.Key | null | undefined
                          ) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300"
                            >
                              {tag}
                            </motion.span>
                          )
                        )}
                      </motion.div>
                    )}
                    {project.project_url && (
                      <motion.a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            className="group/btn border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
                          >
                            View Project
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Other Projects Grid */}
            {otherProjects.length > 0 && (
              <div className="pt-8 sm:pt-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900 dark:text-white"
                >
                  More Projects
                </motion.h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-slate-900/10 dark:hover:shadow-black/50 transition-all duration-300">
                        <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden">
                          {project.image_url ? (
                            <motion.img
                              src={project.image_url}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Tag className="w-12 h-12 text-slate-300 dark:text-slate-700" />
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.slice(0, 3).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-900 rounded-md text-slate-700 dark:text-slate-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          {project.project_url && (
                            <a
                              href={project.project_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all"
                            >
                              View Project
                              <ExternalLink className="w-3.5 h-3.5 ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
