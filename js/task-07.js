"use strict";

/**
 * Write a script that responds to changes in the value of input#font-size-control 
 * (input event) and changes the inline style of span#text by updating the font-size 
 * property. As a result, the text size will change responding to scrollbar dragging.
 */

const controlFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controlFontSize.addEventListener('input', (even) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
    //text.style.fontSize = `${controlFontSize.value}px`; //Esta es otra forma de hacerlo sin el even como parametro
});