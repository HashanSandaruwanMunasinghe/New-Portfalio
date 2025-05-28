import { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Code, 
  Database, 
  GitBranch, 
  PieChart 
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('electrical');

  const categories = [
    {
      id: 'electrical',
      name: 'Electrical & Electronics',
      icon: <Zap size={20} />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500',
    },
    {
      id: 'iot',
      name: 'Microcontrollers & IoT',
      icon: <Cpu size={20} />,
      color: 'text-green-400',
      bgColor: 'bg-green-500',
    },
    {
      id: 'programming',
      name: 'Software & Programming',
      icon: <Code size={20} />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500',
    },
    {
      id: 'data',
      name: 'Data & Automation',
      icon: <Database size={20} />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500',
    },
    {
      id: 'workflow',
      name: 'Project & Workflow',
      icon: <PieChart size={20} />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500',
    },
    {
      id: 'tools',
      name: 'Version Control & Tools',
      icon: <GitBranch size={20} />,
      color: 'text-red-400',
      bgColor: 'bg-red-500',
    },
  ];

  const skills = {
    electrical: [
      { name: 'Electrical Wiring (BS 7671)', level: 85 },
      { name: 'Solar PV Systems', level: 80 },
      { name: 'Inverter Configuration', level: 75 },
      { name: 'Earthing Systems', level: 85 },
      { name: 'Power Distribution', level: 80 },
      { name: 'Circuit Design', level: 90 },
      { name: 'PCB Design', level: 85 },
      { name: 'Embedded Systems', level: 75 },
    ],
    iot: [
      { name: 'ESP32', level: 90 },
      { name: 'Arduino', level: 95 },
      { name: 'Sensor Integration', level: 85 },
      { name: 'Relay Modules', level: 90 },
      { name: 'OLED Display', level: 80 },
      { name: 'IoT Platforms', level: 75 },
    ],
    programming: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'MATLAB', level: 65 },
      { name: 'Arduino IDE', level: 90 },
      { name: 'AutoCAD', level: 70 },
      { name: 'MS Office', level: 85 },
      { name: '3ds Max', level: 60 },
      { name: 'SQL', level: 75 },
    ],
    data: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Google Apps Script', level: 70 },
      { name: 'Excel Automation', level: 85 },
      { name: 'Data Analysis', level: 75 },
    ],
    workflow: [
      { name: 'JIRA', level: 80 },
      { name: 'Confluence', level: 75 },
      { name: 'MS Forms', level: 85 },
      { name: 'Google Forms', level: 90 },
      { name: 'Project Management', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 75 },
      { name: 'Figma', level: 70 },
      { name: 'Multimeter & Test Equipment', level: 95 },
      { name: 'Visual Studio', level: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} bg-gray-900 shadow-lg`
                  : 'text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-5 transform hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className={`${getCategoryColor(activeCategory)} font-semibold`}>
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`${getCategoryBgColor(
                    activeCategory
                  )} h-full rounded-full`}
                  style={{
                    width: `${skill.level}%`,
                    transition: 'width 1s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  function getCategoryColor(categoryId: string): string {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.color : 'text-purple-400';
  }

  function getCategoryBgColor(categoryId: string): string {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.bgColor : 'bg-purple-500';
  }
};

export default SkillsSection;