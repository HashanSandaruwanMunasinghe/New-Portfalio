import { useRef } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Polynomial Calculator using Linked Lists",
      category: "Data Structures & Algorithms",
      year: "2022",
      description: "A C++ application that performs polynomial operations using linked lists. Implemented object-oriented programming and manual memory management for dynamic term handling.",
      skills: ["C++", "Data Structures", "OOP", "Memory Management"],
      repo: "https://github.com/HashanSandaruwanMunasinghe/DSA_Project.git",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
      id: 2,
      title: "BJT Amplifier Design and Fabrication",
      category: "Electronics Project",
      year: "2024",
      description: "Designed and simulated a single-stage BJT amplifier using BC547BP transistor in Proteus, then fabricated the circuit with manual PCB etching.",
      skills: ["Circuit Design", "PCB Fabrication", "Proteus", "Analog Electronics"],
      repo: "#",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
      id: 3,
      title: "Courier Management System",
      category: "Database Systems Project",
      year: "2024",
      description: "A comprehensive database management system for a courier service using MySQL. Designed and implemented a relational database with tables, relationships, and queries for efficient data management.",
      skills: ["MySQL", "Database Design", "SQL", "Normalization"],
      repo: "https://github.com/HashanSandaruwanMunasinghe/Courier-Management-System.git",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtIlAaxneUQsmb1JirPR0zU4Kmf6hGS91qg&s"
    },
    {
      id: 4,
      title: "Smart Kitchen Monitoring System",
      category: "Sensors Project",
      year: "2025",
      description: "IoT-based kitchen safety system using ESP32 with temperature, humidity, and gas sensors. Implemented local and remote dashboards for real-time monitoring and alerts.",
      skills: ["ESP32", "IoT", "Sensors", "ThingsBoard", "Arduino"],
      repo: "#",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
    },
    {
      id: 5,
      title: "PayFlow - Online Voucher Application Portal",
      category: "Full Stack Project",
      year: "2025",
      description: "Centralized payment request management system for academic staff using React.js, Node.js, Express, and MongoDB to streamline voucher submission and approval workflows.",
      skills: ["React.js", "Node.js", "MongoDB", "Express", "Authentication"],
      repo: "https://github.com/janindudewmith/pay-flow.git",
      image: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey,
            showcasing my skills in various technical domains.
          </p>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-3 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-3 rounded-full text-white hover:bg-purple-600 transition-colors duration-300 hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide snap-x"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[350px] md:min-w-[400px] bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col snap-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Project image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project header */}
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs bg-gray-900/50 text-white rounded-full mb-2">
                        {project.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-purple-200">{project.category}</p>
                    </div>
                    {project.repo && project.repo !== "#" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-300 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-6 flex-1">
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project footer */}
                <div className="px-6 py-4 border-t border-gray-700">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center text-sm font-medium ${
                      project.repo === "#" 
                        ? "text-gray-500 cursor-not-allowed" 
                        : "text-purple-400 hover:text-purple-300"
                    }`}
                  >
                    <span>View Repository</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-6 space-x-2 md:hidden">
          <span className="text-sm text-gray-400">← Swipe to see more →</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;