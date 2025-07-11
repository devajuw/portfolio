import "./css/index.css"; 
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header/> 
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
