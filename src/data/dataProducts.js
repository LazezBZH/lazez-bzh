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
import argentbank1 from "../assets/argentbank1.png";
import argentbank2 from "../assets/argentbank2.png";
import hrnet1 from "../assets/hrnet1.png";
import hrnet2 from "../assets/hrnet2.png";
import npmmodal1 from "../assets/npmmodal1.png";
import npmmodal2 from "../assets/npmmodal2.png";

import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.svg";
import jest from "../assets/jest.png";
import figma from "../assets/figma.png";
import notion from "../assets/notion.png";
import agile from "../assets/agile.png";
import recharts from "../assets/recharts.png";
import npm from "../assets/npm.png";

const dataProducts = [
  {
    img1: reservia1,
    img2: reservia1,
    alt: "reservia",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_2_02122020/",
    title: "Transformez une maquette en site web avec HTML & CSS.",
    project: "Projet 2 de la formation développeur front-end OpenClassrooms",
    description: "Front-end site de réservation immo",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_2_02122020",
    tech1: html,
  },
  {
    img1: ohmyfood1,
    img2: ohmyfood2,
    alt: "Oh my food",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_3_11012021/",
    title: "Dynamiser une page web avec des animations CSS.",
    project: "Projet 3 de la formation développeur front-end OpenClassrooms",
    description: "Front-end site de réservation de restaurants",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_3_11012021",
    tech1: html,
  },
  {
    img1: gameon1,
    img2: gameon2,
    alt: "game on",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_4_11022021/",
    title: "Créer une landing page avec Javascript.",
    project: "Projet 4 de la formation développeur front-end OpenClassrooms.",
    description: "Manipulation du DOM avec JS, gestion des messages d'erreur",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_4_11022021",
    tech1: html,
    tech2: js,
  },
  {
    img1: fisheye1,
    img2: fisheye2,
    alt: "fisheye",
    src: "https://lazezbzh.github.io/BenedicteHERAULT_6_18032021/index.html",
    title: "Créer un site accessible pour une plateforme de photographes.",
    project: "Projet 6 de la formation développeur front-end OpenClassrooms",
    description:
      "Single page application, fonctions de tri et filtres, optimisation de la navigation au clavier et de l'utilsation d'un lecteur d'écran",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_6_18032021",
    tech1: html,
    tech2: js,
  },
  {
    img1: lespetitsplats1,
    img2: lespetitsplats2,
    alt: "les petits plats",
    src: "https://les-petits-plats-p7-dfe-oc-herault-benedicte.netlify.app/",
    title: "Développez un algorithme de recherche en JavaScript.",
    project: "Projet 7 de la formation développeur front-end OpenClassrooms",
    description:
      "Créer deux algorithmes pour une même fonction et comparer leurs performances",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_7_28052021",
    tech1: html,
    tech2: js,
  },
  {
    img1: billed1,
    img2: billed2,
    alt: "billed",
    src: "https://billed-p9-dfe-oc-herault-benedicte.netlify.app/",
    title: "Débuggez et testez un SaaS RH.",
    project: "Projet 9 de la formation développeur front-end OpenClassrooms: ",
    description: "Implémenter les tests sur un code pré-existant",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_9_30072021",
    tech1: js,
    tech2: jest,
  },
  {
    img1: learn1,
    img2: learn2,
    alt: "learn",
    src: "https://github.com/LazezBZH/BenedicteHERAULT_10_23082021/blob/main/README.md",
    title: "Définir les besoins pour une app de soutien scolaire.",
    project: "Projet 10 de la formation développeur front-end OpenClassrooms",
    description:
      "Maquettage, gestion de projet, pas de code pour ce projet: on prépare le travail de la team dev",
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
    title: "Front-end d'un site de locations meublées.",
    project: "Projet 11 de la formation développeur front-end OpenClassrooms",
    description: "Première utilisation de React, découverte du framework",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_11_12092021",
    tech1: js,
    tech2: react,
  },
  {
    img1: sportsee1,
    img2: sportsee2,
    alt: "sportsee",
    src: "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/",
    title: "Dashboard pour une application de coaching sportif.",
    project: "Projet 12 de la formation développeur front-end OpenClassrooms",
    description:
      "Récupération des données utilsateurs et affichage de celles-ci dans des schémas de synthèse",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_12_27092021",
    tech1: js,
    tech2: react,
    tech3: recharts,
  },
  {
    img1: argentbank1,
    img2: argentbank2,
    alt: "hnet",
    src: "https://github.com/LazezBZH/BenedicteHERAULT_13_20102021/blob/main/README.md",
    title: "Utiliser une API pour un compte utilisateur bancaire avec React.",
    project: "Projet 13 de la formation développeur front-end OpenClassrooms",
    description:
      "Récupération des données externes et affichage de celles-ci dans l'application",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_13_20102021",
    tech1: js,
    tech2: react,
    tech3: redux,
  },
  {
    img1: npmmodal1,
    img2: npmmodal2,
    alt: "npm modal",
    src: "https://www.npmjs.com/package/customizable-react-modal-by-lazez",
    title: "Créer et publier un composant npm.",
    project: "Projet 14 de la formation développeur front-end OpenClassrooms",
    description: "Composant créé et publié donc réutilisable par tous",
    git: "https://github.com/LazezBZH/customizable-react-modal-lazez",
    tech1: js,
    tech2: react,
    tech3: npm,
  },
  {
    img1: hrnet1,
    img2: hrnet2,
    alt: "hnet",
    src: "https://hrnet-p14-dfe-oc-herault-benedicte.netlify.app/",
    title: "Faire passer une librairie jQuery vers React.",
    project: "Projet 14 de la formation développeur front-end OpenClassrooms",
    description:
      "Réduire la dette technologique en adaptant un ancien code à un outil plus moderne",
    git: "https://github.com/LazezBZH/BenedicteHERAULT_14_23112021",
    tech1: js,
    tech2: react,
    tech3: redux,
  },
  {
    img1: marie1,
    img2: marie2,
    alt: "Marie Aballea",
    src: "https://www.marieaballea.fr/",
    title: "Site vitrine bilingue.",
    project:
      "(c'est une amie, si vous avez besoin n'hésitez pas, je vous la recommande)",
    description:
      "Elle m'a laisser libre dans les choix du design et a de suite validé",
    git: "https://github.com/LazezBZH/Site-Marie",
    tech1: html,
  },
];

export default dataProducts.reverse();
