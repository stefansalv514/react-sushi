import React from "react";
import './Reviews.css';
import avatar from "./img/avatar.png";
import left from "./img/left.png";
import right from "./img/right.png";
import food from "./img/food.png";


const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="reviews__name">
                            <img src={left} alt=""/>
                            <h1 className="reviews__title">
                                Отзывы
                            </h1>
                            <img src={right} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-4">

                        <div className="vk-reviews">
                            <div className="vk-reviews__user">
                                <div className="vk-reviews__avatar">
                                    <img src={avatar} alt=""/>
                                    <div className="vk-reviews__avatar__info">
                                        <h3 className="vk-reviews__name">
                                            Надежда Наширбанова
                                        </h3>
                                        <p className="vk-reviews__time-visit">
                                            5 авг 2017 в 9:58
                                        </p>
                                    </div>
                                </div>
                                <p className="vk-reviews__text">
                                    Спасибо за быструю доставку! Отличный поздний ужин после рабочего дня )
                                </p>
                                <img src={food} alt="" className="vk-reviews__food-photo"/>

                            <div className="vk-reviews__icon">
                                <i className="fas fa-heart vk-reviews__icon_color-blue"></i>
                                <i className="fas fa-comment-alt vk-reviews__icon_color-blue"></i>
                                <i className="fal fa-bullhorn vk-reviews__icon_color-blue"></i>
                            </div>
                            <button className="vk-reviews__subscribe-btn">
                                <i className="fab fa-vk"></i>
                                Подписаться
                            </button>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="vk-reviews">
                            <div className="vk-reviews__user">
                                <div className="vk-reviews__avatar">
                                    <img src={avatar} alt=""/>
                                    <div className="vk-reviews__avatar__info">
                                        <h3 className="vk-reviews__name">
                                            Надежда Наширбанова
                                        </h3>
                                        <p className="vk-reviews__time-visit">
                                            5 авг 2017 в 9:58
                                        </p>
                                    </div>
                                </div>
                                <p className="vk-reviews__text">
                                    Спасибо за быструю доставку! Отличный поздний ужин после рабочего дня )
                                </p>
                                <img src={food} alt="" className="vk-reviews__food-photo"/>

                                <div className="vk-reviews__icon">
                                    <i className="fas fa-heart vk-reviews__icon_color-blue"></i>
                                    <i className="fas fa-comment-alt vk-reviews__icon_color-blue"></i>
                                    <i className="fal fa-bullhorn vk-reviews__icon_color-blue"></i>
                                </div>
                                <button className="vk-reviews__subscribe-btn">
                                    <i className="fab fa-vk"></i>
                                    Подписаться
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="vk-reviews">
                            <div className="vk-reviews__user">
                                <div className="vk-reviews__avatar">
                                    <img src={avatar} alt=""/>
                                    <div className="vk-reviews__avatar__info">
                                        <h3 className="vk-reviews__name">
                                            Надежда Наширбанова
                                        </h3>
                                        <p className="vk-reviews__time-visit">
                                            5 авг 2017 в 9:58
                                        </p>
                                    </div>
                                </div>
                                <p className="vk-reviews__text">
                                    Спасибо за быструю доставку! Отличный поздний ужин после рабочего дня )
                                </p>
                                <img src={food} alt="" className="vk-reviews__food-photo"/>

                                <div className="vk-reviews__icon">
                                    <i className="fas fa-heart vk-reviews__icon_color-blue"></i>
                                    <i className="fas fa-comment-alt vk-reviews__icon_color-blue"></i>
                                    <i className="fal fa-bullhorn vk-reviews__icon_color-blue"></i>
                                </div>
                                <button className="vk-reviews__subscribe-btn">
                                    <i className="fab fa-vk"></i>
                                    Подписаться
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}


export default Reviews;