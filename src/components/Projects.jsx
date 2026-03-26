import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Projects.css";
import { inViewMotionProps, zoomInUp } from "../motion/animations";
import { SiGithub } from "react-icons/si";
import urbonSpotImg from "../assets/urbon-spot-preview.png";
import tokyoTourismImg from "../assets/tokyo-tourism-preview.png";

const projects = [
  {
    title: "Urbon Spot 🚘",
    image: urbonSpotImg,
    description:
      "Developed a comprehensive web application for renting/buying parking spots in your city.",
    tech: "HTML, CSS, JavaScript, RazorPay, JS PDF, FireBase, Git",
    liveUrl: "https://urbonspotweb.vercel.app",
    repoUrl: "https://github.com/devajuw/urbonspotweb",
  },
  {
    title: "Tokyo Tourism 🗼",
    image: tokyoTourismImg,
    description:
      "Built a frontend web application for Tokyo city tourism featuring a user-friendly interface with four key pages: Home introduction, Gallery showcase, Hotel booking form, and Heritage page with 11 historic sites.",
    tech: "HTML, CSS, JavaScript, Git",
    liveUrl: "https://taukyo.netlify.app/",
    repoUrl: "https://github.com/devajuw/tokyo-tourism",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

function Projects() {
  return (
    <Motion.div variants={zoomInUp} {...inViewMotionProps}>
      <div className="projects-container" id="projects">
        <h2>Projects 🧭</h2>
        <div className="project-list">
          {projects.map((project, i) => (
            <Motion.div
              className="project-card"
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="project-preview">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
                <div className="project-preview-overlay">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-overlay-btn"
                  >
                    View Live ↗
                  </a>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.split(", ").map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-outline"
                  >
                    <SiGithub /> GitHub Repo
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.div>
  );
}

export default Projects;