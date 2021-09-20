let showPrevBtn = document.getElementById('back');
let showNextBtn = document.getElementById('follow');
let slideImage = document.getElementById('slide_image');

//event
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//images array
let imagesUrl = [];

imagesUrl.push('assets/slideshow/res.jpg'); 
imagesUrl.push('assets/slideshow/wine.jpg'); 
imagesUrl.push('assets/slideshow/seafood_2.jpg'); 
imagesUrl.push('assets/slideshow/chef.jpg'); 
imagesUrl.push('assets/slideshow/beef.jpg'); 
imagesUrl.push('assets/slideshow/sweet.jpg'); 
imagesUrl.push('assets/slideshow/seafood.jpg'); 
imagesUrl.push('assets/slideshow/chef_1.jpg'); 
imagesUrl.push('assets/slideshow/wine_2.jpg'); 

let currentImageIndex = 0;
slideImage.src = imagesUrl[currentImageIndex];
showPrevBtn.disabled = true;

//fd
function onShowPrevBtnClick(){
	currentImageIndex--;
	slideImage.src = imagesUrl[currentImageIndex];
	showNextBtn.disabled = false;

	//disable prev button for need
	if (currentImageIndex === 0 ){
		showPrevBtn.disabled = true;
	}
}
function onShowNextBtnClick(){
	currentImageIndex++;
	slideImage.src = imagesUrl[currentImageIndex];
	showPrevBtn.disabled = false;

	//disable next button for need
	if (currentImageIndex === imagesUrl.length - 1){
		showNextBtn.disabled = true;
	}
}
