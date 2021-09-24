//подрузка скрипта со страницей
document.addEventListener("DOMContentLoaded", () => {})
// преобразование в массив (Array.from(...))
	const tables = Array.from(document.getElementsByClassName('allTables'));
	const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
	
	if (elemBtns != '' || elemBtns != null){
		//перебор элементов массива
		for (let elemBtn of elemBtns){
			elemBtn.addEventListener('click', (event) => {
				activeElements(elemBtns, "activeTime", event, 'time');
				localStorage.setItem('time', event.target.innerText);
			});
		};
	}
	if (tables != '' || tables != null){
	//перебор элементов массива
		for (let elemTables of tables){
			elemTables.addEventListener('click', (event) => {
				activeElements(tables, "activeTable", event);
				localStorage.setItem('table', event.target.id);
			});
		};
	}

function activeElements(activeElem, activeClass, event){
	activeElem.forEach( elem => elem.classList.remove(activeClass));
	event.target.classList.toggle(activeClass);
}