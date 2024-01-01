const WEEK = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

function updateTime() {
  var now = new Date();
  var timeElement = document.getElementById("time");
  var dateElement = document.getElementById("date");
  var clockElement = document.querySelector(".clock");

  timeElement.innerText =
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);

  dateElement.innerText =
    now.getFullYear() +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    zeroPadding(now.getDate(), 2) +
    " " +
    WEEK[now.getDay()];

  updateBackgroundColor(clockElement, now.getHours());
}

function updateBackgroundColor(clockElement, hours) {
  var classList = clockElement.classList;

  // Remove existing color classes
  classList.remove("red-bg", "black-bg", "green-bg");

  // Add color class based on hours
  if (hours < 6 || hours >= 18) {
    classList.add("black-bg");
  } else if (hours >= 6 && hours < 12) {
    classList.add("green-bg");
  } else {
    classList.add("red-bg");
  }
}

function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}

updateTime();
setInterval(updateTime, 1000);
