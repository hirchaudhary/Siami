import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="wrap">
        <a href="#">
          <img className="brand-mark" src="./siami-logo.png" alt="Siami logo" />
        </a>
        <div className={`navlinks${menuOpen ? ' open' : ''}`} id="navlinks">
          <a href="#models" onClick={closeMenu}>Engagement Models</a>
          <a href="#practices" onClick={closeMenu}>Practice Areas</a>
          <a href="#why" onClick={closeMenu}>Why Siami</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a Conversation</a>
        </div>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
