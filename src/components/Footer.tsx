import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col brand-col">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <span className="logo-text">OnCall<span className="logo-text-bold">Care</span></span>
          </Link>
          <p className="footer-desc" style={{ marginTop: '16px', marginBottom: '32px' }}>
            Building the coordination layer for emergency healthcare in Nigeria.
          </p>

          <div className="newsletter-section">
             <p className="footer-desc" style={{ marginBottom: '16px', lineHeight: 1.5, color: 'var(--text-dark)', fontWeight: 500 }}>
                Want to keep up with the latest on health tech, health insurance and wellness? Subscribe to our news letter for free:
             </p>
             <form className="newsletter-form" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="form-input" style={{ padding: '12px 16px', fontSize: '15px' }} required />
                <button type="submit" className="btn-primary w-full" style={{ padding: '12px' }}>Subscribe</button>
             </form>
          </div>
        </div>

        <div className="footer-links-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div className="footer-links">
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="#">Blog</Link>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              <Link to="/services">Emergency Help</Link>
              <Link to="/services">How It Works</Link>
              <Link to="/contact">Partner with Us</Link>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Data Policy</Link>
            </div>
          </div>
          
          <div className="footer-contact" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '32px' }}>
            <h4 className="footer-heading" style={{ marginBottom: '12px' }}>Talk to us:</h4>
            <a href="mailto:admin@oncallcare.health" style={{ color: 'var(--primary-red)', textDecoration: 'none', fontWeight: 600, fontSize: '16px', display: 'inline-block', marginBottom: '20px' }}>admin@oncallcare.health</a>
            
            <div>
              <a href="https://www.linkedin.com/company/oncall-care/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0077b5', fontSize: '28px', display: 'inline-block', transition: 'transform 0.2s' }}>
                <FaLinkedin />
              </a>
            </div>
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
