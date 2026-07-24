let menu = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-top-middle");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let buttons = document.querySelectorAll(".filter-btn");
let images = document.querySelectorAll(".gallery-item");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let category = button.dataset.filter;

    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    images.forEach(function (image) {
      if (category === "all" || image.classList.contains(category)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});