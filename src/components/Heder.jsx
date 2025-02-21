import React, { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("login");

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/">MyLogo</a>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="ulnav">
          <Link to="/"><li>Home</li></Link>  
          <Link to="/about">  <li>About</li></Link>
          <Link to="/contact">  <li>Contact</li></Link>
        

          
         <li> <button
            className="loginbtn"
            onClick={() => {
              loginbtn === "login"
                ? setLoginbtn("Logout")
                : setLoginbtn("login");
            }}
          >
            {loginbtn}
          </button>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
