import React, { useState } from "react";
import { Link } from "react-router-dom";

import { movieList } from "../../assets/movie/list"

//style:
import "./Best.css";

const Best = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className="best__container">
            <div className="title">
                <h2>محبوب‌ترین‌های فیلیمو</h2>
                <div className="switch">
                    <Link
                        onClick={() => setToggle(!toggle)}
                        className={`switch__link ${toggle ? "active" : ""}`}
                    >
                        سریال
                    </Link>
                    <Link
                        onClick={() => setToggle(!toggle)}
                        className={`switch__link ${!toggle ? "active" : ""}`}
                    >
                        فیلم
                    </Link>
                </div>
            </div>
            <div className="best" onMouseMove={(e)=>console.log(e.pageX)}>
                {toggle ?
                movieList[0].map(item=> <Link><img src={item.thumb} /></Link>) :
                movieList[1].map(item=> <Link><img src={item.thumb} /></Link>)
                }
            </div>
        </div>
    );
};

export default Best;
