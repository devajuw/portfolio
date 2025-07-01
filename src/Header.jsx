// Header.jsx
import React from 'react';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5rem',
      // backgroundColor: 'orange',
      color: 'white',
    }}>
      <h1 style={{ 'color':'black'}} >Hello, I am Dev</h1>
      <nav>
        <a href="#about" style={{ margin: '0 1rem', color: 'black', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ margin: '0 1rem', color: 'black', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 1rem', color: 'black', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
