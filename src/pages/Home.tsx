import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponderModal from '../components/ResponderModal';
import { FiMapPin, FiRadio, FiMail } from 'react-icons/fi';
import { FaHandshake, FaHospital, FaHandsHelping, FaLandmark } from 'react-icons/fa';

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleEarlyAccess = () => {
      window.location.href = 'mailto:info@oncallcare.health?subject=Request%20Early%20Access%20to%20OnCall%20Care&body=Hello%20OnCall%20Care%2C%0A%0AI%20would%20like%20to%20request%20early%20access%20to%20the%20platform.%0A%0AThank%20you';
   };

   const handlePartnership = () => {
      window.location.href = 'mailto:admin@oncallcare.health?subject=Partnership%20and%20Responder%20Onboarding&body=Hello%20OnCall%20Care%20Team%2C%0A%0AI%20am%20interested%20in%20partnering%20with%20OnCall%20Care%20or%20onboarding%20as%20a%20verified%20responder.%0A%0APlease%20share%20more%20details.%0A%0AThank%20you';
   };

   const handleSupport = () => {
      window.location.href = 'mailto:support@oncallcare.health?subject=Support%20Request&body=Hello%20OnCall%20Care%20Support%2C%0A%0AI%20need%20assistance%20with...%0A%0AThank%20you';
   };

   const handleTestApp = () => {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
   };

   return (
      <>
         <Header />
         <ResponderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
         <main>
            {/* Hero Section */}
            <section className="hero-section">
               <div className="container hero-inner">
                  <div className="hero-content">
                     <div className="badge animate-fade-in"><span className="pulse-dot"></span> Emergency routing for Nigeria</div>
                     <h1 className="hero-title animate-fade-up">
                        <span className="hero-title-light">During a <strong className="text-primary">health emergency</strong>, do you know who to call, where to go, or which responder can reach you fastest?</span>
                        <span className="hero-title-bold">OnCall Care puts all emergency health responders in one place.</span>
                     </h1>
                     <p className="hero-subtitle animate-fade-up animate-delay-1">
                        The goal is to connect people to the right emergency responder as quickly as possible.
                     </p>
                     <div className="hero-actions animate-fade-up animate-delay-2">
                        <button onClick={handleEarlyAccess} className="btn-primary btn-large">Join the pilot phase</button>
                        <button onClick={handleTestApp} className="btn-outline btn-large">See How It Works</button>
                     </div>
                  </div>
                  <div className="hero-visual-premium animate-scale-in">
                     <div className="premium-bg-grid"></div>
                     <div className="premium-glow"></div>
                     
                     {/* Floating UI Card 1: Map Route */}
                     <div className="ui-card map-card animate-float-slow">
                        <div className="card-header">
                           <div className="dot green"></div>
                           <span className="card-title">Live Tracking</span>
                        </div>
                        <div className="map-mockup">
                           <div className="route-line"></div>
                           <div className="map-pin user-pin"><div className="pulse"></div></div>
                           <div className="map-pin amb-pin"><div className="pulse red"></div></div>
                        </div>
                     </div>

                     {/* Floating UI Card 2: Status */}
                     <div className="ui-card status-card animate-float-medium animate-delay-1">
                        <div className="status-icon"><FiRadio /></div>
                        <div className="status-info">
                           <span className="status-label">Ambulance Dispatched</span>
                           <span className="status-time">ETA: 3 mins</span>
                        </div>
                     </div>

                     {/* Floating UI Card 3: Responder Profile */}
                     <div className="ui-card profile-card animate-float-fast animate-delay-2">
                        <div className="profile-avatar"></div>
                        <div className="profile-info">
                           <span className="profile-name">Green Wood EMS</span>
                           <span className="profile-role">Ambulance Service</span>
                        </div>
                        <div className="rating">★ 4.9</div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Platform Overview Section */}
            <section className="emergencies-section bg-light-blue">
               <div className="container text-center">
                  <h2 className="section-title">OnCall Care is a digital coordination layer<br /><span className="text-primary">for emergency healthcare access.</span></h2>
                  <p className="section-desc mx-auto">The platform aggregates existing emergency healthcare providers including hospitals, ambulance operators, emergency response organizations, and specialized transport services, into one unified system that users can access in real time. The goal is simple: connect people to the right emergency responder as quickly as possible.</p>


               </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="how-it-works-section">
               <div className="container text-center">
                  <h2 className="section-title">How OnCall Care Works</h2>
                  <div className="steps-grid">
                     <div className="step-card">
                        <div className="step-icon"><FiMapPin /></div>
                        <h4 className="step-title">1. Emergency Request</h4>
                        <p className="step-desc">Users initiate an emergency request through the platform with location-enabled reporting and structured emergency information.</p>
                     </div>
                     <div className="step-card">
                        <div className="step-icon"><FiRadio /></div>
                        <h4 className="step-title">2. Intelligent Triage</h4>
                        <p className="step-desc">The system classifies urgency and identifies the type of emergency response required.</p>
                     </div>
                     <div className="step-card">
                        <div className="step-icon"><FaHandshake /></div>
                        <h4 className="step-title">3. Real-Time Matching</h4>
                        <p className="step-desc">Nearby hospitals, ambulances, and emergency responders are ranked based on proximity, capability, and estimated arrival time.</p>
                     </div>
                     <div className="step-card">
                        <div className="step-icon"><FaHospital /></div>
                        <h4 className="step-title">4. Coordinated Response</h4>
                        <p className="step-desc">Responders receive dispatch details immediately while receiving facilities can be notified in advance for continuity of care.</p>
                     </div>
                  </div>
               </div>
            </section>



            {/* Early Access Section */}
            <section className="early-access-section">
               <div className="container early-access-inner">
                  <div className="early-access-content">
                     <h2 className="section-title">Connect with us</h2>

                     <div className="email-buttons-grid">
                        <button onClick={handleEarlyAccess} className="email-button-card">
                           <div className="email-button-icon"><FiMail /></div>
                           <h3 className="email-button-title">Join the pilot phase</h3>
                           <p className="email-button-desc">Try the platform and provide feedback to shape the future of health emergency response in Nigeria</p>
                           <span className="email-address">info@oncallcare.health</span>
                        </button>

                        <button onClick={handlePartnership} className="email-button-card">
                           <div className="email-button-icon"><FaLandmark /></div>
                           <h3 className="email-button-title">Partnership & Onboarding</h3>
                           <p className="email-button-desc">Integrate as a hospital, ambulance operator, or emergency response organization</p>
                           <span className="email-address">admin@oncallcare.health</span>
                        </button>

                        <button onClick={handleSupport} className="email-button-card">
                           <div className="email-button-icon"><FaHandsHelping /></div>
                           <h3 className="email-button-title">Get Support</h3>
                           <p className="email-button-desc">Questions or technical issues? Our team is here to help</p>
                           <span className="email-address">support@oncallcare.health</span>
                        </button>
                     </div>


                  </div>
               </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-section">
               <div className="container text-center text-white final-cta-inner">
                  <div className="red-bg-circle-1"></div>
                  <div className="red-bg-circle-2"></div>
                  <h2>When Panic Starts, Clarity Matters.</h2>
                  <p>OnCall Care helps people in Nigeria find the right emergency help faster, with a separate path for verified partner onboarding.</p>
                  <div className="final-actions">
                     <button onClick={handleEarlyAccess} className="btn-white btn-large">Join the pilot phase</button>
                     <button onClick={handleTestApp} className="btn-outline-white btn-large">See How It Works</button>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
