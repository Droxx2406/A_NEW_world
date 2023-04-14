// Variables del juego
let personaje;
let moneda;
let monedas = 0;

// Obtener elementos del DOM
const menuInicio = document.getElementById('menu-inicio');
const juego = document.getElementById('juego');
const contadorMonedas = document.getElementById('monedas');

// Función para empezar el juego
function empezarJuego() {
  menuInicio.classList.add('oculto');
  juego.classList.remove('oculto');

  // Crear personaje y moneda
  personaje = document.createElement('div');
  personaje.id = 'personaje';
  juego.appendChild(personaje);

  moneda = document.createElement('div');
  moneda.id = 'moneda';
  juego.appendChild(moneda);

  // Iniciar animación del personaje
  personaje.style.animation = 'moverPersonaje 0.2s infinite';

  // Escuchar eventos de teclado
  document.addEventListener('keydown', manejarTeclado);
}

// Función para manejar eventos de teclado
function manejarTeclado(evento) {
  switch (evento.keyCode) {
    case 37: // Flecha izquierda
      moverPersonaje('izquierda');
      break;
    case 39: // Flecha derecha
      moverPersonaje('derecha');
      break;
    case 32: // Barra espaciadora
      saltarPersonaje();
      break;
  }
}

// Función para mover el personaje
function moverPersonaje(direccion) {
  const posicionActual = parseInt(personaje.style.left) || 0;
  const nuevoPosicion = direccion === 'izquierda' ? posicionActual - 10 : posicionActual + 10;
  personaje.style.left = nuevoPosicion + 'px';
}

// Función para hacer saltar al personaje
function saltarPersonaje() {
  const posicionActual = parseInt(personaje.style.bottom) || 0;
  if (posicionActual < 50) {
    personaje.style.bottom = (posicionActual + 50) + 'px';
    setTimeout(() => {
      personaje.style.bottom = '0';
    }, 500);
  }
}

// Función para recoger la moneda
function recogerMoneda() {
  moneda.style.display = 'none';
  monedas++;
  contadorMonedas.innerText = monedas;
}

// Escuchar evento de colisión entre personaje y moneda
moneda.addEventListener('animationiteration', recogerMoneda);

