
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden bg-tech-navy border border-tech-navy-light hover:border-tech-teal/50 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-tech-blue/50 hover:bg-tech-blue/30 transition-all duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-tech-light mb-2">
          {project.title}
        </h3>
        <p className="text-tech-slate mb-4">{project.description}</p>
        
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-tech-teal text-xs font-mono bg-tech-teal/10 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.liveLink && (
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-tech-teal hover:bg-tech-teal/10"
              asChild
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1" /> Live Demo
              </a>
            </Button>
          )}
          
          {project.githubLink && (
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-tech-teal hover:bg-tech-teal/10"
              asChild
            >
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="w-4 h-4 mr-1" /> Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Indian Sign Language to Text & Speech Converter",
      description: "An AI-powered application that translates Indian Sign Language gestures into text and speech in real-time.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tags: ["Computer Vision", "AI/ML", "Accessibility", "Python"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "AI Smart Newsletter Tool Platform",
      description: "A platform that uses generative AI to create personalized news digests and newsletters based on user preferences.",
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      tags: ["Generative AI", "NLP", "Web App", "React"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and achievements.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
      tags: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "LMS (Learning Management System) App",
      description: "A comprehensive learning management system for educational institutions with course management and progress tracking.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      tags: ["EdTech", "React Native", "Firebase", "Mobile App"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Weather App with Clean UI/UX",
      description: "A weather application with a focus on beautiful, intuitive user interface and real-time weather data.",
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "API Integration", "UI/UX", "Mobile-first"],
      githubLink: "https://github.com/finefigo",
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-04">Projects I've Built</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
