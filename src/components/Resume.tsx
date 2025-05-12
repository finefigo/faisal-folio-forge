
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-teal/5 rounded-full filter blur-3xl"
      ></div>
      <div 
        className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-06">Resume</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-tech-light">
              Get My Complete <span className="text-tech-teal">Resume</span>
            </h3>
            <p className="text-tech-slate text-lg mb-8 max-w-xl">
              Download my comprehensive resume to learn more about my education, work experience, 
              skills, and achievements in AI/ML and AR development.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Button 
                asChild
                className="btn-primary group"
              >
                <a href="/Faisal_Imtiaz_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="glass-card p-6 gradient-border">
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-tech-teal mb-4">Resume Highlights</h4>
                <ul className="space-y-3 text-tech-slate">
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2 text-sm mt-1">▹</span> 
                    <span>2nd-year Engineering Student at JIS College of Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2 text-sm mt-1">▹</span> 
                    <span>AI/ML Engineer & AR Developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2 text-sm mt-1">▹</span> 
                    <span>Experience with Python, TensorFlow, PyTorch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2 text-sm mt-1">▹</span> 
                    <span>4 Patents Filed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2 text-sm mt-1">▹</span> 
                    <span>Winner of TechFest 2K23 & 2K25</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
