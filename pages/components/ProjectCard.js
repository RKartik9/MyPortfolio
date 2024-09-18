import React from "react";
import styles from "./card.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.cards}>
      <img
        src={project.imageUrl}
        alt={project.title}
        className={styles.cards__img}
      />
      <div className={styles.cards__overlay}>
        <h2 className={styles.card__title}>{project.title}</h2>
        <p className={styles.card__description}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
