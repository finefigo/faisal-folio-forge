
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-tech-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-tech-slate text-sm">
            &copy; {new Date().getFullYear()} Faisal Imtiaz. All rights reserved.
          </div>
          
          <div className="flex space-x-5">
            <a
              href="https://github.com/finefigo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-slate hover:text-tech-teal transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-imtiaz-b77119292"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-slate hover:text-tech-teal transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:imtiazfaisal2005@gmail.com"
              className="text-tech-slate hover:text-tech-teal transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="hidden sm:block text-tech-slate font-mono text-xs">
            <span>Designed & Built by Faisal Imtiaz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
