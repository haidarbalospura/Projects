// this is used for preventig to watch the code of the website
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// this is used for preventig to watch the code of the website
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'I' || e.key === "i") {
    e.preventDefault();
  }
  else if (e.ctrlKey && e.key === "u" || e.key === "U") {
    e.preventDefault();
  }
  else if (e.key === "F12") {
    e.preventDefault();
  }
});

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const colorInput = document.getElementById('color-input');
const changeColorBtn = document.getElementById('change-color');


// this is used for changing the color of the website using loop  to add the event listener to all the buttons means color
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const color = e.target.id;
    changeBackgroundColor(color);
  });
});


changeColorBtn.addEventListener('click', () => {
  const color = colorInput.value;
  changeBackgroundColor(color);
});

function changeBackgroundColor(color) {
  if (color === 'white' || color === 'yellow') {
    body.style.backgroundColor = color;
    const textColor = 'black';
    body.style.color = textColor;
  }
  else {
    body.style.backgroundColor = color;
    const textColor = isColorDark(color) ? 'white' : 'black';
    body.style.color = textColor;
  }

}

function isColorDark(color) {
  // Convert color to RGB
  const rgb = hexToRgb(color);

  // Calculate the relative luminance (brightness) of the color
  // based on the formula recommended by the WCAG
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  // Return true if the luminance is less than or equal to 0.5,
  // indicating a dark color
  return luminance <= 0.5;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}


// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')
// const colorInput = document.getElementById('color-input');
// const changeColorBtn = document.getElementById('change-color');


// buttons.forEach((button) =>{
//     // button.addEventListener('click',(e) =>{

//     //     // if(e.target.id === 'gray'){
//     //     //     body.style.backgroundColor = e.target.id;
//     //     // }
//     //     // else if(e.target.id === 'white'){
//     //     //     body.style.backgroundColor = e.target.id;
//     //     // }
//     //     // else if(e.target.id === 'blue'){
//     //     //     body.style.backgroundColor = e.target.id;
//     //     // }
//     //     // else{
//     //     //     body.style.backgroundColor = e.target.id;
//     //     // }

//     //     body.style.backgroundColor = e.target.id === 'gray' ? 'gray' : e.target.id === 'white' ? 'white' : e.target.id === 'blue' ? 'blue' : e.target.id;


//     // })
//     buttons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//           const color = e.target.id;
//           changeBackgroundColor(color);
//         });
//       });

//       changeColorBtn.addEventListener('click', () => {
//         const color = colorInput.value;
//         changeBackgroundColor(color);
//       });

//       function changeBackgroundColor(color) {
//         body.style.backgroundColor = color;
//       }
// })

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');
// const colorInput = document.getElementById('color-input');
// const changeColorBtn = document.getElementById('change-color');

// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const color = e.target.id;
//     changeBackgroundColor(color);
//   });
// });

// changeColorBtn.addEventListener('click', () => {
//   const color = colorInput.value;
//   changeBackgroundColor(color);
// });

// function changeBackgroundColor(color) {
//   body.style.backgroundColor = color;
//   const textColor = isColorDark(color) ? 'white' : 'black';
//   body.style.color = textColor;
// }

// function isColorDark(color) {
//   // Convert color to RGB
//   const rgb = hexToRgb(color);

//   // Calculate the relative luminance (brightness) of the color
//   // based on the formula recommended by the WCAG
//   const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

//   // Return true if the luminance is less than or equal to 0.5,
//   // indicating a dark color
//   return luminance <= 0.5;
// }

// function hexToRgb(hex) {
//   const bigint = parseInt(hex.slice(1), 16);
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   return { r, g, b };
// }