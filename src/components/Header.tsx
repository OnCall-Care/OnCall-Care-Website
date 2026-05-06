import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" style={{textDecoration: 'none'}}>
          <span className="logo-text">OnCall<span className="logo-text-bold">Care</span></span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={path === '/about' ? 'active' : ''}>Who We Are</Link>
          <Link to="/services" className={path === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="login-link" style={{textDecoration: 'none'}}>FAQ</Link>
          <button className="btn-primary">Download the App</button>
        </div>
      </div>
    </header>
  );
}
