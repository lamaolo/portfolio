import Image from "next/image";
import Link from "next/link";

import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ name, id, pictures, shortDescription, placeholder }) => {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <Image
          height="300px"
          width="200px"
          objectFit="cover"
          layout="responsive"
          src={pictures[0]}
          alt={name}
          placeholder="blur"
          blurDataURL={placeholder}
        />
        <section className={styles.info}>
          <h3>{name}</h3>
          <p>{shortDescription}</p>
          <Link href={`/project/${id}`}>
            <a>View project</a>
          </Link>
        </section>
      </div>
    </article>
  );
};

export default ProjectCard;
