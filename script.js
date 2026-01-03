// Inicializar animações de scroll
AOS.init({ 
    duration: 1200, 
    once: true 
});

const audio = document.getElementById('audioTrack');
const playIcon = document.getElementById('playIcon');
const vinyl = document.querySelector('.vinyl-record');

function toggleMusic() {
    if (audio.paused) {
        // Tenta tocar a música e trata possíveis erros (como arquivo não encontrado)
        audio.play().then(() => {
            playIcon.classList.replace('fa-play', 'fa-pause');
            vinyl.style.animationPlayState = 'running';
        }).catch(error => {
            console.error("Erro ao tocar a música: ", error);
            alert("Verifique se o arquivo 'musica.mp3' está na pasta correta!");
        });
    } else {
        audio.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
        vinyl.style.animationPlayState = 'paused';
    }
}

// Garante que o áudio esteja carregado ao abrir a página
window.addEventListener('load', () => {
    audio.load();
});