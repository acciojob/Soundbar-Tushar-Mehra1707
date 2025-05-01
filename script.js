//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // Add more if needed
const buttonsContainer = document.getElementById('buttons');

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => playSound(sound));
  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopAllSounds);
buttonsContainer.appendChild(stopBtn);

const audioElements = {};

// Function to play sound
function playSound(name) {
  stopAllSounds();

  if (!audioElements[name]) {
    audioElements[name] = new Audio(`sounds/${name}.mp3`);
  }

  audioElements[name].play();
}

// Function to stop all sounds
function stopAllSounds() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
