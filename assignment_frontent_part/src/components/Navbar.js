import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../App.css"
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    // console.log("apple");
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div>
      {
      auth ? 
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/register" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
       : 
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/register">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      }
    </div>
  );
};

export default Navbar;
