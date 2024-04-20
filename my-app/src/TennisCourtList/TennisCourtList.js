import React from 'react';
import TennisCourt from '../TennisCourt/TennisCourt';

const courtsData = [
  {
    id: 1,
    name: 'Корт Бързата линия',
    price: '20 лв.',
    playTime: '1 час',
    stadium: 'Стадион A',
    gameHour: '14:00 - 15:00',
    image: '/images/12.jpg',
  },
  {
    id: 2,
    name: 'Корт Зеления фар',
    price: '25 лв.',
    playTime: '1 час и 30 минути',
    stadium: 'Стадион B',
    gameHour: '15:00 - 16:30',
    image: '/images/60.jfif',
  },
  {
    id: 3,
    name: 'Корт Звездата',
    price: '30 лв.',
    playTime: '2 часа',
    stadium: 'Стадион C',
    gameHour: '16:30 - 18:30',
    image: '/images/88.jpg',
  },
  {
    id: 4,
    name: 'Корт Лебедът',
    price: '20 лв.',
    playTime: '1 час',
    stadium: 'Стадион D',
    gameHour: '17:00 - 18:00',
    image: '/images/17.png',
  },
  {
    id: 5,
    name: 'Корт Австралия',
    price: '25 лв.',
    playTime: '1 час и 30 минути',
    stadium: 'Стадион E',
    gameHour: '18:00 - 19:30',
    image: '/images/56.jfif',
  },
  {
    id: 6,
    name: 'Корт До морето',
    price: '30 лв.',
    playTime: '2 часа',
    stadium: 'Стадион F',
    gameHour: '19:30 - 21:30',
    image: '/images/11.jpg',
  },
];

const TennisCourtsList = () => {
  return (
    <div className="tennis-courts-list">
      <h2>Тенис Кортове</h2>
      <div className="courts-container">
        {courtsData.map((court) => (
          <TennisCourt
            key={court.id}
            name={court.name}
            price={court.price}
            playTime={court.playTime}
            stadium={court.stadium}
            gameHour={court.gameHour}
            image={court.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TennisCourtsList;