const elementDays = document.getElementById('days');
const elementHours = document.getElementById('hours');
const elementMinutes = document.getElementById('minutes');
const elementSeconds = document.getElementById('seconds');

var date = new Date();
date.setDate(date.getDate() + 5);

function countdown() {

  const lastDate = date;
  const currentDate = new Date();

  const totalSeconds = (lastDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  elementDays.innerHTML = days;
  elementHours.innerHTML = timeFormat(hours);
  elementMinutes.innerHTML = timeFormat(minutes);
  elementSeconds.innerHTML = timeFormat(seconds);  
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);