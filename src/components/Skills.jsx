import React from "react";
import { motion as Motion } from "framer-motion";
import '../css/globals.css';
import '../css/Skills.css';
import GitHubStats from "./GitHubStats";
import { fadeUp, inViewMotionProps } from "../motion/animations";

function Skills() {
  return (
    <>
      <Motion.div variants={fadeUp} {...inViewMotionProps}>
        <div className="skills-container">
          <h2 id="skills">Skills 💻</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML5 & CSS3</li>
            <li>SQL</li>
            <li>Git & GitHub</li>
            <li>Firebase</li>
            <li>Python</li>
          </ul>
          
          <GitHubStats />
        </div>
      </Motion.div>
    </>
  );
}

export default Skills;
