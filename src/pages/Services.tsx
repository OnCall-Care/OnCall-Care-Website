import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaAmbulance, FaStethoscope, FaHospital } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-light-blue text-center">
          <div className="container">
            <h1 className="page-title">How It Works</h1>
            <p className="page-desc mx-auto">OnCall Care helps users register emergencies, compare nearby verified options, and open a direct line of communication before they move the patient.</p>
          </div>
        </section>

        <section className="services-list-section">
          <div className="container">
            <div className="services-grid">
              <div className="service-card white-card">
                <div className="service-icon text-primary"><FaAmbulance /></div>
                <h3 className="card-title">Register The Emergency</h3>
                <p className="card-desc">Users describe the situation, share the location, and tell the platform what kind of help is needed as soon as the emergency begins.</p>
              </div>
              
              <div className="service-card white-card">
                <div className="service-icon text-primary"><FaStethoscope /></div>
                <h3 className="card-title">See The Closest Match</h3>
                <p className="card-desc">The platform ranks nearby hospitals, ambulances, and regulated responders by capability, availability, and distance so the user is not guessing.</p>
              </div>

              <div className="service-card white-card">
                <div className="service-icon text-primary"><FaHospital /></div>
                <h3 className="card-title">Start The Call</h3>
                <p className="card-desc">The user can call, confirm availability, and get guidance before moving the patient or deciding where to go next.</p>
              </div>

              <div className="service-card white-card">
                <div className="service-icon text-primary"><FiSmartphone /></div>
                <h3 className="card-title">Route To Care</h3>
                <p className="card-desc">If the nearest option cannot handle the case, the platform helps the user move to the right facility with less delay and confusion.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-cards-section bg-dark text-white text-center">
          <div className="container">
             <h2 className="section-title text-white">Ready to move faster in an emergency?</h2>
             <p className="section-desc mx-auto text-gray-light">Request early access to OnCall Care and get a clearer first step when every minute matters.</p>
             <button onClick={() => {
               window.location.href = 'mailto:info@oncallcare.health?subject=Request%20Early%20Access%20to%20OnCall%20Care';
             }} className="btn-primary btn-large">Request Early Access</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
