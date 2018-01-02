let hexagono = document.querySelector(".hexagono");
let boton_next = document.querySelector(".next");
//La linea siguiente activa la funcion de "botón previo"
//let boton_prev = document.querySelector(".prev");
let img_frontal = 0;
let div_activo = [];
div_activo[0] = document.querySelector(".a1");
div_activo[1] = document.querySelector(".a2");
div_activo[2] = document.querySelector(".a3");
div_activo[3] = document.querySelector(".a4");
div_activo[4] = document.querySelector(".a5");
div_activo[5] = document.querySelector(".a6");
let i = 0;
let simbolo_play = document.querySelector(".play_symbol");
let vid1 = document.querySelector(".vid1");
                                


window.addEventListener("keydown", teclado);
boton_next.addEventListener('click', funcion_next);
//boton_prev.addEventListener('click', funcion_prev);
simbolo_play.addEventListener('click', funcion_play_video);

function teclado(e) {
    //future self: las proximas 3 lines prenden la funcion de keylisten para la flecha hacia la izquierda.
    //if (e.keyCode == "37") {
        //img_frontal = img_frontal - 60;
        //hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
    //}
    if (e.keyCode == "39") {
        img_frontal = img_frontal + 60;
        hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
        // future self: next 9 lines sincronizan el div activo lateral con el hexagono.
        i = i + 1;
    if (i >= 1 && i <= 5) {
        div_activo[(i)].style.opacity = +1;
        div_activo[(i)-1].style.opacity = 0;
    } else {
        // Este else hace que cuando llegue a cero y le quita el opacity el div_activo[4]
        i = 0;
        div_activo[0].style.opacity = +1;
        div_activo[5].style.opacity = 0;
    }
    console.log(i)
    }
}
function funcion_next() {
    //future self: next 2 lines mueven el hexágono hacia la derecha.
    img_frontal = img_frontal + 60;
    hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
    // future self: next 9 lines sincronizan el div activo lateral con el hexagono.
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
// La proxima funcion mueve el hexagono a la izquierda y lo sincroniza con el panel de divs.
//function funcion_prev() {
//    img_frontal = img_frontal - 60;
//    hexagono.style.transform = "rotateY(" + img_frontal + "deg)";
//    i = i - 1;
//    n = (i * (-1));
//    f = s[n];
//    console.log(f);
//    if (f <= null) {
//    i = 0;
//    }
//}
function funcion_play_video() {
    vid1.play();
    simbolo_play.style.opacity = "0";
}