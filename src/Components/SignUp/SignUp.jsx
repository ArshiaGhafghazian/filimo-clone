import React from "react";
import { Link, useNavigate } from "react-router-dom";

//Picures & Icons
import bgLogin from "../../assets/pics/login_background.webp";
import logo from "../../assets/icons/filimo_150.webp";
import logoText from "../../assets/icons/logo_text.webp";
import profile from "../../assets/icons/mobile.svg";

const SignUp = () => {
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
                        <div className="login__form__bottom">
                            <h4
                                style={{
                                    textAlign: "start",
                                    marginBottom: "30px",
                                    fontSize: "13px",
                                }}
                            >
                                ایجاد حساب کاربری
                            </h4>
                            <span>موبایل را وارد کنید</span>
                            <form style={{ marginBottom: "10px" }}>
                                <div className="first__wrapper">
                                    <div className="first__container">
                                        <img
                                            style={{ width: "20px" }}
                                            src={profile}
                                            alt="profile-icon"
                                        />
                                        <input
                                            type="text"
                                            placeholder="موبایل"
                                            style={{
                                                border: "none",
                                                padding: "10px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <button>ادامه</button>
                            </form>
                            <span>
                                <Link
                                    style={{
                                        cursor: "pointer",
                                        color: "rgb(21, 126, 234)",
                                    }}
                                >
                                    {" "}
                                    قوانین{" "}
                                </Link>
                                فیلیمو را مطالعه کرده‌ام و قبول دارم.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
