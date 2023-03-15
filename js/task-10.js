"use strict";

/**
 * Write a script to create and clear a collection of elements. The user enters the number of elements 
 * into input and clicks the New button, after which a collection is rendered. When you click on the 
 * Clear button, the collection is cleared.
 */
const numberOfElements = document.querySelector('input');
const createElements = document.querySelector('[data-create]');
const deleteElements = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

/**
 * Create a createBoxes(amount) function that takes one parameter, a number. The function creates as 
 * many <div> as specified in amount and adds them to div#boxes.
 * 
 * 1. The dimensions of the very first <div> are 30px by 30px.
 * 2. Each element after the first one should be 10px wider and higher than the previous one.
 * 3. All elements must have a random HEX background color. Use the ready-made getRandomHexColor 
 *    function to get a color
 */

function createBoxes() {
  let widthElement = 30;
  let heightElemnt  = 30;
  let counter = 0;

  while (Number.parseInt(numberOfElements.value)>counter) {
    const boxes = document.createElement('div');
    boxes.style.width = `${widthElement}px`;
    boxes.style.height = `${heightElemnt}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    widthElement+=10;
    heightElemnt+=10;
    box.insertAdjacentElement('beforeend', boxes);
    counter++; 
  }
  box.style.display = "flex";
  box.style.gap = "10px";
  box.style.paddingTop = "5px";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.flexWrap ="wrap";
}

/**
 * Function to get a random color
 * @returns color
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

/**
 * Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.
 */
function destroyBoxes(){
  boxes.innerHTML = "";
}

createElements.addEventListener('click', createBoxes);
deleteElements.addEventListener('click', destroyBoxes);
