// Función para generar un número aleatorio entre 1 y el valor máximo
function dado(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Referencias a los elementos HTML
const boton = document.getElementById('giraDado');
const resultadoDiv = document.getElementById('resultado');

// Agregar un evento al botón
boton.addEventListener('click', () => {
    const resultado = dado(6); // Genera un número del 1 al 6
    if (resultado === 6) {
        resultadoDiv.textContent = `🎉 ¡Obtuviste un ${resultado}! ¡Ganaste! 🎉`;
        resultadoDiv.style.color = "limegreen"; // Cambia el color del texto a verde
    } else {
        resultadoDiv.textContent = `Obtuviste un ${resultado}. Sigue intentando.`;
        resultadoDiv.style.color = "tomato"; // Cambia el color del texto a rojo
    }
});
