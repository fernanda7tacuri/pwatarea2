let time = 5 * 60; // 5 minutos en segundos
const timerEl = document.getElementById('timer');

function updateTimer(){
  const min = String(Math.floor(time/60)).padStart(2,'0');
  const sec = String(time%60).padStart(2,'0');
  timerEl.textContent = `${min}:${sec}`;
  if(time>0){
    time--;
  } else {
    clearInterval(interval);
    alert("¡Tiempo terminado!");
  }
}

const interval = setInterval(updateTimer,1000);
updateTimer();
