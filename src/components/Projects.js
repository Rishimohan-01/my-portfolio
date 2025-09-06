import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React and deployed on Vercel.</p>
        </div>
        <div className="project-card">
          <h3>Recipe Book</h3>
          <p>A recipe management app built with React and Context API.</p>
        </div>
        <div className="project-card">
          <h3>Movie Search App</h3>
          <p>Search movies using an API with React hooks and Axios.</p>
        </div>
      </div>
    </section>
  );
}
