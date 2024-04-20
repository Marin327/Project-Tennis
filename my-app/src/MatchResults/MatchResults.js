import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const MatchResults = () => {
  const [liveResults, setLiveResults] = useState([
    { id: 1, team1: 'Отбор А', team2: 'Отбор Б', score: '2 - 1', time: '45\'' },
    { id: 2, team1: 'Отбор С', team2: 'Отбор D', score: '0 - 0', time: '30\'' },
    { id: 3, team1: 'Отбор Е', team2: 'Отбор F', score: '1 - 2', time: '60\'' },
    { id: 4, team1: 'Отбор G', team2: 'Отбор H', score: '3 - 2', time: '75\'' },
    { id: 5, team1: 'Отбор I', team2: 'Отбор J', score: '1 - 1', time: '50\'' },
    { id: 6, team1: 'Отбор К', team2: 'Отбор L', score: '0 - 3', time: '80\'' },
    { id: 7, team1: 'Отбор M', team2: 'Отбор N', score: '4 - 1', time: '65\'' },
    { id: 8, team1: 'Отбор O', team2: 'Отбор P', score: '2 - 0', time: '85\'' },
  ]);

  const [selectedResult, setSelectedResult] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedResults = liveResults.map(result => ({
        ...result,
        score: `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`,
        time: `${Math.floor(Math.random() * 90)}'`,
      }));
      setLiveResults(updatedResults);
    }, 10000);

    return () => clearInterval(interval);
  }, [liveResults]);

  const handleResultClick = id => {
    const result = liveResults.find(result => result.id === id);
    setSelectedResult(result);
  };

  return (
    <div className="match-results-container">
      <h2>Резултати на живо</h2>
      <table>
        <thead>
          <tr>
            <th>Отбор 1</th>
            <th>Отбор 2</th>
            <th>Резултат</th>
            <th>Време</th>
          </tr>
        </thead>
        <tbody>
          {liveResults.map(result => (
            <tr key={result.id} onClick={() => handleResultClick(result.id)}>
              <td>{result.team1}</td>
              <td>{result.team2}</td>
              <td>{result.score}</td>
              <td>{result.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedResult && (
        <div className="selected-result">
          <h3>Допълнителна информация:</h3>
          <p>Отбор 1: {selectedResult.team1}</p>
          <p>Отбор 2: {selectedResult.team2}</p>
          <p>Резултат: {selectedResult.score}</p>
          <p>Време: {selectedResult.time}</p>
        </div>
      )}
     <Link to="/" className="back-button">Назад</Link>
    </div>
  );
}

export default MatchResults;