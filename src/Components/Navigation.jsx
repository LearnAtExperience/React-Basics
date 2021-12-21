import react from "react";
import styles from "./general.module.css"
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <h1>My Website</h1>
        </div>
        <div className={styles.navMenuContainer}>
          <Link to="/">
            <button className={styles.navigationButton}>Home</button>
          </Link>
          <Link to="/About">
            <button className={styles.navigationButton}>About</button>
          </Link>
          <Link to="/Contact">
            <button className={styles.navigationButton}>Contact</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;