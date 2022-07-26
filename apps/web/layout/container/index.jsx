import styles from "./Container.module.scss";
import Header from "@/components/header";
import Link from "next/link";
const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contents}>{children}</div>

      <div className={styles.admin}></div>
    </div>
  );
};

export default Container;
