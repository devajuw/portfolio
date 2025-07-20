// Header.jsx
import React, { useState } from 'react';
// import './css/index.css'; 

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header className="header-container">
        {/* Hamburger menu button for mobile */}
        <button className="hamburger-menu" onClick={toggleNav}>
          <span className={`hamburger-line ${isNavOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isNavOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isNavOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation menu */}
        <nav className={`navbar ${isNavOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="header-link" onClick={closeNav}>Home</a>
          <a href="#projects" className="header-link" onClick={closeNav}>Projects</a>
          <a href="#skills" className="header-link" onClick={closeNav}>Skills</a>
          <a href="#education" className="header-link" onClick={closeNav}>Education</a>
          <a href="#contact" className="header-link" onClick={closeNav}>Contact</a>
        </nav>
      </header>
      {/* About me header */}
      <div className='aboutme'><h1>About Me</h1></div>
      {/* Main container */}
    <div className='main-container' id="home">
      {/* intro */}
      <div className="intro">
    <h1>HELLO,</h1>
    <h2>I am Dev Raj</h2>
     </div>
     <div className="profile-pic">
  <img src="dev.png" alt="Dev Raj"></img>
</div>
</div>
    <div className="paragraph">
      <p>I'm a BCA graduate with a passion for building things that live on the web. I enjoy turning ideas into reality using clean code and creative design.<br></br><br />
I'm skilled in Javascript, HTML, CSS and currently diving deep into React and full-stack development.</p>  
      </div>

    </>
  );
}

export default Header;
