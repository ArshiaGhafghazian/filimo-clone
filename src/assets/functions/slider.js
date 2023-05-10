import slideNoOne from "../slider/5xt18_desktop_1_v1.webp";
import slideNoTwo from "../slider/2kxvh_desktop_1_v1.jpeg";
import slideNoThree from "../slider/133827_desktop_1_v1.webp";
import slideNoFour from "../slider/a70l6_desktop_1_v2.webp";
import slideNoFive from "../slider/na8l6_desktop_1_v3.jpeg";
import slideNoSix from "../slider/owhe9_desktop_1_v3.jpeg";
import slideNoSeven from "../slider/v3r5b_desktop_1_v1.webp";
import slideNoEight from "../slider/pic1.webp";
import slideNoNine from "../slider/new_pic_dektop_2.webp";

export const slideList = [
    {
        url: slideNoOne,
    },
    {
        url: slideNoTwo,
    },
    {
        url: slideNoThree,
    },
    {
        url: slideNoFour,
    },
    {
        url: slideNoFive,
    },
    {
        url: slideNoSix,
    },
    {
        url: slideNoSeven,
    },
    {
        url: slideNoEight,
    },
    {
        url: slideNoNine,
    },
];

export const slider = (slideList, index) => slideList[index].url;
