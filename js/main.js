 // LogOut
const logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", () => {
  const confirmed = confirm("Do you want to logout?");
  if (confirmed) {
    window.location.href = "../";
  }
});


// Menu
let linkLocation = window.location.pathname;
let hover_box = document.getElementById("hover_box");

//home page
if (linkLocation.endsWith("/a/index.html") || linkLocation.endsWith("/a/")) {
    hover_box.className = "absolute h-full w-13 md:w-18 bg-[#292d38] rounded-xl z-0 -translate-x-2 -translate-y-1";
    document.querySelector("#textColorHome").classList.add("text-[#ccc]");

}//discover page
else if (linkLocation.endsWith("/a/discover.html")) {
    hover_box.className = "absolute h-full left-[16%] md:left-[19%] w-18 md:w-21 bg-[#292d38] rounded-xl z-0 -translate-x-2 -translate-y-1";
    document.querySelector("#textColorDis").classList.add("text-[#ccc]");
}

// Profile
let btnProfile = document.querySelector("#btnProfile");
let ProfilePopUp = document.querySelector("#ProfilePopUp");
btnProfile.addEventListener("click", ()=>{
    ProfilePopUp.classList.toggle("scale-0")
    ProfilePopUp.classList.toggle("scale-[1]")
});

