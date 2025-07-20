import React from "react";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>UrbonSpot🚘</h3>
          <p>
            Developed a comprehensive web application for renting/buying parking
            spots in your city.
            <br /> Tech: HTML, CSS, JavaScript, RazorPay, JS PDF, FireBase, Git
          </p>
          <a
            href="https://urbonspot.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit UrbonSpot
          </a>
        </div>
        
        <div className="project-card">
          <h3>Tokyo Tourism🗼</h3>
          <p>
            Built a frontend web application for Tokyo city tourism featuring a user-friendly interface with four key pages: Home introduction, Gallery showcase, Hotel booking form, and Heritage page with 11 historic sites and detailed information pages.
            <br /> Tech: HTML, CSS, JavaScript, Git
          </p>
          <a
            href="https://taukyo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Tokyo Tourism
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;