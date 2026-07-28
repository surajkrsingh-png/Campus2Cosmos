emailjs.init("bHgFjgnLkz8pZyyT6");  

// MENU BUTTON
let menu = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-top-middle");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//GALLERY BUTTON
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

// FAQ BUTTON
let questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("active");
  });
});

// INQUIRY FORM

let form = document.querySelector("#inquiry-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const studentClass = document.querySelector("#class").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "") {
    alert("please enter your name");
    return;
  }
  if (email === "") {
    alert("please enter your email");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  if (studentClass === "") {
    alert("Please enter your class");
    return;
  }

  if (subject === "") {
    alert("Please enter your subject");
    return;
  }

  if (message === "") {
    alert("Please enter your message");
    return;
  }

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
