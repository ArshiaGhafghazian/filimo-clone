import React, { useState, useEffect } from "react";

//styles:
import "./slider.css";
import "./SliderResponsive.css";

//icons:
import off50 from "../../assets/icons/ordibehesht-off.webp";
import copy from "../../assets/icons/copy-icon.svg";
import check from "../../assets/icons/done.svg";
import gift from "../../assets/icons/gift.svg";


//functions:
import { slider, slideList } from "../../assets/functions/slider";

const Slider = () => {
    const [index, setIndex] = useState(0);
    console.log(index);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < slideList.length - 1) {
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setIndex(0);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div
            className="slider"
            style={{
                backgroundImage: `url(${slider(slideList, index)})`,
            }}
        >
            <div className="dark"></div>
            <div className="off">
                <img src={off50} alt="off" />
                <p className="off__description">
                    فرصت اردیبهشتی ها تا
                    <span> 50% تخفیف </span>
                    خرید اشتراک فیلیمو از
                    <span> 10 تا 20 اردیبهشت</span>
                </p>
                <div className="discount__button__container">
                    <button className="discount">
                        کد تخفیف: maral50
                        <img src={copy} alt="" />
                    </button>
                </div>
            </div>
            <div className="three__items">
                <div className="item">
                    <img src={check} alt="check-icon" />
                    <span>۸۵ هزار اپیزود فیلم و سریال برای تماشا داری</span>
                </div>
                <div className="item">
                    <img src={check} alt="check-icon" />
                    <span>می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی</span>
                </div>
                <div className="item">
                    <img src={check} alt="check-icon" />
                    <span>می‌تونی یک عضو، مخصوص تماشای کودک بسازی</span>
                </div>
            </div>
            <div className="buy__new__account">
                <button>خرید اشتراک و تماشا </button>
                <div>
                    <img src={gift} alt="gift-icon" />
                    <span>
                        تخفیف ویژه برای کاربران جدید
                    </span>
                </div>
            </div>
            {/* <button
                onClick={() => {
                    if (index < 6) {
                        setIndex((index) => index + 1);
                    } else {
                        setIndex(0);
                    }
                }}
            >
                click
            </button> */}
        </div>
    );
};

export default Slider;
