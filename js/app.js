const hamMenu = document.querySelector(".menu-icon");

const offScreenMenu = document.querySelector(".nav-header-items");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});