// scrollbar
const cardsList = document.querySelectorAll('.cards-list'),
	next = document.querySelectorAll('.scrollbar-next'),
	prev = document.querySelectorAll('.scrollbar-prev');

cardsList.forEach((item, i) => {
	next[i].addEventListener('click', () => {
		item.scrollLeft += 300;
	});
	prev[i].addEventListener('click', () => {
		item.scrollLeft -= 300;
	});

	item.addEventListener('scroll', () => {
		if (item.offsetWidth + item.scrollLeft + 1 >= item.scrollWidth) {
			next[i].classList.add('disable');
		} else {
			next[i].classList.remove('disable');
		}

		if (item.scrollLeft === 0) {
			prev[i].classList.add('disable');
		} else {
			prev[i].classList.remove('disable');
		}
	});
});

// burger menu
const burgerMenuBtn = document.querySelector('.burger-menu__btn-wrapper'),
	burgerMenu = document.querySelector('.burger-menu'),
	burgerMenuWrapper = document.querySelector('.burger-menu__wrapper'),
	burgerMenuList = document.querySelector('.burger-menu__list'),
	btnCards = document.querySelector('.btn-wrapper');

burgerMenuBtn.addEventListener('click', () => {
	burgerMenu.classList.toggle('open');
	burgerMenuList.classList.toggle('open');
	btnCards.classList.toggle('open');
});

// document.addEventListener('click', (e) => {
// 	if (e.target !== burgerMenuList && burgerMenu.classList.contains('open')) {
// 		console.log(e.target);
// 		burgerMenu.classList.remove('open');
// 		burgerMenuList.classList.remove('open');
// 	}
// });

// // slider
// const photosBtnWrapper = document.querySelector('.photos__btn-wrapper'),
// 	prevBtn = document.querySelector('.photos__prev'),
// 	nextBtn = document.querySelector('.photos__next'),
// 	sliderList = document.querySelectorAll('.carousel-item');

// photosBtnWrapper.addEventListener('click', () => {
// 	if (sliderList[1].classList.contains('active')) {
// 		prevBtn.classList.remove('arrowActive');
// 	} else {
// 		prevBtn.classList.add('arrowActive');
// 	}

// 	console.log(sliderList[sliderList.length - 1]);
// 	if (sliderList[sliderList.length - 1].classList.contains('active')) {
// 		nextBtn.classList.add('arrowActive');
// 	} else {
// 		nextBtn.classList.remove('arrowActive');
// 	}
// });
