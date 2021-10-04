import ProjectCard from "./ProjectCard";

import styles from "../styles/MyProjects.module.css";

const MyProjects = ({ projects }) => {
  return (
    <section className={styles.container}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default MyProjects;
