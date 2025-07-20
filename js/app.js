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

const textoResultado = document.getElementById("textoResultado");

function verificarNumero() {
  if (!juegoIniciado) {
    textoResultado.textContent = "Primero debes comenzar el juego.";
    return;
  }

  const numeroIngresado = Number(inputNumero.value);

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    textoResultado.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  if (numeroIngresado === numeroMagico) {
    textoResultado.textContent = "🎉 ¡Felicidades! Adivinaste el número mágico.";
    juegoIniciado = false;
    inputNumero.value = "";
  } else if (numeroIngresado < numeroMagico) {
    textoResultado.textContent = "El número que ingresaste es menor al número mágico. ¡Inténtalo de nuevo!";
  } else {
    textoResultado.textContent = "El número que ingresaste es mayor al número mágico. ¡Inténtalo de nuevo!";
  }
}

//btnComenzar.addEventListener("click", comenzarJuego);
btnEnviar.addEventListener("click", verificarNumero);


let juegoEncendido = false; // Estado global

const cambiarTexto = () => {
  const texto = document.getElementById("cambiarTexto");
  const btnComenzar = document.getElementById("btnComenzar");

  if (!juegoEncendido) {
    // COMENZAR JUEGO
    juegoEncendido = true;
    texto.textContent = "El juego ha comenzado, ingresa un número del 0 al 100";
    btnComenzar.textContent = "Parar Juego";
    btnComenzar.classList.remove("btn-primary");
    btnComenzar.classList.add("btn-danger");
    comenzarJuego();
  } else {
    // DETENER JUEGO
    juegoEncendido = false;
    texto.textContent = "Juego detenido. Haz clic en 'Comenzar Juego' para volver a jugar.";
    btnComenzar.textContent = "Comenzar Juego";
    btnComenzar.classList.remove("btn-danger");
    btnComenzar.classList.add("btn-primary");
    detenerJuego();
  }
};


textoResultado.textContent = "Tu mensaje aquí";

setTimeout(() => {textoResultado.textContent = "";}, 1500); 