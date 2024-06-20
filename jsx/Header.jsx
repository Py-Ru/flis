function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img src="/assets/images/logo.svg" alt="" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className={`nav ${menuOpen ? "open" : ""}`}>
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#apply">Apply Now</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#courses">Courses</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              <a className="menu-trigger" onClick={toggleMenu}>
                {!menuOpen ? (
                  <span>Menu</span>
                ) : (
                  <img src="/assets/images/close1.png" alt="close nav" />
                )}
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
