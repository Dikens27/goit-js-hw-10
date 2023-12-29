import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");

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
    },
   
};

const datePicker = flatpickr(input, options);

