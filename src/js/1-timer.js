import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
const daysTimer = document.querySelector("[data-days]"); 
const hoursTimer = document.querySelector("[data-hours]");
const minutesTimer = document.querySelector("[data-minutes]");
const secondsTimer = document.querySelector("[data-seconds]");

let userSelectedDate = "";
button.setAttribute("disabled", true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
    iziToast.show({
      title: 'Please choose a date in the future',
      titleColor: 'white',
      color: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
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
  const currentDateTime = Date.now();
  let selectedDateTime = userSelectedDate.getTime();

  const timeInterval = setInterval(() => {
    selectedDateTime = selectedDateTime - 1000;
    let different = selectedDateTime - currentDateTime - 1000;
    
    if (currentDateTime == selectedDateTime - 1000) {
      clearInterval(timeInterval);
    }

    const result = convertMs(different);

    daysTimer.textContent = result.days;
    hoursTimer.textContent = result.hours;
    minutesTimer.textContent = result.minutes;
    secondsTimer.textContent = result.seconds;
  }, 1000);
});














