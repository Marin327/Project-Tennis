import React from 'react';
import { FaCalendarAlt, FaClipboardList, FaFutbol, FaHome, FaNewspaper, FaPhoneAlt, FaUsers } from 'react-icons/fa';
import "../App.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/"><FaHome /> Начало</a></li>
                    <li><a href="/News"><FaNewspaper /> Новини</a></li>
                    <li><a href="/Players"><FaUsers /> Играчи</a></li>
                    <li><a href="/TennisCourtList"><FaFutbol /> Тенис Кортове</a></li>
                    <li><a href="/TournamentsCalendar"><FaCalendarAlt /> Турнирен Календар</a></li>
                    <li><a href="/MatchResults"><FaClipboardList /> Резултати на мачове</a></li>
                    <li><a href="/Contact"><FaPhoneAlt /> Контакти</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;