import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMapPin, FiMail } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'User Inquiry'
  });

  const handleSubmit = () => {
    const recipientMap: Record<string, string> = {
      'User Inquiry': 'info@oncallcare.health',
      'User Support': 'support@oncallcare.health',
      'Partnerships and Responder Onboarding': 'admin@oncallcare.health'
    };
    const email = recipientMap[formData.subject] ?? 'info@oncallcare.health';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}`)}`;
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
                <p className="section-desc">Have questions about OnCall Care, interested in partnering with us, or need help using the platform? We'd love to hear from you.</p>

                <div className="contact-method">
                  <div className="method-icon"><FiMapPin /></div>
                  <div>
                    <h4>Headquarters</h4>
                    <p className="text-gray-light" style={{ color: 'var(--text-gray)' }}>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon"><FiMail /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p className="text-gray-light" style={{ color: 'var(--text-gray)' }}>
                      <a href="mailto:info@oncallcare.health" style={{ color: 'var(--text-gray)', textDecoration: 'none' }}>info@oncallcare.health</a> (User Inquiry)<br />
                      <a href="mailto:support@oncallcare.health" style={{ color: 'var(--text-gray)', textDecoration: 'none' }}>support@oncallcare.health</a> (User Support)<br />
                      <a href="mailto:admin@oncallcare.health" style={{ color: 'var(--text-gray)', textDecoration: 'none' }}>admin@oncallcare.health</a> (Partnerships & Verification)
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper dark-card">
                <h3 className="text-white mb-20">Send us a message</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label className="text-gray-light">Full Name</label>
                    <input type="text" placeholder="John Doe" className="form-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="text-gray-light">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="form-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="text-gray-light">Subject</label>
                    <select className="form-input" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
                      <option>User Inquiry</option>
                      <option>User Support</option>
                      <option>Partnerships and Responder Onboarding</option>
                    </select>
                  </div>

                  <button type="button" className="btn-primary w-full" style={{ marginTop: '16px' }} onClick={handleSubmit}>Send Message</button>
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
