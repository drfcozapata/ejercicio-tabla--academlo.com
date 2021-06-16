// TIPOS DE FUNCIONES

/** Funciones DECLARATIVAS **/
// Declaramos la función, le asignamos un nombre, y luego su bloque. Finalmente, hay que invocarla.
// function add(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// add(4, 7);

/** Funciones EXPRESADAS (Function Expression) **/
// Declaramos una variable y a esa la asignamos la función anónima
// const add2 = function(a, b) {
//     return a + b;
// }
// console.log(add2(5, 8));

/** Funciones AUTOINVOCADAS (Self-Invoking Functions) **/
// (function() {
//     console.log(4 + 5);
// })();

/** Functions can be used as values **/
// En este caso, el valor de la variable es lo que la función retorne; la variable no es igual a la función.
// function add3(a, b) {
//     return a + b;
// }
// let sum = add3(7, 9);
// console.log(sum);

/** ARROW FUNCTIONS  **/
// No tienen scope global (are not hoisted), no tienen su propio "this". No son adecuados para definir métodos de objetos. Deben definirse antes de que se utilicen.
// Si tiene un solo parámetro, no es necesario ponerlo entre paréntesis.
// function add4(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// add(4, 7);

const add4 = (a, b) => a + b;
console.log(add4(17, 12));