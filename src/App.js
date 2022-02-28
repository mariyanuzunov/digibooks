import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Library from "./pages/Library/Library";
import Settings from "./pages/Settings/Settings";
import Details from "./pages/Details/Details";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/library" />} />

          <Route
            path="/library"
            element={
              <RequireAuth>
                <Library />
              </RequireAuth>
            }
          />

          <Route
            path="/library/:id"
            element={
              <RequireAuth>
                <Details />
              </RequireAuth>
            }
          />

          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />

          <Route
            path="/login"
            element={
              <RequireGuest>
                <Login />
              </RequireGuest>
            }
          />

          <Route
            path="/register"
            element={
              <RequireGuest>
                <Register />
              </RequireGuest>
            }
          />

          <Route path="*" element={<Navigate to="/library" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </>
  );
}
