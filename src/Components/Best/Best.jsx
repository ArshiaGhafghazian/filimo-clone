import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { movieList, serieList } from "../../assets/movie/list";

//style:
import "./Best.css";
import BestDescription from "../BestDescription/BestDescription";

const Best = () => {
    const [toggle, setToggle] = useState(true);
    const [index, setIndex] = useState(0);
    console.log(index);
    return (
        <div className="best__container">
            <div className="wrapper">
                <div className="title">
                    <h2>محبوب‌ترین‌های فیلیمو</h2>
                    <div className="switch">
                        <Link
                            onClick={() => {
                                setToggle(!toggle);
                                setIndex(0);
                            }}
                            className={`switch__link ${toggle ? "active" : ""}`}
                        >
                            سریال
                        </Link>
                        <Link
                            onClick={() => {
                                setToggle(!toggle);
                                setIndex(0);
                            }}
                            className={`switch__link ${
                                !toggle ? "active" : ""
                            }`}
                        >
                            فیلم
                        </Link>
                    </div>
                </div>
            </div>
            <div className="best">
                {!toggle
                    ? movieList.map((item) => (
                          <Link>
                              <img
                                  className={index === item.id ? "active" : ""}
                                  src={item.thumb}
                                  key={item.id}
                                  alt={`item no ${item.id}`}
                                  onClick={() => setIndex(item.id)}
                              />
                          </Link>
                      ))
                    : serieList.map((item) => (
                          <Link>
                              <img
                                  className={index === item.id ? "active" : ""}
                                  src={item.thumb}
                                  key={item.id}
                                  alt={`item no ${item.id}`}
                                  onClick={() => setIndex(item.id)}
                              />
                          </Link>
                      ))}
            </div>
            <BestDescription toggle={toggle} index={index} />
        </div>
    );
};

export default Best;
