import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Electrical Engineer Intern",
      company: "Hayleys Fentons",
      location: "Colombo, Sri Lanka",
      period: "May 2024 - Aug 2024",
      description: "Specialized in power engineering, electrical design, renewable energy, and solar PV systems.",
      responsibilities: [
        "Assisted in electrical system design and implementation",
        "Collaborated on renewable energy projects",
        "Worked on solar PV system installations",
        "Participated in project documentation and reporting"
      ]
    },
    {
      id: 2,
      title: "Development Assistant",
      company: "Siyolak Pvt Ltd",
      location: "Galle, Sri Lanka",
      period: "2021 - 2022",
      description: "Supported project development and contributed to team deliverables.",
      responsibilities: [
        "Assisted in development project coordination",
        "Contributed to project documentation",
        "Supported team in meeting deliverables",
        "Helped with data collection and analysis"
      ]
    }
  ];

  const volunteering = [
    {
      id: 1,
      title: "Demonstrator",
      organization: "NAVIGATOR 2025",
      period: "2024",
      description: "Represented the Electrical department at the career exhibition in Mahninda college."
    },
    {
      id: 2,
      title: "Project Coordinator",
      organization: "Mehewara maths foundation",
      period: "2024",
      description: "Volunteered for conducting O/L and A/L Mathematics Seminars by the Faculty of Engineering."
    },
    {
      id: 3,
      title: "Member",
      organization: "ECSL Guide University of Ruhuna",
      period: "2024",
      description: "Active member contributing to engineering community activities."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase size={24} className="text-purple-400 mr-3" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.id} className="bg-gray-800 rounded-lg p-6 border-l-4 border-purple-500 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">{experience.title}</h4>
                    <p className="text-purple-300">{experience.company}</p>
                    
                    <div className="flex flex-wrap items-center text-gray-400 mt-2">
                      <div className="flex items-center mr-6 mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      
                      <div className="flex items-center mb-2">
                        <MapPin size={14} className="mr-1" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Responsibilities:</h5>
                    <ul className="text-gray-400 space-y-1">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex">
                          <span className="mr-2">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase size={24} className="text-blue-400 mr-3" />
              Volunteering
            </h3>

            <div className="space-y-6">
              {volunteering.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <p className="text-blue-300">{item.organization}</p>
                    
                    <div className="flex items-center text-gray-400 mt-2">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Briefcase size={24} className="text-green-400 mr-3" />
                Certifications
              </h3>

              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <ul className="space-y-4">
                  <li className="border-b border-gray-700 pb-3">
                    <h4 className="text-white font-semibold">Electrical Power Distribution</h4>
                    <p className="text-gray-400 text-sm">Coursera | Sept 2024</p>
                  </li>
                  
                  <li className="border-b border-gray-700 pb-3">
                    <h4 className="text-white font-semibold">Solar Energy Design Course: From Zero to Hero</h4>
                    <p className="text-gray-400 text-sm">Udemy | Aug 2024</p>
                  </li>
                  
                  <li className="border-b border-gray-700 pb-3">
                    <h4 className="text-white font-semibold">Power System Modelling and Fault Analysis</h4>
                    <p className="text-gray-400 text-sm">Coursera | Mar 2024</p>
                  </li>
                  
                  <li className="border-b border-gray-700 pb-3">
                    <h4 className="text-white font-semibold">AI/ML Engineer - Stage 1</h4>
                    <p className="text-gray-400 text-sm">SLIIT | May 2023</p>
                  </li>
                  
                  <li className="border-b border-gray-700 pb-3">
                    <h4 className="text-white font-semibold">Python for Beginners</h4>
                    <p className="text-gray-400 text-sm">University of Moratuwa | Apr 2023</p>
                  </li>
                  
                  <li>
                    <h4 className="text-white font-semibold">Web Design for Beginners</h4>
                    <p className="text-gray-400 text-sm">University of Moratuwa | Jan 2023</p>
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

export default ExperienceSection;