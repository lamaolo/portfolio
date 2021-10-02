import styles from "../styles/Separator.module.css";

const Separator = ({ text }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default Separator;
