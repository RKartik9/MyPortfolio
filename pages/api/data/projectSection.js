// src/ProjectsSection.js

import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
// import projects from "./data/projects"; // Your array of project data
import projects from "./projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-teal-600 dark:text-cyan-400">
          Projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Check out some of the projects I've worked on.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
