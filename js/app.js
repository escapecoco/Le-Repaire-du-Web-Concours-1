const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})

const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box2.addEventListener('click', () => {

    console.log('LOL');
    box3.classList.toggle('active-box')


})

/*
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/