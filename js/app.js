const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

//-------------------------

const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const fadeout = document.querySelector('.box2 p')

box2.addEventListener('click', () => {
    box3.classList.toggle('active-box')
    fadeout.classList.add('fade-out')
})

//-------------------------

let box1 = document.querySelector('.box1');
let box2_p = document.querySelector('.box2 p');
let box3_p = document.querySelector('.box3 p')
let box3_a = document.querySelector('.box3 a');
let lava = document.querySelector('.lava');
let ice = document.querySelector('.ice');
let wind = document.querySelector('.wind');
let lavabiome = document.querySelector('.lava-biome');
let icebiome = document.querySelector('.ice-biome');
let windbiome = document.querySelector('.wind-biome');


lava.onclick = function(){
    counter = 1;
    func1();
};
ice.onclick = function(){
    counter = 2;
    func1();
};
wind.onclick = function(){
    counter = 3;
    func1();
};

function func1(){
    console.log(counter);
    const switch1 = counter;

    switch (switch1) {
    case 1:
        //lava
        box1.classList.remove('ice-textshadow', 'wind-textshadow');
        box1.classList.add('lava-textshadow');
        box1.innerHTML = '<p>LAVA</p><p>BIOME</p>';
        box3_p.classList.remove('ice-textshadow', 'wind-textshadow');
        box3_p.classList.add('lava-textshadow');
        box3_a.style.background = "#cf1020";
        icebiome.style.position = "absolute";
        icebiome.style.opacity = "0"
        windbiome.style.position = "absolute"
        windbiome.style.opacity = "0";
        lavabiome.style.position = "initial";
        lavabiome.style.opacity = "1";
        box2_p.style.color = "white"
        lavabiome.style.pointerEvents = "initial";
        icebiome.style.pointerEvents = "none";
        windbiome.style.pointerEvents = "none";
        break;
    case 2:
        //ice
        box1.classList.remove('wind-textshadow', 'lava-textshadow');
        box1.classList.add('ice-textshadow');
        box1.innerHTML = '<p>ICE</p><p>BIOME</p>';
        box3_p.classList.remove('wind-textshadow', 'lava-textshadow');
        box3_p.classList.add('ice-textshadow');
        box3_a.style.background = "#71D0D2";
        lavabiome.style.position = "absolute";
        lavabiome.style.opacity = "0"
        windbiome.style.position = "absolute"
        windbiome.style.opacity = "0";
        icebiome.style.position = "initial";
        icebiome.style.opacity = "1";
        box2_p.style.color = "black"
        icebiome.style.pointerEvents = "initial";
        lavabiome.style.pointerEvents = "none";
        windbiome.style.pointerEvents = "none";
        break;
    case 3:
        //wind
        box1.classList.remove('ice-textshadow', 'lava-textshadow');
        box1.classList.add('wind-textshadow');
        box1.innerHTML = '<p>WIND</p><p>BIOME</p>';
        box3_p.classList.remove('ice-textshadow', 'lava-textshadow');
        box3_p.classList.add('wind-textshadow');
        box3_a.style.background = "#7cc053";
        lavabiome.style.position = "absolute";
        lavabiome.style.opacity = "0";
        icebiome.style.position = "absolute";
        icebiome.style.opacity = "0";
        windbiome.style.position = "initial";
        windbiome.style.opacity = "1";
        box2_p.style.color = "black"
        windbiome.style.pointerEvents = "initial";
        lavabiome.style.pointerEvents = "none";
        icebiome.style.pointerEvents = "none";
        break;
    }
}
