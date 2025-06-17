// Header.jsx
import React from 'react';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5rem',
      backgroundColor: 'blacK',
      color: 'white',
    }}>
      <h1>Hello Janta</h1>
      <nav>
        <a href="#about" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
