document.addEventListener("DOMContentLoaded", () =>{
	let element = Array.from(getElementsByClassName("date_time_button"));
	if (element != null && element != ''){
		element.addEventListener("click", function (){
			console.log(element);
		})
	}
});
