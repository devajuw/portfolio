import React from "react";

function Projects() {
  return (
    <div data-aos="zoom-in-up">
    <div className="projects-container" id="projects">
      <h2>Projects 🧭</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Urbon Spot🚘</h3>
          <p style={{ textAlign: "left" }}>
            Developed a comprehensive web application for renting/buying parking
            spots in your city.
          <br></br>----------
            <br /> Tech: HTML, CSS, JavaScript, RazorPay, JS PDF, FireBase, Git
          </p>
          <a
            href="https://urbonspotweb.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit UrbonSpot
          </a>
        </div>
        
        <div className="project-card">
          <h3>Tokyo Tourism🗼</h3>
          <p style={{ textAlign: "left" }}>
            Built a frontend web application for Tokyo city tourism featuring a user-friendly interface with four key pages: Home introduction, Gallery showcase, Hotel booking form, and Heritage page with 11 historic sites and detailed information pages.
            <br></br>----------
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
    </div></div>
  );
}

export default Projects;