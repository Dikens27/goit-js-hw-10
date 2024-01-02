import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
const daysTimer = document.querySelector("[data-days]"); 
const hoursTimer = document.querySelector("[data-hours]");
const minutesTimer = document.querySelector("[data-minutes]");
const secondsTimer = document.querySelector("[data-seconds]");

let userSelectedDate = "";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date("2023-10-08 17:25"),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      window.alert("Please choose a date in the future");
      button.setAttribute("disabled", true);
    } else {
      button.removeAttribute("disabled")
      userSelectedDate = selectedDates[0];
    }
    
    console.log(selectedDates[0]);
  }
   
}

flatpickr(input, options);








function pad(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds }
}


button.addEventListener('click', () => {
  const currentDateTime = new Date().getTime(1000);
  const selectedDateTime = userSelectedDate.getTime();

  setInterval(() => {
    let different = selectedDateTime - currentDateTime - 1000;

    const result = convertMs(different);

    daysTimer.textContent = `${result.days}`;
    hoursTimer.textContent = `${result.hours}`;
    minutesTimer.textContent = `${result.minutes}`;
    secondsTimer.textContent = `${result.seconds}`;
  }, 1000);
});














