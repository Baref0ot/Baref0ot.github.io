import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ChevronRight,
  Database,
  Server,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Backend Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated code lines */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
            style={{ top: `${i * 12}%` }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-green-400 mb-6 font-mono text-sm"
            >
              <ChevronRight className="w-4 h-4" />
              <span>~/portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              Matthew Wright
            </motion.h1>

            <div className="mb-6 font-mono text-lg sm:text-xl text-green-400 h-8">
              <span className="text-slate-500">$</span> {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-green-400 ml-1"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed"
            >
              Building scalable and robust services for mission-critical
              solutions. Specializing in distributed architectures,
              microservices, and high-performance backend solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                onClick={scrollToProjects}
                className="bg-green-500 hover:bg-green-600 text-slate-950 font-mono"
              >
                <Terminal className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-white font-mono"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/Baref0ot" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/matthew-wright-151348135/",
                },
                { icon: Mail, href: "mailto:Mattwrightapprove@yahoo.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">
                  backend-engineer@portfolio
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-slate-500">
                    <span className="text-green-400">$</span> skills.json
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-slate-300"
                  >
                    <div className="text-slate-500">{"{"}</div>
                    <div className="ml-4">
                      <span className="text-blue-400">"languages"</span>: [
                      <span className="text-orange-400">"C#"</span>,
                      <span className="text-orange-400">"HTML"</span>,
                      <span className="text-orange-400">"CSS"</span>,
                      <span className="text-orange-400">"Javascript"</span>],
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">"databases"</span>: [
                      <span className="text-orange-400">"SQL Server"</span>,
                      <span className="text-orange-400">"PostgreSQL"</span>,
                      <span className="text-orange-400">"MongoDB"</span>,
                      <span className="text-orange-400">"Redis"</span>],
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">"frameworks"</span>: [
                      <span className="text-orange-400">".NET"</span>,
                      <span className="text-orange-400">"Entity Framework"</span>,
                      <span className="text-orange-400">"Angular"</span>,
                      <span className="text-orange-400">"React"</span>],
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">"tools"</span>: [
                      <span className="text-orange-400">"Docker"</span>,
                      <span className="text-orange-400">"RabbitMQ"</span>,
                      <span className="text-orange-400">"Postman"</span>,
                      <span className="text-orange-400">"Azure"</span>]
                    </div>
                    <div className="text-slate-500">{"}"}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-green-400"
                  >
                    <span className="text-slate-500">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
