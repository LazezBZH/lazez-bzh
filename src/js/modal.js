function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  if (slideIndex == 8) {
    slideIndex = 0;
  }
  showSlides(slideIndex++);
}
function minusSlides() {
  if (slideIndex == 1) {
    slideIndex = 9;
  }
  showSlides(slideIndex--);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < 8; i++) {
    slides[i].style.display = "none";
  }
  console.log(slideIndex);
  slides[slideIndex - 1].style.display = "flex";
}

const prev = document.querySelector(".prev");
const nxt = document.querySelector(".nxt");
const close = document.querySelector(".close");

close.addEventListener("click", closeModal);
prev.addEventListener("click", minusSlides);
nxt.addEventListener("click", plusSlides);
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    plusSlides();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    minusSlides();
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
