import NavLink from "../NavLink/NavLink";

import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/svgs/profile.svg";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <Logo className={styles.logo} />
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
          <UserIcon />
        </button>
      </section>
    </header>
  );
}
