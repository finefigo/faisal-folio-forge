
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      layout
      className="w-full"
    >
      <Card className="glass-card overflow-hidden hover-card hover-glow h-full">
        <div className="relative h-48 overflow-hidden group">
          <div className="absolute inset-0 bg-tech-blue/60 group-hover:bg-tech-blue/40 transition-all duration-300 z-10"></div>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-tech-blue/90 to-transparent z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-tech-teal text-xs font-mono bg-tech-teal/10 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-tech-light mb-2">
            {project.title}
          </h3>
          <p className="text-tech-slate mb-4">{project.description}</p>
          
          <div className="flex gap-3 mt-auto">
            {project.liveLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:text-tech-teal hover:bg-tech-teal/10 group h-10"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" /> Live Demo
                  </a>
                </Button>
              </motion.div>
            )}
            
            {project.githubLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:text-tech-teal hover:bg-tech-teal/10 group h-10"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" /> Code
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isInView, setIsInView] = useState(false);

  const projects: Project[] = [
    {
      title: "Signify-ISL",
      description: "A powerful, AI-driven communication and educational platform that translates Indian Sign Language (ISL) into text and speech in real-time.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tags: ["AI", "Accessibility", "Computer Vision", "React"],
      category: ["AI", "Web"],
      liveLink: "https://signify-isl.vercel.app/",
      githubLink: "https://github.com/finefigo/signify-isl.git",
    },
    {
      title: "Learning-Partner",
      description: "Student profile and subject management app using XML and Java for efficient academic organization.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      tags: ["XML", "Java", "Mobile App", "Education"],
      category: ["Mobile"],
      githubLink: "https://github.com/finefigo/Learning-Partner.git",
    },
    {
      title: "IEM Hacks 3",
      description: "A hackathon project with built-in AI to help users with mental health support and resources.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
      tags: ["Mental Health", "AI", "React", "Node.js"],
      category: ["Web", "AI"],
      githubLink: "https://github.com/finefigo/iemhacks3.git",
    },
  ];

  // Updated categories to only include those needed
  const categories = ["All", "AI", "Web", "Mobile"];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  // Set filtered projects on initial render
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading section-heading-03">Featured Projects</h2>
          
          {/* Filter categories - Optimized for mobile */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-3 py-2 rounded-full text-sm transition-all duration-300 mb-2 ${
                  activeFilter === category
                    ? "bg-tech-teal text-tech-blue font-medium"
                    : "bg-tech-navy-light/50 text-tech-slate hover:bg-tech-navy-light"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Responsive grid for projects */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              asChild
              className="btn-outline group min-h-[44px]"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
