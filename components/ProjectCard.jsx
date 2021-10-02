import Image from "next/image";
import Link from "next/link";

import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({
  name,
  id,
  picture,
  description,
  githubLink,
  liveViewLink,
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <Image
          height="300px"
          width="200px"
          objectFit="cover"
          layout="responsive"
          src={picture}
          alt={name}
        />
        <section className={styles.info}>
          <h3>Scrum.io</h3>
          <p>{description}</p>
          <Link href={`/project/${id}`} passHref={true}>
            View project
          </Link>
        </section>
      </div>
    </article>
  );
};

const ArrowIcon = (props) => (
  <div className={styles.ArrowIcon}>
    <p>View project</p>
  </div>
);

export default ProjectCard;
