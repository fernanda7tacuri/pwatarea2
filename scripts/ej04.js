// scripts/ej04.js
function actualizarReloj() {
  const ahora = new Date();
  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours();

  const rotSegundos = segundos * 6; // 360° / 60
  const rotMinutos = minutos * 6 + segundos * 0.1;
  const rotHoras = (horas % 12) * 30 + minutos * 0.5;

  document.querySelector('.hora').style.transform = `rotate(${rotHoras}deg)`;
  document.querySelector('.minuto').style.transform = `rotate(${rotMinutos}deg)`;
  document.querySelector('.segundo').style.transform = `rotate(${rotSegundos}deg)`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
