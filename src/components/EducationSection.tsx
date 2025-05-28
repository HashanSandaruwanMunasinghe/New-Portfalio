import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      institution: "University of Ruhuna - Faculty of Engineering",
      degree: "BSc (Hons.) in Engineering",
      specialization: "Electrical and Information Engineering",
      period: "2021 - Present",
      expected: "Expected Graduation, Aug 2026",
      gpa: "Current G.P.A. 3.7/4.0",
      icon: <GraduationCap size={28} className="text-purple-400" />
    },
    {
      id: 2,
      institution: "Amarasooriya College Galle",
      degree: "G.C.E. Advanced Level (Physical Science Stream)",
      result: "Results: 3 A Passes with Z-score 1.9337",
      period: "2006 - 2019",
      year: "2020",
      icon: <Award size={28} className="text-blue-400" />
    },
    {
      id: 3,
      institution: "Amarasooriya College Galle",
      degree: "G.C.E. Ordinary Level",
      period: "2006 - 2019",
      year: "2016",
      icon: <Award size={28} className="text-indigo-400" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative pl-10 pb-12 ${index !== education.length - 1 ? 'border-l-2 border-gray-700' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-purple-500 z-10"></div>
              
              {/* Content */}
              <div className="bg-gray-900 rounded-lg p-6 ml-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="text-xl font-bold text-white ml-3">{item.institution}</h3>
                </div>
                
                <div className="flex items-center text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                  {item.year && <span className="ml-4 px-2 py-1 text-xs bg-gray-800 rounded-full">{item.year}</span>}
                </div>
                
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-purple-300">{item.degree}</h4>
                  {item.specialization && (
                    <p className="text-gray-300">{item.specialization}</p>
                  )}
                </div>
                
                {item.gpa && (
                  <div className="mt-3 inline-block px-3 py-1 bg-purple-900/30 text-purple-300 rounded-md">
                    {item.gpa}
                  </div>
                )}
                
                {item.result && (
                  <div className="mt-3 inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-md">
                    {item.result}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;