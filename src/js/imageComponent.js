console.log("Hola");

const inputFile = document.querySelector(".js__profile-upload-btn");
const previewDiv = document.querySelector(".js__profile-image");
const reader = new FileReader();

function mostrarImagen(evento) {
  const file = evento.currentTarget.files[0];
  if (file) {
    reader.addEventListener("load", () => {
      previewDiv.style.backgroundImage = `url(${reader.result})`;
    });
    reader.readAsDataURL(archivo); // 3. Leemos el archivo como base64
  } else {
    previewDiv.style.backgroundImage = ""; // Si no hay archivo, quitamos la imagen
  }
}

inputFile.addEventListener("change", mostrarImagen); // 4. Escuchamos cambios en el input
