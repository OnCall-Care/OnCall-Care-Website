import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleDownload = () => {
    window.location.href = 'mailto:info@oncallcare.health?subject=Test OnCall Care App';
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo" style={{textDecoration: 'none'}}>
            <span className="logo-text">OnCall<span className="logo-text-bold">Care</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="nav-links">
            <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" className={path === '/about' ? 'active' : ''}>Who We Are</Link>
            <Link to="/services" className={path === '/services' ? 'active' : ''}>Services</Link>
            <Link to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="login-link" style={{textDecoration: 'none'}}>FAQ</Link>
            <button onClick={handleDownload} className="btn-primary">Request Early Access</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-nav-close" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          <FiX size={32} />
        </button>
        
        <nav className="mobile-nav-links">
          <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={path === '/about' ? 'active' : ''}>Who We Are</Link>
          <Link to="/services" className={path === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/contact" className="mobile-faq-link">FAQ</Link>
            <button onClick={handleDownload} className="btn-primary mobile-download-btn">
              Request Early Access
          </button>
        </nav>
      </div>
    </>
  );
}
