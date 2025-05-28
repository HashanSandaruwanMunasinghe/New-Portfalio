import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Hashan<span className="text-purple-500">.</span>
            </h2>
            <p className="mt-2">
              B.Sc. (Hons.) Electrical and Information Engineering Undergraduate
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Hashan Munasinghe. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://github.com/HashanSandaruwanMunasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hashanmunasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:munasinghefirst@gmail.com"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;