"use strict";

/**
 * 1. Cuente y muestre en la consola el número de categorías en ul#categories, es decir. los artículos li.item.
 */
const numberCategories = document.querySelector('#categories').children;
console.log(`Number of categories: ${numberCategories.length}`);

/**
 * 2. Para cada elemento li.item en la lista ul#categories, encuentre y envíe a la consola el texto 
 * del título del artículo (tag <h2>) y el número de artículos en la categoría (todo anidado <li>).
 */

for (const category of numberCategories) {
    console.log("");
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}