// let boton = document.getElementById("btn");
// let titulo = document.getElementsByClassName("title");

let boton = document.querySelector('#btn');
let titulo = document.querySelector('.title');
let titulos = document.querySelectorAll('.title');
let mainTitle = document.querySelectorAll('.main-title');


console.log(boton);
console.log(titulo);
console.log(titulos);
console.log(mainTitle);

// RECORRER UN ARRAY DE VARIOS ELEMENTOS HTML
for (let i = 0; i < titulos.length; i++) {
    console.log(titulos[i].innerText);
}

// CREAR ELEMENTOS HTML CON JS
let buttonsContainer = document.getElementById('buttons');

boton.addEventListener('click', function() {
    let secondContainer = document.createElement('DIV');
    secondContainer.setAttribute('id', 'second-container');
    buttonsContainer.appendChild(secondContainer);

    let containerTitle = document.createElement('H3');
    containerTitle.innerText = 'Me agregaron desde JavaScript';
    secondContainer.appendChild(containerTitle);
})