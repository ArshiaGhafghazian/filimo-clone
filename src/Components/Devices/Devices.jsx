import React from "react";

//images:
import deviceOne from "../../assets/pics/device01.png";
import deviceTwo from "../../assets/pics/device02.png";

//icons

import laptop from "../../assets/icons/laptop.webp";
import mobile from "../../assets/icons/mobile.webp";
import console from "../../assets/icons/game.webp";
import tv from "../../assets/icons/tv.png";

//style

import "./Devices.css";

const Devices = () => {
    return (
        <div className="devices__container">
            <img className="first__image" src={deviceOne} alt="device-one" />
            <img className="second__image" src={deviceTwo} alt="device-two" />
            <div className="titles__container">
                <h2>تماشای فیلیمو با همه دستگاه‌ها</h2>
                <p>
                    می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل
                    موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
                </p>
                <div className="pc__container">
                    <img src={laptop} alt="laptop" />
                    <div className="pc">
                        <h2>کامپیوتر و لپ‌تاپ</h2>
                        <p>windows PC - MacOS - Chorom OS</p>
                    </div>
                </div>
                <div className="pc__container">
                    <img src={mobile} alt="mobile" />
                    <div className="pc">
                        <h2>موبایل و تبلت</h2>
                        <p>
                            Android Phone & Tablets - Iphone and Ipad - Amazon
                            Fire Tablets
                        </p>
                    </div>
                </div>
                <div className="pc__container">
                    <img src={console} alt="console" />
                    <div className="pc">
                        <h2>کنسول‌های بازی (Browser)</h2>
                        <p>Xbox Series S - Xbox Seris X - PS5 - PS4</p>
                    </div>
                </div>
                <button className="buy__account">
                    <img src={tv} alt="tv-icon" />
                    خرید اشتراک فیلیمو
                </button>
            </div>
        </div>
    );
};

export default Devices;
