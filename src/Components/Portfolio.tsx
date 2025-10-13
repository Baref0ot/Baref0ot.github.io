//import React from "react";
import { useQuery } from "@tanstack/react-query";
//import { base44 } from "@/api/base44Client";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Tailwind, and Framer Motion.",
      featured: true,
      tags: ["React", "Tailwind", "Framer Motion"],
      image_url: "https://via.placeholder.com/600x400", // or leave null
      project_url: "https://myportfolio.com",
    },
    {
      id: 2,
      title: "E-commerce API",
      description: "Scalable backend API built with .NET Core and RabbitMQ.",
      featured: false,
      tags: [".NET Core", "RabbitMQ", "API"],
      image_url: null,
      project_url: "https://github.com/myrepo",
    },
    // add more projects here
  ];

  // const { data: projects = [], isLoading } = useQuery({
  //   queryKey: ["projects"],
  //   queryFn: () => base44.entities.Project.list("-order"),
  //   initialData: [],
  // });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Hero />
      <Projects projects={projectData} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
