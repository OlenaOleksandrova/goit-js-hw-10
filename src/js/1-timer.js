import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const datetimePicker = document.getElementById('datetime-picker');

const timer = new Timer({
    onTick: updateClockface,
})
let SelectedDate = null;
let timerInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

   if (selectedDate < new Date()) {
      alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

// зворотній виклик


