import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import "react-toastify/dist/ReactToastify.css";
import { logout } from "./features/auth/authSlice";

// TODO: Route guards

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>home page</h1>
      <nav>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <button onClick={() => dispatch(logout())}>logout</button>
      </nav>
    </>
  );
}
