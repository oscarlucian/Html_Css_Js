 // LogOut
const logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", () => {
  const confirmed = confirm("Do you want to logout?");
  if (confirmed) {
    window.location.href = "../";
  }
});
// indexSearch
let indexSearchBtn = document.getElementById("indexSearchBtn");
let indexSearchBar = document.getElementById("indexSearchBar");
indexSearchBtn.addEventListener("click",()=>{
  indexSearchBar.classList.toggle("-top-[100%]");
  indexSearchBar.classList.toggle("top-[10%]");
});


// Menu
let linkLocation = window.location.pathname;
let hover_box = document.getElementById("hover_box");

//home page
if (linkLocation.endsWith("/a/index.html") || linkLocation.endsWith("/a/")) {
    hover_box.className = "absolute h-full w-18 bg-[#292d38] rounded-xl z-0 -translate-x-2 -translate-y-1";
    document.querySelector("#textColorHome").classList.add("text-[#ccc]");

}//discover page
else if (linkLocation.endsWith("/a/discover.html")) {
    hover_box.className = "absolute h-full left-[19.5%] w-21 bg-[#292d38] rounded-xl z-0 -translate-x-2 -translate-y-1";
    document.querySelector("#textColorDis").classList.add("text-[#ccc]");
}

// Profile
let btnProfile = document.querySelector("#btnProfile");
let ProfilePopUp = document.querySelector("#ProfilePopUp");
btnProfile.addEventListener("click", ()=>{
    ProfilePopUp.classList.toggle("scale-0")
    ProfilePopUp.classList.toggle("scale-[1]")
});

// Noti
let notiPopupBtn = document.getElementById("notiPopupBtn");
let notiContactPopup = document.getElementById("notiContactPopup");
let notiCloseBtn = document.getElementById("notiCloseBtn");

notiPopupBtn.addEventListener("click", ()=>{
  notiContactPopup.classList.remove("-bottom-[100%]");
  notiContactPopup.classList.add("bottom-1");
  notiPopupBtn.classList.add("hidden")
});

notiCloseBtn.addEventListener("click", ()=>{
  notiContactPopup.classList.add("-bottom-[100%]");
  notiContactPopup.classList.remove("bottom-1");
  notiPopupBtn.classList.remove("hidden")
});








// Footer
let footerYear = document.getElementById("footerYear");
let getYear = new Date().getFullYear();
footerYear.innerText = getYear;