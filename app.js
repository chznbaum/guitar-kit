function keyListener(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
}
window.addEventListener('keydown', keyListener);
const keys = document.querySelectorAll('.key');
function removeTransition(event) {
  if (event.propertyName != 'transform') return;
  this.classList.remove('playing');
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));