
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Card 
      className="glass-card overflow-hidden hover-card hover-glow"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden group">
        <div className="absolute inset-0 bg-tech-blue/60 group-hover:bg-tech-blue/40 transition-all duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
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
              className="text-tech-teal text-xs font-mono bg-tech-teal/10 px-2 py-1 rounded-full"
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
              className="hover:text-tech-teal hover:bg-tech-teal/10 group"
              asChild
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" /> Live Demo
              </a>
            </Button>
          )}
          
          {project.githubLink && (
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-tech-teal hover:bg-tech-teal/10 group"
              asChild
            >
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" /> Code
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
      title: "AI Sign Language Translator",
      description: "An application that translates sign language into text and speech in real-time using computer vision.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tags: ["Computer Vision", "TensorFlow", "Accessibility", "Python"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "AR Navigation App",
      description: "An augmented reality application that overlays navigation information on the real world through your smartphone camera.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      tags: ["AR", "Unity", "Mobile App", "Geolocation"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Smart News Digest",
      description: "AI-powered platform that creates personalized news summaries based on user interests and reading patterns.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
      tags: ["NLP", "Machine Learning", "React", "Node.js"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Virtual Study Assistant",
      description: "An AI-powered educational tool that helps students with personalized learning paths and interactive sessions.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      tags: ["EdTech", "AI/ML", "React Native", "Firebase"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "3D Data Visualization Platform",
      description: "Interactive platform for visualizing complex datasets in immersive 3D environments with AR capabilities.",
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      tags: ["Data Viz", "Three.js", "WebGL", "D3.js"],
      githubLink: "https://github.com/finefigo",
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-03">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            className="btn-outline group"
          >
            <a 
              href="https://github.com/finefigo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View More Projects
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
