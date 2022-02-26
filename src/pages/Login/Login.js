import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { login, reset } from "../../features/auth/authSlice";

import Spinner from "../../components/Spinner/Spinner";

import styles from "./Login.module.css";

// TODO: validation

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || "/";

  const { token, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || token) {
      navigate(from, { replace: true });
    }

    dispatch(reset());
  }, [token, isSuccess, isError, message, dispatch, navigate, from]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { username, password };
    dispatch(login(credentials));
  };

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setFormData((state) => ({ ...state, [field]: value }));
  };

  return (
    <section className={`container ${styles.flex}`}>
      <section className={styles.controls}>
        <img src="/images/logo.svg" alt="" />
        <p className={styles.title}>WELCOME BACK!</p>
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
            className={styles.inputPasswor}
            value={password}
            onChange={handleChange}
          />
          <p className={styles.recoverPassword}>
            <Link to="">Recover password</Link>
          </p>
          {isLoading ? (
            <Spinner />
          ) : (
            <button type="submit" className={styles.btnSubmit}>
              LOG IN
            </button>
          )}
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
