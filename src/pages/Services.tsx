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
            <h1 className="page-title">Our Services</h1>
            <p className="page-desc mx-auto">Comprehensive on-demand emergency care when you need it most. Our network provides rapid stabilization and hand-off services.</p>
          </div>
        </section>

        <section className="services-list-section container">
          <div className="services-grid">
            <div className="service-card white-card">
              <div className="service-icon text-primary"><FaAmbulance /></div>
              <h3 className="card-title">Emergency First Response</h3>
              <p className="card-desc">For severe medical emergencies like cardiac arrest, severe bleeding, or choking. A verified responder in your immediate vicinity is dispatched to provide life-saving first aid while official EMS is en route.</p>
            </div>
            
            <div className="service-card white-card">
              <div className="service-icon text-primary"><FaStethoscope /></div>
              <h3 className="card-title">Medical Stabilization</h3>
              <p className="card-desc">For urgent but non-life-threatening situations (e.g., severe allergic reactions, burns, or deep lacerations). Our off-duty nurses and EMTs stabilize the patient and assess if further hospitalization is required.</p>
            </div>

            <div className="service-card white-card">
              <div className="service-icon text-primary"><FaHospital /></div>
              <h3 className="card-title">Ambulance Handoff</h3>
              <p className="card-desc">Our responders don't just leave when the ambulance arrives. They provide a professional medical handover, relaying vital signs, medications administered, and incident details to paramedics to ensure seamless care.</p>
            </div>

            <div className="service-card white-card">
              <div className="service-icon text-primary"><FiSmartphone /></div>
              <h3 className="card-title">Non-Emergency Triage</h3>
              <p className="card-desc">Not sure if you need the ER? Request a rapid consultation. A nearby medical professional can assess your situation in-person and recommend the best course of action, potentially saving you an expensive ER visit.</p>
            </div>
          </div>
        </section>
        
        <section className="cta-cards-section bg-dark text-white text-center">
          <div className="container">
             <h2 className="section-title text-white">Ready to be protected?</h2>
             <p className="section-desc mx-auto text-gray-light">Join the thousands of users who have peace of mind knowing help is just minutes away.</p>
             <button className="btn-primary btn-large">Download the App</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
