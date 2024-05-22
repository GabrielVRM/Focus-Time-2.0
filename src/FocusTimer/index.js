import state from "./state.js";
import * as events from "./events.js";
import * as timer from "./timer.js";

export function start(min, sec) {
  state.minutes = min;
  state.seconds = sec;

  timer.updateDisplay();

  events.registerControls();
  events.setMinutes();
  events.sounds();
}
