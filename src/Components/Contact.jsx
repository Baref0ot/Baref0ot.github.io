import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Terminal, Github, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import { PhoneCall } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 text-green-400 font-mono">
            <span className="text-slate-600">//</span>
            <span>03</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Let's discuss your software solution's needs!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
              {/* Terminal-style header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">
                  contact-form.jsx
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-mono text-slate-400 mb-2">
                    name: string
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-slate-950 border-slate-700 text-slate-100 focus:border-green-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-slate-400 mb-2">
                    email: string
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-slate-950 border-slate-700 text-slate-100 focus:border-green-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-slate-400 mb-2">
                    message: string
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-slate-950 border-slate-700 text-slate-100 focus:border-green-500 font-mono resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-slate-950 font-mono font-bold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  send()
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-bold text-white mb-2 font-mono">Email</h3>
              <a
                href="mailto:Mattwrightapproved@yahoo.com"
                className="text-sm text-slate-400 hover:text-green-400 transition-colors break-all"
              >
                Mattwrightapproved@yahoo.com
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-bold text-white mb-2 font-mono">Location</h3>
              <p className="text-sm text-slate-400">Atlanta, GA, USA</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <Terminal className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-bold text-white mb-2 font-mono">Social</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Baref0ot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthew-wright-151348135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-6">
              <h3 className="font-bold text-green-400 mb-2 font-mono">
                Status
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-slate-300">
                  Available and Online
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
