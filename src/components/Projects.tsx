
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
                  className="hover:text-tech-teal hover:bg-tech-teal/10 group"
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
                  className="hover:text-tech-teal hover:bg-tech-teal/10 group"
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
      title: "AI Sign Language Translator",
      description: "An application that translates sign language into text and speech in real-time using computer vision.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tags: ["Computer Vision", "TensorFlow", "Accessibility", "Python"],
      category: ["AI", "Accessibility"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "AR Navigation App",
      description: "An augmented reality application that overlays navigation information on the real world through your smartphone camera.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      tags: ["AR", "Unity", "Mobile App", "Geolocation"],
      category: ["Mobile", "AR"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Smart News Digest",
      description: "AI-powered platform that creates personalized news summaries based on user interests and reading patterns.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
      tags: ["NLP", "Machine Learning", "React", "Node.js"],
      category: ["Web", "AI"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Virtual Study Assistant",
      description: "An AI-powered educational tool that helps students with personalized learning paths and interactive sessions.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      tags: ["EdTech", "AI/ML", "React Native", "Firebase"],
      category: ["Mobile", "AI", "EdTech"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "3D Data Visualization Platform",
      description: "Interactive platform for visualizing complex datasets in immersive 3D environments with AR capabilities.",
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      tags: ["Data Viz", "Three.js", "WebGL", "D3.js"],
      category: ["Web", "Data"],
      githubLink: "https://github.com/finefigo",
    },
    {
      title: "Blockchain Identity Verification",
      description: "Secure identity management system using blockchain technology for enhanced privacy and security.",
      image: "https://images.unsplash.com/photo-1639322537231-2fefa50d5758?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      tags: ["Blockchain", "Solidity", "Web3", "Security"],
      category: ["Blockchain", "Security"],
      githubLink: "https://github.com/finefigo",
    }
  ];

  const categories = ["All", "AI", "Web", "Mobile", "AR", "Blockchain", "Data", "EdTech", "Security"];

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
          
          {/* Filter categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
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
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
