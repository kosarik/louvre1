let videos = document.querySelectorAll('.video-controls-slider .video-dot');
let currentItem1 = 0;
let isEnabled1 = true;
function changeCurrentItem(n) {
	currentItem = (n + videos.length) % videos.length;
}
function hideItem(direction) {
	isEnabled1 = false;
	videos[currentItem1].classList.add(direction);
	videos[currentItem1].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}
function showItem(direction) {
	videos[currentItem].classList.add('next', direction);
	videos[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled1 = true;
	});
}
function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}
function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}
document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);

	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});
