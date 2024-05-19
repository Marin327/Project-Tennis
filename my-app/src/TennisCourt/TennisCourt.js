import axios from 'axios'; 
import React, { useState } from 'react';
import ReservationForm from '../ReservationForm/ReservationForm';
const TennisCourt = ({ name, price, playTime, stadium, gameHour, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleReservation = () => {
    setShowForm(true);
  };

  const handleReservationSubmit = async (reservationData) => {
    try {
     
      await axios.post('/api/reservation', reservationData);
      console.log('Резервацията е изпратена:', reservationData);
     
      await axios.post('/api/send-email', {
        recipient: reservationData.email,
        subject: 'Резервация на час',
        body: `Вашият час за тенис на корт "${name}" на ${gameHour} е успешно резервиран.`,
      });
   
      setShowForm(false);
      setReservationSuccess(true);
    } catch (error) {
      console.error('Възникна грешка при резервацията:', error);
    }
  };

  return (
    <div className="tennis-court">
      {showForm ? (
        <ReservationForm
          courtName={name}
          selectedTime={gameHour}
          onReservationSubmit={handleReservationSubmit}
        />
      ) : (
        <>
          <img src={image} alt={name} />
          <div className="court-details">
            <h3>{name}</h3>
            <p><strong>Цена:</strong> {price}</p>
            <p><strong>Време за игра:</strong> {playTime}</p>
            <p><strong>Стадион:</strong> {stadium}</p>
            <p><strong>Час за игра:</strong> {gameHour}</p>
            <button onClick={handleReservation}>Запази час</button>
          </div>
        </>
      )}
      {reservationSuccess && (
        <div className="success-message">
          <p>Резервацията е успешно направена. Проверете вашия имейл за потвърждение.</p>
        </div>
      )}
    </div>
  );
};

export default TennisCourt;
