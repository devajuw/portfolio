// Header.jsx
import React from 'react';
import './css/index.css'; 

function Header() {
  return (
    <>
      <header className="header-container">
        <nav className="navbar">
          <a href="#About" className="header-link">About</a>
          <a href="#Projects" className="header-link">Projects</a>
          <a href="#Skills" className="header-link">Skills</a>
          <a href="#Education" className="header-link">Education</a>
          <a href="#Contact" className="header-link">Contact</a>
        </nav>
      </header>
    <div className='main-container'>
      <div class="intro">
    <h1>HELLO,</h1>
    <h2>I am Dev Raj</h2>
     </div>
     <div class="profile-pic">
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
