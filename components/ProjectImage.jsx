import Image from "next/image";
import styles from "../styles/ProjectImage.module.css";

const ProjectImage = ({ imageToShow, name, pictures, handleImageClick }) => {
  return (
    <section className={styles.projectImage}>
      <div className={styles.imageContainer}>
        <Image
          width={1920}
          height={1080}
          layout="responsive"
          src={imageToShow}
          alt={name}
        />
      </div>
      <div className={styles.imageSelector}>
        {pictures.map((picture, i) => (
          <article
            className={`${styles.imageWrapper} ${
              imageToShow === picture && styles.selectedImg
            }`}
            key={i}
          >
            <div
              onClick={() => handleImageClick(picture)}
              className={styles.imagePreview}
            >
              <Image layout="fill" src={picture} alt={name} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectImage;
