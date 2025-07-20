// Modo oscuro / claro
const checkbox = document.querySelector(".theme-checkbox");

checkbox.addEventListener("change", () => {
  const theme = checkbox.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
});

/*
que contenga un botón comenzar el juego,
en ese momento se crea un número aleatorio que el usuario deberá adivinar
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico. 
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

// Función del juego

let numeroMagico = null;
let juegoIniciado = false;

const btnComenzar = document.getElementById("btnComenzar");
const btnEnviar = document.getElementById("btnEnviar");
const inputNumero = document.getElementById("inputNumero");
const mensajeInicio = document.getElementById("mensajeInicio");

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;

  juegoIniciado = true;

  inputNumero.value = "";
}

function detenerJuego() {
  juegoIniciado = false;
  inputNumero.value = "";
}

function verificarNumero() {
  if (!juegoIniciado) {
    alert("Primero debes comenzar el juego.");
    return;
  }

  const numeroIngresado = Number(inputNumero.value);

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
    return;
  }

  if (numeroIngresado === numeroMagico) {
    alert("🎉 ¡Felicidades! Adivinaste el número mágico.");
    juegoIniciado = false;
    inputNumero.value = "";
  } else if (numeroIngresado < numeroMagico) {
    alert(
      "El número que ingresaste es menor al número mágico. ¡Inténtalo de nuevo!"
    );
  } else {
    alert(
      "El número que ingresaste es mayor al número mágico. ¡Inténtalo de nuevo!"
    );
  }
}

btnComenzar.addEventListener("click", comenzarJuego);
btnEnviar.addEventListener("click", verificarNumero);


//Efecto cambiar de color y texto
const cambiarTexto = () => {
  // Seleccionamos el párrafo
  const texto = document.getElementById("cambiarTexto");
  const btnComenzar = document.getElementById("btnComenzar");

  // Detectamos el estado actual del botón
  if (btnComenzar.textContent === "Comenzar Juego") {
    texto.textContent = "Juego detenido. Haz clic en 'Comenzar' para volver a jugar.";
    btnComenzar.textContent = "Parar Juego";
    btnComenzar.classList.replace("btn-primary", "btn-danger");

    comenzarJuego();
  } else {
    texto.textContent = "El juego ha comenzado, ingresa un número del 0 al 100";
    btnComenzar.textContent = "Comenzar Juego";
    btnComenzar.classList.replace("btn-danger", "btn-primary");

    detenerJuego();
  }
};



