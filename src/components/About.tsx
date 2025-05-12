
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading section-heading-01">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/5">
            <div className="prose prose-invert max-w-none">
              <p className="text-tech-slate mb-4 text-lg">
                I'm a 2nd-year engineering student at <span className="highlight">JIS College of Engineering</span> with 
                a deep passion for AI/ML, AR development, and building impactful tech solutions.
              </p>
              
              <p className="text-tech-slate mb-4 text-lg">
                I love combining <span className="highlight">Generative AI, design thinking,</span> and 
                <span className="highlight"> real-time technologies</span> to create user-focused experiences 
                across web and mobile platforms.
              </p>
              
              <p className="text-tech-slate mb-6 text-lg">
                What drives me is applying AI/ML and modern tech to solve real-world problems—especially in 
                <span className="highlight"> accessibility, education, and daily productivity</span>. I'm constantly 
                learning and excited by opportunities where I can collaborate, innovate, and make a real impact.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-tech-light mb-3">
                  Currently working with:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-tech-slate font-mono text-sm mt-4">
                  {[
                    "Python", "TensorFlow", "PyTorch",
                    "React", "Next.js", "AR/VR",
                    "Prompt Engineering", "Computer Vision", "Generative AI"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center mb-2 bg-tech-navy/80 py-2 px-3 rounded-lg">
                      <span className="text-tech-teal mr-2">▹</span> {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 flex justify-center items-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl relative group">
              <div className="absolute inset-0 border-2 border-tech-teal rounded-xl translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="absolute inset-0 bg-tech-teal/10 rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Faisal Imtiaz" 
                className="w-full h-full object-cover rounded-xl relative z-0" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
