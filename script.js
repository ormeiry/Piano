const clickAudioFiles = {
  C4: new Audio("sounds/C4.mp3"),
  Db4: new Audio("sounds/Db4.mp3"),
  D4: new Audio("sounds/D4.mp3"),
  Eb4: new Audio("sounds/Eb4.mp3"),
  E4: new Audio("sounds/E4.mp3"),
  F4: new Audio("sounds/F4.mp3"),
  Gb4: new Audio("sounds/Gb4.mp3"),
  G4: new Audio("sounds/G4.mp3"),
  Ab4: new Audio("sounds/Ab4.mp3"),
  A4: new Audio("sounds/A4.mp3"),
  Bb4: new Audio("sounds/Bb4.mp3"),
  B4: new Audio("sounds/B4.mp3"),
  C5: new Audio("sounds/C5.mp3"),
  Db5: new Audio("sounds/Db5.mp3"),
  D5: new Audio("sounds/D5.mp3"),
  Eb5: new Audio("sounds/Eb5.mp3"),
  E5: new Audio("sounds/E5.mp3"),
};

const typeAudioFiles = {
  81: [new Audio("sounds/C4.mp3"), "C4"],
  50: [new Audio("sounds/Db4.mp3"), "Db4"],
  87: [new Audio("sounds/D4.mp3"), "D4"],
  51: [new Audio("sounds/Eb4.mp3"), "Eb4"],
  69: [new Audio("sounds/E4.mp3"), "E4"],
  82: [new Audio("sounds/F4.mp3"), "F4"],
  53: [new Audio("sounds/Gb4.mp3"), "Gb4"],
  84: [new Audio("sounds/G4.mp3"), "G4"],
  54: [new Audio("sounds/Ab4.mp3"), "Ab4"],
  89: [new Audio("sounds/A4.mp3"), "A4"],
  55: [new Audio("sounds/Bb4.mp3"), "Bb4"],
  85: [new Audio("sounds/B4.mp3"), "B4"],
  73: [new Audio("sounds/C5.mp3"), "C5"],
  57: [new Audio("sounds/Db5.mp3"), "Db5"],
  79: [new Audio("sounds/D5.mp3"), "D5"],
  48: [new Audio("sounds/Eb5.mp3"), "Eb5"],
  80: [new Audio("sounds/E5.mp3"), "E5"],
};

const effects = (btn) => {
  if (typeof btn === "string") {
    const btnPointer = document.querySelector(`#${btn}`);
    btnPointer.classList.add("active");
    setTimeout(() => btnPointer.classList.remove("active"), 200);
  } else {
    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 200);
  }
};

const playSound = (audio) => {
  let clone;
  if (!isNaN(audio)) {
    clone = typeAudioFiles[audio][0].cloneNode();
    effects(typeAudioFiles[audio][1]);
  } else {
    clone = clickAudioFiles[audio].cloneNode();
  }
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    playSound(btn.id);
    effects(btn);
  });
});

window.addEventListener("keydown", ({ keyCode }) => playSound(keyCode));
