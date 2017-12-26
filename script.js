let hexagono = document.querySelector(".hexagono");
let boton_next = document.querySelector(".next");
let boton_prev = document.querySelector(".prev");
let img_frontal = 0;
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
    }

}

function funcion_next(){
   if(img_frontal == 0){
       img_frontal = img_frontal + 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }  else {
       img_frontal = img_frontal + 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }
}
function funcion_prev(){
   if(img_frontal == 0){
       img_frontal = img_frontal - 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }  else {
       img_frontal = img_frontal - 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }
}
