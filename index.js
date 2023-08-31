const menuIcon = document.querySelector(".menuicon");
const topHead = document.querySelector(".tophead");

menuIcon.addEventListener("click", () => {
  topHead.classList.toggle("menuactive");
  menuIcon.classList.toggle("fa-times");
});
