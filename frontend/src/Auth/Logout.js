import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const Handlelogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div>
      <button onClick={Handlelogout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default Logout;
