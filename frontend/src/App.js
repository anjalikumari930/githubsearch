// App.js

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/script";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        {/* Route to the login page */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Route to the register page */}
        <Route path="/register" element={<Register />} />
        {/* Route to the home page, only accessible when authenticated */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        {/* Redirect to the login page if no matching route is found */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
