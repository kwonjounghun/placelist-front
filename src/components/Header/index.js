import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div><NavLink to="/">placeList</NavLink></div>
                <div><button>Login</button></div>
                <div>
                    <ul>
                        <li><NavLink to="/placeList" activeClassName="active">가고싶은 곳</NavLink></li>
                        <li><NavLink to="/MyPage" activeClassName="active">마이페이지</NavLink></li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;