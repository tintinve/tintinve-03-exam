let hover = document.querySelector(".post1");
let texto =document.querySelector(".text_post1")
hover.addEventListener('mouseover', skift);
function skift(){
console.log("function_work");
hover.classList.add("fade_fondo");
texto.classList.add("texto_negro")    
    
}