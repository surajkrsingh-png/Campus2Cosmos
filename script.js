console.log("Script Loaded");
if (typeof emailjs !== "undefined") {
  emailjs.init("bHgFjgnLkz8pZyyT6");
}

// MENU BUTTON
let menu = document.querySelector(".menu");
let navMidLinks = document.querySelector(".nav-top-middle");

menu.addEventListener("click", () => {
  navMidLinks.classList.toggle("active");
});

//GALLERY BUTTON
let buttons = document.querySelectorAll(".filter-btn");
let images = document.querySelectorAll(".gallery-item");

console.log("Buttons:", buttons.length);
console.log("Images:", images.length);

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

// FAQ BUTTON
let questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("active");
  });
});

// INQUIRY FORM
let form = document.querySelector("#inquiry-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const studentClass = document.querySelector("#class").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    // all  validation code

    emailjs
      .send("service_me8zy88", "template_u4eqepj", {
        name: name,
        email: email,
        phone: phone,
        studentClass: studentClass,
        subject: subject,
        message: message,
      })
      .then(function () {
        alert("Inquiry sent successfully!");
        form.reset();
      })
      .catch(function (error) {
        alert("Failed to send inquiry.");
        console.log(error);
      });
  });
}

let navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks.length);
let currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(function (link) {
  let linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});