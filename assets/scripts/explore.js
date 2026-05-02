// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const voiceSelect = document.querySelector('#voice-select');

    function populateVoices() {
        const voices = speechSynthesis.getVoices();
        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
        // great, works on Chromium but not FF... :(
    }

    populateVoices();
    speechSynthesis.addEventListener('voiceschanged', populateVoices);
}