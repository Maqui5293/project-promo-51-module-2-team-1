"use strict";

// Boton de reset
const resetBtn = document.querySelector(".js_resetBtn");

// Función para resetear el formulario y la previsualización
function resetFormAndPreview() {
  // Resetea los inputs del formulario
  inputTitle.value = "";
  inputAutor.value = "";
  inputGender.value = "";
  inputRate.value = "";
  inputUserName.value = "";

  // Limpia la previsualización
  previewTitle.textContent = "";
  previewAutor.textContent = "";
  previewGender.textContent = "";
  previewRate.textContent = "";
  previewUserName.textContent = "";
}

// Evento para el botón
resetBtn.addEventListener("click", resetFormAndPreview);
