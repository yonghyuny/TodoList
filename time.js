const todayTime = document.querySelector(".todayTime");

const clock = () => {
  const todayTime1 = new Date();
  const hour = String(todayTime1.getHours());
  const min = String(todayTime1.getMinutes());
  const sec = String(todayTime1.getSeconds());
  return { hour, min, sec };
};

const twoClock = ({ hour, min, sec }) => {
  const twohour = hour.padStart(2, "0");
  const twomin = min.padStart(2, "0");
  const twosec = sec.padStart(2, "0");
  return { twohour, twomin, twosec };
};

export const showClock = () => {
  const nowTime = clock();
  const twoTime = twoClock(nowTime);
  todayTime.innerHTML = `${twoTime.twohour} : ${twoTime.twomin} : ${twoTime.twosec}`;
};
