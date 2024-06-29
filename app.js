//Para poner comentarios es con dos diagonales 

//Seleciones para barra de navegación burger
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul"); 
const nav = document.querySelector("nav") //para cuando seleccione la barra del navegador 


burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//Cerrar el burger
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//Seleccion de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba//
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


