// src/components/ProjectModal.js

import React from "react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-md mx-auto p-6">
        <h3 className="text-2xl font-bold text-teal-600 dark:text-cyan-400">
          {project.title}
        </h3>
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover mt-4"
          width={400}
          height={300}
        />
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {project.details}
        </p>
        <button
          className="mt-6 py-2 px-4 bg-teal-600 dark:bg-cyan-400 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
