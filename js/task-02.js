"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/**
 * HTML tiene una lista vacía ul#ingredients.
 */
const list = document.querySelector('#ingredients');

/**
 * 1. Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
 */
const item = document.createElement('li');

/**
 * 2. Añada el nombre de un ingrediente como contenido de texto.
 */
item.textContent = ingredients[0];
list.append(item);

/**
 * 3. Añada una clase item al elemento.
 */
item.classList.add("item");

/**
 * 4. Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.
 */
const addElements = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
console.log(addElements);
list.innerHTML = addElements;


