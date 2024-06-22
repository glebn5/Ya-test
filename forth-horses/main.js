'use strict';

// Run line template
const runline = document.querySelectorAll('.marquee');
const template = document.querySelector('#marquee');

runline.forEach((el) => {
	let contents = template.content.cloneNode(true);
	el.appendChild(contents);
});

// Stages slider
const prevStage = document.querySelector('.stages__prev');
const nextStage = document.querySelector('.stages__next');
const stagesContent = document.querySelector('.stages__list');

let stageShift = 0;

function prevStageSlide() {
	if (stageShift <= 4 && stageShift != 0) {
		stageShift--;
		let num = stageShift * 100;
		stagesContent.style.transform = `translateX(-${num}%)`;
		// Active button style
		let stagesBtnActive = document.querySelector('.stages__slide-btn_active');
		let prevBtn = stagesBtnActive.previousElementSibling;
		if (prevBtn !== null) {
			stagesBtnActive.classList.remove('stages__slide-btn_active');
			stagesBtnActive.previousElementSibling.classList.add('stages__slide-btn_active');
		}
	}
}
prevStage.addEventListener('click', prevStageSlide);

function nextStageSlide() {
	if (stageShift <= 3) {
		stageShift++;
		let num = stageShift * 100;
		stagesContent.style.transform = `translateX(-${num}%)`;
		// Active button style
		let stagesBtnActive = document.querySelector('.stages__slide-btn_active');
		let nextBtn = stagesBtnActive.nextElementSibling;
		if (nextBtn !== null) {
			stagesBtnActive.classList.remove('stages__slide-btn_active');
			stagesBtnActive.nextElementSibling.classList.add('stages__slide-btn_active');
		}
	}
}
nextStage.addEventListener('click', nextStageSlide);

// guests slider
const prevMember = document.querySelector('.guests__prev');
const nextMember = document.querySelector('.guests__next');
const currentCount = document.querySelector('.guests__curr-count');
const maxCount = document.querySelector('.guests__max-count');
const sliderContent = document.querySelector('.guests__content');

let guestshift = 0;

function resetSlides() {
	let winWidth = window.innerWidth;
	if (winWidth < 1366) {
		maxCount.textContent = '6';
	} else {
		sliderContent.style.transform = `translateX(0)`;
		guestshift = 0;
		maxCount.textContent = '2';
	}
}
window.addEventListener('resize', resetSlides);
resetSlides();

function prevSlide(n) {
	if (guestshift <= n && guestshift != 0) {
		guestshift--;
		let num = guestshift * 100;
		sliderContent.style.transform = `translateX(-${num}%)`;
		currentCount.textContent = guestshift + 1;
	}
}

function nextSlide(n) {
	if (guestshift <= n - 1) {
		guestshift++;
		let num = guestshift * 100;
		sliderContent.style.transform = `translateX(-${num}%)`;
		currentCount.textContent = guestshift + 1;
	} else if (guestshift === n) {
		guestshift = 0;
		sliderContent.style.transform = `translateX(0)`;
		currentCount.textContent = guestshift + 1;
	}
}

function prevguests() {
	let winWidth = window.innerWidth;
	// Slide numbers for mobile/desktop
	if (winWidth < 1366) {
		let n = 6;
		prevSlide(n);
	} else {
		let n = 2;
		prevSlide(n);
	}
}
prevMember.addEventListener('click', prevguests);

function nextguests() {
	let winWidth = window.innerWidth;
	// Slide numbers for mobile/desktop
	if (winWidth < 1366) {
		let n = 5;
		nextSlide(n);
	} else {
		let n = 1;
		nextSlide(n);
	}
}
nextMember.addEventListener('click', nextguests);

// Slider timer
let i = 1;
function myLoop() {  
	setInterval(() => {
		if (i <= 6) {
			i++;
      nextguests();
    } else {
			i = 1;
		}
  }, 4000);
}

myLoop();