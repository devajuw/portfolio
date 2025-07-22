import { useEffect } from "react";
import "./css/index.css";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Animation happens only once
      offset: 100, // Trigger animations 100px before element comes into view
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
