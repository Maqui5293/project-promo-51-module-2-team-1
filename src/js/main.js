"use strict";
console.log("index funciona");

import "./cardPreview.js";
import "./collapsible.js";
import "./selectionPalette.js";
import "./resetButton.js";
import "./imageComponent.js";

const formData = {
  title: "",
  autor: "",
  gender: "",
  rate: "",
  userName: "",
};

const savedData = localStorage.getItem("miLibroFavorito");
if (savedData) {
  const data = JSON.parse(savedData);
  inputTitle.value = data.title;
  inputAutor.value = data.autor;
  inputGender.value = data.gender;
  inputRate.value = data.rate;
  inputUserName.value = data.userName;

  updatePreview(); // para que se pinte también el preview
}
