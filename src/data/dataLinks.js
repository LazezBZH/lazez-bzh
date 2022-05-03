import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import cv from "../assets/cv.svg";
import qui from "../assets/qui.svg";

const dataLinks = [
  {
    img: mail,
    alt: "icon mail",
    src: "mailto:lazez.bzh@caramail.fr",
    txt: "e-mail",
    target: "_blank",
  },
  {
    img: github,
    alt: "icon github",
    src: "https://github.com/LazezBZH",
    txt: "GitHub",
    target: "_blank",
  },
  {
    img: linkedin,
    alt: "icon linkedin",
    src: "https://www.linkedin.com/in/benedicte-herault/",
    txt: "Linkendin",
    target: "_blank",
  },
  {
    img: cv,
    alt: "icon cv",
    src: "https://lazez-bzh.netlify.app/cv",
    txt: "CV",
    txtb: "cv",
    target: "_self",
  },
  {
    img: qui,
    alt: "icon qui",
    src: "https://lazez-bzh.netlify.app/qui",
    txt: "pour en savoir plus",
    target: "_self",
  },
];

export default dataLinks;
