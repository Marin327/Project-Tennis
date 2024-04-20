import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TennisPlayers = () => {
  const players = [
    { id: 1, name: 'Рафаел Надал', country: 'Испания', age: 35, rank: 2, cups: 20, tournaments: 70, lastTournamentPrize: '100,000$', isInjured: false, totalTournamentWinnings: '5,000,000$' },
    { id: 2, name: 'Новак Джокович', country: 'Сърбия', age: 34, rank: 1, cups: 18, tournaments: 75, lastTournamentPrize: '150,000$', isInjured: true, totalTournamentWinnings: '6,500,000$' },
    { id: 3, name: 'Даниил Медведев', country: 'Русия', age: 25, rank: 3, cups: 10, tournaments: 60, lastTournamentPrize: '80,000$', isInjured: false, totalTournamentWinnings: '3,200,000$' },
    { id: 4, name: 'Александър Зверев', country: 'Германия', age: 24, rank: 6, cups: 5, tournaments: 55, lastTournamentPrize: '70,000$', isInjured: false, totalTournamentWinnings: '2,800,000$' },
    { id: 5, name: 'Доминик Тийм', country: 'Австрия', age: 27, rank: 4, cups: 15, tournaments: 65, lastTournamentPrize: '90,000$', isInjured: true, totalTournamentWinnings: '4,500,000$' },
    { id: 6, name: 'Стефанос Циципас', country: 'Гърция', age: 23, rank: 5, cups: 8, tournaments: 50, lastTournamentPrize: '110,000$', isInjured: false, totalTournamentWinnings: '3,000,000$' },
    { id: 7, name: 'Андрей Рубльов', country: 'Русия', age: 23, rank: 8, cups: 7, tournaments: 45, lastTournamentPrize: '75,000$', isInjured: false, totalTournamentWinnings: '2,600,000$' },
    { id: 8, name: 'Матео Беретини', country: 'Италия', age: 25, rank: 10, cups: 4, tournaments: 40, lastTournamentPrize: '60,000$', isInjured: false, totalTournamentWinnings: '2,000,000$' },
    { id: 9, name: 'Диего Шварцман', country: 'Аржентина', age: 28, rank: 9, cups: 6, tournaments: 48, lastTournamentPrize: '85,000$', isInjured: true, totalTournamentWinnings: '2,400,000$' },
    { id: 10, name: 'Андре Агаси', country: 'САЩ', age: 51, rank: 50, cups: 60, tournaments: 120, lastTournamentPrize: '200,000$', isInjured: false, totalTournamentWinnings: '7,000,000$' },
    { id: 11, name: 'Петeр Сампрас', country: 'САЩ', age: 50, rank: 55, cups: 40, tournaments: 110, lastTournamentPrize: '180,000$', isInjured: false, totalTournamentWinnings: '6,500,000$' },
    { id: 12, name: 'Бьорн Борг', country: 'Швеция', age: 65, rank: 70, cups: 30, tournaments: 90, lastTournamentPrize: '150,000$', isInjured: true, totalTournamentWinnings: '5,000,000$' },
    { id: 13, name: 'Джими Конърс', country: 'САЩ', age: 68, rank: 80, cups: 25, tournaments: 80, lastTournamentPrize: '140,000$', isInjured: false, totalTournamentWinnings: '4,800,000$' },
    { id: 14, name: 'Штефан Едберг', country: 'Швеция', age: 55, rank: 85, cups: 20, tournaments: 70, lastTournamentPrize: '120,000$', isInjured: false, totalTournamentWinnings: '4,300,000$' },
    { id: 15, name: 'Анди Мъри', country: 'Великобритания', age: 34, rank: 95, cups: 15, tournaments: 60, lastTournamentPrize: '110,000$', isInjured: true, totalTournamentWinnings: '3,700,000$' },
    { id: 16, name: 'Роджър Федерер', country: 'Швейцария', age: 40, rank: 20, cups: 103, tournaments: 180, lastTournamentPrize: '200,000$', isInjured: false, totalTournamentWinnings: '9,000,000$' },
  { id: 17, name: 'Андрей Рубльов', country: 'Русия', age: 24, rank: 8, cups: 10, tournaments: 55, lastTournamentPrize: '80,000$', isInjured: false, totalTournamentWinnings: '3,500,000$' },
  { id: 18, name: 'Стефанос Циципас', country: 'Гърция', age: 22, rank: 7, cups: 7, tournaments: 60, lastTournamentPrize: '90,000$', isInjured: false, totalTournamentWinnings: '4,000,000$' },
  { id: 19, name: 'Алекс Димитров', country: 'България', age: 30, rank: 15, cups: 5, tournaments: 50, lastTournamentPrize: '70,000$', isInjured: true, totalTournamentWinnings: '3,000,000$' },
  { id: 20, name: 'Джон Иснър', country: 'САЩ', age: 36, rank: 25, cups: 12, tournaments: 70, lastTournamentPrize: '75,000$', isInjured: false, totalTournamentWinnings: '4,500,000$' },
  { id: 21, name: 'Милош Раонич', country: 'Канада', age: 31, rank: 18, cups: 8, tournaments: 45, lastTournamentPrize: '85,000$', isInjured: false, totalTournamentWinnings: '3,200,000$' },
  { id: 22, name: 'Ник Кирьос', country: 'Австралия', age: 26, rank: 30, cups: 10, tournaments: 60, lastTournamentPrize: '95,000$', isInjured: true, totalTournamentWinnings: '4,800,000$' },
  { id: 23, name: 'Григор Димитров', country: 'България', age: 31, rank: 35, cups: 6, tournaments: 40, lastTournamentPrize: '65,000$', isInjured: false, totalTournamentWinnings: '2,500,000$' },
  { id: 26, name: 'Ашли Барти', country: 'Австралия', age: 25, rank: 1, cups: 10, tournaments: 50, lastTournamentPrize: '120,000$', isInjured: false, totalTournamentWinnings: '3,800,000$' },
]; 

const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (playerId) => {
    setSelectedPlayer(selectedPlayer === playerId ? null : playerId);
  };

  return (
    <div className="tennis-players-container">
      <h2>Играчи в тенис турнир</h2>
      <div className="players-list">
        {players.map(player => (
          <div key={player.id} className="player-card" onClick={() => handlePlayerClick(player.id)}>
            <h3>{player.name}</h3>
            {selectedPlayer === player.id && (
              <div className="player-info active">
                <p><strong>Държава:</strong> {player.country}</p>
                <p><strong>Възраст:</strong> {player.age}</p>
                <p><strong>Ранг:</strong> {player.rank}</p>
                <p><strong>Купи:</strong> {player.cups}</p>
                <p><strong>Турнири:</strong> {player.tournaments}</p>
                <p><strong>Награда от последния турнир:</strong> {player.lastTournamentPrize}</p>
                <p><strong>Контузен в момента:</strong> {player.isInjured ? 'Да' : 'Не'}</p>
                <p><strong>Бюджет от спечелени турнири:</strong> {player.totalTournamentWinnings}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/" className='back-button'>Назад</Link>
    </div>
  );
}

export default TennisPlayers;