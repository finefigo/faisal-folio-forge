
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wind, Car, Brain } from "lucide-react";

const Patents = () => {
  const patents = [
    {
      title: "Smart Window Film Technology",
      description: "Smart window film harvests solar energy, adjusts opacity, stores power, self-cleans, and supports IoT for efficient energy management.",
      link: "https://drive.google.com/file/d/1ubReFRME83FVjGqmyGPQfYZB9-n6Lec6/view?usp=drivesdk",
      icon: Wind
    },
    {
      title: "AI-powered CTIS Technology",
      description: "AI-powered CTIS uses smart valves, IoT, and energy harvesting to auto-adjust tire pressure, boosting safety, efficiency, and sustainability.",
      link: "https://drive.google.com/file/d/1ugE8poU_joZFIuyggYosdSNMD8o6D_8Z/view?usp=drivesdk",
      icon: Car
    },
    {
      title: "W-SIRD Prediction Model",
      description: "W-SIRD model improves epidemic prediction by weighting user behaviors like masking, distancing, and age, enabling accurate, behavior-sensitive disease forecasts.",
      link: "https://drive.google.com/file/d/1ujm5aNybMmTf2NhUquJFTOpsioNg5dA_/view?usp=drivesdk",
      icon: Brain
    }
  ];

  return (
    <section id="patents" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-04">Patents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patents.map((patent, index) => (
            <Card 
              key={index} 
              className="glass-card hover-card hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-tech-teal/10 flex items-center justify-center">
                    <patent.icon className="w-5 h-5 text-tech-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-light mb-2">{patent.title}</h3>
                  <p className="text-tech-slate mb-3">{patent.description}</p>
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tech-teal hover:underline font-mono text-sm inline-flex items-center group"
                  >
                    View Patent Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
