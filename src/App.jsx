import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cal from "./components/Cal";
import Footer from "./components/Footer";
import Spotify from "./components/Spotify";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Cal />
      {/* <Spotify /> */}
      <Footer />
    </div>
  );
}

export default App;
