import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

import * as sound from "./sound.js";

export function registerControls() {
  el.controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (!actions[action]) {
      return;
    }
    actions[action]();
  });
}

export function setMinutes() {
  el.timer.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    console.log(action);
    if (!actions[action]) {
      return;
    }
    actions[action]();
  });
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  //expreção regular
  el.minutes.onkeypress = (e) => /\d/.test(e.key);

  el.minutes.addEventListener("blur", (e) => {
    let time = e.currentTarget.textContent;
    time = time > 60 ? 60 : time;
    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}

export function sounds() {
  el.soundFloresta.addEventListener("click", (e) => {
    if (sound.buttonFloresta.paused) {
      sound.buttonFloresta.play();
    } else {
      sound.buttonFloresta.pause();
    }
  });

  el.soundChuva.addEventListener("click", () => {
    if (sound.buttonChuva.paused) {
      sound.buttonChuva.play();
    } else {
      sound.buttonChuva.pause();
    }
  });

  el.soundCafeteira.addEventListener("click", () => {
    if (sound.buttonCafeteira.paused) {
      sound.buttonCafeteira.play();
    } else {
      sound.buttonCafeteira.pause();
    }
  });

  el.soundLareira.addEventListener("click", () => {
    if (sound.buttonLareira.paused) {
      sound.buttonLareira.play();
    } else {
      sound.buttonLareira.pause();
    }
  });
}
