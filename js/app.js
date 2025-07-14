// Modo oscuro / claro
const checkbox = document.querySelector('.theme-checkbox');

checkbox.addEventListener('change', () => {
  const theme = checkbox.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);
});

// Función del juego 
