const spinSound = new Audio("/sounds/spin.mp3");
const winSound = new Audio("/sounds/win.mp3");

function play(sound: HTMLAudioElement) {
  sound.currentTime = 0;
  sound.play();
}

export function playSpinSound() {
  play(spinSound);
}

export function playWinSound() {
  play(winSound);
}
