
import { Card } from "@/components/ui/card";
import { Code, Image, BookOpen, Activity } from "lucide-react";

const SkillCard = ({ title, icon: Icon, skills }: { title: string; icon: any; skills: string[] }) => (
  <Card className="bg-tech-navy border border-tech-navy-light p-6 hover:border-tech-teal/50 transition-all duration-300">
    <div className="flex items-center mb-4">
      <Icon className="w-5 h-5 text-tech-teal mr-3" />
      <h3 className="text-xl font-semibold text-tech-light">{title}</h3>
    </div>
    <ul className="space-y-2 text-tech-slate">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="text-tech-teal mr-2 text-sm">▹</span> {skill}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-02">What I'm Good At</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
