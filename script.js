"use Strict";

const digitalClockHour = document.getElementById("hours");
const digitalClockMin = document.getElementById("minutes");
const digitalClockSec = document.getElementById("seconds");
const analogClockHour = document.getElementById("analog_Hours");
const analogClockMin = document.getElementById("analog_Minutes");
const analogClockSec = document.getElementById("analog_Seconds");
function setTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  analogClockHour.style.setProperty("--hours", hours * 15 + "deg");
  analogClockMin.style.setProperty("--minutes", (minutes * 360) / 60 + "deg");
  analogClockSec.style.setProperty("--seconds", (seconds * 360) / 60 + "deg");
  digitalClockHour.innerHTML = hours;
  digitalClockMin.innerHTML = minutes;
  digitalClockSec.innerHTML = seconds;
}

// Log current date and time every 1000 ms (= 1 second)
setInterval(setTime, 1000);
