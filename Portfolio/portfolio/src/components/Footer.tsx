import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
export const Footer = () => {
  return <footer id="contact" className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 text-base text-gray-300">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
            <div className="mt-4">
              <a href="mailto:alex.johnson@example.com" className="text-base text-indigo-300 hover:text-indigo-200">
                alex.johnson@example.com
              </a>
            </div>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <GithubIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Email</span>
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#home" className="text-base text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base text-gray-300 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-base text-gray-300 hover:text-white">
                  Achievements
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};