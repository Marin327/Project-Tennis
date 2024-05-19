import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TournamentDetails from '../TournamentDetails/TournamentDetails';

const formatDate = (dateString) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

const TournamentCalendar = () => {
  const tournaments = [
    { id: 1, date: '2024-01-10', name: 'Mutua Madrid Open', description: 'Мутуа Мадрид Оупън е професионален тенис турнир, който се провежда в Мадрид, Испания. Той е част от категорията Мастърс 1000 в рамките на АТР Тура и едно от най-престижните състезания на червените кортове.' },
    { id: 2, date: '2024-02-15', name: 'Open Parc Auvergne-Rhône-Alpes Lyon', description: 'Откритият Парк Овегни-Рон-Алп Лион е тенис турнир, който се провежда в Лион, Франция. Това е професионално състезание на червените кортове, което привлича висококачествени тенисисти от целия свят.' },
    { id: 3, date: '2024-03-06', name: 'Estoril Open', description: 'Есторил Оупън е тенис турнир, който се провежда в Есторил, Португалия. Той е част от категорията ATP Tour 250 и привлича много топ играчи, които се състезават за титлата.' },
    { id: 4, date: '2024-04-08', name: 'Madrid Open', description: 'Мадрид Оупън е професионален тенис турнир, който се провежда в Мадрид, Испания. Той е един от най-престижните турнири на червените кортове и е част от категорията Мастърс 1000 на АТР Тура.' },
    { id: 5, date: '2024-05-10', name: 'Internationaux de Strasbourg', description: 'Интернатионали дьо Стразбур са тенис турнир, който се провежда в Стразбур, Франция. Той е част от категорията WTA International и предлага възможност за играчите да се подготвят за голямата сцена.' },
    { id: 6, date: '2024-06-15', name: 'Italian Open', description: 'Италиан Оупън е тенис турнир, който се провежда в Рим, Италия. Той е част от категорията Мастърс 1000 на АТР Тура и предлага възможност за играчите да тестват уменията си на червените кортове.' },
    { id: 7, date: '2024-07-10', name: 'Geneva Open', description: 'Женева Оупън е тенис турнир, който се провежда в Женева, Швейцария. Той е част от категорията ATP Tour 250 и предлага възможност за играчите да се състезават в едно от най-престижните състезания на червените кортове.' },
    { id: 8, date: '2024-08-05', name: 'Strasbourg Open', description: 'Стразбурският Оупън е тенис турнир, който се провежда в Стразбур, Франция. Той е част от категорията WTA International и предлага възможност за тенисистките да играят преди Големия шлем в Ролан Гарос.' },
    { id: 9, date: '2024-09-10', name: 'Open Parc Auvergne-Rhône-Alpes Lyon', description: 'Откритият Парк Овегни-Рон-Алп Лион е тенис турнир, който се провежда в Лион, Франция. Това е професионално състезание на червените кортове, което привлича висококачествени тенисисти от целия свят.' },
    { id: 10, date: '2024-10-05', name: 'Roland Garros', description: 'Ролан Гарос е един от четирите Големи шлема в тениса и се провежда в Париж, Франция. Той е най-престижният турнир на червените кортове и предлага възможност за играчите да се състезават за титлата на шампиона на Ролан Гарос.' },
    { id: 11, date: '2024-11-11', name: 'Nottingham Open', description: 'Нотингам Оупън е тенис турнир, който се провежда в Нотингам, Обединеното кралство. Той е част от категорията ATP Challenger Tour и е едно от най-престижните състезания на трева преди Уимбълдън.' },
    { id: 12, date: '2024-11-23', name: 'Libéma Open', description: 'Либема Оупън е тенис турнир, който се провежда в Hertogenbosch, Холандия. Той е част от категорията ATP Tour 250 и е предварително състезание преди Уимбълдън.' },
    { id: 13, date: '2024-12-05', name: 'Ladies Championship Gstaad', description: 'Дамският шампионат в Гщаад е тенис турнир, който се провежда в Гщаад, Швейцария. Той е част от категорията WTA International и привлича висококачествени тенисистки от целия свят.' },
    { id: 14, date: '2024-12-15', name: 'Belgrade Open', description: 'Белградският Оупън е тенис турнир, който се провежда в Белград, Сърбия. Той е част от категорията ATP Tour 250 и предлага възможност за играчите да се състезават на тревните кортове преди Уимбълдън.' },
    { id: 15, date: '2024-12-25', name: 'Nottingham Open', description: 'Нотингам Оупън е тенис турнир, който се провежда в Нотингам, Обединеното кралство. Той е част от категорията WTA International и предоставя възможност за тенисистките да се подготвят за Уимбълдън.' },
  ];
const [selectedTournament, setSelectedTournament] = useState(null);

const handleTournamentClick = (tournament) => {
  setSelectedTournament(tournament);
};

return (
    <div className="tournament-calendar">
    <h2>Календар за тенис турнирите 2024 г.</h2>
    <ul className='calendar-list'>
      {tournaments.map((tournament) => (
        <li key={tournament.id} onClick={() => handleTournamentClick(tournament)}>
          <div>
            <span className="tournament-date">{formatDate(tournament.date)}</span>
            <span className="tournament-name">{tournament.name}</span>
          </div>
          {selectedTournament && selectedTournament.id === tournament.id && (
            <TournamentDetails tournament={selectedTournament} />
          )}
        </li>
      ))}
    </ul>
    <div className="button-container">
      <Link to='/' className="back-button">Назад</Link>
    </div>
  </div>
);
};

export default TournamentCalendar;
