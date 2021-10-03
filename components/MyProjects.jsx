import { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

import styles from "../styles/MyProjects.module.css";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <section className={styles.container}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default MyProjects;
