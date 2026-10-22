const fotoPrincipal = document.getElementById('foto-principal');
const miniaturas    = document.getElementById('miniaturas');

const fotos = [
    "Fotos/Asakusa.jpg",
    "Fotos/Kyoto.jpg",
    "Fotos/Pagoda.jpeg",
    "Fotos/Seoul.jpeg",
    "Fotos/Techo.jpeg"
];

let actual = 0;

// Crear miniaturas
fotos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('click', () => irA(i));
    miniaturas.appendChild(img);
});

function irA(i) {
    actual = (i + fotos.length) % fotos.length;
    fotoPrincipal.src = fotos[actual];
    document.querySelectorAll('#miniaturas img').forEach((img, i) => {
        img.classList.toggle('activa', i === actual);
    });
}

document.getElementById('atras').addEventListener('click',    () => irA(actual - 1));
document.getElementById('siguiente').addEventListener('click', () => irA(actual + 1));

// Menú móvil
document.getElementById('hamburguesa').addEventListener('click', () => {
    document.getElementById('menu-movil').style.display = 'flex';
});
document.getElementById('menu-movil').addEventListener('click', () => {
    document.getElementById('menu-movil').style.display = 'none';
});

irA(0);
