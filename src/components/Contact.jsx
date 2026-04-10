import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Contact.css";
import { flipUp, inViewMotionProps } from "../motion/animations";
import { MdEmail } from "react-icons/md";
import { FaLinkedin,FaTwitter} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Motion.div variants={flipUp} {...inViewMotionProps}>
        <div className="contact-container" id="contact">
          <h2>Contact 📞</h2>
          <ul>
            <li>
              <a href="mailto:devvibe17@gmail.com" className="contact-link">
                <MdEmail className="contact-icon" /> devvibe17@gmail.com
              </a>
            </li>
            <li> 
              <a
                href="https://linkedin.com/in/devajuw"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin className="contact-icon" /> @devajuw
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/devajuw"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaTwitter className="contact-icon" /> @devajuw
              </a>
            </li>

          </ul>
        </div>
      </Motion.div>
    </>
  );
}

export default Contact;
