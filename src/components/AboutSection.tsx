import { Brain, Code, ServerCog, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed mb-16">
          <p className="mb-6">
            I am an aspiring Electrical and Information Engineering undergraduate at the University of Ruhuna, 
            with a passion for innovation and problem-solving. With a current GPA of 3.7/4.0, I combine strong 
            academic foundations with practical experience in various technical domains.
          </p>
          <p>
            My goal is to become an industry expert in the field of Electrical Engineering, utilizing my technical, 
            management, and leadership skills for sustainable solutions. I enjoy working in team environments 
            and approach challenges with a creative mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Interest Area 1 */}
          <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Zap size={30} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Electrical Engineering</h3>
            <p className="text-gray-400 text-center">
              Passionate about power systems, electrical design, and renewable energy solutions.
            </p>
          </div>

          {/* Interest Area 2 */}
          <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <ServerCog size={30} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">IoT Systems</h3>
            <p className="text-gray-400 text-center">
              Building smart systems using microcontrollers, sensors, and cloud integration.
            </p>
          </div>

          {/* Interest Area 3 */}
          <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Code size={30} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Software Development</h3>
            <p className="text-gray-400 text-center">
              Creating efficient, scalable applications using modern programming languages and frameworks.
            </p>
          </div>

          {/* Interest Area 4 */}
          <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-violet-900/50 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Brain size={30} className="text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">AI & Automation</h3>
            <p className="text-gray-400 text-center">
              Exploring machine learning applications and automated systems for real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;