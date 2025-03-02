import React, { useState } from "react";
import { Link } from "react-router";
import useOnlinestatus from "./utils/useOnlinestatus";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("login");

  const onlineStatus = useOnlinestatus();

  return (
    <header className="header bg-white shadow fixed w-full top-0 left-0 z-[1000] py-4">
      <div className="container flex justify-between items-center max-w-[1200px] mx-auto ">
        {/* Logo */}
        <div className="logo">
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 no-underline "
          >
            MyLogo
          </a>
        </div>

        {/* Navigation */}
        <nav className="nav flex gap-5">
          <ul className="ulnav flex gap-5 items-baseline list-none text-[16px] text-gray-600 no-underline transition-colors duration-300 ease-in-out ">
            <li>Online status:{onlineStatus ? "🟢" : "🔴"}</li>
            <Link to="/">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              {" "}
              <li className="hover:text-blue-500 cursor-pointer">About</li>
            </Link>
            <Link to="/contact">
              {" "}
              <li className="hover:text-blue-500 cursor-pointer ">Contact</li>
            </Link>

            <li>
              {" "}
              <button
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
