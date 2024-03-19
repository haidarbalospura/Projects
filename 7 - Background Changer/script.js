function changeBg(color){
  if(color==='black' || color==='white'){
    if(color==='black'){
      document.querySelector('p').style.color = 'white';
      document.querySelector('h1').style.color = 'white';
    }

    else
      document.querySelector('p').style.color = 'black';
  }
  document.body.style.backgroundColor = color;
}