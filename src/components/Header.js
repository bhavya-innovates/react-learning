import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginCTA, setLoginCTA] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            setLoginCTA("Logout");
          }}
        >
          {loginCTA}
        </button>
      </div>
    </div>
  );
};

export default Header;
