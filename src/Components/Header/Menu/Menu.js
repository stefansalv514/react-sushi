import React from "react";
import './Menu.css';
import {NavLink} from "react-router-dom";
import './HeaderMedia.css';


const Menu = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="menu__nav">
                            <ul>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">меню</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">акции и скидки</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">доставка и оплата</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">новости</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">контакты</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">
                                        <i className="fas fa-user-friends"></i>
                                        кабинет
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink className="menu__link menu_link_OpenSans-SemiBold" to="#">
                                        <i className="fas fa-shopping-basket"></i>
                                        корзина
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Menu;