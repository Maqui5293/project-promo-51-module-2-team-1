// Form inputs
const inputTitle = document.querySelector(".js_inputTitle");
const inputAutor = document.querySelector(".js_inputAutor");
const inputGender = document.querySelector(".js_inputGender");
const inputRate = document.querySelector(".js_inputRate");
const inputUserName = document.querySelector(".js_inputUserName");
const inputImagen = document.querySelector(".js__profile-upload-btn");

// Preview elements
const previewTitle = document.querySelector(".js_previewTitle");
const previewAutor = document.querySelector(".js_previewAutor");
const previewGender = document.querySelector(".js_previewGender");
const previewStars = document.querySelector(".js_previewRate");
const previewUserName = document.querySelector(".js_previewUserName");
const previewImage = document.querySelector(".js_previewImage");
const previewContainer = document.querySelector(".js__profile-image");

// FileReader
const lector = new FileReader();

// Función para mostrar estrellas según la valoración
function updateStars(rate) {
  let stars = "";

  if (rate == 1) {
    stars = "⭐";
  } else if (rate == 2) {
    stars = "⭐⭐";
  } else if (rate == 3) {
    stars = "⭐⭐⭐";
  } else if (rate == 4) {
    stars = "⭐⭐⭐⭐";
  } else if (rate == 5) {
    stars = "⭐⭐⭐⭐⭐";
  } else {
    stars = ""; // Por si el valor no es válido
  }

  previewStars.textContent = stars;
}

// Actualiza los campos de texto del preview
function updatePreview() {
  previewTitle.textContent = inputTitle.value;
  previewAutor.textContent = inputAutor.value;
  previewGender.textContent = inputGender.value;
 
  previewUserName.textContent = inputUserName.value;

  updateStars(inputRate.value); // ⭐ Actualiza las estrellas
}

// Actualiza la imagen en la tarjeta preview
function updateImagePreview() {
  previewImage.src = lector.result;
  previewImage.style.display = "block";
}

// Muestra la imagen como fondo en el div y actualiza <img>
function mostrarImagen() {
  previewContainer.style.backgroundImage = `url(${lector.result})`;
  previewContainer.style.backgroundSize = "cover";
  previewContainer.style.backgroundPosition = "center";
  previewContainer.style.backgroundRepeat = "no-repeat";

  updateImagePreview(); // También actualiza el <img>
}

// Lee el archivo cuando se selecciona uno
function readFile(evento) {
  const file = evento.currentTarget.files[0];
  if (file) {
    lector.addEventListener("load", mostrarImagen, { once: true });
    lector.readAsDataURL(file);
  } else {
    previewContainer.style.backgroundImage = "";
    previewImage.src = "";
    previewImage.style.display = "none";
  }
}

// Listeners para inputs
inputTitle.addEventListener("input", updatePreview);
inputAutor.addEventListener("input", updatePreview);
inputGender.addEventListener("input", updatePreview);
inputRate.addEventListener("input", updatePreview);
inputUserName.addEventListener("input", updatePreview);

// Listener para imagen
inputImagen.addEventListener("change", readFile);