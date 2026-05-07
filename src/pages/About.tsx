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
            <p className="page-desc mx-auto">We are building the world's fastest, hyper-local emergency response network by empowering verified off-duty professionals in your community.</p>
          </div>
        </section>

        <section className="about-story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="section-title">The Problem With <br/><span className="text-primary">Traditional Systems</span></h2>
                <p className="section-desc">When a medical emergency strikes, every single second dictates the outcome. Traditional ambulances and emergency services are incredible, but they are often bottlenecked by traffic, dispatch queues, and sheer distance.</p>
                <p className="section-desc">We realized that in most urban and suburban areas, there is a qualified nurse, EMT, or doctor living within a half-mile radius of any incident. They just didn't have a way to know someone next door needed help.</p>
              </div>
              <div className="story-visual">
                <div className="dark-card p-40">
                  <h3 className="text-white mb-20">Our Solution</h3>
                  <p className="text-gray-light">OnCallCare bridges this gap by pinging verified, off-duty medical professionals right in your neighborhood the moment you request help. We turn your community into a rapid-response safety net.</p>
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
                <h3>Speed Over Everything</h3>
                <p className="text-gray-light">We measure success in seconds, not minutes. Fast response is our ultimate priority.</p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FiShield /></div>
                <h3>Uncompromising Safety</h3>
                <p className="text-gray-light">Every responder goes through rigorous background checks and continuous license verification.</p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FaHandshake /></div>
                <h3>Community First</h3>
                <p className="text-gray-light">We believe neighbors saving neighbors builds stronger, safer communities for everyone.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
