// Header.jsx
import React from 'react';

function Header() {
  return (
    <>
      <style>
        {`
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5rem;
            color: white;
          }
          .header-title {
            color: black;
            font-size: 40px;
          }
          .header-link {
            margin: 0 1rem;
            color: black;
            text-decoration: none;
          }
        `}
      </style>
      <header className="header-container">
        <p className="header-title"><b>Hello,</b> I am Dev</p>
        <nav>
          <a href="#about" className="header-link">About</a>
          <a href="#projects" className="header-link">Projects</a>
          <a href="#contact" className="header-link">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
