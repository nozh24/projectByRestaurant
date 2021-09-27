//подрузка скрипта со страницей
document.addEventListener("DOMContentLoaded", () => {})
// преобразование в массив (Array.from(...))
	const tables = Array.from(document.getElementsByClassName('allTables'));
	const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
	const date = document.getElementById('dateToday');
	const btnDisabled = document.getElementById("buttonSend");
	
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
	if (date.value != '' && elemBtn ==  "activeTime" && elemTables.classList ==  "activeTable"){
		btnDisabled.disabled = false; 
	}
	else{
		btnDisabled.disabled = true;
	}

	// if (date.value != '' && elemBtns.classList ==  "activeTime" && elemTables.classList ==  "activeTable" ){
		
	// } else{
	// 	console.log("error");
	// }

	// function check(){
	// 	document.getElementById('buttonSend').disabled = false;
	//   } 

	function activeElements(activeElem, activeClass, event){
		activeElem.forEach( elem => elem.classList.remove(activeClass));
		event.target.classList.toggle(activeClass);
	}

