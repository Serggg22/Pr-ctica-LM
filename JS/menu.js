const hamburguesa = document.getElementById('hamburguesa');
const menuMovil = document.getElementById('menu-movil');

hamburguesa.addEventListener('click', () => {
    menuMovil.style.display = 'flex';
});

menuMovil.addEventListener('click', () => {
    menuMovil.style.display = 'none';
});
