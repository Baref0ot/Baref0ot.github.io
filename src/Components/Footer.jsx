import React from "react";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-green-400 mb-4">
              <Terminal className="w-5 h-5" />
              <span className="font-mono font-bold">Matthew Wright</span>
            </div>
            <p className="text-sm text-slate-500 font-mono">
              Backend/FullStack Software Engineer
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono text-slate-400 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#projects"
                className="block text-sm text-slate-500 hover:text-green-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="block text-sm text-slate-500 hover:text-green-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-sm text-slate-500 hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-slate-400 mb-4">Connect</h3>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/Baref0ot" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/matthew-wright-151348135/",
                },
                { icon: Mail, href: "mailto:Mattwrightapproved@yahoo.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-800 rounded-lg flex items-center justify-center text-slate-500 hover:text-green-400 hover:border-green-400 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-mono">
            © {currentYear} Matthew Wright. Built with React!
          </p>
          <p className="text-xs text-slate-600 font-mono">$ npm run dev</p>
        </div>
      </div>
    </footer>
  );
}
