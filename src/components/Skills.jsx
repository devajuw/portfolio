import React from "react";
import { motion as Motion } from "framer-motion";
import '../css/globals.css';
import '../css/Skills.css';
import GitHubStats from "./GitHubStats";
import { fadeUp, inViewMotionProps } from "../motion/animations";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiPostman,
  SiGit,
  SiFigma,
  SiPython,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages & Databases",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "SQL", icon: <TbSql />, color: "#336791" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      // { name: "NodeJS", icon: <SiNodedotjs />, color: "#339933" },
      // { name: "ExpressJS", icon: <SiExpress />, color: "#ffffff" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
      { name: "Oracle Cloud", icon: <FaCloud />, color: "#F80000" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

function Skills() {
  return (
    <>
      <Motion.div variants={fadeUp} {...inViewMotionProps}>
        <div className="skills-container">
          <h2 id="skills">Skills 💻</h2>

          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3 className="skill-category-title">{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <Motion.li
                    key={skill.name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.05 }}
                  >
                    <span
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </Motion.li>
                ))}
              </ul>
            </div>
          ))}

          <GitHubStats />
        </div>
      </Motion.div>
    </>
  );
}

export default Skills;
