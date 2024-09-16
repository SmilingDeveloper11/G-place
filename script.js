const canvas = document.getElementById('placeCanvas');
const ctx = canvas.getContext('2d');
const pixelSize = 10;
const colorPicker = document.getElementById('colorPicker');
let currentColor = colorPicker.value;

// Cambia el color cuando el usuario selecciona uno nuevo
colorPicker.addEventListener('input', function () {
  currentColor = this.value;
});

// Dibuja el lienzo en blanco con píxeles iniciales
for (let y = 0; y < canvas.height; y += pixelSize) {
  for (let x = 0; x < canvas.width; x += pixelSize) {
    ctx.fillStyle = '#FFFFFF'; // Fondo blanco por defecto
    ctx.fillRect(x, y, pixelSize, pixelSize);
    ctx.strokeRect(x, y, pixelSize, pixelSize);
  }
}

// Añade la lógica para colocar píxeles
canvas.addEventListener('click', function (event) {
  const x = Math.floor(event.offsetX / pixelSize) * pixelSize;
  const y = Math.floor(event.offsetY / pixelSize) * pixelSize;
  ctx.fillStyle = currentColor; // Usa el color actual seleccionado
  ctx.fillRect(x, y, pixelSize, pixelSize);
});
