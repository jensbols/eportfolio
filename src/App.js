import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import SkillSetSection from './components/SkillSetSection';
import background from './images/scattered-forcefields.svg';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <SkillSetSection />
      <Footer />
    </div>
  );
}

export default App;
