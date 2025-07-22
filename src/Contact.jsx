import React from "react";
// import './css/index.css';
function Contact() {
  return (
    <>
     <div data-aos="flip-up">
        <div className="contact-container" id="contact">
          <h2>Contact 📞</h2>
          <ul>
            <li>
              <a href="mailto:devvibe17@gmail.com" className="contact-link">
                Email: devvibe17@gmail.com
              </a>
            </li>
            <li> 
              <a
                href="https://linkedin.com/in/devajuw"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn: @devajuw
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devajuw"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub: @devajuw
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
