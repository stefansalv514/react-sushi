import React from "react";
import './Form.css';
import {NavLink} from "react-router-dom";


const Form = () => {
    return (
        <section className="form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">

                        <form className="search-form" action="">
                            <p className="search-form__question">
                                Есть вопросы?
                            </p>
                            <h1 className="search-form__title">
                                Оставьте свои контакты
                            </h1>
                            <div className="search-form__data">
                                <input className="search-form__input" type="text" placeholder="Имя" />
                                <input className="search-form__input" type="text" placeholder="Телефон" />
                                <button className="search-form__btn">Отправить</button>
                            </div>
                            <div className="search-form__personal-info">
                                <NavLink className="search-form__link-personalinfo" to="#">
                                    Нажимая на кнопку «Отправить», вы даете согласие на обработку своих персональных данных.
                                </NavLink>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Form;