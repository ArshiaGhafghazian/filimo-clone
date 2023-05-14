import React from "react";
import { Link } from "react-router-dom";

import { movieList, serieList } from "../../assets/movie/list";

//styles:
import "./BestDescription.css";

import cover from "../../assets/movie-pictures/series/cover01.webp";

import likeIcon from "../../assets/icons/like.svg";

const BestDescription = ({ toggle, index }) => {
    return (
        <div
            style={
                toggle
                    ? { background: `url(${serieList[index].cover})` }
                    : { background: `url(${movieList[index].cover})` }
            }
            className="best__description__container"
        >
            <div className="dark__gradient"></div>
            <div className="sdark__gradient"></div>
            <div className="bd__container">
                <div className="bd__wrapper">
                    <div className="bd__flex">
                        <Link className="best__title">
                            {toggle
                                ? `${serieList[index].title}`
                                : `${movieList[index].title}`}
                        </Link>
                        <span>
                            {toggle
                                ? `${serieList[index].episode}`
                                : `${movieList[index].episode}`}
                        </span>
                        <span>
                            کارگردان: 
                            {toggle
                                ? ` ${serieList[index].director}`
                                : ` ${movieList[index].director}`}
                        </span>

                        <div className="rating__wrapper">
                            <div className="rate__container">
                                <img src={likeIcon} alt="like-icon" />
                                <span>
                                    {toggle
                                        ? `${serieList[index].rate}`
                                        : `${movieList[index].rate}`}
                                        %
                                </span>
                            </div>
                            {toggle
                                ? serieList[index].tags.map((tag) => (
                                      <span>{tag}</span>
                                  ))
                                : movieList[index].tags.map((tag) => (
                                      <span>{tag}</span>
                                  ))}
                        </div>
                        <p>
                            {toggle
                                ? `${serieList[index].description}`
                                : `${movieList[index].description}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDescription;
