import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { Footer } from './components/Footer';
import { ThemeProvider, useTheme } from './components/ThemeContext';
const AppContent = () => {
  const {
    isDark
  } = useTheme();
  return <div className={`relative min-h-screen ${isDark ? 'bg-[#0f172a]' : 'bg-gray-50'} transition-colors duration-300`}>
      {isDark && <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]"></div>}
      {!isDark && <>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_100%,#000_70%,transparent_110%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(45deg,_rgba(249,115,22,0.7),_rgba(219,39,119,0.7)_50%,_rgba(99,102,241,0.7))]"></div>
        </>}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <Footer />
        </main>
      </div>
    </div>;
};
export function App() {
  return <ThemeProvider>
      <AppContent />
    </ThemeProvider>;
}