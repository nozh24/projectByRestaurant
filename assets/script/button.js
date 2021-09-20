let button = document.getElementsByTagName('body')[0];
//внедение кнопки
button.insertAdjacentHTML('beforeend', '<button onclick="topFunction()" id="toTop" title="Наверх"><img src="assets/img/up-arrow.png"></img></button>');

//добавление стилей к кнопке
document.getElementById("toTop").setAttribute("style", "display:none; position:fixed; bottom:18px; right:25px; z-index:100; border-radius:50%; border:none; outline:none; background: #f0932b; cursor:pointer;");

//плавность прокрутки
document.documentElement.setAttribute("style", "scroll-behavior:smooth;");

//обработка события
window.onscroll = function(){
	scrollFunction();
}

//вызов функции во время прокрутки
function scrollFunction(){
	let upBtn = document.getElementById("toTop");

	if (document.documentElement.scrollTop > 150){
		upBtn.style.display = "block";
	} else{
		upBtn.style.display = "none";	
	}
}
function topFunction(){
	document.documentElement.scrollTop = 0;
}