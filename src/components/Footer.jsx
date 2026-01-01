import React from 'react';
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Dev Raj. Built with React.</p>
    </footer>
  );
}

export default Footer;
