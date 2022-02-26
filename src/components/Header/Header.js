import NavLink from "../NavLink/NavLink";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <img
          src="images/logo.svg"
          alt="digibooks logo"
          className={styles.logo}
        />
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/library">Library</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
        <button className={styles.btnProfile}>
          <img src="images/profile.svg" alt="profile image" />
        </button>
      </section>
    </header>
  );
}
