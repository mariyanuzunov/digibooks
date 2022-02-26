import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../../features/auth/authSlice";

import styles from "./Register.module.css";

// TODO: Add loader and validation

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const { username, password, repeatPassword } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || token) {
      navigate("/");
    }

    dispatch(reset());
  }, [token, isSuccess, isError, message, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add regex
    if (username.length < 4) {
      toast.error("The username must be at least 4 characters long!");
    } else if (password.length < 6) {
      toast.error("The password must be at least 6 characters long!");
    } else if (password !== repeatPassword) {
      toast.error("The password don't match!");
    } else {
      const credentials = { username, password };
      dispatch(register(credentials));
    }
  };

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setFormData((state) => ({ ...state, [field]: value }));
  };

  return (
    <section className={`container ${styles.flex}`}>
      <section className={styles.controls}>
        <img src="/images/logo.svg" alt="" />
        <p className={styles.title}>WELCOME TO THE BEST BOOK DATABASE!</p>
        <p className={styles.subtitle}>CREATE YOUR PROFILE</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="txtUsername">Username</label>
          <input
            type="text"
            name="username"
            id="txtUsername"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            name="password"
            id="txtPassword"
            className={styles.inputPassword}
            value={password}
            onChange={handleChange}
          />
          <label htmlFor="txtRepeatPassword">Repeat password</label>
          <input
            type="password"
            name="repeatPassword"
            id="txtRepeatPassword"
            className={styles.inputPassword}
            value={repeatPassword}
            onChange={handleChange}
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
