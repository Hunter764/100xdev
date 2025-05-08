import React from 'react';
import { CodeIcon, ServerIcon, BookIcon } from 'lucide-react';
export const SkillsSection = () => {
  return <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What I Can Do
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <CodeIcon className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="JavaScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <SkillBadge name="TypeScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <SkillBadge name="Python" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <SkillBadge name="C++" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                <SkillBadge name="Java" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                <SkillBadge name="HTML5" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <SkillBadge name="CSS3" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <ServerIcon className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Frameworks
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="React" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <SkillBadge name="Node.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <SkillBadge name="Express" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <SkillBadge name="Django" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                <SkillBadge name="TailwindCSS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                <SkillBadge name="Bootstrap" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <SkillBadge name="Docker" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                <SkillBadge name="VS Code" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <SkillBadge name="Figma" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <SkillBadge name="AWS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <BookIcon className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Others
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="DSA" icon="https://img.icons8.com/color/48/000000/binary-code.png" />
                <SkillBadge name="Machine Learning" icon="https://img.icons8.com/color/48/000000/artificial-intelligence.png" />
                <SkillBadge name="APIs" icon="https://img.icons8.com/color/48/000000/api-settings.png" />
                <SkillBadge name="UI/UX" icon="https://img.icons8.com/color/48/000000/design.png" />
                <SkillBadge name="Database" icon="https://img.icons8.com/color/48/000000/database.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const SkillBadge = ({
  name,
  icon
}) => {
  return <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
      <img src={icon} alt={name} className="h-5 w-5" />
      <span className="ml-2 text-sm font-medium text-gray-700">{name}</span>
    </div>;
};