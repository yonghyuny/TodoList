import { functionAddBtn } from "./addEvent.js";
import { showClock } from "./time.js";
import { makeToday } from "./date.js";
import { prevEvent } from "./DateBtn.js";
import { nextEvent } from "./DateBtn.js";
import { functionResetBtn } from "./DateBtn.js";

functionAddBtn();
showClock();
setInterval(showClock, 1000);
makeToday();
prevEvent();
nextEvent();
functionResetBtn();
