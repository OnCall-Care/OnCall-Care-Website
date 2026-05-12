import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMapPin, FiMail } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = () => {
    const subject = formData.subject;
    const email = subject === 'Partnership' || subject === 'Provider Verification' ? 'admin@oncallcare.health' : 'info@oncallcare.health';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-light-blue text-center">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-desc mx-auto">Need consumer support, need to ask how the platform works, or want to discuss a verified partnership? Start here.</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-desc">Our support team can help with emergency-user questions, platform guidance, and partner verification. Public self-signup is not available for providers.</p>
                
                <div className="contact-method">
                  <div className="method-icon"><FiMapPin /></div>
                  <div>
                    <h4>Headquarters</h4>
                    <p className="text-gray-light" style={{color: 'var(--text-gray)'}}>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon"><FiMail /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p className="text-gray-light" style={{color: 'var(--text-gray)'}}>
                      <a href="mailto:info@oncallcare.health" style={{color: 'var(--text-gray)', textDecoration: 'none'}}>info@oncallcare.health</a> (User Support)<br/>
                      <a href="mailto:admin@oncallcare.health" style={{color: 'var(--text-gray)', textDecoration: 'none'}}>admin@oncallcare.health</a> (Partnerships & Verification)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-wrapper dark-card">
                <h3 className="text-white mb-20">Send us a message</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label className="text-gray-light">Full Name</label>
                    <input type="text" placeholder="John Doe" className="form-input" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="text-gray-light">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="form-input" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="text-gray-light">Subject</label>
                    <select className="form-input" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                      <option>General Inquiry</option>
                      <option>User Support</option>
                      <option>Provider Verification</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="text-gray-light">Message</label>
                    <textarea rows={4} placeholder="Tell us what you need help with" className="form-input" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full" style={{marginTop: '16px'}} onClick={handleSubmit}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
