const menuBtn = document.querySelector("button");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
