import React, { useState } from 'react';
import '../App.css';

const formatDate = (dateString) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

const TournamentDetails = ({ tournament }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="tournament-details">
      <h3>{tournament.name}</h3>
      {isVisible && (
        <div>
          <p><strong>Date:</strong> {formatDate(tournament.date)}</p>
          <p><strong>Description:</strong> {tournament.description}</p>
        </div>
      )}
      <button onClick={toggleVisibility}>{isVisible ? 'По-малко' : 'Повече'}</button>
    </div>
  );
};

export default TournamentDetails;