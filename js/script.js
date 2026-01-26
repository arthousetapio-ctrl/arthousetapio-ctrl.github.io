const consentBox = 
    document.getElementById("consentBox");
const acceptBtn = 
    document.querySelector(".consentButton");
const rejectBtn = 
    document.querySelector(".rejectButton");


    
acceptBtn.addEventListener("click", () => {
  acceptBtn.classList.toggle("hide");
  });

acceptBtn.onclick = () => {
   localStorage.setItem('cookiebannerstate','accept')
    };



rejectBtn.onclick = () => {
   localStorage.setItem('cookiebannerstate','refuse')
    };


if (localStorage.getItem('cookiebannerstate') === 'accept') {
    
    consentBox.classList.toggle("hide");
}

if (localStorage.getItem('cookiebannerstate') === 'refuse') {
    consentBox.classList.toggle("hide");
}



const hamMenu = document.querySelector(".menu-icon");

const offScreenMenu = document.querySelector(".nav-header-items");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});