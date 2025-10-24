// scripts/ej02.js
const resultado = document.getElementById('resultado');
const botonesNum = document.querySelectorAll('.num');
const botonesOp = document.querySelectorAll('.op');
const botonIgual = document.getElementById('igual');
const botonClear = document.getElementById('clear');

let operacion = '';

botonesNum.forEach(boton => {
  boton.addEventListener('click', () => {
    operacion += boton.textContent;
    resultado.value = operacion;
  });
});

botonesOp.forEach(boton => {
  boton.addEventListener('click', () => {
    operacion += boton.textContent;
    resultado.value = operacion;
  });
});

botonClear.addEventListener('click', () => {
  operacion = '';
  resultado.value = '';
});

botonIgual.addEventListener('click', () => {
  try {
    resultado.value = eval(operacion);
    operacion = resultado.value;
  } catch {
    resultado.value = 'Error';
    operacion = '';
  }
});
