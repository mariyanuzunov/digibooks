import { Link } from "react-router-dom";

import styles from "./Register.module.css";

export default function Register() {
  return (
    <section className={`container ${styles.flex}`}>
      <section className={styles.controls}>
        <img src="/images/logo.svg" alt="" />
        <p className={styles.title}>WELCOME TO THE BEST BOOK DATABASE!</p>
        <p className={styles.subtitle}>CREATE YOUR PROFILE</p>

        <form className={styles.form}>
          <label htmlFor="txtUsername">Username</label>
          <input type="text" name="txtUsername" id="txtUsername" />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            name="txtPassword"
            id="txtPassword"
            className={styles.inputPassword}
          />
          <label htmlFor="txtRepeatPassword">Repeat password</label>
          <input
            type="password"
            name="txtRepeatPassword"
            id="txtRepeatPassword"
            className={styles.inputPassword}
          />
          <button type="submit" className={styles.btnSubmit}>
            SIGN UP
          </button>
        </form>
        <p className={styles.changeForm}>
          You have an account? <Link to="/login">LOG IN HERE</Link>
        </p>
      </section>
      <section className={styles.imageSection}>
        <img src="./images/login-backgorund.png" alt="" />
      </section>
    </section>
  );
}
