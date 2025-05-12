
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";

const Patents = () => {
  const patents = [
    {
      title: "AI-Powered Medical Diagnosis System",
      description: "A patent for an AI system that assists in early medical diagnosis using computer vision techniques.",
      link: "#"
    },
    {
      title: "AR Navigation System for Visually Impaired",
      description: "Patented technology that uses AR to provide spatial awareness and navigation assistance for visually impaired users.",
      link: "#"
    },
    {
      title: "Gesture-Based Interface for Smart Devices",
      description: "Novel approach to human-computer interaction using advanced gesture recognition algorithms.",
      link: "#"
    },
    {
      title: "Blockchain-Based Identity Verification",
      description: "A secure identity verification system leveraging blockchain technology for enhanced security and privacy.",
      link: "#"
    }
  ];

  return (
    <section id="patents" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-04">Patents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <Card 
              key={index} 
              className="glass-card hover-card hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-tech-teal/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-tech-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-tech-light mb-2">{patent.title}</h3>
                  <p className="text-tech-slate mb-3">{patent.description}</p>
                  <a
                    href={patent.link}
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
