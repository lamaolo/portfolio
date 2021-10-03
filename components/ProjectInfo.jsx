import { SiGithub } from "react-icons/si";
import { BsEyeFill } from "react-icons/bs";

import { mapTechnologyToIcon } from "../utils/mapTechnologyToIcon";

import styles from "../styles/ProjectInfo.module.css";

const ProjectInfo = ({ project }) => {
  return (
    <section className={styles.projectInfo}>
      <h1>{project.name}</h1>
      <div className={styles.infoGroup}>
        <p>Description</p>
        {project.description.split("\n").map((t, i) => (
          <p className={styles.descriptionP} key={i}>
            {t}
          </p>
        ))}
      </div>
      <div className={styles.infoGroup}>
        <p>Tech stack</p>
        <ul className={styles.techStack}>
          {project.techStack.map((technology, i) => (
            <li key={i}>
              {mapTechnologyToIcon(technology)}
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.actions}>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className={styles.actionTriggerWrapper}>
              <div className={styles.actionTrigger}>
                <SiGithub size={30} />
                <p>View source code</p>
              </div>
            </article>
          </a>
        )}
        {project.liveViewLink && (
          <a
            href={project.liveViewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className={styles.actionTriggerWrapper}>
              <div className={styles.actionTrigger}>
                <BsEyeFill size={30} />
                <p>Live view</p>
              </div>
            </article>
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectInfo;
