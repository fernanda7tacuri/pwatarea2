// scripts/ej03.js
const imagen = document.getElementById('imagen');

imagen.addEventListener('mouseenter', () => {
  imagen.src = 'imagenes/2.jpg';
});

imagen.addEventListener('mouseleave', () => {
  imagen.src = 'imagenes/1.jpg';
});
