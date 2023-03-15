"use strict";

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/**
 * El HTML tiene una lista ul.gallery.
 */
const listGallery = document.querySelector('.gallery');

/**
 * Use un array de objetos images para crear elementos <img> anidados dentro de <li>. Use las secuencias 
 * de plantillas y el método insertAdjacentHTML() para crear el marcado.
 */
const gallery = images.map(image => `<li><img src="${image.url}" alt="${image.alt}" width="270" height="210"></li>`).join("");

/**
 * Todos los elementos de la galería deben añadirse al DOM en una sola operación de inserción.
 */
listGallery.insertAdjacentHTML("afterbegin", gallery); 

/**
 * Añada un diseño mínimo a la galería con flexboxes o Computación en malla mediante las clases CSS.
 */
listGallery.style.listStyle = "none";
listGallery.style.display = "flex";
listGallery.style.gap = "30px";
listGallery.style.justifyContent = "center";
listGallery.style.alingContent = "center";
listGallery.style.position = "absolute";
listGallery.style.top = "50%";
listGallery.style.left = "50%";
listGallery.style.transform = "translate(-50%, -50%)";