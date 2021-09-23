document.addEventListener("DOMContentLoaded", () => {
// преобразование в массив (Array.from(...))
const tables = Array.from(document.getElementsByClassName('allTables'));
const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
if (elemBtns != '' || elemBtns != null){
	//перебор элементов массива
	for (let elemBtn of elemBtns){
		elemBtn.addEventListener('click', (event) => {
			elemBtns.forEach( elem => elem.classList.remove("active"));
			event.target.classList.toggle("active");
			localStorage.setItem('time', event.target.innerText);
			});
		};
	}
// Работа со столами
if (tables != '' || tables != null){
//перебор элементов массива
	for (let elemTables of tables){
		elemTables.addEventListener('click', (event) => {
			tables.forEach( elem => elem.classList.remove("activeTable"));
			event.target.classList.toggle("activeTable");
		});
	};
}

})