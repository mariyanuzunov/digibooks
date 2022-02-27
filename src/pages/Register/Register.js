import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../../features/auth/authSlice";

import Spinner from "../../components/Spinner/Spinner";
import { ReactComponent as ShowPassword } from "../../assets/svgs//show-password.svg";

import styles from "./Register.module.css";

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

  const [showPassword, setShowPassword] = useState(false);

  const { username, password, repeatPassword } = formData;

  const isEmpty = !username || !password || !repeatPassword;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || token) {
      navigate("/login");
    }

    dispatch(reset());
  }, [token, isSuccess, isError, message, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^\w{4,20}$/;

    if (!regex.test(username)) {
      toast.warn(
        "The username must be between 4 and 20 characters long. No special symbols or empty spaces allowed!"
      );
    } else if (password.length < 6) {
      toast.warn("The password must be at least 6 characters long!");
    } else if (password !== repeatPassword) {
      toast.warn("The passwords don't match!");
      setFormData((state) => ({ ...state, repeatPassword: "" }));
    } else {
      const credentials = { username, password };
      dispatch(register(credentials));
    }
  };

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setFormData((state) => ({ ...state, [field]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword((state) => !state);
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
            type={showPassword ? "text" : "password"}
            name="password"
            id="txtPassword"
            className={styles.inputPassword}
            value={password}
            onChange={handleChange}
          />
          <div className={styles.showPasswordContainer}>
            <ShowPassword
              className={`${styles.showPassword} ${
                showPassword ? styles.passwordVisible : ""
              }`}
              onClick={handleShowPassword}
            />
          </div>
          <label htmlFor="txtRepeatPassword">Repeat password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="repeatPassword"
            id="txtRepeatPassword"
            className={styles.inputPassword}
            value={repeatPassword}
            onChange={handleChange}
          />
          <div className={styles.showPasswordContainer}>
            <ShowPassword
              className={`${styles.showPassword} ${
                showPassword ? styles.passwordVisible : ""
              }`}
              onClick={handleShowPassword}
            />
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isEmpty}
            >
              SIGN UP
            </button>
          )}
        </form>
        <p className={styles.changeForm}>
          You have an account? <Link to="/login">LOG IN HERE</Link>
        </p>
      </section>
      <section className={styles.imageSection}>
        <img src="https://i.ibb.co/stJjMr0/auth-backgorund.png" alt="" />
      </section>
    </section>
  );
}
