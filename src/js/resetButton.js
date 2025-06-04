"use strict";

// Boton de reset
const resetBtn = document.querySelector(".js_resetBtn");

// Función para resetear el formulario y la previsualización
function resetFormAndPreview() {
  console.log("Reset hecho");
  // Reset campos del formulario
  inputTitle.value = "";
  inputAutor.value = "";
  inputGender.value = "";
  inputRate.value = "";
  inputUserName.value = "";

  // Reset preview texto
  previewTitle.textContent = "";
  previewAutor.textContent = "";
  previewGender.textContent = "";
  previewStars.textContent = "";
  previewUserName.textContent = "";

  profileImage.removeAttribute("style");
  profilePreview.removeAttribute("style");
  inputImagen.value = "";
}
// Evento para el botón
resetBtn.addEventListener("click", resetFormAndPreview);
