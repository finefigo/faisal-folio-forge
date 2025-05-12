
import { Award, Star, Trophy } from "lucide-react";

const AchievementCard = ({ 
  icon: Icon, 
  title, 
  description,
  index
}: { 
  icon: any; 
  title: string; 
  description: string;
  index: number;
}) => (
  <div 
    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-lg border border-tech-navy-light bg-tech-navy hover-card hover-glow"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tech-teal/10 text-tech-teal">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-tech-light mb-2">{title}</h3>
      <p className="text-tech-slate">{description}</p>
    </div>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Winner of TechFest 2K23 & 2K25",
      description: "Recognized for technical innovation and problem-solving at JIS College of Engineering's flagship tech event."
    },
    {
      icon: Star,
      title: "Holder of 4 patents",
      description: "Filed multiple patents through my college, demonstrating innovation and technical expertise."
    },
    {
      icon: Award,
      title: "Skilled in Prompt Engineering",
      description: "Developed expertise in crafting effective prompts for AI systems, enabling powerful applications of generative AI."
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-05">Achievements & Experience</h2>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
