// Get DOM elements
const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-btn');
const voiceSelect = document.getElementById('voice-select');
const rateInput = document.getElementById('rate');
const rateValue = document.getElementById('rate-value');

// Initialize speech synthesis
const synth = window.speechSynthesis;
let voices = [];

// Populate voice list
function populateVoiceList() {
  voices = synth.getVoices();
  voiceSelect.innerHTML = '';

  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = index;
    voiceSelect.appendChild(option);
  });
}

// Speak the text
function speak() {
  if (synth.speaking) {
    console.error('Speech is already in progress.');
    return;
  }

  const text = textInput.value;
  if (text !== '') {
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the selected voice
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Set the rate
    utterance.rate = rateInput.value;

    synth.speak(utterance);
  }
}

// Update rate value label
rateInput.addEventListener('input', () => {
  rateValue.textContent = rateInput.value;
});

// Event listeners
speakButton.addEventListener('click', speak);
speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

// Populate voice list on page load
populateVoiceList();
