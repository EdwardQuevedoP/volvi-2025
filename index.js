// Función para generar un número aleatorio entre 1 y el valor máximo
function dado(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Referencias a los elementos HTML
const boton = document.getElementById('giraDado');
const resultadoDiv = document.getElementById('resultado11');
const resultadoImg = document.getElementById('resultadoImg');

/*const imgGanaste = "https://cdn.pixabay.com/photo/2015/10/28/16/47/cup-1010916_640.jpg";
const imgPerdiste = "https://www.guillermolaich.com/recurso/noticia/perdedor_5.jpg";*/


// Agregar un evento al botón
boton.addEventListener('click', () => {
    const resultado = dado(6); // Genera un número del 1 al 6
    resultadoImg.src = "https://www.guillermolaich.com/recurso/noticia/perdedor_5.jpg"  // URL de la imagen para perder
    if (resultado === 6) {
        resultadoDiv.textContent = `🎉 ¡Obtuviste un ${resultado}! ¡Ganaste! 🎉`;
        resultadoDiv.style.color = "limegreen"; // Cambia el color del texto a verde
        resultadoImg.src = "https://cdn.pixabay.com/photo/2015/10/28/16/47/cup-1010916_640.jpg"  // URL de la imagen para ganar
        resultadoImg.style.display = "block";   
    } else {
        resultadoDiv.textContent = `Obtuviste un ${resultado}. Sigue intentando.`;
        resultadoDiv.style.color = "tomato"; // Cambia el color del texto a rojo
        resultadoImg.src = "https://www.guillermolaich.com/recurso/noticia/perdedor_5.jpg"  // URL de la imagen para perder
        resultadoImg.style.display = "block";
        /*alert("aqui va el programa de los que sacaron diferente de 6")*/

    }
});
// mision ahora es mejorar ese juego pero con imagenes

/* EJECUTAR TODO CON http-server */