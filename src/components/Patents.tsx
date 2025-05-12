
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Patents = () => {
  const patents = [
    {
      title: "Patent Title 1",
      description: "The first patent filed through JIS College of Engineering.",
      link: "#"
    },
    {
      title: "Patent Title 2",
      description: "The second patent filed through JIS College of Engineering.",
      link: "#"
    },
    {
      title: "Patent Title 3",
      description: "The third patent filed through JIS College of Engineering.",
      link: "#"
    },
    {
      title: "Patent Title 4",
      description: "The fourth patent filed through JIS College of Engineering.",
      link: "#"
    }
  ];

  return (
    <section id="patents" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-tech-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-06">Patents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <Card 
              key={index} 
              className="bg-tech-navy border border-tech-navy-light hover-card hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-tech-teal/10 flex items-center justify-center">
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
        
        <p className="text-center text-tech-slate mt-8 italic">
          * You can replace the placeholder patent titles with official patent links or PDFs.
        </p>
      </div>
    </section>
  );
};

export default Patents;
