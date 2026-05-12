import { lazy, Suspense, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponderModal from '../components/ResponderModal';
import { FiShield, FiClock, FiMapPin, FiRadio, FiLock, FiStar, FiCheck } from 'react-icons/fi';
import { FaAmbulance, FaHandshake, FaHospital, FaUserNurse } from 'react-icons/fa';

const GlobeVisual = lazy(() => import('../components/GlobeVisual'));

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleEarlyAccess = () => {
      window.location.href = 'mailto:info@oncallcare.health?subject=Request%20Early%20Access%20to%20OnCall%20Care';
   };

   const handleTestApp = () => {
      window.location.href = '/contact';
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
                     <div className="badge"><span className="pulse-dot"></span> Emergency routing for Nigeria</div>
                     <h1 className="hero-title">The closest verified help<br /><span className="text-primary">that can respond now.</span></h1>
                     <p className="hero-desc">Register the emergency and see the nearest verified help instantly.</p>
                     <div className="hero-actions">
                        <button onClick={handleEarlyAccess} className="btn-primary btn-large">Request Early Access</button>
                        <button onClick={handleTestApp} className="btn-outline btn-large">Contact Us</button>
                     </div>
                     <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '12px' }}>Built for people in Nigeria who need a faster way to find help in an emergency. Partner onboarding is handled separately through direct outreach and verification.</p>
                  </div>
                  <div className="hero-visual">
                     <img src="/images/hero_map.png" alt="Emergency Map" className="hero-map-img" />
                  </div>
               </div>
            </section>

            {/* Emergencies Happen Section */}
            <section className="emergencies-section bg-light-blue">
               <div className="container text-center">
                  <h2 className="section-title">When Emergencies Happen,<br /><span className="text-primary">People Panic Before They Know Where to Go</span></h2>
                  <p className="section-desc mx-auto">OnCall Care gives people a clear first move: register the emergency, see the closest available option, and start the line of communication immediately.</p>

                  <div className="emergencies-grid">
                     <div className="emergencies-col left-col">
                        <div className="emergencies-card">
                           <div className="card-icon"><FaAmbulance /></div>
                           <div className="card-text">
                              <h4>No Clear First Step</h4>
                              <p>In an emergency, people often panic, gather around, and waste time figuring out what to do next.</p>
                           </div>
                        </div>
                        <div className="emergencies-card">
                           <div className="card-icon"><FiClock /></div>
                           <div className="card-text">
                              <h4>Wrong Facility, Wrong Time</h4>
                              <p>Without fast triage, a patient can be taken to a hospital that cannot handle the case.</p>
                           </div>
                        </div>
                        <img src="/images/ambulance.png" alt="Ambulance" className="ambulance-img" />
                     </div>

                     <div className="emergencies-col right-col red-card">
                        <div className="red-card-header">MEDICAL EMERGENCY</div>
                        <h3 className="red-card-title">Find The Closest Available Help</h3>
                        <p className="red-card-desc">OnCall Care helps surface the nearest verified option with the right capability, then opens a fast call or coordination line so the responder can guide the next step.</p>

                        <div className="red-card-features">
                           <div className="feature-item"><span className="icon"><FiClock /></span> Closest available match</div>
                           <div className="feature-item"><span className="icon"><FiShield /></span> Verified partners only</div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works-section">
               <div className="container text-center">
                  <h2 className="section-title">How OnCall Care Works</h2>
                  <div className="steps-grid">
                     <div className="step-card">
                        <div className="step-icon"><FiMapPin /></div>
                        <h4 className="step-title">1. Register The Emergency</h4>
                        <p className="step-desc">The user opens the app and describes what happened, where it happened, and how urgent it is.</p>
                     </div>
                     <div className="step-card">
                        <div className="step-icon"><FiRadio /></div>
                        <h4 className="step-title">2. Surface The Best Match</h4>
                        <p className="step-desc">The system compares nearby verified hospitals, ambulances, and responders by capability, availability, and distance.</p>
                     </div>
                     <div className="step-card">
                        <div className="step-icon"><FaHandshake /></div>
                        <h4 className="step-title">3. Start Communication</h4>
                        <p className="step-desc">The user can call, confirm availability, and get guidance before moving the patient or victim.</p>
                     </div>
                     <div className="step-card">
                        <div className="step-icon"><FaHospital /></div>
                        <h4 className="step-title">4. Route To Care</h4>
                        <p className="step-desc">If needed, the responder directs the next step so the patient reaches the right facility faster and with less confusion.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Built for Speed */}
            <section className="built-for-speed-section">
               <div className="container speed-inner">
                  <div className="speed-content">
                     <h2 className="section-title text-white">Built for Clarity.<br /><span className="text-primary">Powered by Availability.</span></h2>
                     <p className="section-desc text-gray-light">Instead of guessing, people can see which verified option is closest, which one can actually handle the case, and how fast they can respond.</p>

                     <div className="responder-list">
                        <div className="responder-card">
                           <div className="responder-avatar"><FaUserNurse /></div>
                           <div className="responder-info">
                              <h4 className="text-white">Jane Doe, RN</h4>
                              <p className="text-primary">
                                 <span className="live-indicator"></span>
                                 Available now • Can guide first aid
                              </p>
                           </div>
                        </div>
                        <div className="responder-card">
                           <div className="responder-avatar"><FaUserNurse /></div>
                           <div className="responder-info">
                              <h4 className="text-white">Mark Lee, EMT</h4>
                              <p className="text-primary">
                                 <span className="live-indicator"></span>
                                 Nearby option • Ready to coordinate
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="speed-visual">
                     <Suspense fallback={<div style={{ width: 380, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>Loading Globe...</div>}>
                        <GlobeVisual />
                     </Suspense>
                  </div>
               </div>
            </section>

            {/* Trust & Safety */}
            <section className="trust-section bg-light-blue">
               <div className="container trust-inner">
                  <div className="trust-content">
                     <h2 className="section-title">Built on Trust, Verification &<br />Clear Access</h2>
                     <div className="trust-list">
                        <div className="trust-item">
                           <div className="trust-icon"><FiShield /></div>
                           <div className="trust-text">
                              <h4>Verified Providers</h4>
                              <p>Only hospitals, ambulances, and regulated emergency responders that complete our verification process are surfaced to users.</p>
                           </div>
                        </div>
                        <div className="trust-item">
                           <div className="trust-icon"><FiLock /></div>
                           <div className="trust-text">
                              <h4>Partner By Outreach</h4>
                              <p>We do not open the platform to random signups. Providers are added through direct review and a private onboarding process.</p>
                           </div>
                        </div>
                        <div className="trust-item">
                           <div className="trust-icon"><FiStar /></div>
                           <div className="trust-text">
                              <h4>Communication First</h4>
                              <p>The user always knows who is available, how to reach them, and what to do next before moving the patient.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="trust-stats">
                     <div className="stats-grid">
                        <div className="stat-box">
                           <h3>Fast</h3>
                           <p>Emergency routing</p>
                        </div>
                        <div className="stat-box">
                           <h3>Clear</h3>
                           <p>Next best option</p>
                        </div>
                        <div className="stat-box">
                           <h3>Verified</h3>
                           <p>Partner only</p>
                        </div>
                        <div className="stat-box">
                           <h3>Aligned</h3>
                           <p>With real-world response</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* CTA Cards */}
            <section className="cta-cards-section">
               <div className="container cards-inner">
                  <div className="cta-card white-card">
                     <h3 className="card-title">Need Help Now?</h3>
                     <p className="card-desc">Open the app, register the emergency, and let the system show you the closest verified option before panic takes over.</p>
                     <ul className="check-list">
                        <li><span className="check-icon"><FiCheck /></span> Register the emergency in seconds</li>
                        <li><span className="check-icon"><FiCheck /></span> See the closest available help</li>
                        <li><span className="check-icon"><FiCheck /></span> Start a direct line of communication</li>
                     </ul>
                     <button onClick={handleEarlyAccess} className="btn-primary w-full mt-auto">Request Early Access</button>
                  </div>
                  <div className="cta-card dark-card">
                     <h3 className="card-title text-white">Hospital Or Provider?</h3>
                     <p className="card-desc text-gray-light">If your institution is regulated and ready to be verified, we onboard through direct outreach and a separate partner review process.</p>
                     <ul className="check-list check-list-dark">
                        <li><span className="check-icon text-primary"><FiCheck /></span> Verified partner onboarding</li>
                        <li><span className="check-icon text-primary"><FiCheck /></span> Direct communication with admin</li>
                        <li><span className="check-icon text-primary"><FiCheck /></span> No public self-signup</li>
                     </ul>
                     <button onClick={() => setIsModalOpen(true)} className="btn-white w-full mt-auto">Request Partnership Review</button>
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
                     <button onClick={handleEarlyAccess} className="btn-white btn-large">Request Early Access</button>
                     <button onClick={handleTestApp} className="btn-outline-white btn-large">Contact Us</button>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
