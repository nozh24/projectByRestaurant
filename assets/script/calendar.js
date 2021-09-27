// function Calendar(id, year, month) {
// var Dlast = new Date(year,month+1,0).getDate(),
//     Data = new Date(year,month,Dlast),
//     DNlast = new Date(Data.getFullYear(),Data.getMonth(),Dlast).getDay(),
//     DNfirst = new Date(Data.getFullYear(),Data.getMonth(),1).getDay(),
//     calendar = '<tr>',
//     month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
// if (DNfirst != 0) {
//   for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
// }else{
//   for(var  i = 0; i < 6; i++) calendar += '<td>';
// }
// for(var  i = 1; i <= Dlast; i++) {
//   if (i == new Date().getDate() && Data.getFullYear() == new Date().getFullYear() && Data.getMonth() == new Date().getMonth()) {
//     calendar += '<td class="today">' + i;
//   }else{
//     calendar += '<td>' + i;
//   }
//   if (new Date(Data.getFullYear(),Data.getMonth(),i).getDay() == 0) {
//     calendar += '<tr>';
//   }
// }
// for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
// document.querySelector('#'+id+' tbody').innerHTML = calendar;
// document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[Data.getMonth()] +' '+ Data.getFullYear();
// document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = Data.getMonth();
// document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = Data.getFullYear();
// if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
//     document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
// }
// }
// Calendar("calendar2", new Date().getFullYear(), new Date().getMonth());
// // переключатель минус месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
//   Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
// }
// // переключатель плюс месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
//   Calendar("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
// }