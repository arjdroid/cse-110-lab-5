// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.querySelector('#horn-select');
    const hornImage = document.querySelector('#expose > img');
    const hornAudio = document.querySelector('#expose > audio');

    hornSelect.addEventListener('change', () => {
        const value = hornSelect.value;
        hornImage.src = `assets/images/${value}.svg`;
        hornImage.alt = value;
        hornAudio.src = `assets/audio/${value}.mp3`; 
    });
}