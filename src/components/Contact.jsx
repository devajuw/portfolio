import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Contact.css";
import { flipUp, inViewMotionProps } from "../motion/animations";

function Contact() {
  return (
    <>
      <Motion.div variants={flipUp} {...inViewMotionProps}>
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
                href="https://cal.com/devajuw/meet"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Book a meeting meeting🤝
              </a>
            </li>
          </ul>
        </div>
      </Motion.div>
    </>
  );
}

export default Contact;
