// scripts/ej01.js
const texto = document.getElementById('texto');
const boton = document.getElementById('cambiarColor');

boton.addEventListener('click', () => {
  // Cambia entre dos colores pastel suaves
  if (texto.style.backgroundColor === 'lavenderblush') {
    texto.style.backgroundColor = 'aliceblue';
  } else {
    texto.style.backgroundColor = 'lavenderblush';
  }
});
