
const inputImagen = document.querySelector(".js__profile-upload-btn");


const previewImage = document.querySelector(".js_previewImage");
const previewContainer = document.querySelector(".js__profile-image");

// FileReader
const lector = new FileReader();




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

