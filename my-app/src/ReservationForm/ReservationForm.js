import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReservationForm = ({ courtName, selectedTime, onReservationSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || phoneNumber.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Моля, попълнете всички полета.');
      return;
    }

    onReservationSubmit({
      courtName,
      selectedTime,
      userName: name,
      phoneNumber,
      userEmail: email,
      userMessage: message
    });
 
    setName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <motion.div
      className="reservation-form"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Резервация за {courtName}</h3>
      <p>Избран час: {selectedTime}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Име:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Телефон:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Имейл:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Съобщение:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Резервирай</button>
        <Link to="/" className="back-button">Назад</Link> {/* Използвайте Link за връщане към списъка с кортове */}
      </form>
    </motion.div>
  );
};

export default ReservationForm;
