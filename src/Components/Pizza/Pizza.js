import React from "react";
import './Pizza.css';
import pinza from "./img/pinza.png";


const Pizza = () => {
    return (
        <section className="pizza">
            <div className="container">

                    <div className="autoplay">
                        <div><img src={pinza} alt=""/></div>
                        <div><img src={pinza} alt=""/></div>
                        <div><img src={pinza} alt=""/></div>
                        <div><img src={pinza} alt=""/></div>
                    </div>

            </div>
        </section>
    )
}


export default Pizza;