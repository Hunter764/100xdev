import React, { useState } from 'react';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isDark,
    toggleTheme
  } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className={`fixed top-0 left-0 right-0 ${isDark ? 'bg-gray-900/50 backdrop-blur-md' : 'bg-white/70 backdrop-blur-md'} shadow-md z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Alex Johnson
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${isDark ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <a href="#home" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Contact
            </a>
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Resume
            </a>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className={`p-2 rounded-full ${isDark ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button onClick={toggleMenu} className={`inline-flex items-center justify-center p-2 rounded-md ${isDark ? 'text-gray-200 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} focus:outline-none`}>
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className={`md:hidden ${isDark ? 'bg-gray-900/50 backdrop-blur-md' : 'bg-white/70 backdrop-blur-md'} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              About
            </a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Projects
            </a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Skills
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Contact
            </a>
            <a href="#" className="block w-full text-center px-4 py-2 mt-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Resume
            </a>
          </div>
        </div>}
    </nav>;
};