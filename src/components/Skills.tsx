
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Laptop, Bot, Smartphone, ArrowRight, Asterisk, FileCode, Braces, Package, Settings, Cpu, Layers, Paintbrush, Globe } from "lucide-react";

// Custom Skill Badge component
const SkillBadge = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2 bg-tech-navy-light hover:bg-tech-navy px-3 py-2 rounded-lg transition-colors hover-lift">
    <Icon className="w-5 h-5 text-tech-teal" />
    <span className="text-tech-slate">{label}</span>
  </div>
);

// Custom Skill Category component
const SkillCategory = ({ title, icon: Icon, skills }: { title: string; icon: any; skills: {icon: any; label: string}[] }) => (
  <Card className="glass-card hover-card hover-glow p-6">
    <div className="flex items-center mb-5">
      <div className="w-10 h-10 rounded-lg bg-tech-teal/10 flex items-center justify-center mr-3">
        <Icon className="w-5 h-5 text-tech-teal" />
      </div>
      <h3 className="text-xl font-semibold text-tech-light">{title}</h3>
    </div>
    
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <SkillBadge key={index} icon={skill.icon} label={skill.label} />
      ))}
    </div>
  </Card>
);

const Skills = () => {
  // Organized skills by category with icons
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { icon: Braces, label: "C" },
        { icon: FileCode, label: "Python" },
        { icon: Code, label: "Kotlin" },
        { icon: FileCode, label: "XML" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Laptop,
      skills: [
        { icon: Layers, label: "Jetpack Compose" },
        { icon: Cpu, label: "TensorFlow" },
        { icon: Package, label: "Unity" },
        { icon: Settings, label: "Vibe Coding" }
      ]
    },
    {
      title: "Domains",
      icon: Bot,
      skills: [
        { icon: Smartphone, label: "Mobile App Dev" },
        { icon: Bot, label: "Prompt Engineering" },
        { icon: Paintbrush, label: "Generative AI" },
        { icon: Globe, label: "AR Development" },
        { icon: Cpu, label: "AI/ML" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-02">What I'm Good At</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Badge className="bg-tech-teal/10 text-tech-teal border-tech-teal/30 hover:bg-tech-teal/20 text-sm px-4 py-2">
            Always learning new technologies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Skills;
