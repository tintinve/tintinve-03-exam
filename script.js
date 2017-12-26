let hexagono = document.querySelector(".hexagono");
let boton_next = document.querySelector(".next");
let boton_prev = document.querySelector(".prev");
let img_frontal  = 0;
boton_next.addEventListener('click', funcion_next);
boton_prev.addEventListener('click', funcion_prev);

function funcion_next(){
   if(img_frontal == 0){
       img_frontal = img_frontal - 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }  else {
       img_frontal = img_frontal - 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }
}
function funcion_prev(){
   if(img_frontal == 0){
       img_frontal = img_frontal + 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }  else {
       img_frontal = img_frontal + 60;
       hexagono.style.transform = "rotateY("+img_frontal+"deg)";
   }
}
