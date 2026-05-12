import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiZap, FiShield } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero bg-light-blue text-center">
          <div className="container">
            <div className="badge mx-auto"><span className="pulse-dot"></span> Our Mission</div>
            <h1 className="page-title">Who We Are</h1>
            <p className="page-desc mx-auto">We are building the emergency routing layer that helps people in Nigeria find verified help faster, without turning the public site into an open marketplace.</p>
          </div>
        </section>

        <section className="about-story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="section-title">The Problem With <br/><span className="text-primary">Panic And Guesswork</span></h2>
                <p className="section-desc">In many emergencies, the real problem is not only speed. It is knowing who to call, which facility can actually handle the case, and how to reach them before the situation gets worse.</p>
                <p className="section-desc">OnCall Care exists to remove that confusion by helping users surface the closest available verified option and open communication immediately.</p>
              </div>
              <div className="story-visual">
                <div className="dark-card p-40">
                  <h3 className="text-white mb-20">Our Solution</h3>
                  <p className="text-gray-light">OnCallCare bridges the gap by giving users a direct path to verified hospitals, ambulances, and regulated emergency responders through a single emergency request.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="core-values-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="section-title text-white">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon"><FiZap /></div>
                <h3>Clarity Over Panic</h3>
                <p className="text-gray-light">We measure success by how quickly a person understands the next step when they are under pressure.</p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FiShield /></div>
                <h3>Verified Partners</h3>
                <p className="text-gray-light">Only regulated hospitals and emergency providers that complete our review process are surfaced to users.</p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FaHandshake /></div>
                <h3>Direct Communication</h3>
                <p className="text-gray-light">We connect people to the right help fast, then let the responder and patient coordinate the next step.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
