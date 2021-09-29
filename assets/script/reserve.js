//подрузка скрипта со страницей
// document.addEventListener("DOMContentLoaded", () => {})
// преобразование в массив (Array.from(...))
'use strict';
const tables = Array.from(document.getElementsByClassName('allTables')); // массив столов
const dateTimeBtns = Array.from(document.getElementsByClassName('date_time_button')); // массив часов
const date = document.getElementById('dateToday'); // календарь
const buttonSend = document.getElementById("buttonSend"); // кнопка "Далее"
const buttonSubmit = document.getElementById('buttonSubmit'); // кнопка "Отправить"
let currentTime = '';  // текущее время
let currentTable = ''; // текущий стол
setActiveContinueButton();

// Функция перебора элементов и добавления класса для активации
function activeElements(activeElem, activeClass, event){
	activeElem.forEach( elem => elem.classList.remove(activeClass));
	event.target.classList.toggle(activeClass);
}
const itemsForm = document.getElementById('data_form'); // Форма для личных данных
const users = JSON.parse(localStorage.getItem('users')) || []; // Массив вывода данных из LS

//Функция бронирования пользователей
function reserveUser(event){
	const fullName = document.getElementById('full_name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const comments = document.getElementById('comments').value;
	if (!fullName || !email || !phone) {  //проверка заполненности обязательных полей
		alert('Заполнены не все обязательные поля');
		return;
	}
	event.preventDefault();
	let user = {fullName, email, phone, comments};
	users.push(user);
	
	localStorage.setItem("users", JSON.stringify(users));
	reserveElements(user.email);	
	this.reset(); // очистка формы
}
// Функция недоступности столов, если не выбрано время
function setDisabledTables() {
	const reserves = JSON.parse(localStorage.getItem("reserves") || '[]' );	
	if (!reserves) {
		reserves = [];
	}
	for (let elemTables of tables) {
		if (!currentTime || reserves.find(reserve => {
			return reserve.date == date.value && 
			reserve.time == currentTime && 
			reserve.table == elemTables.id
		})) {
			elemTables.classList.remove("activeTable");
			elemTables.classList.add("disable");
		} else {
			elemTables.classList.remove("disable");
		}
	};
}
function reserveElements(email) {
	const reserves = JSON.parse(localStorage.getItem("reserves") || '[]' );	
	if (!reserves) {
		reserves = [];
	}
	const reserveElement = {
		date: date.value,
		time: currentTime,
		table: currentTable,
		email: email,
	};
	if (reserves.find(reserve => {
				return reserve.date == reserveElement.date && 
				reserve.time == reserveElement.time && 
				reserve.table == reserveElement.table
			})
	) {
		for (let elemTables of tables){
			if (elemTables.className.includes("activeTable")){
				elemTables.classList.remove("activeTable");
				reserveElement.elemTables.classList.add("disable");
			}
		};
		// alert('стол занят');
		return;
	}
	reserves.push(reserveElement);
	localStorage.setItem("reserves", JSON.stringify(reserves));
	currentTime = null;
	currentTable = null;
	setDisabledTables();
}
itemsForm.addEventListener('submit', reserveUser) // отправка данных по 

// Функция активации кнопки "Далее" при выборе необходимых элементов
function setActiveContinueButton() {
	const existsDate = date.value.length > 0;
	let existsActiveTime = false;
	let existsActiveTable = false;
	for (let elemBtn of dateTimeBtns){
		if (elemBtn.className.includes("activeTime")){
			existsActiveTime = true;
		}
	};
	for (let elemTables of tables){
		if (elemTables.className.includes("activeTable")){
			existsActiveTable = true;
		}
	};
	// разблокировка кнопки при выполнении всех условий
	if (existsDate && existsActiveTime && existsActiveTable) {
		buttonSend.removeAttribute('disabled')
	} else {
		buttonSend.setAttribute('disabled', '')
	}
}
//Скролл при клике на кнопку
buttonSend.addEventListener('click', () => {
	document.getElementById('data_form').scrollIntoView();
});

buttonSubmit.addEventListener('click', () => {
	buttonSend.setAttribute('disabled', 'disabled');
	for (let elemTables of tables){
		if (elemTables.className.includes("activeTable")){
			elemTables.classList.remove("activeTable");
			// elemTables.classList.add("disable");
		}
	};
	for (let elemBtn of dateTimeBtns){
		if (elemBtn.className.includes("activeTime")){
				elemBtn.classList.remove("activeTime");
		}
	};

})

if (dateTimeBtns != '' || dateTimeBtns != null){
	//перебор элементов массива
	for (let dateTimeBtn of dateTimeBtns){
		dateTimeBtn.addEventListener('click', (event) => {
			activeElements(dateTimeBtns, "activeTime", event, 'time');
			// localStorage.setItem('time', event.target.innerText);
			currentTime = event.target.innerText;
			setActiveContinueButton();
			setDisabledTables();
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
	setDisabledTables();
}