// src/components/Reservation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the selected time
    const selectedTime = formData.time;
    const selectedHour = parseInt(selectedTime.split(':')[0], 10);
    
    if (selectedHour < 10 || selectedHour > 23) {
      alert('Please select a time between 10 AM and 11 PM.');
      return; // Prevent form submission
    }

    // Add any form submission logic here if needed
    console.log('Form submitted with data:', formData); // Log form data for debugging
    navigate('/'); // Redirect to home page after submitting
  };

  return (
    <div className="reservation-container">
      <h2>Book Your Table</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
          className="input"
          required
        />
        <button type="submit" className="submit-button">Reserve Now</button>
      </form>
    </div>
  );
};

export default Reservation;