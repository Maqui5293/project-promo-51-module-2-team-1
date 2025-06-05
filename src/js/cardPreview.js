// Form inputs
const inputTitle = document.querySelector(".js_inputTitle");
const inputAutor = document.querySelector(".js_inputAutor");
const inputGender = document.querySelector(".js_inputGender");
const inputRate = document.querySelector(".js_inputRate");
const inputUserName = document.querySelector(".js_inputUserName");
const btnCreate = document.querySelector(".js_buttonSubmit");

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
    stars = "⭐⭐⭐⭐⭐";
  }

  previewStars.textContent = stars;
}

// Actualiza los campos de texto del preview
function updatePreview() {
  previewTitle.textContent = inputTitle.value || "Título del libro";
  previewAutor.textContent = inputAutor.value || "Autor/a";
  previewGender.textContent = inputGender.value || "Género";
  previewUserName.textContent = inputUserName.value || "Nombre y apellidos";

  updateStars(inputRate.value);
}

// Listeners para inputs
if (inputTitle) inputTitle.addEventListener("input", updatePreview);
if (inputAutor) inputAutor.addEventListener("input", updatePreview);
if (inputGender) inputGender.addEventListener("input", updatePreview);
if (inputRate) inputRate.addEventListener("input", updatePreview);
if (inputUserName) inputUserName.addEventListener("input", updatePreview);


/* inputTitle.addEventListener("input", updatePreview);
inputAutor.addEventListener("input", updatePreview);
inputGender.addEventListener("input", updatePreview);
inputRate.addEventListener("input", updatePreview);
inputUserName.addEventListener("input", updatePreview);
 */

// Recoger datos del formulario
function getFormData() {
  return {
    field1: 1,
    field2: inputTitle.value,
    field3: inputAutor.value,
    field4: inputGender.value,
    field5: inputRate.value,
    field6: inputUserName.value,
    photo: window.photo,
  };
}

function handleCreateCard(event) {
  event.preventDefault();

  const userData = getFormData();

  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);

      if (data.success) {
        const uuid = data.infoID;
        console.log("UUID generado:", uuid);
        window.location.href = `./card.html?id=${uuid}`;
      } else {
        console.error("Error al crear la tarjeta:", data.error);
      }
    });
}
if (btnCreate) {
  btnCreate.addEventListener("click", handleCreateCard);
}


