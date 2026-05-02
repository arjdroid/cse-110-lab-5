// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.querySelector('#horn-select');
    const hornImage = document.querySelector('#expose > img');
    const hornAudio = document.querySelector('#expose > audio');

    const volumeSlider = document.querySelector('#volume');
    const volumeImage = document.querySelector('#volume-controls > img');

    hornSelect.addEventListener('change', () => {
        const value = hornSelect.value;
        hornImage.src = `assets/images/${value}.svg`;
        hornImage.alt = value;
        hornAudio.src = `assets/audio/${value}.mp3`;
    });

    volumeSlider.addEventListener('input', () => {
        const volume = Number(volumeSlider.value);
        let level;
        if (volume === 0)       level = 0;
        else if (volume < 33)   level = 1;
        else if (volume < 67)   level = 2;
        else                    level = 3;
        volumeImage.src = `assets/icons/volume-level-${level}.svg`;
        volumeImage.alt = `Volume level ${level}`;
        hornAudio.volume = volume / 100;
    });
}