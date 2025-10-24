const images = ['imagenes/1.jpg','imagenes/2.jpg','imagenes/3.jpg','imagenes/4.jpg'];
let index = 0;
const carrusel = document.getElementById('carrusel');

function showImage(i){
  carrusel.src = images[i];
}

document.getElementById('prev').addEventListener('click', ()=>{
  index = (index-1+images.length)%images.length;
  showImage(index);
});

document.getElementById('next').addEventListener('click', ()=>{
  index = (index+1)%images.length;
  showImage(index);
});

// Cambio automático cada 3 segundos
setInterval(()=>{
  index = (index+1)%images.length;
  showImage(index);
},3000);
