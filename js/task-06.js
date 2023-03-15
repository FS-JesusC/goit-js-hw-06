"use strict";

const numberOfCharacters = document.querySelector('#validation-input');


numberOfCharacters.addEventListener("blur", (event) => {
    numberOfCharacters.classList.remove('valid');
    numberOfCharacters.classList.remove('invalid');
    Number.parseInt(numberOfCharacters.getAttribute('data-length')) === event.currentTarget.value.length ? 
    numberOfCharacters.classList.add('valid') : numberOfCharacters.classList.add('invalid');
  });