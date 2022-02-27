import { useState } from "react";
import NavLink from "../NavLink/NavLink";

import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/svgs/profile.svg";
import { ReactComponent as Hamburger } from "../../assets/svgs/hamburger.svg";

import styles from "./Header.module.css";

// TODO: Fix sidebar

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleHamburger = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <Hamburger className={styles.sidebar} onClick={toggleHamburger} />
        <Logo className={styles.logo} />
        {/* <nav> */}
        <ul className={sidebarOpen ? styles.sidebarOpen : styles.nav}>
          <li>
            <NavLink to="/library">Library</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
        {/* </nav> */}
        <button className={styles.btnProfile}>
          <UserIcon />
        </button>
      </section>
    </header>
  );
}
