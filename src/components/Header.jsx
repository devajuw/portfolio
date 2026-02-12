import React, { useState } from "react";
import devPic from "../assets/dev.png";
import "../css/Header.css";
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
          <span className={`hamburger-line ${isNavOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isNavOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isNavOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation menu */}
        <nav className={`navbar ${isNavOpen ? "nav-open" : ""}`}>
          <a href="#home" className="header-link" onClick={closeNav}>
            Home
          </a>
          <a href="#projects" className="header-link" onClick={closeNav}>
            Projects
          </a>
          <a href="#skills" className="header-link" onClick={closeNav}>
            Skills
          </a>
          <a href="#contact" className="header-link" onClick={closeNav}>
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1wxf0e_f9PJAg0mmc7Vi7xyLEa7KaMNRG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
            onClick={closeNav}
          >
            Resume
          </a>
        </nav>
      </header>
      
      {/* About me */}
      <div
        className="aboutme"
        data-aos="fade-down"
        data-aos-anchor-placement="top-center"
      >
        <h1>
          <u>About Me</u>
        </h1>
      </div>
      {/* Main container */}
      <div className="main-container" id="home">
        {/* intro */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div className="intro">
            <h1>HELLO,</h1>
            <h2>I am Dev Raj</h2>
          </div>
        </div>
        {/* profile pic */}
        <div
          className="profile-pic"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <img src={devPic} alt="Dev Raj"></img>
        </div>
        {/* parahraph intro */}
      </div>
      <div className="paragraph" data-aos="fade-right" data-aos-duration="1500">
        <p>
          I'm a BCA graduate with a passion for building things that live on the
          web. I enjoy turning ideas into reality using clean code and creative
          design.
          <br />
          <br />
          I'm skilled in Javascript, HTML, CSS and currently diving deep into
          React and full-stack development.
        </p>
      </div>
    </>
  );
}

export default Header;
