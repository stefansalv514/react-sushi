import React from "react";
import './Footer.css';
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-between">

                    <div className="col-lg-2">
                        <nav className="food-menu">
                            <ul>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Суши</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Гунканы</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Инари</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Супы</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Салаты</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Горячие закуски</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Десерты</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Напитки</NavLink>
                                </li>
                                <li>
                                    <NavLink className="food-menu__link" to="#">Дополнительно</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-lg-4">
                        <div className="sets">

                            <div className="sets-price">
                                <h3 className="sets-price__title">Сеты</h3>
                                <nav className="sets-price__list">
                                    <ul>
                                        <li>
                                            <NavLink className="sets-price__link" to="#">До 500 руб.</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="sets-price__link" to="#">До 1000 руб. (для двоих)</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="sets-price__link" to="#">До 1500 руб (для двоих - троих)</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="sets-price__link" to="#">До 2000 руб (большая кампания)</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="sets-price__link" to="#">от 2000 руб (очень большая кампания)</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <nav className="sets_type">
                                <ul>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">С угрем</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Горячие</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Запеченые</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Суши</NavLink>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="sets-price">
                            <h3 className="sets-price__title">Роллы</h3>
                            <nav className="sets-price__list">
                                <ul>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Традиционные/Классические</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Простые</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Теплые</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Запеченые</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Вегетарианские</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-1">
                        <div className="sets-price">
                            <h3 className="sets-price__title">Вок</h3>
                            <nav className="sets-price__list">
                                <ul>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Яичная</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Удон</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Гречневая</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Стеклянная</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Рис</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-1">
                        <div className="sets-price">
                            <h3 className="sets-price__title">Пицца</h3>
                            <nav className="sets-price__list">
                                <ul>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Мясная</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Рыбная</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Сырная</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="sets-price__link" to="#">Вегетарианская</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>

                <div className="footer__info">
                    <div className="row justify-content-between">

                        <div className="col-lg-2">
                            <p className="footer__author">
                                МИЮШИ © 2017
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="footer__privacy">
                                <NavLink className="footer__link" to="#">
                                    Соглашение на обработку персональных данных
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer__socials">

                                <div className="footer__icon">
                                    <i className="fab fa-instagram"></i>
                                </div>

                                <div className="footer__icon">
                                    <i className="fab fa-vk"></i>
                                </div>

                                <div className="footer__icon">
                                    <i className="fab fa-facebook-f"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    )
}


export default Footer;