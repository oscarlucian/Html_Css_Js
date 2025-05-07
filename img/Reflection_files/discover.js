
// indexSearch
let indexSearchBtn = document.getElementById("indexSearchBtn");
let indexSearchBar = document.getElementById("indexSearchBar");
indexSearchBtn.addEventListener("click",()=>{
  indexSearchBar.classList.toggle("-top-[100%]");
  indexSearchBar.classList.toggle("top-[10%]");
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