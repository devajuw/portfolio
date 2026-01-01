import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/index.css";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Spotify from "./Spotify";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
      offset: 100, 
      mirror: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Spotify />
      <Footer />
    </div>
  );
}

export default App;
