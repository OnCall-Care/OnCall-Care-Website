import React, { useState } from 'react';
import { FiX, FiCheckCircle, FiUser, FiMail, FiPhone, FiAward, FiFileText, FiClock, FiMapPin, FiTruck, FiActivity } from 'react-icons/fi';

interface ResponderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResponderModal({ isOpen, onClose }: ResponderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    responder_type: 'hospital',
    contact_person: '',
    contact_phone: '',
    address: '',
    city: '',
    state: '',
    country: 'Nigeria',
    postal_code: '',
    lat: '',
    lng: '',
    operating_radius_km: '10',
    coverage_areas: '',
    capabilities: '',
    experience: '',
    license_number: '',
    document_url: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Prepare payload with array conversion for comma-separated fields
      const payload = {
        ...formData,
        coverage_areas: formData.coverage_areas.split(',').map(s => s.trim()).filter(Boolean),
        capabilities: formData.capabilities.split(',').map(s => s.trim()).filter(Boolean),
        lat: parseFloat(formData.lat) || 0,
        lng: parseFloat(formData.lng) || 0,
        operating_radius_km: parseFloat(formData.operating_radius_km) || 10,
      };

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
      const response = await fetch(`${apiUrl}/responder/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          responder_type: 'hospital',
          contact_person: '',
          contact_phone: '',
          address: '',
          city: '',
          state: '',
          country: 'Nigeria',
          postal_code: '',
          lat: '',
          lng: '',
          operating_radius_km: '10',
          coverage_areas: '',
          capabilities: '',
          experience: '',
          license_number: '',
          document_url: '',
        });

        setTimeout(() => {
          setShowToast(false);
          onClose();
        }, 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        
        {showToast ? (
          <div className="modal-success-content">
            <div className="success-icon-wrapper">
              <FiCheckCircle />
            </div>
            <h3 className="modal-title" style={{ color: '#1e293b' }}>Registration Successful!</h3>
            <p className="modal-subtitle" style={{ color: '#64748b' }}>
              Your provider application has been submitted to the admin panel. 
              We will review your details and contact you within 24 hours.
            </p>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#94a3b8' }}>Closing in 5 seconds...</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <button onClick={onClose} className="modal-close-btn">
                <FiX size={20} />
              </button>
              <h3 className="modal-title">Request Partnership Review</h3>
              <p className="modal-subtitle">For hospitals, ambulance services, and regulated emergency providers.</p>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit} className="modal-form">
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}

                {/* Basic Info Group */}
                <div className="form-field">
                  <label className="form-label"><FiActivity /> Institution Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="e.g. City General Hospital"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label"><FiMail /> Official Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="admin@hospital.com"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label"><FiPhone /> Contact Phone</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="+234..."
                  />
                </div>

                {/* Contact Person Group */}
                <div className="form-field">
                  <label className="form-label"><FiUser /> Contact Person</label>
                  <input
                    required
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="Name of Administrator"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label"><FiPhone /> Contact Direct Line</label>
                  <input
                    required
                    name="contact_phone"
                    value={formData.contact_phone}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="+234..."
                  />
                </div>

                <div className="form-field">
                  <label className="form-label"><FiAward /> Partner Type</label>
                  <select
                    required
                    name="responder_type"
                    value={formData.responder_type}
                    onChange={handleChange}
                    className="form-input-styled"
                  >
                    <option value="hospital">Hospital</option>
                    <option value="ambulance">Ambulance</option>
                    <option value="medevac">MedEvac</option>
                    <option value="clinic">Clinic</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Address Group */}
                <div className="form-field" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label"><FiMapPin /> Street Address</label>
                  <input
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="Full street address"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">City</label>
                  <input
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="Lagos"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">State</label>
                  <input
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="Lagos State"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Postal Code</label>
                  <input
                    required
                    name="postal_code"
                    value={formData.postal_code}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="100001"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label"><FiTruck /> Operating Radius (km)</label>
                  <input
                    required
                    type="number"
                    name="operating_radius_km"
                    value={formData.operating_radius_km}
                    onChange={handleChange}
                    className="form-input-styled"
                  />
                </div>

                {/* Location Group */}
                <div className="form-field">
                  <label className="form-label">Latitude</label>
                  <input
                    required
                    type="number"
                    step="any"
                    name="lat"
                    value={formData.lat}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="6.5244"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Longitude</label>
                  <input
                    required
                    type="number"
                    step="any"
                    name="lng"
                    value={formData.lng}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="3.3792"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label"><FiClock /> Years of Operation</label>
                  <input
                    required
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="e.g. 5 Years"
                  />
                </div>

                {/* Specializations & Capabilities */}
                <div className="form-field">
                  <label className="form-label"><FiFileText /> License Number</label>
                  <input
                    required
                    name="license_number"
                    value={formData.license_number}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="MD-123456"
                  />
                </div>

                <div className="form-field" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Coverage Areas (comma separated)</label>
                  <input
                    name="coverage_areas"
                    value={formData.coverage_areas}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="Ikoyi, Victoria Island, Lekki"
                  />
                </div>

                <div className="form-field" style={{ gridColumn: 'span 3' }}>
                  <label className="form-label">Capabilities & Services (comma separated)</label>
                  <input
                    name="capabilities"
                    value={formData.capabilities}
                    onChange={handleChange}
                    className="form-input-styled"
                    placeholder="24/7 Emergency, Surgery, ICU, Pharmacy"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="modal-submit-btn"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
