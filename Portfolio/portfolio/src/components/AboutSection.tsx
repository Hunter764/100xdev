import React from 'react';
import { GraduationCapIcon, AwardIcon, TrophyIcon, BriefcaseIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who I Am
          </p>
        </div>
        <div className="mt-12">
          <div className="max-w-3xl mx-auto text-lg text-gray-500">
            <p>
              I'm a final year Computer Science student at Stanford University
              with a passion for building innovative software solutions. I love
              working on challenging problems and creating applications that
              make a positive impact. My interests span from web development to
              artificial intelligence, and I'm constantly learning new
              technologies to expand my skill set. Currently seeking internship
              opportunities where I can contribute my skills and grow as a
              developer.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <GraduationCapIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Education
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    B.Tech in Computer Science, Stanford University
                  </dd>
                  <dd className="mt-1 text-base text-gray-500">
                    CGPA: 3.8/4.0
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <AwardIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Certifications
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    AWS Certified Developer
                  </dd>
                  <dd className="mt-1 text-base text-gray-500">
                    Google Cloud Professional
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <TrophyIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Achievements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    1st Place, Stanford Hackathon 2023
                  </dd>
                  <dd className="mt-1 text-base text-gray-500">
                    Dean's List: 2021, 2022, 2023
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <BriefcaseIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Leadership
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    President, Stanford Coding Club
                  </dd>
                  <dd className="mt-1 text-base text-gray-500">
                    Student Mentor, CS Department
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>;
};