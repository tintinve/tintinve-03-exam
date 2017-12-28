let hexagono = document.querySelector(".hexagono");
let boton_next = document.querySelector(".next");
let boton_prev = document.querySelector(".prev");
let img_frontal = 0;
let div_activo = [];
div_activo[0] = document.querySelector(".a1");
div_activo[1] = document.querySelector(".a2");
div_activo[2] = document.querySelector(".a3");
div_activo[3] = document.querySelector(".a4");
div_activo[4] = document.querySelector(".a5");
div_activo[5] = document.querySelector(".a6");
let i = 0;

window.addEventListener("keydown", teclado);
boton_next.addEventListener('click', funcion_next);
boton_prev.addEventListener('click', funcion_prev);


function teclado(e) {
    if (e.keyCode == "37") {
        img_frontal = img_frontal - 60;
        hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
    }
    if (e.keyCode == "39") {
        img_frontal = img_frontal + 60;
        hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
        i = i + 1;
    if (i >= 1 && i <= 5) {
        div_activo[(i)].style.opacity = +1;
        div_activo[(i)-1].style.opacity = 0;
    } else {
        i = 0;
        div_activo[0].style.opacity = +1;
        div_activo[5].style.opacity = 0;
    }
    console.log(i)
    }
}
function funcion_next() {
    img_frontal = img_frontal + 60;
    hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
    i = i + 1;
    if (i >= 1 && i <= 5) {
        div_activo[(i)].style.opacity = +1;
        div_activo[(i)-1].style.opacity = 0;
    } else {
        i = 0;
        div_activo[0].style.opacity = +1;
        div_activo[5].style.opacity = 0;
    }
    console.log(i);
}

function funcion_prev() {
    img_frontal = img_frontal - 60;
    hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
    i = i - 1;
    if (i <= -1 && i >= -5) {
        div_activo[(i*(-1))].style.opacity = +1;
        div_activo[(i+1)].style.opacity = 0; 
    } else {
        i = 0;
    }
    console.log(i)
}
