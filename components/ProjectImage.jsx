/* eslint-disable @next/next/no-img-element */
import styles from "../styles/ProjectImage.module.css";

const ProjectImage = ({ imageToShow, name, pictures, handleImageClick }) => {
  return (
    <section className={styles.projectImage}>
      <div className={styles.imageContainer}>
        <img src={imageToShow} alt={name} />
      </div>
      <div className={styles.imageSelector}>
        {pictures.map((picture, i) => (
          <div
            key={i}
            onClick={() => handleImageClick(picture)}
            className={`${styles.imagePreview} ${
              imageToShow === picture && styles.selectedImg
            }`}
          >
            <img src={picture} alt={name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectImage;
