function Navbar() {
  return (
    <nav className="navbar glass">
      <h2 className="logo">{"<DevPortfolio />"}</h2>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;