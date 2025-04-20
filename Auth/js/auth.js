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
const loginForm = document.getElementById("loginForm")
const loginEmail = document.getElementById("loginEmail");
const loginPw = document.getElementById("loginPw");
const regName = document.getElementById("loginName");
const regEmail = document.getElementById("regEmail");
const regPw = document.getElementById("regPw");
// login

loginForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(loginEmail.value === "" && loginPw.value === ""){
    document.getElementById("loginPwError").innerText = "Password is required";
    document.getElementById("loginEmailError").innerText = "Email is required";

  }else{    
    if (loginEmail.value === "") {
      document.getElementById("loginEmailError").innerText = "Email is required";
    }else if (loginPw.value === "") {
        document.getElementById("loginPwError").innerText = "Password is required";
    }else {
      document.getElementById("loginEmailError").innerText = "";
  
      function redirect(url) {
        window.location.href = url;
      }
        redirect("a/");
    }
  }
});