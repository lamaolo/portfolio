import styles from "../styles/Button.module.css";

// style: solid (default) | outline
// iconPosition: left (default) | right
const Button = ({ children, style, icon: Icon, iconPosition = "left" }) => {
  return (
    <button className={`${styles.button} ${styles[style]}`}>
      {Icon && iconPosition === "left" && <Icon />}
      {children}
      {Icon && iconPosition === "right" && <Icon />}
    </button>
  );
};

export default Button;
