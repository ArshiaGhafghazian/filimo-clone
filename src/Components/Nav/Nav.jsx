import React from "react";
import { Link } from "react-router-dom";

//style:
import "./Nav.css";

//logo:
import Logo from "../../assets/logo/fa-filimo-dark-logo.webp";

//icons:
import searchIcon from "../../assets/icons/search.svg";
import filmoLogo from "../../assets/icons/filimo_150.webp";
import fireIcon from "../../assets/icons/fire.png";
import horseIcon from "../../assets/icons/icons8-rocking-horse-50.png";

//Component starts here =>

const Nav = () => {
    return (
        <div className="nav__container">
            <div className="list__container">
                <div className="logo__container">
                    <Link
                        className=" logo"
                        to="/filimo"
                        title="رفتن به صفحه اصلی فیلیمو"
                    >
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="links__container">
                    <Link>
                        <img
                            src={fireIcon}
                            alt="fire-icon"
                            className="fire__logo"
                        />
                        <span>فیلیموتور</span>
                    </Link>
                    {/* <Link>
                    <span>فیلم</span>
                </Link>
                <Link>
                    <span>سریال</span>
                </Link>
                <Link>
                    <span>ایرانی</span>
                </Link>

                <Link>
                    <img className="horse__icon" src={horseIcon} alt="horse" />
                    <span>کودک</span>
                </Link> */}
                    <Link>
                        <img
                            className="filimo__logo"
                            src={filmoLogo}
                            alt="logo"
                        />
                        <span>فیلیمومدرسه</span>
                    </Link>
                    {/* <Link>
                    <span>مجموعه‌ها</span>
                </Link> */}
                    <Link>
                        <img
                            className="search__icon"
                            src={searchIcon}
                            alt="search-icon"
                        />
                        <span>جستجو</span>
                    </Link>
                </div>
            </div>
            <div className="button__container">
                <button className="buy__account">خرید اشتراک فیلیمو</button>
                <button className="login__button">ورود</button>
            </div>
        </div>
    );
};

export default Nav;