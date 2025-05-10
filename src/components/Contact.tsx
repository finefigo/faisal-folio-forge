
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/finefigo",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/faisal-imtiaz-b77119292",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:imtiazfaisal2005@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-tech-light">Get In Touch</h2>
          <p className="text-tech-slate max-w-lg mx-auto">
            Feel free to reach out if you're looking to collaborate on a project,
            have a question, or just want to connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-tech-light mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-tech-navy border-tech-navy-light focus:border-tech-teal text-tech-light placeholder:text-tech-slate/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-tech-light mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-tech-navy border-tech-navy-light focus:border-tech-teal text-tech-light placeholder:text-tech-slate/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-tech-light mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    className="h-32 bg-tech-navy border-tech-navy-light focus:border-tech-teal text-tech-light placeholder:text-tech-slate/50"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tech-teal text-tech-blue hover:bg-tech-teal/90 font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-tech-navy p-8 rounded-lg border border-tech-navy-light flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-tech-light">
                  Contact Information
                </h3>
                <p className="text-tech-slate mb-6">
                  I'm currently looking for opportunities to collaborate with companies,
                  agencies, and individuals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="text-tech-teal mr-3 w-5 h-5" />
                    <a
                      href="mailto:imtiazfaisal2005@gmail.com"
                      className="text-tech-slate hover:text-tech-teal transition-colors"
                    >
                      imtiazfaisal2005@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-tech-light font-medium mb-3">Find me on</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="w-10 h-10 rounded-full bg-tech-navy-light flex items-center justify-center text-tech-light hover:bg-tech-teal hover:text-tech-blue transition-colors duration-300"
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 font-mono text-sm text-tech-slate">
                <p>"Let's build something meaningful together!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
