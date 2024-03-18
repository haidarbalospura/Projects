let cel = document.getElementById('cel');
let fah = document.getElementById('fah');
let formula = document.getElementById('formula');

cel.addEventListener('input', () => {
  updateFormula(cel.value, 'C');
});

fah.addEventListener('input', () => {
  updateFormula(fah.value, 'F');
});
function updateFormula(value, unit) {
  if (value !== "") {
    let convertedValue, formulaText;

    if (unit === 'C') {
      const valueInExponential = Number(value).toExponential(3);
      convertedValue = (value * 9 / 5) + 32;
      formulaText = `(${valueInExponential}°C × 9/5) + 32 = ${convertedValue.toExponential(3)}°F`;
      fah.value = convertedValue.toFixed(4);
    } else {
      const valueInExponential = Number(value).toExponential(3);
      convertedValue = (value - 32) * 5 / 9;
      const convertedValueInExponential = Number(convertedValue).toExponential(3);
      formulaText = `(${convertedValueInExponential}°C × 9/5) + 32 = ${valueInExponential}°F`;
      cel.value = convertedValue.toFixed(4);
    }

    formula.textContent = formulaText;
  } else {
    fah.value = "";
    cel.value = "";
    formula.textContent = `(°C × 9/5) + 32 = °F`;
  }
}
















// function updateFormula(value, unit) {
//   if (value !== "") {
//     let convertedValue, formulaText;

//     if (unit === 'C') {
//       convertedValue = (value * 9/5) + 32;
//       formulaText = `(${value}°C * 9/5) + 32 = ${convertedValue.toFixed(1)}°F`;
//       fah.value = convertedValue.toFixed(4);
//     } else {
//       convertedValue = (value - 32) * 5/9;
//       formulaText = `(${convertedValue.toFixed(1)}°C * 9/5) + 32 = ${value}°F`;
//       cel.value = convertedValue.toFixed(4);
//     }

//     formula.textContent = formulaText;
//   } else {
//     fah.value = "";
//     cel.value = "";
//     formula.textContent = `(°C * 9/5) + 32 = °F`;
//   }
// }

