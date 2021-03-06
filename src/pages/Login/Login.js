import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { login, reset } from "../../features/auth/authSlice";

import Spinner from "../../components/Spinner/Spinner";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as ShowPassword } from "../../assets/svgs/show-password.svg";

import styles from "./Login.module.css";

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

  const [showPassword, setShowPassword] = useState(false);

  const { username, password } = formData;

  const isEmpty = !username || !password;

  useEffect(() => {
    if (isError) {
      message.split(";").map((msg) => toast.error(msg));
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

  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  return (
    <section className={styles.container}>
      <section className={styles.controls}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Logo className={styles.logo} />
          <p className={styles.title}>WELCOME BACK!</p>
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
            className={styles.inputPasswor}
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
          <p className={styles.recoverPassword}>
            <Link to="">Recover password</Link>
          </p>
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isEmpty}
            >
              LOG IN
            </button>
          )}
          <p className={styles.changeForm}>
            You don't have an account? <Link to="/register">SIGN UP HERE</Link>
          </p>
        </form>
      </section>
      <section className={styles.imageSection}>
        <img src="https://i.ibb.co/stJjMr0/auth-backgorund.png" alt="" />
      </section>
    </section>
  );
}
