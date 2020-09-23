import React from "react";
import './Header.css';
import logo from "./img/logo.png";
import {NavLink} from "react-router-dom";
import './Menu/HeaderMedia.css';


const Header = () => {
    return (
        <header className="header header_border-bottom">
            <div className="container">
                <div className="row justify-content-between">

                    {/*Выпадающее меню для адаптива*/}
                    <div className="dropdown dropdown__none">
                        <button className="btn btn-secondary dropdown-toggle bars__color-green" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <NavLink className="dropdown-item" to="#">Action</NavLink>
                            <NavLink className="dropdown-item" to="#">Another action</NavLink>
                            <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                        </div>
                    </div>
                    {/*Выпадающее меню для адаптива*/}

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="header__contacts">
                            <div className="header__logo">
                                <NavLink to="#">
                                    <img src={logo} alt="" />
                                </NavLink>
                            </div>

                            <div className="header__adress header_font-size header_mr-top">
                                <i className="fad fa-map-marker-alt"></i>
                                г. Курск, ул. Ленина, д. 3
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="header__mail header_font-size header_mr-top">
                            <i className="fal fa-envelope"></i>
                            78003332222@yandex.ru
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-7 col-sm-7">

                        {/*Иконки на адаптиве*/}
                        <div className="lk-icon">
                            <i className="fas fa-user-friends"></i>
                            <i className="fas fa-shopping-basket"></i>
                        </div>

                        <div className="header__callback">

                            <div className="header__workday">
                                <p className="header__phone header_OpenSans-ExtraBold">
                                    +7 (800) 333 2 222
                                </p>
                                <p className="header__worktime header_OpenSans-regular">
                                    Работаем с 11.00 до 23.00
                                </p>
                            </div>

                            <button className="header__btn header_OpenSans-regular">Обратный звонок</button>

                        </div>

                    </div>

                </div>
            </div>
        </header>
    )
}


export default Header;