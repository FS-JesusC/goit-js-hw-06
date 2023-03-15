"use strict";

/**
 * Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
 */
let counterValue = 0; 
let value = document.querySelector('#value'); //Valor del contador
const increment = document.querySelector('[data-action="increment"]'); //boton de incrementar
const decrement = document.querySelector('[data-action="decrement"]'); //boton de decrementar

/**
 * Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
 * Actualice la interfaz con el nuevo valor de la variable counterValue.
 */

const incrementValue = () =>{
    value.textContent = ++counterValue;
}

const decrementValue = () =>{
    value.textContent = --counterValue;
}
increment.addEventListener("click", incrementValue);
decrement.addEventListener("click", decrementValue);



