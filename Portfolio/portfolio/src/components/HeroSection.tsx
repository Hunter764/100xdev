import React from 'react';
import { DownloadIcon, ArrowRightIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Alex Johnson</span>
              </h1>
              <p className="mt-3 text-base text-indigo-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Aspiring Software Engineer / AI Enthusiast / Web Developer
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                I build efficient solutions with code and creativity.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  View Projects
                  <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Download Resume
                  <DownloadIcon className="ml-2 -mr-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Professional profile image" />
      </div>
    </section>;
};