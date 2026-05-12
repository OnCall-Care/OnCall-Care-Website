import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <Link to="/" className="logo" style={{textDecoration: 'none'}}>
            <span className="logo-text">OnCall<span className="logo-text-bold">Care</span></span>
          </Link>
          <p className="footer-desc" style={{marginTop: '16px'}}>
            Building the emergency routing layer that helps people in Nigeria reach verified help faster.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <Link to="/services">Emergency Help</Link>
            <Link to="/services">How It Works</Link>
            <Link to="/contact">Partner with Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} OnCallCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
