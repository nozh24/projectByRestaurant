let dateInput = document.getElementById('dateToday');

const cur_date = new Date();
const cur_month = cur_date.getMonth() > 9 ? cur_date.getMonth() + 1 : '0' + (cur_date.getMonth() + 1);
const cur_day = cur_date.getDate() > 9 ? cur_date.getDate() : '2' + cur_date.getDate();
const dateStr = cur_date.getFullYear() + '-' + cur_month + '-' + cur_day;

dateInput.setAttribute('min', dateStr);