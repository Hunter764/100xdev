import React from 'react';
import { AwardIcon } from 'lucide-react';
export const AchievementsSection = () => {
  const achievements = [{
    title: '1st Place - National Coding Challenge',
    organization: 'Tech Innovators Association',
    date: 'August 2023',
    description: 'Developed an AI-powered solution for optimizing public transportation routes in urban areas.'
  }, {
    title: 'Best Mobile App - University Hackathon',
    organization: 'Stanford University',
    date: 'March 2023',
    description: 'Created an accessibility app that translates sign language to text in real-time using computer vision.'
  }, {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: 'January 2023',
    description: 'Professional certification validating expertise in designing distributed systems on AWS.'
  }, {
    title: 'Google Cloud Professional Data Engineer',
    organization: 'Google Cloud',
    date: 'November 2022',
    description: 'Certification for designing and building data processing systems on Google Cloud Platform.'
  }];
  return <section id="achievements" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Achievements
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Awards & Certifications
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
          {achievements.map((achievement, index) => <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <AwardIcon className="h-8 w-8 text-indigo-600" />
                    <p className="ml-3 text-sm font-medium text-indigo-600">
                      {achievement.organization} • {achievement.date}
                    </p>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};