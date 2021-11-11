import marie1 from "../assets/marie1.jpg";
import marie2 from "../assets/marie2.jpg";
import reservia1 from "../assets/reservia1.jpg";
import ohmyfood1 from "../assets/ohmyfood1.jpg";
import ohmyfood2 from "../assets/ohmyfood2.jpg";
import gameon1 from "../assets/gameon1.jpg";
import gameon2 from "../assets/gameon2.jpg";
import fisheye1 from "../assets/fisheye1.jpg";
import fisheye2 from "../assets/fisheye2.jpg";
import lespetitsplats1 from "../assets/lespetitsplats1.jpg";
import lespetitsplats2 from "../assets/lespetitsplats2.jpg";
import billed1 from "../assets/billed1.jpg";
import billed2 from "../assets/billed2.jpg";
import learn1 from "../assets/learn1.jpg";
import learn2 from "../assets/learn2.jpg";
import kasa1 from "../assets/kasa1.jpg";
import kasa2 from "../assets/kasa2.jpg";
import sportsee1 from "../assets/sportsee1.jpg";
import sportsee2 from "../assets/sportsee2.jpg";

import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
//import redux from "../assets/redux.svg";
import jest from "../assets/jest.png";
import figma from "../assets/figma.png";
import notion from "../assets/notion.png";
import agile from "../assets/agile.png";
import recharts from "../assets/recharts.png";

const dataProducts = [
  {
    img1: reservia1,
    img2: reservia1,
    alt: "reservia",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_2_02122020/",
    txt: "Projet 2 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_2_02122020",
    tech1: html,
  },
  {
    img1: ohmyfood1,
    img2: ohmyfood2,
    alt: "Oh my food",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_3_11012021/",
    txt: "Projet 3 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_3_11012021",
    tech1: html,
  },
  {
    img1: gameon1,
    img2: gameon2,
    alt: "game on",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_4_11022021/",
    txt: "Projet 4 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_4_11022021",
    tech1: html,
    tech2: js,
  },
  {
    img1: fisheye1,
    img2: fisheye2,
    alt: "fisheye",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_6_18032021/index.html",
    txt: "Projet 6 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_6_18032021",
    tech1: html,
    tech2: js,
  },
  {
    img1: lespetitsplats1,
    img2: lespetitsplats2,
    alt: "les petits plats",
    src: "https://les-petits-plats-p7-dfe-oc-herault-benedicte.netlify.app/",
    txt: "Projet 7 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_7_28052021",
    tech1: html,
    tech2: js,
  },
  {
    img1: billed1,
    img2: billed2,
    alt: "billed",
    src: "https://billed-p9-dfe-oc-herault-benedicte.netlify.app/",
    txt: "Projet 9 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_9_30072021",
    tech1: js,
    tech2: jest,
  },
  {
    img1: learn1,
    img2: learn2,
    alt: "learn",
    src: "https://github.com/LazezBZH/BenedicteHERAULT_10_23082021/blob/main/README.md",
    txt: "Projet 10 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_10_23082021",
    tech1: figma,
    tech2: notion,
    tech3: agile,
  },
  {
    img1: kasa1,
    img2: kasa2,
    alt: "kasa",
    src: "https://kasa-p11-dfe-oc-herault-benedicte.netlify.app/",
    txt: "Projet 11 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_11_12092021",
    tech1: js,
    tech2: react,
  },
  {
    img1: sportsee1,
    img2: sportsee2,
    alt: "sportsee",
    src: "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/",
    txt: "Projet 12 de la formation développeur front-end OpenClassrooms",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_12_27092021",
    tech1: js,
    tech2: react,
    tech3: recharts,
  },
  {
    img1: marie1,
    img2: marie2,
    alt: "Marie Aballea",
    src: "https://www.marieaballea.fr/",
    txt: "Site vitrine bilangue",
    tech1: html,
  },
];

export default dataProducts.reverse();
