import styles from "../styles/button.module.css";

export function ButtonDanger({ children, ...props }) {
  return (
    <button className={styles["button-danger"]} {...props}>
      {children}
    </button>
  );
}
