// DESLIZAR

let carruselIndex = 1;
carrusel(carruselIndex);

function plusCarrusel(n) {
    carrusel(carruselIndex += n);
}

function currentCarrusel(n) {
    carrusel(carruselIndex = n);
}

function carrusel(n) {
    let i;
    let carrusel = document.getElementsByClassName("imagen-principal");
    let barra = document.getElementsByClassName("barra");
    if (n > carrusel.length) {carruselIndex = 1}    
    if (n < 1) {carruselIndex = carrusel.length}
    for (i = 0; i < carrusel.length; i++) {
      carrusel[i].style.display = "none";  
    }
    for (i = 0; i < barra.length; i++) {
        barra[i].className = barra[i].className.replace(" active", "");
      }
      carrusel[carruselIndex-1].style.display = "block";  
      barra[carruselIndex-1].className += " active";
    }

    //INCREMENTAR CARRO DE COMPRAS

let agregarNeko = document.querySelector("#comprar-neko")
let agregarNinjas = document.querySelector("#comprar-ninjas")
let agregarStone = document.querySelector("#comprar-stone")
let sumaCompra = document.querySelector("#numero-compra")

agregarNeko.addEventListener("click", function(evento){
    sumaCompra.innerText ++;
})

agregarNinjas.addEventListener("click", function(evento){
    sumaCompra.innerText ++;
})

agregarStone.addEventListener("click", function(evento){
    sumaCompra.innerText ++;
})

// ALERTA

let clickPinguino = document.querySelector("#linux")

clickPinguino.addEventListener("click", function(evento){
    alert ("This game is supported on Linux");
})





