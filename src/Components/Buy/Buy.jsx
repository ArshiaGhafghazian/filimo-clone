import React from "react";

//styles:
import "./Buy.css";

//icons:
import check from "../../assets/icons/done.svg";
import logo from "../../assets/icons/logo_text.webp"
import tv from "../../assets/icons/tv.png";

const Buy = () => {
    return (
        <div className="buy__container">
            <div className="buy__image__container">
                <img src={logo} alt="logo-text" />
            </div>
            <div className="buy__three__items">
                <div className="buy__item">
                    <img src={check} alt="check-icon" />
                    <span>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</span>
                </div>
                <div className="buy__item">
                    <img src={check} alt="check-icon" />
                    <span>هزاران انیمیشن و کارتون برای کودکان</span>
                </div>
                <div className="buy__item">
                    <img src={check} alt="check-icon" />
                    <span>پشتیبانی 24 ساعته برای راهنمایی شما</span>
                </div>
            </div>
            <button>
                <img  src={tv} alt="tv-logo" />
                 خرید اشتراک و تماشا</button>
        </div>
    );
};

export default Buy;
