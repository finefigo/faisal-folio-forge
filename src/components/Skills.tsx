
import { Card } from "@/components/ui/card";
import { Code, Image, BookOpen, Activity } from "lucide-react";

const SkillCard = ({ title, icon: Icon, skills, index }: { title: string; icon: any; skills: string[]; index: number }) => (
  <Card 
    className="glass-card hover-card hover-glow p-6"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 rounded-lg bg-tech-teal/10 flex items-center justify-center mr-3">
        <Icon className="w-5 h-5 text-tech-teal" />
      </div>
      <h3 className="text-xl font-semibold text-tech-light">{title}</h3>
    </div>
    <ul className="space-y-2 text-tech-slate">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-start">
          <span className="text-tech-teal mr-2 text-sm mt-1">▹</span> {skill}
        </li>
      ))}
    </ul>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: Code,
      skills: [
        "Mobile-first frontend design",
        "Real-time ML-powered applications",
        "Web & mobile app development",
        "Full-stack development"
      ]
    },
    {
      title: "AI & ML",
      icon: BookOpen,
      skills: [
        "Generative AI implementation",
        "Prompt engineering",
        "Model deployment",
        "Computer vision"
      ]
    },
    {
      title: "AR & Immersive Tech",
      icon: Image,
      skills: [
        "Augmented Reality development",
        "Interactive 3D experiences",
        "Spatial computing",
        "UI/UX for immersive tech"
      ]
    },
    {
      title: "Engineering",
      icon: Activity,
      skills: [
        "Rapid prototyping",
        "Software systems design",
        "Accessibility solutions",
        "Patent development"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
