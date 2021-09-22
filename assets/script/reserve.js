// document.addEventListener("DOMContentLoaded", () =>{
// 	let element = Array.from(getElementsByClassName("date_time_button"));
// 	if (element != null && element != ''){
// 		element.addEventListener("click", function (){
// 			console.log(element);
// 		})
// 	}
// });

document.addEventListener("DOMContentLoaded", () =>{
const elemBtns = Array.from(document.getElementsByClassName('date_time_button'));
if (elemBtns != '' && elemBtns != null){
	//перебор элементов массива
	for (let elemBtn of elemBtns){
		elemBtn.addEventListener('click', (event) => {
			elemBtns.forEach( elem => elem.classList.remove("active"));
			event.target.classList.toggle("active");
			});
		};
	}
})