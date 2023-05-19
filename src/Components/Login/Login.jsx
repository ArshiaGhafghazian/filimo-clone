import React from "react";
import { Link, useNavigate } from "react-router-dom";

//style:
import "./Login.css";

//Picures & Icons
import bgLogin from "../../assets/pics/login_background.webp";
import logo from "../../assets/icons/filimo_150.webp";
import logoText from "../../assets/icons/logo_text.webp";

import profile from "../../assets/icons/profile.svg";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div
            className="login__container"
            style={{ background: `url(${bgLogin})` }}
        >
            <div className="login__wrapper">
                <div onClick={() => navigate("/")} className="login__logo">
                    <div className="login_logo_container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="login_logo_container">
                        <img src={logoText} alt="logo-text" />
                    </div>
                </div>
                <div className="login__form__container">
                    <div className="login__return__button">
                        <Link>
                            <button onClick={() => navigate(-1)}>بازگشت</button>
                        </Link>
                    </div>
                    <div className="login__form">
                        <div className="login__form__top">
                            <span>
                                اگر در فیلیمو حساب کاربری ندارید، ثبت نام کنید:
                            </span>
                            <Link to="/signup">
                                <button>ایجاد حساب کاربری</button>
                            </Link>
                        </div>
                        <div className="login__form__bottom">
                            <span>
                                اگر در فیلیمو حساب کاربری دارید، وارد شوید:
                            </span>
                            <form>
                                <div className="first__wrapper">
                                    <div className="first__container">
                                        <img src={profile} alt="profile-icon" />
                                        <input
                                            type="text"
                                            placeholder="ایمیل یا موبایل یا نام کاربری"
                                        />
                                    </div>
                                    <div className="second__container">
                                        <Link>فراموش کردید؟</Link>
                                    </div>
                                </div>
                                <button>ورود</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
