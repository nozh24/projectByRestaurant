//подрузка скрипта со страницей
document.addEventListener("DOMContentLoaded", () => {})
// преобразование в массив (Array.from(...))
	const tables = Array.from(document.getElementsByClassName('allTables'));
	const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
	const date = document.querySelector('input');
	const link = document.getElementById("buttonSend");
	const btn = document.getElementsByClassName("button");

	

	
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

	// разблокировка кнопки при выполнении всех условий
	if (date.length > 0 && elemTables.className == "activeTime" && elemBtn.className == "activeTable"){
		link.classList.remove("no_link");
		btn.classList.remove("btnDisabled");
	}
	else{
		console.log(false);
	}
	const itemsForm = document.getElementById('data_form');
	const users = [];

	function reserveUser(e){
		const fullName = document.getElementById('full_name').value;
		const email = document.getElementById('email').value;
		const phone = document.getElementById('phone').value;
		const comments = document.getElementById('comments').value;

		e.preventDefault();
		const user = { fullName, email, phone, comments};
		users.push(user);
		this.reset();

	}
	itemsForm.addEventListener('submit', reserveUser)


