function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > 8) {
    slideIndex = 1;
  }
  if (n == 0) {
    slideIndex = 8;
  }
  for (let i = 0; i < 8; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

const prev = document.querySelector(".prev");
const nxt = document.querySelector(".nxt");
const close = document.querySelector(".close");

close.addEventListener("click", closeModal);
prev.addEventListener("click", plusSlides(-1));
nxt.addEventListener("click", plusSlides(1));
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    plusSlides(1);
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    plusSlides(-1);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
});
close.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    closeModal();
  }
});

const openModalBtn = document.querySelectorAll(".project-btn");

// openModalBtn.addEventListener("click", openModal)

openModalBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let index = btn.dataset.id;
    openModal();
    currentSlide(index);
  });
});
