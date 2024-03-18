// window.addEventListener("scroll",()=>{
//   if(window.pageYOffset > 191)
//     document.querySelector("nav").classList.add("sticky");
//   else
//     document.querySelector("nav").classList.remove("sticky");
// });
window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

window.addEventListener("scroll", () => {
  const menuBar = document.querySelector("#menu-bar");
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 190) {
    menuBar.classList.add("sticky");
    document.body.style.paddingTop = menuBar.offsetHeight + "px";
  } else {
    menuBar.classList.remove("sticky");
    document.body.style.paddingTop = 0;
  }
});

