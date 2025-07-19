// Header.jsx
import React from 'react';
// import './css/index.css'; 

function Header() {
  return (
    <>
      <header className="header-container">
        <nav className="navbar">
          <a href="#home" className="header-link">Home</a>
          <a href="#projects" className="header-link">Projects</a>
          <a href="#skills" className="header-link">Skills</a>
          <a href="#education" className="header-link">Education</a>
          <a href="#contact" className="header-link">Contact</a>
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
