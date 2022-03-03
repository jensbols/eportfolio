import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import NavBar from "../components/NavBar"
import Services from "../components/Services"
import SkillSetSection from "../components/SkillSetSection"
export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <AboutMe />
      <SkillSetSection />
      <Footer />
    </>
  )
}