import styles from "../../styles/app-layout.module.css";
function AppLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default AppLayout;
