import React, { useState } from "react";
import { Link } from "react-router";
import useOnlinestatus from "./utils/useOnlinestatus";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("login");

  const onlineStatus=useOnlinestatus()

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
            <li>Online status:{onlineStatus? "🟢":"🔴"}</li>
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
