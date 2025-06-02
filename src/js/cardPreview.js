// Inputs del formulario
const inputTitle = document.querySelector(".js_inputTitle");
const inputAutor = document.querySelector(".js_inputAutor");
const inputGender = document.querySelector(".js_inputGender");
const inputRate = document.querySelector(".js_inputRate");
const inputUserName = document.querySelector(".js_inputUserName");

// Inputs del preview
const previewTitle = document.querySelector(".js_previewTitle");
const previewAutor = document.querySelector(".js_previewAutor");
const previewGender = document.querySelector(".js_previewGender");
const previewRate = document.querySelector(".js_previewRate");
const previewUserName = document.querySelector(".js_previewUserName");

// Función para actualizar el preview en tiempo real
function updatePreview() {
  previewTitle.textContent = inputTitle.value;
  previewAutor.textContent = inputAutor.value;
  previewGender.textContent = inputGender.value;
  previewRate.textContent = inputRate.value;
  previewUserName.textContent = inputUserName.value;
}

// Listeners para los inputs del formulario
inputTitle.addEventListener("input", updatePreview);
inputAutor.addEventListener("input", updatePreview);
inputGender.addEventListener("input", updatePreview);
inputRate.addEventListener("input", updatePreview);
inputUserName.addEventListener("input", updatePreview);
