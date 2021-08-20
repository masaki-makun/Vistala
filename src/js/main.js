import { info } from 'autoprefixer';
import '../css/style.css';

// Swiper
const mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	speed: 700,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

// panel表示処理
const panelActive = () => {
	const panel = document.querySelector('.js-panel-sp');
	const list = document.querySelector('.js-list');
	const listItemLinks = document.querySelectorAll('.js-list__item__link');
	const width = window.innerWidth;
	if (width < 500) {
		panel.classList.add('w-full');
	}
	panel.classList.remove('w-0');
	panel.classList.remove('translate-x-full');
	panel.classList.remove('opacity-0');
	panel.classList.add('translate-x-0');
	panel.classList.add('opacity-1');
	panel.classList.add('w-1/2');
	list.classList.remove('opacity-0');
	list.classList.remove('w-0');
	list.classList.remove('translate-x-full');
	list.classList.add('w-full');
	list.classList.add('translate-x-0');

	listItemLinks.forEach((link) => {
		link.classList.remove('w-0');
		link.classList.remove('translate-x-full');
		link.classList.add('w-full');
		link.classList.add('translate-x-0');
	});
	console.log('run panelActive');
};

// panel非表示処理
const panelNonActive = () => {
	const panel = document.querySelector('.js-panel-sp');
	const list = document.querySelector('.js-list');
	const listItemLinks = document.querySelectorAll('.js-list__item__link');
	const width = window.innerWidth;
	if (width < 500) {
		panel.classList.remove('w-full');
	}
	panel.classList.remove('translate-x-0');
	panel.classList.remove('opacity-1');
	panel.classList.remove('w-1/2');
	panel.classList.add('w-0');
	panel.classList.add('translate-x-full');
	panel.classList.add('opacity-0');
	list.classList.remove('w-full');
	list.classList.remove('translate-x-0');
	list.classList.add('w-0');
	list.classList.add('translate-x-full');

	listItemLinks.forEach((link) => {
		link.classList.add('w-0');
		link.classList.add('translate-x-full');
		link.classList.remove('w-full');
		link.classList.remove('translate-x-0');
	});
	console.log('run panelNonActive');
};

// MenuButton表示処理
const menuBtnActive = () => {
	const menuBtnWrap = document.querySelector('.js-menu-btn-wrap');
	const menuBtn = document.querySelector('.js-menu-btn');
	menuBtnWrap.classList.remove('opacity-0');
	menuBtn.classList.remove('hidden');
	menuBtn.classList.remove('opacity-0');
	menuBtnWrap.classList.add('opacity-1');
	menuBtn.classList.add('block');
	menuBtn.classList.add('opacity-1');
};

// MenuButton非表示処理
const menuBtnNonActive = () => {
	const menuBtnWrap = document.querySelector('.js-menu-btn-wrap');
	const menuBtn = document.querySelector('.js-menu-btn');
	menuBtnWrap.classList.add('opacity-0');
	menuBtn.classList.add('hidden');
	menuBtn.classList.add('opacity-0');
	menuBtnWrap.classList.remove('opacity-1');
	menuBtn.classList.remove('block');
	menuBtn.classList.remove('opacity-1');
};

// CloseButton表示処理
const closeBtnActive = () => {
	const closeBtnWrap = document.querySelector('.js-close-btn-wrap');
	const closeBtn = document.querySelector('.js-close-btn');
	closeBtnWrap.classList.remove('opacity-0');
	closeBtnWrap.classList.remove('hidden');
	closeBtn.classList.remove('hidden');
	closeBtn.classList.remove('opacity-0');
	closeBtnWrap.classList.add('opacity-1');
	closeBtn.classList.add('block');
	closeBtn.classList.add('opacity-1');
};

// CloseButton非表示処理
const closeBtnNonActive = () => {
	const closeBtnWrap = document.querySelector('.js-close-btn-wrap');
	const closeBtn = document.querySelector('.js-close-btn');
	closeBtnWrap.classList.add('opacity-0');
	closeBtnWrap.classList.add('hidden');
	closeBtn.classList.add('hidden');
	closeBtn.classList.add('opacity-0');
	closeBtnWrap.classList.remove('opacity-1');
	closeBtn.classList.remove('block');
	closeBtn.classList.remove('opacity-1');
};

// overlay表示処理
const overlayActive = () => {
	const overlay = document.querySelector('.js-overlay');
	overlay.classList.remove('w-0');
	overlay.classList.remove('translate-x-full');
	overlay.classList.add('translate-x-0');
	overlay.classList.add('w-full');
	console.log('run overlayActive');
};

// overlay非表示処理
const overlayNonActive = () => {
	const overlay = document.querySelector('.js-overlay');
	overlay.classList.add('w-0');
	overlay.classList.add('translate-x-full');
	overlay.classList.remove('translate-x-0');
	overlay.classList.remove('w-full');
	console.log('run overlayNonActive');
};

// linkクリック時にpanel, overlay非表示処理
const clickTheLinkToExecuteTheProcess = () => {
	const links = document.querySelectorAll('.js-list__item__link');
	const width = window.innerWidth;
	links.forEach((link) => {
		if (width < 768) {
			link.addEventListener('click', () => {
				overlayNonActive();
				panelNonActive();
				menuBtnActive();
				closeBtnNonActive();
			});
		}
	});
	console.log('run linkClickPanelOverlayNonActive');
};
clickTheLinkToExecuteTheProcess();

const startingFunction = () => {
	const menuBtn = document.querySelector('.js-menu-btn');
	const closeBtn = document.querySelector('.js-close-btn');
	const overlay = document.querySelector('.js-overlay');
	menuBtn.addEventListener('click', () => {
		overlayActive();
		panelActive();
		menuBtnNonActive();
		closeBtnActive();
	});
	closeBtn.addEventListener('click', () => {
		overlayNonActive();
		panelNonActive();
		menuBtnActive();
		closeBtnNonActive();
	});
	overlay.addEventListener('click', () => {
		overlayNonActive();
		panelNonActive();
		linkClickPanelOverlayNonActive();
		menuBtnActive();
		closeBtnNonActive();
	});
};
startingFunction();
