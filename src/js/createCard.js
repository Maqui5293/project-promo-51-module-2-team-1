"use strict";

const inputTitleCreate = document.querySelector(".js_inputTitle");
const inputAutorCreate = document.querySelector(".js_inputAutor");
const inputGenderCreate = document.querySelector(".js_inputGender");
const inputRateCreate = document.querySelector(".js_inputRate");
const inputUserNameCreate = document.querySelector(".js_inputUserName");
const btnCreate = document.querySelector(".js_buttonSubmit");

// Recoger datos del formulario
function getFormData() {
  return {
    field1: 1,
    field2: inputTitleCreate.value,
    field3: inputAutorCreate.value,
    field4: inputGenderCreate.value,
    field5: inputRateCreate.value,
    field6: inputUserNameCreate.value,
    photo: "https://placehold.co/200x300",
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
        /* window.location.href = `./card.html?id=${uuid}`; */
      } else {
        console.error("Error al crear la tarjeta:", data.error);
      }
    });
}
if (btnCreate) {
  btnCreate.addEventListener("click", handleCreateCard);
}
