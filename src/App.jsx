// App.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './projects';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
