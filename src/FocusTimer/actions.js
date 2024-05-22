import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sound.js";

export function Runnig() {
  state.isRunnig = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function Stop() {
  state.isRunnig = false;
  state.isRunnig = document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function Set() {
  console.log("oi");
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function Sound() {
  el.soundCafeteira.addEventListener("click", () =>
    sounds.buttonCafeteira.play()
  );
}

export function plusfiveSeconds() {
  let minutes = +el.minutes.textContent;
  let seconds = +el.seconds.textContent;

  if (minutes < 59 || seconds > 59) {
    minutes += 5;
  }

  timer.updateDisplay(minutes, seconds);
}

export function minusfiveSeconds() {
  let minutes = +el.minutes.textContent;
  let seconds = +el.seconds.textContent;

  if (minutes > 4 || seconds > 59) {
    minutes -= 5;
  }

  timer.updateDisplay(minutes, seconds);
}
