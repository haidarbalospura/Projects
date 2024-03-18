const clock = document.querySelector("#clock")
// local strng isused for converting time to 12 hour format
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)