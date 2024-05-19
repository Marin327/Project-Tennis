import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TrainingSection = () => {
  return (
    <div>
      <div className="training-content">
        <div className="training-item">
          <h3>Видеоуроци</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=x3LJfVsxnQM">Тенис Уроци за Начинаещи от TennisUnleashed</a></li>
            <li><a href="https://www.youtube.com/watch?v=Euu8h6NB9dw">Тенис Уроци: Основни Удари от Top Tennis Training</a></li>
            <li><a href="https://www.youtube.com/watch?v=ULyRGEmulOA">Тенис Уроци за Подобряване на Подвижността от Essential Tennis</a></li>
            <li><a href="https://www.youtube.com/watch?v=Ax6_eKjeWLA">Тенис Уроци: Как да Играем на Мрежата от Tennis Evolution</a></li>
            <li><a href="https://www.youtube.com/watch?v=6po9TXzd2-A">Тенис Уроци: Основни Тактики и Стратегии от Feel Tennis Lessons</a></li>
          </ul>
        </div>
        <div className="training-item">
          <h3>Съвети за тренировка</h3>
          <ul>
            <li>Разработете редовна тренировъчна програма и се придържайте към нея.</li>
            <li>Работете върху подобряване на вашата физическа подготовка, включително сила, издръжливост и гъвкавост.</li>
            <li>Практикувайте основните удари - сервис, форхенд, бекхенд и воле.</li>
            <li>Използвайте различни упражнения за развитие на силата и координацията на ръцете и краката.</li>
            <li>Играйте срещи с партньори с различни нива на умения, за да подобрите вашата игра в реални условия.</li>
            <li>Фокусирайте се върху техниката си и постоянно я подобрявайте, като използвате видеоанализ и съвети от треньори.</li>
            <li>Практикувайте своя сервис редовно и работете върху неговата точност и сила.</li>
            <li>Изучете тактиките и стратегиите за игра в различни ситуации - на мрежата, в задната линия и при сервис.</li>
            <li>Не забравяйте да практикувате и менталната страна на играта - концентрацията, стреса и управлението на емоциите.</li>
            <li>Не се отказвайте от постоянното учене и подобряване на вашата игра, като изследвате нови техники и стратегии.</li>
          </ul>
        </div>
      </div>
      <div>
        <Link to="/" className="back-button">Назад</Link>
      </div>
    </div>
  );
}

export default TrainingSection;
