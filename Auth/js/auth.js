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
  });// Register Form Validation
  let isValid = true;
  
  const regForm = document.getElementById("regForm");
  const regName = document.getElementById("regName");
  const regEmail = document.getElementById("regEmail");
  const regPw = document.getElementById("regPw");
  
  const regNameError = document.querySelector("#regNameError");
  const regEmailError = document.querySelector("#regEmailError");
  const regPwError = document.querySelector("#regPwError");
  
  regForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Reset error messages
    regNameError.innerText = "";
    regEmailError.innerText = "";
    regPwError.innerText = ""; 
  
    // Reset isValid flag for each submission
    isValid = true;
    
    const name = regName.value;
    const email = regEmail.value;
    const password = regPw.value;
  
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex  = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const pwRegex  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  
    // Name check
    if (name.trim() === "") {
        isValid = false;
        regNameError.innerHTML = "Name is required";
    } else if (!nameRegex.test(name)) {
        isValid = false;
        regNameError.innerHTML = "Invalid User Name";
    }
  
    // Email check
    if (email.trim() === "") {
      isValid = false;
      regEmailError.innerHTML = "Email is required";
    } else if (!emailRegex.test(email)) {
      isValid = false;
      regEmailError.innerHTML = "Incorrect email";
    }
  
    // Password check
    if (password.trim() === "") {
      isValid = false;
      regPwError.innerHTML = "Password is required";
    } else if (!pwRegex.test(password)) {
      isValid = false;
      regPwError.innerHTML = "Password must include uppercase,lowercase,number,special character and be at 8 to 16 characters.";
    }
  
    // If valid, submit the form or show a success message
    if (isValid) {
      let welcomeModal = document.getElementById("welcomeModal");
      welcomeModal.innerHTML =
      `
        <div id="welcomeModal" class="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50">
          <div class="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center space-y-4 relative">
          
            <button  onclick="document.getElementById('welcomeModal').classList.add('hidden')"
                class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold">
                &times;
            </button>

            <h2 class="text-2xl font-bold text-gray-800">Hello! ${name}</h2>
            <small class="text-xl font-bold text-gray-800 m-2">Welcome You To Reflection</small>
            <p class="text-gray-600">
                We're thrilled you're here. Start exploring, connecting, and creating your space.
            </p>
            
            <div class="space-y-2">
                <button id="getStartBtn"
                    class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition">
                    Get Started
                </button>
                <button id="mayBeLater"
                class="w-full text-sm text-gray-500 hover:underline">
                Maybe Later
                </button>
            </div>
          </div>
        </div>
      `
      document.getElementById("getStartBtn").addEventListener("click", ()=>{
        window.location.href = "/a/"
      })
      document.getElementById("mayBeLater").addEventListener("click", ()=>{
        location.reload();
      })
    }
  });
  
  // Login Form Validation
  const loginForm = document.getElementById("loginForm");
  const loginEmail = document.getElementById("loginEmail");
  const loginPw = document.getElementById("loginPw");
  
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Reset error messages
    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPwError").innerText = "";
  
    const email = loginEmail.value;
    const password = loginPw.value;
  

    // Validation checks for login
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
  
    // Placeholder email/password validation for demo
    if (email !== "example@example.e") {
      document.getElementById("loginEmailError").innerText = "Incorrect email";
    }
  
    if (password !== "admin123") {
      document.getElementById("loginPwError").innerText = "Incorrect password";
    }
  
    // If valid, redirect to another page (you would validate with a real system here)
    if (email === "example@example.e" && password === "admin123") {
      window.location.href = "a/"; // Redirect after successful login
    }
  });
  