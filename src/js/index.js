const transition = document.querySelector(".transition");
setTimeout(function () {
  transition.classList.remove("active");
}, 200);

const liens = document.querySelectorAll("nav a");
for (i = 0; i < liens.length; i++) {
  let lien = liens[i];

  lien.addEventListener("click", function (e) {
    e.preventDefault();
    const lienclic = e.target.href;
    console.log(lienclic);
    transition.classList.add("active");

    setTimeout(function () {
      window.location.href = lienclic;
    }, 200);
  });
}

// let url = window.location.href;
let path = window.location.pathname;
console.log(path);
const navIndex = document.querySelector(".navIndex");
const navRea = document.querySelector(".navRea");
const navParc = document.querySelector(".navParc");
const navCont = document.querySelector(".navCont");

window.addEventListener("load", changeNav);
// console.log(url);

function changeNav() {
  if (path == "/" || path == "/index.html") {
    navIndex.style.backgroundColor = "var(--secondaireLow)";
    navRea.style.backgroundColor = "transparent";
    navParc.style.backgroundColor = "transparent";
    navCont.style.backgroundColor = "transparent";
  }

  if (path == "/realisations.html") {
    navIndex.style.backgroundColor = "transparent";
    navRea.style.backgroundColor = "var(--secondaireLow)";
    navParc.style.backgroundColor = "transparent";
    navCont.style.backgroundColor = "transparent";
  }

  if (path == "/parcours.html") {
    navIndex.style.backgroundColor = "transparent";
    navRea.style.backgroundColor = "transparent";
    navParc.style.backgroundColor = "var(--secondaireLow)";
    navCont.style.backgroundColor = "transparent";
  }

  if (path == "/contact.html") {
    navIndex.style.backgroundColor = "transparent";
    navRea.style.backgroundColor = "transparent";
    navParc.style.backgroundColor = "transparent";
    navCont.style.backgroundColor = "var(--secondaireLow)";
  }
}
