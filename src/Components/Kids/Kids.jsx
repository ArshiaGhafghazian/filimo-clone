import React from "react";

//styles::
import "./Kids.css";

//pics::
import KidsPic from "../../assets/pics/bg-kids.png";

const Kids = () => {
    return (
        <div className="kids__container">
            <div className="kids__image__container">
                <img src={KidsPic} alt="kids" />
            </div>
            <div className="kids__title__container">
                <h2>دنیایی متنوع از فیلم و کارتون‌های کودکانه</h2>
                <p>
                    ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن
                    فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای
                    مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی
                    نداشته‌باشد.
                </p>
                <div className="kids__button__container">
                    <button>فیلیمو کودک بساز</button>
                    <button>تماشای فیلیمو کودک</button>
                </div>
            </div>
        </div>
    );
};

export default Kids;
