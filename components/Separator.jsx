import styles from "../styles/Separator.module.css";

const Separator = ({ id, text }) => {
  return (
    <section className={styles.container}>
      <span id={id}></span>
      <div className={styles.content}>
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default Separator;
