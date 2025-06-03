// Form inputs
const inputTitle = document.querySelector(".js_inputTitle");
const inputAutor = document.querySelector(".js_inputAutor");
const inputGender = document.querySelector(".js_inputGender");
const inputRate = document.querySelector(".js_inputRate");
const inputUserName = document.querySelector(".js_inputUserName");

// Preview elements
const previewTitle = document.querySelector(".js_previewTitle");
const previewAutor = document.querySelector(".js_previewAutor");
const previewGender = document.querySelector(".js_previewGender");
const previewStars = document.querySelector(".js_previewRate");
const previewUserName = document.querySelector(".js_previewUserName");

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
    stars = ""; 
  }

  previewStars.textContent = stars;
}

// Actualiza los campos de texto del preview
function updatePreview() {
  previewTitle.textContent = inputTitle.value;
  previewAutor.textContent = inputAutor.value;
  previewGender.textContent = inputGender.value; 
  previewUserName.textContent = inputUserName.value;

  updateStars(inputRate.value); 
}


// Listeners para inputs
inputTitle.addEventListener("input", updatePreview);
inputAutor.addEventListener("input", updatePreview);
inputGender.addEventListener("input", updatePreview);
inputRate.addEventListener("input", updatePreview);
inputUserName.addEventListener("input", updatePreview);

