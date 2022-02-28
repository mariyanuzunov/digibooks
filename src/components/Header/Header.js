import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../features/auth/authSlice";

import NavLink from "../NavLink/NavLink";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/svgs/profile.svg";
import { ReactComponent as Hamburger } from "../../assets/svgs/hamburger.svg";

import styles from "./Header.module.css";

// TODO: Fix sidebar

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleHamburger = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
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
        <button
          onClick={handleLogout}
          className={styles.btnProfile}
          title="Log Out"
        >
          <UserIcon />
        </button>
      </section>
    </header>
  );
}
