import { Link } from "react-router-dom";

import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className={`container ${styles.flex}`}>
      <section className={styles.controls}>
        <img src="/images/logo.svg" alt="" />
        <p className={styles.title}>WELCOME BACK!</p>
        <form className={styles.form}>
          <label htmlFor="txtUsername">Username</label>
          <input type="text" name="txtUsername" id="txtUsername" />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            name="txtPassword"
            id="txtPassword"
            className={styles.inputPasswor}
          />
          <p className={styles.recoverPassword}>
            <Link to="">Recover password</Link>
          </p>
          <button type="submit" className={styles.btnSubmit}>
            LOG IN
          </button>
        </form>
        <p className={styles.changeForm}>
          You don't have an account? <Link to="/register">SIGN UP HERE</Link>
        </p>
      </section>
      <section className={styles.imageSection}>
        <img src="./images/login-backgorund.png" alt="" />
      </section>
    </section>
  );
}
