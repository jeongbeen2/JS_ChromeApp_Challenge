
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const body = document.querySelector("body");
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const nowDay = new Date();
  const dayGap = xmasDay.getTime() - nowDay.getTime();
  const days = Math.floor(dayGap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dayGap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dayGap / (1000 * 60)) % 60);
  const seconds = Math.floor((dayGap / 1000) % 60);
  
  clockTitle.innerText = `I can't wait for Christmas Eve!
  ${days}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`
  clockTitle.style.color = "#45960F"
  body.style.backgroundColor = "#EB2E1E"
}

function init() {
  setInterval(getTime,1000);
}
init();
