//подрузка скрипта со страницей
// document.addEventListener("DOMContentLoaded", () => {})
// преобразование в массив (Array.from(...))
	const tables = Array.from(document.getElementsByClassName('allTables'));
	const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
	const date = document.getElementById('dateToday');
	const buttonSend = document.getElementById("buttonSend");
	const btn = document.getElementsByClassName("button");
	let currentTime = '';
	let currentTable = '';

	if (elemBtns != '' || elemBtns != null){
		//перебор элементов массива
		for (let elemBtn of elemBtns){
			elemBtn.addEventListener('click', (event) => {
				activeElements(elemBtns, "activeTime", event, 'time');
				// localStorage.setItem('time', event.target.innerText);
				currentTime = event.target.innerText;
				setActiveContinueButton();
			});
		};
	}
	if (tables != '' || tables != null){
	//перебор элементов массива
		for (let elemTables of tables){
			elemTables.addEventListener('click', (event) => {
				activeElements(tables, "activeTable", event);
				localStorage.setItem('table', event.target.id);
				currentTable = event.target.id;
				setActiveContinueButton();
			});
		};
	}

	setActiveContinueButton();

	function activeElements(activeElem, activeClass, event){
		activeElem.forEach( elem => elem.classList.remove(activeClass));
		event.target.classList.toggle(activeClass);
	}

	const itemsForm = document.getElementById('data_form');
	const users = JSON.parse(localStorage.getItem('users')) || [];

	function reserveUser(event){
		const fullName = document.getElementById('full_name').value;
		const email = document.getElementById('email').value;
		const phone = document.getElementById('phone').value;
		const comments = document.getElementById('comments').value;

		event.preventDefault();
		let user = {fullName, email, phone, comments};
		users.push(user);
		
		localStorage.setItem("users", JSON.stringify(users));
		reserveElements(user.email);	
		this.reset();
	}

	function reserveElements(email) {
		const reserves = JSON.parse(localStorage.getItem("reserves") || '[]' );
		
		if (!reserves) {
			reserves = [];
		}
		const reserveElements = {
			date: date.value,
			time: currentTime,
			table: currentTable,
			email: email,
		};
		if (reserves.find(reserve => {
					reserve.date == reserveElements.date && 
					reserve.time == reserveElements.time && 
					reserve.table == reserveElements.table
				})
		) {
			for (let elemTables of tables){
				if (elemTables.className.includes("activeTable")){
					// elemTables.classList.remove("activeTable");
					// reserveElements.elemTables.classList.add("disable");
					alert('стол занят');
				}
			};
			// alert('Такая бронь уже есть');
			// return;
			// reserveElements.table.classList.add("disable");
		}

		reserves.push(reserveElements);
		localStorage.setItem("reserves", JSON.stringify(reserves));	
	}

	itemsForm.addEventListener('submit', reserveUser)

	function setActiveContinueButton() {
		const existsDate = date.value.length > 0;
		let existsActiveTime = false;
		let existsActiveTable = false;
		for (let elemBtn of elemBtns){
			if (elemBtn.className.includes("activeTime")){
				existsActiveTime = true;
			}
		};
		for (let elemTables of tables){
			// разблокировка кнопки при выполнении всех условий
			if (elemTables.className.includes("activeTable")){
				existsActiveTable = true;
			}
		};
		if (existsDate && existsActiveTime && existsActiveTable) {
			buttonSend.removeAttribute('disabled')
		} else {
			buttonSend.setAttribute('disabled', '')
		}
	}

	buttonSend.addEventListener('click', () => {
		document.getElementById('data_form').scrollIntoView();
	});

	const buttonSubmit = document.getElementById('buttonSubmit');
	
	buttonSubmit.addEventListener('click', () => {
		//document.getElementsByClassName('reserve').reset();
			date.value = "";

		 for (let elemTables of tables){
			if (elemTables.className.includes("activeTable")){
					elemTables.classList.remove("activeTable");
				// reserveElements.elemTables.classList.add("disable");
			}
		};
		for (let elemBtn of elemBtns){
			if (elemBtn.className.includes("activeTime")){
				elemBtn.classList.remove("activeTime");
			}
		};

	})


