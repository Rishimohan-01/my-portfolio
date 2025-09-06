import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume here: 
        <a href="/resume.pdf" target="_blank" rel="noreferrer"> Resume.pdf</a>
      </p>
    </section>
  );
}
