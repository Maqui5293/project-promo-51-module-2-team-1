
const inputImagen = document.querySelector(".js__profile-upload-btn");
const profilePreview = document.querySelector(".js__profile-preview"); // Miniatura
const profileImage = document.querySelector(".js__profile-image"); // Imagen grande

const lector = new FileReader();

function updateImagePreview() {
  profilePreview.style.backgroundImage = `url(${lector.result})`;
  console.log("Imagen cargada:", lector.result);
}

function mostrarImagen() {
  profileImage.style.backgroundImage = `url(${lector.result})`;
  profileImage.style.backgroundSize = "cover";
  profileImage.style.backgroundPosition = "center";
  profileImage.style.backgroundRepeat = "no-repeat";

  updateImagePreview();
}

function readFile(evento) {
  const file = evento.currentTarget.files[0];
  if (file) {
    lector.addEventListener("load", mostrarImagen, { once: true });
    lector.readAsDataURL(file);
  } else {
    profileImage.style.backgroundImage = "";
    profilePreview.style.backgroundImage = "";
  }
}

inputImagen.addEventListener("change", readFile);