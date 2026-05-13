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
            <p className="page-desc mx-auto">Our mission is simple: to help people access emergency health support faster during critical moments. We exist to reduce the delays, confusion, and uncertainty that often make medical emergencies more dangerous than they should be.</p>
          </div>
        </section>

        <section className="about-story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="section-title">The Problem</h2>
                <p className="section-desc">In many health emergencies across Nigeria, people lose valuable time trying to figure out who to call, where to go, or how to access urgent care.</p>
                <p className="section-desc">Even when emergency support exists, access is often fragmented, unclear, and difficult to coordinate under pressure. These delays can worsen complications, reduce chances of recovery, and in severe cases, cost lives.</p>
              </div>
              <div className="story-visual">
                <div className="dark-card p-40">
                  <h3 className="text-white mb-20">Our Solution</h3>
                  <p className="text-gray-light">OnCall Care helps connect users to verified emergency healthcare responders through a single coordinated platform.</p>
                  <p className="text-gray-light">By allowing users to quickly register an emergency request and access nearby support, we help people take faster action during urgent medical situations when time matters most.</p>
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
                <h3>Faster Response In Critical Moments</h3>
                <p className="text-gray-light">We believe delays during medical emergencies should not determine outcomes. Every second matters when urgent care is needed.</p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FiShield /></div>
                <h3>Trusted Emergency Healthcare Access</h3>
                <p className="text-gray-light">We focus on connecting users to verified emergency healthcare providers people can rely on during vulnerable moments.</p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FaHandshake /></div>
                <h3>Reducing Preventable Delays</h3>
                <p className="text-gray-light">We are building systems that help reduce the confusion, waiting, and coordination gaps that can lead to worsening complications or avoidable loss of life.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
