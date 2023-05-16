import React from "react";

import TVBG from "../../assets/pics/TVBG.png";
import TVSM from "../../assets/pics/TVSM.webp";
import androidTV from "../../assets/icons/androidTV.webp";
import laptop from "../../assets/icons/laptop.webp";

//style

import "./Watch.css";

const Watch = () => {
    return (
        <div className="watch__container">
            <div className="watch__image__container">
                <img className="tvbg" src={TVBG} alt="tv-big" />
            </div>
            <div className="watch__title__container">
                <h2>چطور با تلویزیون، فیلیمو تماشا کنم؟</h2>
                <p>
                    ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6
                    روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی
                    دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی
                    که با تلویزیون شما سازگار است را انتخاب کنید.
                </p>
                <img className="tvsm" src={TVSM} alt="tv-small" />
                <div className="tv__container">
                    <img src={laptop} alt="tv" />
                    <div className="tv">
                        <h2>تلویزیون</h2>
                        <p>
                            Amazon Fire TV - LG TVs - Chrome Cast - Apple TV -
                            Android TV devices - Samsung
                        </p>
                    </div>
                </div>
                <div className="tv__container">
                    <img src={androidTV} alt="android-tv" />
                    <div className="tv">
                        <h2>اندروید تی‌وی</h2>
                        <p>
                            NVIDIA - amazon - xiaomi - minix - skystream -
                            turewell - ematic - humax - matricom
                        </p>
                    </div>
                </div>
                <button>ویدیوهای آموزشی تماشا با تلویزیون </button>
            </div>
        </div>
    );
};

export default Watch;
