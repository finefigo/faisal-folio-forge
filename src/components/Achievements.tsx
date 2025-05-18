
import { Award, Star, Trophy } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const AchievementCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string;
}) => (
  <div className="glass-card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 hover-card hover-glow h-full">
    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-tech-teal/10 text-tech-teal">
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
      title: "Winner of JISTECH2k23",
      description: "First place in the JISTECH2k23 competition for developing innovative technological solutions."
    },
    {
      icon: Award,
      title: "Winner of JISTECH 2k25",
      description: "Recognized with top honors at JISTECH 2k25 for excellence in advanced technology development."
    },
    {
      icon: Star,
      title: "Holder of 3 Patents",
      description: "Creator of three patented technologies in the fields of smart energy, automotive systems, and epidemic modeling."
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-05">Achievements & Recognition</h2>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <AchievementCard
                      icon={achievement.icon}
                      title={achievement.title}
                      description={achievement.description}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mx-2 bg-tech-navy-light border-tech-navy-light text-tech-teal hover:bg-tech-teal hover:text-tech-navy" />
              <CarouselNext className="relative static mx-2 bg-tech-navy-light border-tech-navy-light text-tech-teal hover:bg-tech-teal hover:text-tech-navy" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
