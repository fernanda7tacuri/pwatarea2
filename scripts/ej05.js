// scripts/ej05.js

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();
  const mensaje = document.getElementById("mensaje");

  // Validar que no estén vacíos
  if (nombre === "" || correo === "" || password === "") {
    mensaje.textContent = "⚠️ Por favor completa todos los campos antes de enviar.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ Formulario enviado correctamente. ¡Gracias!";
    mensaje.style.color = "green";

    // Limpiar los campos después de 2 segundos
    setTimeout(() => {
      document.getElementById("formulario").reset();
      mensaje.textContent = "";
    }, 2000);
  }
});
