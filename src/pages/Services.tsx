import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaAmbulance, FaShieldAlt, FaDumbbell } from 'react-icons/fa';

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-light-blue text-center">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <p className="page-desc mx-auto">OnCall Care provides integrated health solutions designed to connect you with emergency care, protect your health financially, and support your wellness journey.</p>
          </div>
        </section>

        <section className="services-list-section">
          <div className="container">
            <div className="services-grid">
              <div className="service-card white-card">
                <div className="service-icon text-primary"><FaAmbulance /></div>
                <h3 className="card-title">Emergency Response Coordination</h3>
                <p className="card-desc">Connect with nearby emergency responders, hospitals, and care providers in real time during critical situations. OnCall Care helps reduce delays by coordinating faster access to urgent medical support when every minute matters.</p>
              </div>

              <div className="service-card white-card">
                <div className="service-icon text-primary"><FaShieldAlt /></div>
                <h3 className="card-title">Health Insurance & Emergency Coverage</h3>
                <p className="card-desc">Access affordable health protection through integrated insurance and emergency health financing options designed to reduce the burden of out-of-pocket healthcare costs.</p>
              </div>

              <div className="service-card white-card">
                <div className="service-icon text-primary"><FaDumbbell /></div>
                <h3 className="card-title">Wellness & Incentivized Fitness</h3>
                <p className="card-desc">Stay proactive about your health through wellness tracking and fitness-based rewards that encourage healthier daily habits and long-term well-being.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-cards-section bg-dark text-white text-center">
          <div className="container">
            <h2 className="section-title text-white">Smarter Health Emergency Support Starts Here</h2>
            <p className="section-desc mx-auto text-gray-light">Request early access to OnCall Care and experience a smarter way to access emergency support, health coverage, and wellness tools.</p>
            <button onClick={() => {
              window.location.href = 'mailto:info@oncallcare.health?subject=Request%20Early%20Access%20to%20OnCall%20Care';
            }} className="btn-primary btn-large">Get Early Access</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
