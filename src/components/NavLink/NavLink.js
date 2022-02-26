import { Link, useMatch, useResolvedPath } from "react-router-dom";

import styles from "./NavLink.module.css";

export default function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={`${styles.navLink} ${match ? styles.active : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
