 // LogOut
const logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", () => {
  const confirmed = confirm("Do you want to logout?");
  if (confirmed) {
    window.location.href = "../";
  }
});
// Remove the # in getElementById
    let header = document.getElementById("header");

    function getTimePeriod() {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 0 && hours < 5) {
        return "Midnight";
      } else if (hours >= 5 && hours < 7) {
        return "Dawn";
      } else if (hours >= 7 && hours < 12) {
        return "Morning";
      } else if (hours >= 12 && hours < 17) {
        return "Afternoon";
      } else if (hours >= 17 && hours < 20) {
        return "Evening";
      } else {
        return "Night";
      }
    }

    function setBackgroundByTime() {
      const period = getTimePeriod();
      switch (period) {
        case "Midnight":
          header.style.backgroundColor = "#0b0c10";
          header.style.filter = "brightness(0.5) contrast(1.2)";
          break;
        case "Dawn":
          header.style.backgroundColor = "#fdd9a0";
          header.style.filter = "brightness(1.1) sepia(0.3)";
          break;
        case "Morning":
          header.style.backgroundColor = "#fff5b7";
          header.style.filter = "brightness(1.2)";
          break;
        case "Afternoon":
          header.style.backgroundColor = "#a0d8ef";
          header.style.filter = "brightness(1)";
          break;
        case "Evening":
          header.style.backgroundColor = "#f9a17d";
          header.style.filter = "sepia(0.2) contrast(1.1)";
          break;
        case "Night":
          header.style.backgroundColor = "#2c3e50";
          header.style.filter = "brightness(0.6) grayscale(0.2)";
          break;
      }
    }

    setBackgroundByTime();

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

// Chat To
let chatTo = document.querySelectorAll("#chatTo");
chatTo.forEach(e => {
  e.addEventListener("click", ()=>{
    window.location.href = "/Chat/chatTo.html";
  });
});


// popupPnP
let popupPnP = document.getElementById("popupPnP");
let btnPnP = document.getElementById("closeBtnPnP");


const pNp = () => {
    popupPnP?.classList.remove("hidden")
}

setTimeout(pNp, 2000);
btnPnP?.addEventListener("click", ()=>{
  popupPnP?.classList.add("hidden")
});

// Spotlight IndexSearch with keyboard Shortcut
const indexSearchBtn = document.getElementById("indexSearchBtn");
const indexSearchBar = document.getElementById("indexSearchBar");

indexSearchBtn?.addEventListener("click", () => {
  indexSearchBar.classList.remove("hidden");
});

indexSearchBar?.addEventListener("click", (e) => {
  if (e.target === indexSearchBar) {
    indexSearchBar.classList.add("hidden");
  }
});

window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "k") {
    e.preventDefault();
    indexSearchBar.classList.remove("hidden");
  }

  // Detect Escape key to hide the bar
  if (e.key === "Escape") {
    e.preventDefault();
    indexSearchBar.classList.add("hidden");
  }
});
// Dreak And Drop The Search Bar @ anywhere Of the Document
const searchBarDnD = document.getElementById("searchBarDnD");
searchBarDnD?.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "dragging");
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
  searchBarDnD.style.opacity = "0.5";
});

document.addEventListener("drop", (e) => {
  e.preventDefault();
  const offsetX = searchBarDnD.offsetWidth / 2;
  const offsetY = searchBarDnD.offsetHeight / 2;


  searchBarDnD.style.opacity = "1";
  searchBarDnD.style.position = "absolute";
  searchBarDnD.style.left = `${e.clientX - offsetX}px`;
  searchBarDnD.style.top = `${e.clientY - offsetY}px`;
});

// Noti
let notiPopupBtn = document.getElementById("notiPopupBtn");
let notiContactPopup = document.getElementById("notiContactPopup");
let notiCloseBtn = document.getElementById("notiCloseBtn");

notiPopupBtn?.addEventListener("click", ()=>{
  notiContactPopup.classList.remove("-bottom-[100%]");
  notiContactPopup.classList.add("bottom-1");
  notiPopupBtn.classList.add("hidden")
});

notiCloseBtn?.addEventListener("click", ()=>{
  notiContactPopup.classList.add("-bottom-[100%]");
  notiContactPopup.classList.remove("bottom-1");
  notiPopupBtn.classList.remove("hidden")
});


// Footer
let footerYear = document.getElementById("footerYear");
if(footerYear) {
  let getYear = new Date().getFullYear();
  footerYear.innerText = getYear;
};