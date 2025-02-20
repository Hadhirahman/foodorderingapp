import React, { useState } from 'react'
const Header = () => {
    const [loginbtn,setLoginbtn]=useState("login")


    return (

        <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <a href="/">MyLogo</a>
          </div>
  
          {/* Navigation */}
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className='loginbtn' onClick={()=>{
               loginbtn ==="login"? setLoginbtn("Logout"):setLoginbtn("login")
            }}>{loginbtn}</button>
          </nav>
  
        </div>
      </header>

    )
}

export default Header