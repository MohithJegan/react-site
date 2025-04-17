import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navList = [
    { path: "/", name: "Home", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
    { path: "/skill", name: "Skills", icon: "M6 9l6 3 6-3 M12 3a9 9 0 0 1 9 9v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 9-9z M12 12v3" },
    { path: "/project", name: "Projects", icon: "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z M8 3v2 M16 3v2" },
    { path: "/contact", name: "Contact", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
    { path: "/resume", name: "Resume", icon: "M9 13h6m-6-4h6m2 5H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V16a2 2 0 0 1-2 2z"}
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`portfolio-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link className="logo" to="/" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15C19.2669 15.3016 19.227 15.6363 19.2853 15.9606C19.3436 16.2849 19.4975 16.5833 19.726 16.8146C19.9546 17.0459 20.2469 17.1991 20.5643 17.2539C20.8817 17.3086 21.2087 17.2622 21.5 17.121" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2.1 13.328C2.267 12.9853 2.267 12.591 2.1 12.2483C1.933 11.9056 1.6126 11.6548 1.2309 11.5702C0.849201 11.4856 0.453347 11.5768 0.152638 11.8173C-0.14807 12.0578 -0.31543 12.4199 -0.3 12.8L0.5 18.8C0.515 19.1801 0.709 19.5302 1.027 19.7533C1.345 19.9764 1.751 20.0459 2.13 19.9409L7.13 18.5409C7.509 18.4359 7.818 18.1683 7.966 17.8163C8.114 17.4643 8.083 17.0673 7.883 16.7409" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 3.328C7.167 2.9853 7.167 2.591 7 2.2483C6.833 1.9056 6.5126 1.6548 6.1309 1.5702C5.7492 1.4856 5.35335 1.5768 5.05264 1.8173C4.75193 2.0578 4.58457 2.4199 4.6 2.8L5.4 8.8C5.415 9.1801 5.609 9.5302 5.927 9.7533C6.245 9.9764 6.651 10.0459 7.03 9.9409L12.03 8.5409C12.409 8.4359 12.718 8.1683 12.866 7.8163C13.014 7.4643 12.983 7.0673 12.783 6.7409" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="logo-text">MJ</span>
          <span className="logo-fullname">Mohith Jegan</span>
        </Link>
        
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navList.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink 
                  to={item.path} 
                  className="nav-link" 
            
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d={item.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="nav-text">{item.name}</span>
                  <span className="nav-hover-effect"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}