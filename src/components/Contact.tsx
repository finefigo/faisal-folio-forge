
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });
  const { toast } = useToast();
  const paperPlaneRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field: string) => {
    setIsFocused({
      ...isFocused,
      [field]: true
    });
  };

  const handleBlur = (field: string) => {
    if (!formData[field as keyof typeof formData]) {
      setIsFocused({
        ...isFocused,
        [field]: false
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate paper plane
    if (paperPlaneRef.current) {
      paperPlaneRef.current.classList.add('animate-fly-plane');
    }
    
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
      setIsFocused({
        name: false,
        email: false,
        message: false
      });
      setIsSubmitting(false);
      
      if (paperPlaneRef.current) {
        paperPlaneRef.current.classList.remove('animate-fly-plane');
      }
    }, 1500);
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

  const formFields = [
    { name: "name", type: "text", label: "Name", placeholder: "Your name" },
    { name: "email", type: "email", label: "Email", placeholder: "your@email.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-tech-light"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-tech-slate max-w-lg mx-auto"
            variants={itemVariants}
          >
            Feel free to reach out if you're looking to collaborate on a project,
            have a question, or just want to connect!
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.name} className="relative">
                    <motion.label 
                      htmlFor={field.name} 
                      className={`absolute left-3 transition-all duration-300 ${
                        isFocused[field.name as keyof typeof isFocused]
                          ? '-top-2.5 text-xs text-tech-teal bg-tech-blue px-1 z-10'
                          : 'top-3 text-tech-slate'
                      }`}
                    >
                      {field.label}
                    </motion.label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={() => handleBlur(field.name)}
                      required
                      placeholder={isFocused[field.name as keyof typeof isFocused] ? field.placeholder : ""}
                      className="glass-card border-tech-navy-light focus:border-tech-teal text-tech-light pt-4"
                    />
                  </div>
                ))}
                <div className="relative">
                  <motion.label 
                    htmlFor="message" 
                    className={`absolute left-3 transition-all duration-300 ${
                      isFocused.message
                        ? '-top-2.5 text-xs text-tech-teal bg-tech-blue px-1 z-10'
                        : 'top-3 text-tech-slate'
                    }`}
                  >
                    Message
                  </motion.label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    required
                    placeholder={isFocused.message ? "Your message" : ""}
                    className="h-32 glass-card border-tech-navy-light focus:border-tech-teal text-tech-light pt-4"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group overflow-hidden relative"
                  >
                    <span className={isSubmitting ? 'opacity-0' : 'opacity-100'}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <div 
                      ref={paperPlaneRef} 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        isSubmitting ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Send className="w-6 h-6" />
                    </div>
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-xl gradient-border flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-tech-light">
                  Contact Information
                </h3>
                <p className="text-tech-slate mb-6">
                  I'm currently looking for opportunities to collaborate with companies,
                  agencies, and individuals.
                </p>

                <div className="space-y-4 mb-8">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="text-tech-teal mr-3 w-5 h-5" />
                    <a
                      href="mailto:imtiazfaisal2005@gmail.com"
                      className="text-tech-slate hover:text-tech-teal transition-colors"
                    >
                      imtiazfaisal2005@gmail.com
                    </a>
                  </motion.div>
                </div>

                <div>
                  <h4 className="text-tech-light font-medium mb-3">Find me on</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-tech-light hover:bg-tech-teal hover:text-tech-blue transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 5,
                          backgroundColor: "#64ffda",
                          color: "#0e1525"
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div 
                className="mt-8 font-mono text-sm text-tech-slate"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>"Let's build something meaningful together!"</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
