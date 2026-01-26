const consentBox = 
    document.getElementById("consentBox");
const acceptButton1 = 
    document.querySelector(".consentButton");
const rejectButton1 = 
    document.querySelector(".rejectButton");

if (localStorage.getItem('cookiebannerstate') === 'accept') {
    
    consentBox.classList.toggle("hide");
}

if (localStorage.getItem('cookiebannerstate') === 'refuse') {
    consentBox.classList.toggle("hide");
}
    
acceptButton1.addEventListener("click", () => {
  consentBox.classList.toggle("hide");
  localStorage.setItem('cookiebannerstate','accept')
  });

rejectButton1.addEventListener("click", () => {
  consentBox.classList.toggle("hide");
  localStorage.setItem('cookiebannerstate','refuse')
  });




