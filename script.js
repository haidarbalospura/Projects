// The DOMContentLoaded and load events are both events in the Document Object Model (DOM) that are related to the loading of a web page, but they occur at different stages of the process.
// load Event:

// This event is fired when the entire page, including all external resources like images and stylesheets, has been fully loaded.
// It is typically used when you need to ensure that all resources are available before executing certain actions.

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})
document.addEventListener("load", function() {
  const projectLinks = document.querySelectorAll(".ag-courses-item_link");
  projectLinks.forEach(link => {
    link.addEventListener("click", function() {
      link.classList.remove("hovered");
    });
  });
});
document.addEventListener('load', function() {
  const h1 = document.querySelector('.autoJs')
  setTimeout(() => {
    h1.click();
    console.log("h1 clicked");
  }, 100); // Adjust the interval as neede
});


// DOMContentLoaded Event:

// This event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// It is often used to execute JavaScript code that manipulates the DOM or performs actions related to the document structure.
// It is triggered once the DOM tree is fully constructed, but before all external resources (like images and stylesheets) are loaded.
// document.addEventListener("DOMContentLoaded", function() {
//   const projectLinks = document.querySelectorAll(".ag-courses-item_link");
//   projectLinks.forEach(link => {
//     link.addEventListener("click", function() {
//       link.classList.remove("hovered");
//     });
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   const h1 = document.querySelector('.autoJs')
//   setTimeout(() => {
//     h1.click();
//     console.log("h1 clicked");
//   }, 100); // Adjust the interval as neede
// });
