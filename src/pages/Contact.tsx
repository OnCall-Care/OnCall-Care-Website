import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-light-blue text-center">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-desc mx-auto">Have questions? Need support? We're here to help 24/7.</p>
          </div>
        </section>

        <section className="contact-section container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-desc">Our support team is available around the clock to assist you with any inquiries regarding the OnCallCare network, responder applications, or partnerships.</p>
              
              <div className="contact-method">
                <div className="method-icon"><FiMapPin /></div>
                <div>
                  <h4>Headquarters</h4>
                  <p className="text-gray-light" style={{color: 'var(--text-gray)'}}>123 Emergency Way, Suite 100<br/>San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon"><FiPhone /></div>
                <div>
                  <h4>Phone Support</h4>
                  <p className="text-gray-light" style={{color: 'var(--text-gray)'}}>1-800-ONCALL-1 (24/7 Support)<br/>1-800-ONCALL-2 (Responder Hotline)</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon"><FiMail /></div>
                <div>
                  <h4>Email Us</h4>
                  <p className="text-gray-light" style={{color: 'var(--text-gray)'}}>support@oncallcare.com<br/>partnerships@oncallcare.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper dark-card">
              <h3 className="text-white mb-20">Send us a message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label className="text-gray-light">Full Name</label>
                  <input type="text" placeholder="John Doe" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="text-gray-light">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="text-gray-light">Subject</label>
                  <select className="form-input">
                    <option>General Inquiry</option>
                    <option>App Support</option>
                    <option>Responder Application</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="text-gray-light">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="form-input"></textarea>
                </div>
                <button type="button" className="btn-primary w-full" style={{marginTop: '16px'}}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
