//подрузка скрипта со страницей
document.addEventListener("DOMContentLoaded", () => {})
// преобразование в массив (Array.from(...))
	const tables = Array.from(document.getElementsByClassName('allTables'));
	const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
	
	if (elemBtns != '' || elemBtns != null){
		//перебор элементов массива
		for (let elemBtn of elemBtns){
			elemBtn.addEventListener('click', (event) => {
				activeElements(elemBtns, "activeTime", event, 'time')
			});
		};
	}
	if (tables != '' || tables != null){
	//перебор элементов массива
		for (let elemTables of tables){
			elemTables.addEventListener('click', (event) => {
				activeElements(tables, "activeTable", event, 'table')
			});
		};
	}

function activeElements(activeElem, activeClass,event, value){
	activeElem.forEach( elem => elem.classList.remove(activeClass));
	event.target.classList.toggle(activeClass);
	localStorage.setItem(value, event.target.innerText);
}