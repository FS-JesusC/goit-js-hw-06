"use strict";

/**
 * Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input), sustituya 
 * su valor actual en span#name-output. Si el input está vacío, el span debería mostrar la secuencia "Anónimo".
 */

const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if(textInput.value==""){
        output.textContent = "Anonymous";
    }
  });