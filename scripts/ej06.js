// scripts/ej06.js

// Referencias a los elementos
const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

// Evento para agregar tareas
botonAgregar.addEventListener("click", () => {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    alert("Por favor, escribe una tarea antes de agregar.");
    return;
  }

  // Crear un nuevo elemento de lista
  const li = document.createElement("li");
  li.textContent = texto;

  // Botón para eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "❌";
  botonEliminar.classList.add("btn-eliminar");

  // Evento de eliminar tarea
  botonEliminar.addEventListener("click", () => {
    li.remove();
  });

  // Agregar botón al li
  li.appendChild(botonEliminar);

  // Agregar el li a la lista
  listaTareas.appendChild(li);

  // Limpiar campo
  inputTarea.value = "";
});
