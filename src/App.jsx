import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Spotify from "./components/Spotify";

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
