const petalsContainer = document.getElementById('petals');

for (let i = 0; i < 40; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 4 + Math.random() * 4 + 's';
  petal.style.animationDelay = Math.random() * 5 + 's';
  petal.style.transform = rotate(${Math.random() * 360}deg);
  petalsContainer.appendChild(petal);
}

// موسيقى عند النقر
const audio = new Audio("https://cdn.pixabay.com/download/audio/2023/03/06/audio_12f8f07c62.mp3");
audio.volume = 0.4;
window.addEventListener("click", () => {
  audio.play();
}, { once: true });