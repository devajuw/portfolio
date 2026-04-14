import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import devPic from "../assets/dev.png";
import "../css/Header.css";
import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  inViewMotionProps,
} from "../motion/animations";

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
            href="https://drive.google.com/file/d/1EmJ58kw-fBqNWJ-jOaCiis3X6ix_GEHK/view?usp=drive_link"
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
      <Motion.div className="aboutme" variants={fadeDown} {...inViewMotionProps}>
        <h1>
          <u>About Me</u>
        </h1>
      </Motion.div>
      {/* Main container */}
      <div className="main-container" id="home">
        {/* intro */}
        <Motion.div variants={fadeUp} {...inViewMotionProps}>
          <div className="intro">
            <h1>HELLO,</h1>
            <h2>I am Dev Raj</h2>
          </div>
        </Motion.div>
        {/* profile pic */}
        <Motion.div
          className="profile-pic"
          variants={fadeLeft}
          {...inViewMotionProps}
        >
          <img src={devPic} alt="Dev Raj"></img>
        </Motion.div>
        {/* parahraph intro */}
      </div>
      <Motion.div className="paragraph" variants={fadeRight} {...inViewMotionProps}>
        <p>
          I'm a BCA graduate with a passion for building things that live on the
          web. I enjoy turning ideas into reality using clean code and creative
          design.
          <br />
          <br />
          I'm skilled in building web apps and currently diving deep into full-stack development, also exploring Gen - AI.
        </p>
      </Motion.div>
    </>
  );
}

export default Header;
