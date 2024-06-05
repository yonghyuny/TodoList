import { engMonth } from "./date.js";
import { engDay } from "./date.js";

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const today = new Date();
let currentMonth = today.getMonth();
let currentDate = today.getDate();
let currentDay = today.getDay();
let currentYear = today.getFullYear();

let makeMonth = (year, month) => {
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  return lastDateOfMonth;
};

export function prevEvent() {
  prevBtn.addEventListener("click", () => {
    const date = document.querySelector(".date");
    const month = document.querySelector(".month");
    const day = document.querySelector(".day");
    const year = document.querySelector(".year");
    currentDate = currentDate - 1;
    currentDay = currentDay - 1;
    if (currentDay < 1) currentDay = 7;
    if (currentDate < 1) {
      currentMonth = currentMonth - 1;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear = currentYear - 1;
      }
      currentDate = makeMonth(currentYear, currentMonth);
      month.innerHTML = engMonth[currentMonth];
      year.innerHTML = currentYear;
    }
    date.innerHTML = currentDate;
    day.innerHTML = engDay[currentDay];
  });
}

export function nextEvent() {
  nextBtn.addEventListener("click", () => {
    const date = document.querySelector(".date");
    const month = document.querySelector(".month");
    const day = document.querySelector(".day");
    const year = document.querySelector(".year");
    currentDate = currentDate + 1;
    currentDay = currentDay + 1;

    let lastDate = makeMonth(currentYear, currentMonth);

    if (currentDay > 7) currentDay = 1;
    day.innerHTML = engDay[currentDay];
    if (currentDate > lastDate) {
      currentDate = 1;
      currentMonth = currentMonth + 1;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear = currentYear + 1;
      }
    }
    date.innerHTML = currentDate;
    month.innerHTML = engMonth[currentMonth];
    year.innerHTML = currentYear;
  });
}

const resetBtn = document.querySelector(".reset");
export const functionResetBtn = () => {
  resetBtn.addEventListener("click", () => {
    const today = new Date();
    currentMonth = today.getMonth();
    currentDate = today.getDate();
    currentDay = today.getDay();
    currentYear = today.getFullYear();

    const date = document.querySelector(".date");
    const month = document.querySelector(".month");
    const day = document.querySelector(".day");
    const year = document.querySelector(".year");

    date.innerHTML = currentDate;
    day.innerHTML = engDay[currentDay];
    month.innerHTML = engMonth[currentMonth];
    year.innerHTML = currentYear;
  });
};
