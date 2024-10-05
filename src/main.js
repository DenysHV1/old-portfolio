import { projectArr } from './project-arr';

import { lastProjects } from './js/last-projects';
import { lastProjectsSlider } from './js/last-projects';
import { jsAnother } from './js/jsAnother';
import { jsMain } from './js/jsMain';
import { htmlCssMain } from './js/htmlCssMain';
import { reactMain } from './js/reactMain';
import { htmlCssAnother } from './js/htmlCssAnother';
import { reactAnother } from './js/reactAnother';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lists = {
	lastProjectsEl: document.querySelector('.last-projects-list'),
	jsAnotherEl: document.querySelector('.js-another-list'),
	jsMainEl: document.querySelector('.js-main-list'),
	htmlCssMainEl: document.querySelector('.html-css-main-list'),
	reactMainEl: document.querySelector('.react-main-list'),
	htmlCssAnotherEl: document.querySelector('.html-css-another-list'),
	reactAnotherEl: document.querySelector('.react-another-list'),
};
const {
	lastProjectsEl,
	jsAnotherEl,
	jsMainEl,
	htmlCssMainEl,
	reactMainEl,
	htmlCssAnotherEl,
	reactAnotherEl,
} = lists;

const mainMenuButtons = {
	jsAnotherBtn: document.querySelector('.js-another-btn'),
	jsMainBtn: document.querySelector('.js-main-btn'),
	htmlCssMainBtn: document.querySelector('.html-css-main-btn'),
	reactMainBtn: document.querySelector('.js-react-main'),
	htmlCssAnotherBtn: document.querySelector('.html-css-another-btn'),
	reactAnotherBtn: document.querySelector('.js-react-another'),
};

const {
	jsAnotherBtn,
	jsMainBtn,
	htmlCssMainBtn,
	reactMainBtn,
	htmlCssAnotherBtn,
	reactAnotherBtn,
} = mainMenuButtons;

let clicks = {
	click1: 0,
	click2: 0,
	click3: 0,
	click4: 0,
	click5: 0,
	click6: 0,
};

let { click1, click2, click3, click4, click5, click6 } = clicks;

//todo render markup
lastProjects(projectArr, lastProjectsEl)
jsAnother(projectArr, jsAnotherEl);
jsMain(projectArr, jsMainEl);
htmlCssMain(projectArr, htmlCssMainEl);
reactMain(projectArr, reactMainEl);
htmlCssAnother(projectArr, htmlCssAnotherEl);
reactAnother(projectArr, reactAnotherEl);


//todo menu events
jsAnotherBtn.addEventListener('click', () => {
	if (click1 === 0) {
		jsAnotherEl.classList.add('is-open');
		jsMainEl.classList.remove('is-open');
		htmlCssMainEl.classList.remove('is-open');
		reactMainEl.classList.remove('is-open');
		htmlCssAnotherEl.classList.remove('is-open');
		reactAnotherEl.classList.remove('is-open');
		click1 += 1;
	} else {
		jsAnotherEl.classList.remove('is-open');

		click1 = 0;
	}
});

jsMainBtn.addEventListener('click', () => {
	if (click2 === 0) {
		jsMainEl.classList.add('is-open');
		jsAnotherEl.classList.remove('is-open');
		htmlCssMainEl.classList.remove('is-open');
		reactMainEl.classList.remove('is-open');
		htmlCssAnotherEl.classList.remove('is-open');
		reactAnotherEl.classList.remove('is-open');
		click2 += 1;
	} else {
		jsMainEl.classList.remove('is-open');

		click2 = 0;
	}
});

htmlCssMainBtn.addEventListener('click', () => {
	if (click3 === 0) {
		htmlCssMainEl.classList.add('is-open');
		reactMainEl.classList.remove('is-open');
		htmlCssAnotherEl.classList.remove('is-open');
		reactAnotherEl.classList.remove('is-open');
		jsAnotherEl.classList.remove('is-open');
		jsMainEl.classList.remove('is-open');
		click3 += 1;
	} else {
		htmlCssMainEl.classList.remove('is-open');

		click3 = 0;
	}
});

reactMainBtn.addEventListener('click', () => {
	if (click4 === 0) {
		reactMainEl.classList.add('is-open');
		htmlCssAnotherEl.classList.remove('is-open');
		reactAnotherEl.classList.remove('is-open');
		jsAnotherEl.classList.remove('is-open');
		jsMainEl.classList.remove('is-open');
		htmlCssMainEl.classList.remove('is-open');
		click4 += 1;
	} else {
		reactMainEl.classList.remove('is-open');

		click4 = 0;
	}
});

htmlCssAnotherBtn.addEventListener('click', () => {
	if (click5 === 0) {
		htmlCssAnotherEl.classList.add('is-open');
		jsAnotherEl.classList.remove('is-open');
		jsMainEl.classList.remove('is-open');
		htmlCssMainEl.classList.remove('is-open');
		reactMainEl.classList.remove('is-open');
		reactAnotherEl.classList.remove('is-open');
		click5 += 1;
	} else {
		htmlCssAnotherEl.classList.remove('is-open');

		click5 = 0;
	}
});

reactAnotherBtn.addEventListener('click', () => {
	if (click6 === 0) {
		reactAnotherEl.classList.add('is-open');
		jsAnotherEl.classList.remove('is-open');
		jsMainEl.classList.remove('is-open');
		htmlCssMainEl.classList.remove('is-open');
		reactMainEl.classList.remove('is-open');
		htmlCssAnotherEl.classList.remove('is-open');
		click6 += 1;
	} else {
		reactAnotherEl.classList.remove('is-open');
		click6 = 0;
	}
});

new SimpleLightbox('.project-item .img-container a', {
	sourceAttr: 'href',
	overlay: true,
	nav: true,
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});

new SimpleLightbox('.project-item-swiper .img-container a', {
	sourceAttr: 'href',
	overlay: true,
	nav: true,
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});

//todo fix for markup
const technologyItems = document.querySelectorAll('.technology');
technologyItems.forEach(item => {
	if (!item.textContent) {
		item.style.display = 'none';
	}
});

lastProjectsSlider(lastProjectsEl)