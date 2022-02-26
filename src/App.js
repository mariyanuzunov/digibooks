import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import { logout } from "./features/auth/authSlice";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Library from "./pages/Library/Library";
import Settings from "./pages/Settings/Settings";

import "react-toastify/dist/ReactToastify.css";

// TODO: Route guards

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<Settings />} />
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
        <Link to="/library">library</Link>
      </nav>
    </>
  );
}
