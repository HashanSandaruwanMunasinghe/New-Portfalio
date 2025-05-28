import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 opacity-70"></div>
      
      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-4 py-16 z-10 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
            HASHAN <span className="text-purple-400">MUNASINGHE</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInDelay">
            B.Sc. (Hons.) Electrical and Information Engineering Undergraduate
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fadeInDelay2">
            Dynamic character in nature who is keen in improving the knowledge in Electrotechnology, 
            Information and Communication Technology aims to become an industry expert in the field of 
            Electrical Engineering.
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-4 animate-fadeInDelay3">
            <a 
              href="mailto:munasinghefirst@gmail.com" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
            >
              <Mail size={18} className="mr-2" />
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        
        {/* Profile Image and Social Links */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse-slow flex items-center justify-center">
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/18844386/pexels-photo-18844386.jpeg" 
                  alt="Hashan Munasinghe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Social Links */}
            <div className="absolute top-0 -right-4 flex flex-col space-y-4">
              <a 
                href="https://github.com/HashanSandaruwanMunasinghe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors duration-300"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hashanmunasinghe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <a 
                href="mailto:munasinghefirst@gmail.com" 
                className="flex items-center px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors duration-300"
              >
                <Mail size={14} className="mr-1" />
                <span>Email</span>
              </a>
              <a 
                href="tel:+94766389033" 
                className="flex items-center px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors duration-300"
              >
                <Phone size={14} className="mr-1" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;