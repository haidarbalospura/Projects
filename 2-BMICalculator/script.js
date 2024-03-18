const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 ||  isNaN(height)){
        result.innerHTML = "Please give a valid height"
    }

    else if(weight === '' || weight < 0 ||  isNaN(weight)){
        result.innerHTML = "Please give a valid weight"
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // result.innerHTML = `<span>${bmi}</span>`
        result.innerHTML =   bmi < 18.6
        ? `<span>${bmi}</span> <br> Underweight`
        : bmi > 18.6 && bmi <= 24.9
        ? `<span>${bmi}</span> <br> Normal Range`
        : `<span>${bmi}</span> <br> Overweight`;
    }
})