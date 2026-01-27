var consentBox = 
    document.getElementById("consentBox");
const acceptButton1 = 
    document.querySelector(".consentButton");
const rejectButton1 = 
    document.querySelector(".rejectButton");

consentBox.style.visibility = "hidden";
var consentBoxState = localStorage.getItem('cookiebannerstate');

if(consentBoxState == null) {
    consentBox.style.visibility = "visible";

}
else {
   consentBox.style.visibility = "hidden";
}

    
acceptButton1.addEventListener("click", () => {
  localStorage.setItem('cookiebannerstate','accept')
  consentBox.style.visibility = "hidden";
  });

rejectButton1.addEventListener("click", () => {
  localStorage.setItem('cookiebannerstate','refuse')
  consentBox.style.visibility = "hidden";
  });




