import React from 'react';
import './Navigation.scss';

const Navigation = () => (
    <nav className='main-app__nav'>
        <ul>
            <li>
                <a href="#"><i className="fas fa-ticket-alt main-app__nav__icon"></i> <span>my tickets</span></a>
            </li>
            <li>
                <a href="#"> <i className="fas fa-calendar-alt "></i> <span>pick a date</span></a>
            </li>
            <li>
                 <a href="#"><i className="fas fa-heart"></i> <span>favorites</span></a>
            </li>
            <li>
                <a href="#"><i className="fas fa-info-circle"></i> <span>about us</span></a>
            </li>
        </ul>
    </nav>
);

export default Navigation;

