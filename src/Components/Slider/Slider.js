import React from "react";
import './Slider.css';


const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide qwerty" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item slider-sushi active">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="slider-info">
                                    <div className="slider-info__sales">
                                        <h1 className="slider-info__title">
                                            Счастливые
                                            часы
                                        </h1>
                                        <p className="slider-info__time">
                                            с 11:00 до 16:00 в будние дни
                                        </p>
                                        <button className="slider-info__btn">подробнее</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item slider-sushi">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="slider-info">
                                    <div className="slider-info__sales">
                                        <h1 className="slider-info__title">
                                            Смотрим Симпсонов
                                        </h1>
                                        <p className="slider-info__time">
                                            круглые сутки
                                        </p>
                                        <button className="slider-info__btn">жми</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item slider-sushi">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="slider-info">
                                    <div className="slider-info__sales">
                                        <h1 className="slider-info__title">
                                            Плохие парни
                                        </h1>
                                        <p className="slider-info__time">
                                            мы сулим беду
                                        </p>
                                        <button className="slider-info__btn">отрезать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )

}


export default Slider;