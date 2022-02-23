import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProjectSection from './components/ProjectSection';
import SkillSetSection from './components/SkillSetSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <SkillSetSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
