import React from "react";
import Slider from "../Slider/Slider";
import Best from "../Best/Best";
import Devices from "../Devices/Devices";
import Watch from "../Watch/Watch";
import Kids from "../Kids/Kids";
import Buy from "../Buy/Buy";
import Nav from "../Nav/Nav";

const Home = () => {
    return (
        <>
            <Nav />
            <Slider />
            <Best />
            <Devices />
            <Watch />
            <Kids />
            <Buy />
        </>
    );
};

export default Home;
