import React from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
export const ProjectsSection = () => {
  const {
    isDark
  } = useTheme();
  const projects = [{
    title: 'AI Image Recognition App',
    description: 'A web application that uses machine learning to identify objects in images with high accuracy.',
    techStack: ['React', 'TensorFlow.js', 'Node.js', 'Express'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment processing, user authentication, and inventory management.',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe API'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Weather Dashboard',
    description: 'Interactive weather application providing real-time forecasts and historical weather data visualization.',
    techStack: ['JavaScript', 'Chart.js', 'OpenWeather API', 'HTML/CSS'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, task assignment, and progress tracking.',
    techStack: ['React', 'Firebase', 'Material UI', 'Redux'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Fitness Tracker',
    description: 'Mobile-first web app for tracking workouts, nutrition, and fitness goals with data visualization.',
    techStack: ['React Native', 'Firebase', 'D3.js', 'Node.js'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    title: 'Smart Home Dashboard',
    description: 'IoT control panel for managing smart home devices with automation rules and energy usage monitoring.',
    techStack: ['React', 'WebSockets', 'Node.js', 'MongoDB', 'MQTT'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }];
  return <section id="projects" className={`py-16 ${isDark ? 'bg-gray-900/30' : 'bg-white/30'} backdrop-blur-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className={`text-base ${isDark ? 'text-indigo-400' : 'text-indigo-600'} font-semibold tracking-wide uppercase`}>
            Projects
          </h2>
          <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            My Recent Work
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={index} project={project} isDark={isDark} />)}
        </div>
      </div>
    </section>;
};
const ProjectCard = ({
  project,
  isDark
}) => {
  return <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white/70'} overflow-hidden shadow-lg rounded-lg backdrop-blur-sm transition-colors duration-300`}>
      <div className="h-48 w-full overflow-hidden">
        <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
      </div>
      <div className="p-6">
        <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => <span key={index} className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
              {tech}
            </span>)}
        </div>
        <div className="mt-6 flex justify-between">
          <a href={project.demoLink} className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Live Demo
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
          <a href={project.githubLink} className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-500">
            GitHub
            <GithubIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>;
};