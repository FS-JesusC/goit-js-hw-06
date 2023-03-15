"use strict";

/**
 * Function to generate a random color.
 * @returns a random color
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

/**
 * Write a script that changes the background colors of the <body> element via inline style 
 * when clicking on button.change-color and outputs the color value to span.color.
 */

const chageColor = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');
const colorBody = document.querySelector('body');

const handleColor = () => currentColor.textContent = getRandomHexColor();
const handleBackground = () => colorBody.style.backgroundColor = getRandomHexColor();

chageColor.addEventListener('click', handleColor);
chageColor.addEventListener('click', handleBackground);