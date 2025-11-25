import { useEffect } from "react";
import "./css/index.css";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
