import Image from "next/image";
import styles from "../styles/ProjectImage.module.css";

const ProjectImage = ({
  imageToShow,
  name,
  pictures,
  handleImageClick,
  placeholder,
}) => {
  return (
    <section className={styles.projectImage}>
      <div className={styles.imageContainer}>
        <Image
          width={1920}
          height={1080}
          layout="responsive"
          src={imageToShow}
          alt={name}
          placeholder="blur"
          blurDataURL={placeholder}
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
              <Image
                layout="responsive"
                width={80}
                placeholder="blur"
                blurDataURL={placeholder}
                height={80}
                src={picture}
                alt={name}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectImage;
