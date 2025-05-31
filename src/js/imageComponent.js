
console.log("Hola")

const inputImagen = document.querySelector('.js_inputImagen');
const preview = document.querySelector('.js_preview');

inputImagen.addEventListener('change', function () { 
const archivo = inputImagen.files[0];
 if (archivo) {
    console.log('Nombre del archivo:', archivo.name);
  } else {
    console.log('No se seleccionó ningún archivo');
  }
 });