const Header = () => {
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
          </nav>
  
        </div>
      </header>

    )
}

export default Header