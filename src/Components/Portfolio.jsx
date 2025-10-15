import React from "react";
import { useQuery } from "@tanstack/react-query";
//import { base44 } from "@/api/base44Client";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  /* 
    const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => base44.entities.Project.list("-order"),
    initialData: [],
  });
  */

  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My developer portfolio site built with React, Tailwind, and Framer Motion.",
      featured: true,
      tags: ["React", "Tailwind", "Framer Motion"],
      image_url: "https://knowledge.boc-group.com/wp-content/uploads/2019/08/Technology-Portfolio-Management.jpg", // or leave null
      project_url: "https://baref0ot.github.io/",
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

  return (
    <div className="min-h-screen bg-slate-950">
      <style>{`
        /* Hide scrollbar */
        ::-webkit-scrollbar {
          display: none;
        }
        
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Custom selection color */
        ::selection {
          background-color: rgb(34, 197, 94);
          color: rgb(2, 6, 23);
        }
      `}</style>
      <Hero />
      <About />
      <Projects projects={projectData} />
      <Contact />
      <Footer />
    </div>
  );
}
