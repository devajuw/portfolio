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
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>SQL</li>
            <li>Git -Version Control</li>
            <li>Firebase</li>
            <li>Framer Motion</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
            <li>PostMan</li>
            <li>ExpressJS</li>
            <li>AuthJS</li>
            <li>Figma</li>
          </ul>
          
          <GitHubStats />
        </div>
      </Motion.div>
    </>
  );
}

export default Skills;
