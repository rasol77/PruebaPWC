'use strict'
/*
Solicita a un usuario su nombre y su primer apellido. Posteriormente pregúntale 
si le apetece un café.*/

let nombre = prompt('¿Dime tu nombre');
let apellido = prompt('¿Dime tus apellidos');
let coffe   = prompt('¿Quieres un café');
/*- Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@ Juan Campos! 
En breves recibirá su café calentito en casa."*/
console.prompt (`¡Bienvenid@ ${nombre} ${apellido} en breves recibiras un café caliente en casa`);


