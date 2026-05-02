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

    const talkButton = document.querySelector('#explore button');
    const faceImage = document.querySelector('#explore img');
    const textarea = document.querySelector('#text-to-speak');

    talkButton.addEventListener('click', () => {
        const utterance = new SpeechSynthesisUtterance(textarea.value);
        const selectedVoice = speechSynthesis.getVoices().find(v => v.name === voiceSelect.value);
        if (selectedVoice) utterance.voice = selectedVoice;

        utterance.addEventListener('start', () => {
            faceImage.src = 'assets/images/smiling-open.png';
            faceImage.alt = 'Smiling face open';
        });
        utterance.addEventListener('end', () => {
            faceImage.src = 'assets/images/smiling.png';
            faceImage.alt = 'Smiling face';
        });

        speechSynthesis.speak(utterance);
    });
}