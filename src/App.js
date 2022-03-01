import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProjectSection from './components/ProjectSection';
import SkillSetSection from './components/SkillSetSection';
import background from './images/scattered-forcefields.svg';

function App() {
  return (
    <div className="App bg-green-100">
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <SkillSetSection />
      <Footer />
    </div>
  );
}

export default App;
