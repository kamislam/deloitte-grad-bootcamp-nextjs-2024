import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/logo.png"}
            alt="deloitte logo"
            fill
            quality={90}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
