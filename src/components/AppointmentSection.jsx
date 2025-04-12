// src/pages/AppointmentSection.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../AppointmentSection.css'; // Import the custom styles

const AppointmentSection = () => {
  // Form state
  const [form, setForm] = useState({
    full_name: '',
    service: '',
    mobile_number: '',
    email: '',
    number_of_people: 1,
    appointment_date: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Services state for dropdown
  const [services, setServices] = useState([]);

  // Fetch services list for dropdown when component mounts
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/simple/services/')
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  // Helper for datetime-local min attribute in proper format: YYYY-MM-DDThh:mm
  const getMinDateTime = () => {
    const now = new Date();
    const pad = (n) => (n < 10 ? '0' + n : n);
    const YYYY = now.getFullYear();
    const MM = pad(now.getMonth() + 1);
    const DD = pad(now.getDate());
    const hh = pad(now.getHours());
    const mm = pad(now.getMinutes());
    return `${YYYY}-${MM}-${DD}T${hh}:${mm}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    axios
      .post('http://127.0.0.1:8000/simple/book_appointments/', form)
      .then((response) => {
        setMessage('🎉 Appointment booked successfully!');
        setForm({
          full_name: '',
          service: '',
          mobile_number: '',
          email: '',
          number_of_people: 1,
          appointment_date: '',
        });
      })
      .catch((error) => {
        setMessage('❌ There was an error booking your appointment.');
        console.error('Error booking appointment:', error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="appointment" className="fade-in appointment-section">
      <div className="appointment-container">
      <h2 
        className="section-title" 
        style={{ color: '#8B7500', marginBottom: '1rem', textAlign: 'center' }}
      >
        Schedule Your Appointment
      </h2>

        {message && (
          <div className={`message ${message.includes('❌') ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-grid">
            <div className="input-group">
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                className="gold-input"
                placeholder=" "
              />
              <label className="floating-label">Full Name</label>
            </div>

            {/* Service selection dropdown */}
            <div className="input-group">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="gold-input"
              >
                <option value="" disabled>
                  -- Select Service --
                </option>
                {services.length > 0 &&
                  services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
              </select>
              <label className="floating-label">Select Service</label>
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="mobile_number"
                value={form.mobile_number}
                onChange={handleChange}
                required
                className="gold-input"
                placeholder=" "
              />
              <label className="floating-label">Mobile Number</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="gold-input"
                placeholder=" "
              />
              <label className="floating-label">Email Address</label>
            </div>

            <div className="input-group">
              <select
                name="number_of_people"
                value={form.number_of_people}
                onChange={handleChange}
                className="gold-input"
                required
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Person' : 'People'}
                  </option>
                ))}
              </select>
              <label className="floating-label">Number of Guests</label>
            </div>

            {/* Datetime-local input for appointment */}
            <div className="input-group">
              <input
                type="datetime-local"
                name="appointment_date"
                value={form.appointment_date}
                onChange={handleChange}
                required
                className="gold-input"
                placeholder=" "
                min={getMinDateTime()}
              />
              <label className="floating-label">Preferred Date & Time</label>
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Secure Your Appointment'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
