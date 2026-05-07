import { lazy, Suspense, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponderModal from '../components/ResponderModal';
import { FiShield, FiClock, FiMapPin, FiRadio, FiLock, FiStar, FiCheck } from 'react-icons/fi';
import { FaAmbulance, FaHandshake, FaHospital, FaUserNurse } from 'react-icons/fa';

const GlobeVisual = lazy(() => import('../components/GlobeVisual'));

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    window.location.href = '/oncallcare.apk';
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
              <div className="badge"><span className="pulse-dot"></span> 24/7 Support. 5 Min Response.</div>
              <h1 className="hero-title">Emergency Help.<br/><span className="text-primary">Right Where You Are.</span></h1>
              <p className="hero-desc">Instantly connect with the nearest emergency and medical responders in a matter of minutes. Because every second counts.</p>
              <div className="hero-actions">
                <button onClick={handleDownload} className="btn-primary btn-large">Download the App</button>
                <button onClick={() => setIsModalOpen(true)} className="btn-outline btn-large">Be a Responder</button>
              </div>
              <div className="hero-stats">
                <div className="stat"><span className="stat-icon"><FiShield /></span> Verified Pros</div>
                <div className="stat"><span className="stat-icon"><FiClock /></span> Fast Response</div>
                <div className="stat"><span className="stat-icon"><FiMapPin /></span> Live Tracking</div>
              </div>
            </div>
            <div className="hero-visual">
               <img src="/images/hero_map.png" alt="Emergency Map" className="hero-map-img" />
            </div>
          </div>
        </section>

        {/* Emergencies Happen Section */}
        <section className="emergencies-section bg-light-blue">
          <div className="container text-center">
            <h2 className="section-title">When Emergencies Happen,<br/><span className="text-primary">Help Is Often Too Far Away</span></h2>
            <p className="section-desc mx-auto">We bridge the gap by connecting you to nearby verified responders. <br/> No delays. Just help.</p>
            
            <div className="emergencies-grid">
               <div className="emergencies-col left-col">
                  <div className="emergencies-card">
                     <div className="card-icon"><FaAmbulance /></div>
                     <div className="card-text">
                        <h4>Traffic & Congestion</h4>
                        <p>Traditional ambulances often get stuck in traffic while every second counts.</p>
                     </div>
                  </div>
                  <div className="emergencies-card">
                     <div className="card-icon"><FiClock /></div>
                     <div className="card-text">
                        <h4>Long Wait Times</h4>
                        <p>Sometimes you just need someone qualified to be there immediately.</p>
                     </div>
                  </div>
                  <img src="/images/ambulance.png" alt="Ambulance" className="ambulance-img" />
               </div>
               
               <div className="emergencies-col right-col red-card">
                  <div className="red-card-header">MEDICAL EMERGENCY</div>
                  <h3 className="red-card-title">Nearby Nurse Arrives In 4 Minutes</h3>
                  <p className="red-card-desc">With OnCallCare, a verified off-duty nurse or EMT right down the street is dispatched to your location instantly to stabilize the situation.</p>
                  
                  <div className="red-card-features">
                     <div className="feature-item"><span className="icon"><FiClock /></span> Wait time: Under 5 mins</div>
                     <div className="feature-item"><span className="icon"><FiShield /></span> Verified Credentials</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works-section">
           <div className="container text-center">
              <h2 className="section-title">How It Works</h2>
              <div className="steps-grid">
                 <div className="step-card">
                    <div className="step-icon"><FiMapPin /></div>
                    <h4 className="step-title">1. Request Help</h4>
                    <p className="step-desc">Tap the button to pinpoint your location instantly. No calling or explaining where you are needed.</p>
                 </div>
                 <div className="step-card">
                    <div className="step-icon"><FiRadio /></div>
                    <h4 className="step-title">2. Alert Sent out</h4>
                    <p className="step-desc">We immediately alert the nearest qualified off-duty medical personnel and emergency services.</p>
                 </div>
                 <div className="step-card">
                    <div className="step-icon"><FaHandshake /></div>
                    <h4 className="step-title">3. Help Arrives Fast</h4>
                    <p className="step-desc">A verified responder arrives in minutes to provide initial care and stabilize the situation.</p>
                 </div>
                 <div className="step-card">
                    <div className="step-icon"><FaHospital /></div>
                    <h4 className="step-title">4. Handover to EMS</h4>
                    <p className="step-desc">Our responder hands off the patient to an ambulance, providing critical information for survival.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Built for Speed */}
        <section className="built-for-speed-section">
           <div className="container speed-inner">
              <div className="speed-content">
                 <h2 className="section-title text-white">Built for Speed.<br/><span className="text-primary">Powered by Proximity.</span></h2>
                 <p className="section-desc text-gray-light">We utilize a massive network of verified medical professionals living in your neighborhood to create a hyper-local emergency network.</p>
                 
                 <div className="responder-list">
                    <div className="responder-card">
                       <div className="responder-avatar"><FaUserNurse /></div>
                       <div className="responder-info">
                          <h4 className="text-white">Jane Doe, RN</h4>
                          <p className="text-primary">
                            <span className="live-indicator"></span>
                            0.2 miles away • Arrives in 2 mins
                          </p>
                       </div>
                    </div>
                    <div className="responder-card">
                       <div className="responder-avatar"><FaUserNurse /></div>
                       <div className="responder-info">
                          <h4 className="text-white">Mark Lee, EMT</h4>
                          <p className="text-primary">
                            <span className="live-indicator"></span>
                            0.4 miles away • Arrives in 4 mins
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
                 <h2 className="section-title">Built on Trust, Safety &<br/>Verification</h2>
                 <div className="trust-list">
                    <div className="trust-item">
                       <div className="trust-icon"><FiShield /></div>
                       <div className="trust-text">
                          <h4>Verified Credentials</h4>
                          <p>Every responder is thoroughly vetted, and licenses are continuously monitored to ensure highest quality of care.</p>
                       </div>
                    </div>
                    <div className="trust-item">
                       <div className="trust-icon"><FiLock /></div>
                       <div className="trust-text">
                          <h4>Background Checks</h4>
                          <p>Comprehensive criminal and background checks are mandatory for all responders before they are active.</p>
                       </div>
                    </div>
                    <div className="trust-item">
                       <div className="trust-icon"><FiStar /></div>
                       <div className="trust-text">
                          <h4>Community Rated</h4>
                          <p>Post-incident reviews ensure that responders maintain high standards and reliability within our ecosystem.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="trust-stats">
                 <div className="stats-grid">
                    <div className="stat-box">
                       <h3>2.4k+</h3>
                       <p>Verified Responders</p>
                    </div>
                    <div className="stat-box">
                       <h3>100%</h3>
                       <p>Background Checked</p>
                    </div>
                    <div className="stat-box">
                       <h3>4.8s</h3>
                       <p>Avg Dispatch Time</p>
                    </div>
                    <div className="stat-box">
                       <h3>15k+</h3>
                       <p>Emergencies Handled</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Cards */}
        <section className="cta-cards-section">
           <div className="container cards-inner">
              <div className="cta-card white-card">
                 <h3 className="card-title">Seeking Help?</h3>
                 <p className="card-desc">Get the peace of mind knowing help is just a tap away. Be prepared for any emergency.</p>
                 <ul className="check-list">
                    <li><span className="check-icon"><FiCheck /></span> 24/7 instant emergency access</li>
                    <li><span className="check-icon"><FiCheck /></span> Location tracking for quick dispatch</li>
                    <li><span className="check-icon"><FiCheck /></span> Real-time updates on help arrival</li>
                 </ul>
                 <button onClick={handleDownload} className="btn-primary w-full mt-auto">Get the App</button>
              </div>
              <div className="cta-card dark-card">
                 <h3 className="card-title text-white">Qualified Responder?</h3>
                 <p className="card-desc text-gray-light">Use your skills to save lives in your neighborhood. Join our network of verified off-duty professionals.</p>
                 <ul className="check-list check-list-dark">
                    <li><span className="check-icon text-primary"><FiCheck /></span> Put your training to use</li>
                    <li><span className="check-icon text-primary"><FiCheck /></span> Earn extra income on your terms</li>
                    <li><span className="check-icon text-primary"><FiCheck /></span> Make a real impact in your community</li>
                 </ul>
                 <button onClick={() => setIsModalOpen(true)} className="btn-white w-full mt-auto">Apply to Respond</button>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-section">
           <div className="container text-center text-white final-cta-inner">
              <div className="red-bg-circle-1"></div>
              <div className="red-bg-circle-2"></div>
              <h2>Don't Wait Until It's Too Late.</h2>
              <p>Be prepared for the unexpected. Download OnCallCare today and get help when you need it most.</p>
              <div className="final-actions">
                 <button onClick={handleDownload} className="btn-white btn-large">Download the App</button>
                 <button className="btn-outline-white btn-large">Get Quick Help</button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
