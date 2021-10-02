import styles from "../styles/Button.module.css";

// style: solid (default) | outline
const Button = ({ children, style, icon: Icon }) => {
  return (
    <button className={`${styles.button} ${styles[style]}`}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
