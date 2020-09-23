import React from "react";
import './Resons.css';
import left from './img/left.png';
import right from './img/right.png';
import dish from './img/dish.png';
import fish from './img/fish.png';
import kitchen from './img/kitchen.png';
import knife from './img/knife.png';
import like from './img/like.png';
import list from './img/list.png';
import money from './img/money.png';
import octopus from './img/octopus.png';
import pizza from './img/pizza.png';
import rice from './img/rice.png';


const Resons = () => {
    return (
        <section className="resons">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="reasons__title">
                            <img src={left} alt=""/>
                            <h1 className="font-LemonTuesday">
                                10 причин купить у нас
                            </h1>
                            <img src={right} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="reasons__list">

                    <div className="row justify-content-between">

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={knife} alt=""/>
                                <p className="reasons__small-text">
                                    100% ручная работа
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={dish} alt=""/>
                                <p className="reasons__small-text">
                                    100% свежие ингредиенты
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={money} alt=""/>
                                <p className="reasons__small-text">
                                    Самые низкие цены на рынке! (Нет ресторанной наценки)
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={like} alt=""/>
                                <p className="reasons__small-text">
                                    Постоянный контроль качества на всех этапах
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={fish} alt=""/>
                                <p className="reasons__small-text">
                                    Только охлажденная рыба (никакой заморозки
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="row justify-content-between">

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={rice} alt=""/>
                                <p className="reasons__small-text">
                                    Мы используем только дорогой рис из Японии
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={octopus} alt=""/>
                                <p className="reasons__small-text">
                                    Больше начинки, меньше риса!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={knife} alt=""/>
                                <p className="reasons__small-text">
                                    Мы не заменяем авокадо огурцом!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={pizza} alt=""/>
                                <p className="reasons__small-text">
                                    Вся пицца готовится из итальянской муки и Итальянского соуса
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="reasons__item">
                                <img src={list} alt=""/>
                                <p className="reasons__small-text">
                                    Мы не используем майонез!
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}


export default Resons;