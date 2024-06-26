import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NewsTraining = () => {
  const news = [
    { id: 1, title: 'Нов треньорски екип в "Тенис Академия"', content: 'Започва работа нов треньорски екип в Тенис Академията, фокусиран върху развитието на младите таланти.' },
    { id: 2, title: 'Млад талант открит на международен юношески турнир', content: 'Българският тенисист Петър Иванов спечели турнира за младежи под 16 години във Виена.' },
    { id: 3, title: 'Тенис легенда отново на корта след здравословни проблеми', content: 'След дълга пауза поради здравословни проблеми, Рафаел Надал се завръща на тенис кортовете с нов ентусиазъм.' },
    { id: 4, title: 'Изненадващи резултати на професионален турнир', content: 'На последния Големия шлем турнир в Мелбърн, непознатият тенисист Джеймс Смит успя да стигне до четвъртфиналите, побеждавайки няколко от най-големите имена в спорта.' },
    { id: 5, title: 'Тенис турнирът в Ролан Гарос започва следващата седмица', content: 'Един от най-престижните тенис турнири започва следващата седмица в Париж. Очаквайте невероятни мачове и изненади.' },
    { id: 6, title: 'Нов тенис клуб отваря врати в столицата', content: 'С новооткритият клуб "Тенис Експерт" всеки тенис фен ще може да тренира и да се състезава на съвременни кортове с високо качество.' },
    { id: 7, title: 'Български тенисист спечели първия си турнир на кауча', content: 'На турнира в Монте Карло, Мартин Иванов спечели първото място, като покори конкуренцията и изненада всички.' },
    { id: 8, title: 'Нов тенис клуб в Германия става домакин на международен турнир', content: 'С откриването на клуба "Тенис Фокус" в Берлин, Германия се превръща в център на тениса в Европа.' },
    { id: 9, title: 'Рекорден брой зрители на тенис мач в Мадрид', content: 'На финала на турнира в Мадрид бяха присъствали над 50 000 зрители, което е най-голямото количество зрители в историята на турнира.' },
    { id: 10, title: 'Тенис звездата връща на корта след контузия', content: 'След месеци от възстановяване, Симона Халеп е готова да се завърне на корта и да продължи да показва своят клас.' },
  ];

  return (
    <div className="news-training-container">
      <h2>Новини в Тениса</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-button-container">Назад</Link>
    </div>
  );
}

export default NewsTraining;