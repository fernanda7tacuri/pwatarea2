const questions = [
  {q:'¿Capital de Ecuador?', a:['Quito','Lima','Bogotá'], r:0},
  {q:'2 + 2 = ?', a:['3','4','5'], r:1},
  {q:'Color primario', a:['Verde','Rojo','Negro'], r:1}
];

function startQuiz(){
  let html='';
  questions.forEach((qq,i)=>{
    html += `<div style="margin-bottom:8px"><b>${i+1}. ${qq.q}</b><br>`;
    qq.a.forEach((opt,j)=>{
      html += `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`;
    });
    html += '</div>';
  });
  html += '<div style="text-align:center"><button class="btn" onclick="finish()">Enviar</button></div>';
  document.getElementById('quiz').innerHTML = html;
  document.getElementById('result').textContent = '';
}

function finish(){
  let score=0;
  questions.forEach((qq,i)=>{
    const sel = document.querySelector(`input[name=q${i}]:checked`);
    if(sel && parseInt(sel.value,10)===qq.r) score++;
  });
  document.getElementById('result').textContent = `Puntuación: ${score} / ${questions.length}`;
}
