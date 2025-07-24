import React, { useState } from 'react';

function AppointmentBooking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [visitType, setVisitType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would send the data to a server here
    setIsModalOpen(true); // Show confirmation modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br /><br />
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br /><br />
        <label>
          Visit Type:
          <select value={visitType} onChange={(e) => setVisitType(e.target.value)}>
            <option value="">Select</option>
            <option value="checkup">Checkup</option>
            <option value="consultation">Consultation</option>
            <option value="followup">Follow-up</option>
          </select>
        </label>
        <br /><br />
        <button type="submit">Book an Appointment</button>
      </form>

      {isModalOpen && (
        <div style={{
          marginTop: '20px',
          padding: '10px',
          background: '#eee',
          border: '1px solid #ccc'
        }}>
          <h3>Confirm Appointment</h3>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Visit Type:</strong> {visitType}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default AppointmentBooking;
