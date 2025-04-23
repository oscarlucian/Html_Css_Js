const container = document.querySelectorAll("#container");
const custom_for_before = document.querySelector(".custom_for_before");
const register_btn = document.querySelector("#register_btn");
const login_btn = document.querySelector("#login_btn");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

register_btn.addEventListener("click", ()=> {
    custom_for_before .classList.add("change_style");
    left.classList.toggle("left-0");
    left.classList.toggle("left-[-50%]");
    right.classList.toggle("right-0");
    right.classList.toggle("right-[-50%]");
    container.forEach(function(visibelity) {
        visibelity.classList.toggle('invisible');
      });
  });

login_btn.addEventListener("click", ()=> {
    left.classList.toggle("left-0");
    left.classList.toggle("left-[-50%]");
    right.classList.toggle("right-0");
    right.classList.toggle("right-[-50%]");
    custom_for_before .classList.remove("change_style")
    container.forEach(function(visibelity) {
        visibelity.classList.toggle('invisible');
      });
  });


// Form Validation
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPw = document.getElementById("loginPw");
const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPw = document.getElementById("regPw");


loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("loginEmailError").innerText = "";
  document.getElementById("loginPwError").innerText = "";
  const email = loginEmail.value;
  const password = loginPw.value;

  if (email === "" && password === "") {
    document.getElementById("loginEmailError").innerText = "Email is required";
    document.getElementById("loginPwError").innerText = "Password is required";
    return;
  }

  if (email === "") {
    document.getElementById("loginEmailError").innerText = "Email is required";
    return;
  }

  if (password === "") {
    document.getElementById("loginPwError").innerText = "Password is required";
    return;
  }

  if (email !== "example@example.e") {
    document.getElementById("loginEmailError").innerText = "Incorrect email";

    if (password !== "admin123") {
      document.getElementById("loginPwError").innerText = "Incorrect password";
    }
    return;
  }

  window.location.href = "a/";
});

