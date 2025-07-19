import React from "react";
// import './css/index.css';
function Contact() {
  return (
    <>
    <div className="contact-container" id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: devvibe17@gmail.com</li>
        <li>
          LinkedIn: 
          <a 
            href="https://linkedin.com/in/devajuw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/devajuw
          </a>
        </li>
        <li>
          GitHub: 
          <a 
            href="https://github.com/devajuw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/devajuw
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Contact;