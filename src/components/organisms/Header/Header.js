import React from 'react';
import Logo from 'components/atoms/Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <Logo />
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/MyPage">마이 페이지</NavLink></li>
                        <li><a href="#">로그아웃</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;