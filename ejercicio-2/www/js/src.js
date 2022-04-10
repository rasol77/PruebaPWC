'use strict';
/*
Solicita a un usuario su nombre y su primer apellido. Posteriormente pregúntale 
si le apetece un café.*/

let nombre = prompt('¿Dime tu nombre');
let apellido = prompt('¿Dime tus apellidos');
let coffe = confirm('¿Quieres un café');
/*- Si el usuario acepta mostraremos un mensaje del tipo: "¡Bienvenid@ Juan Campos! 
En breves recibirá su café calentito en casa."*/
if (coffe === true) {
  alert(
    `¡Bienvenid@ ${nombre} ${apellido} en breves recibiras un café caliente en casa`
  );
} else {
  alert(`¡Bienvenid@ ${nombre} ${apellido} NO Ay Café`);
}
