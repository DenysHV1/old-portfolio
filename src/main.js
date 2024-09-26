import { projectArr } from './project-arr';

import { jsFeatures } from './js/jsFeatures';
import { jsForms } from './js/jsForms';
import { jsGames } from './js/jsGames';
import { jsProjects } from './js/jsProjects';
import { simpleWebSides } from './js/simpleWebSides';
import { reactProjects } from './js/reactProjects';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lists = {
	jsFeaturesEl: document.querySelector('.js-features-list'),
	jsFormsEl: document.querySelector('.js-forms-list'),
	jsGamesEl: document.querySelector('.js-games-list'),
	jsProjectsEl: document.querySelector('.js-projects-list'),
	simpleWebSidesEl: document.querySelector('.simple-webSides-list-js'),
	reactListEl: document.querySelector('.react-list'),
};
const {
	jsFeaturesEl,
	jsFormsEl,
	jsGamesEl,
	jsProjectsEl,
	simpleWebSidesEl,
	reactListEl,
} = lists;

const mainMenuButtons = {
	featuresBtn: document.querySelector('.js-features-btn'),
	formsBtn: document.querySelector('.js-forms-btn'),
	gamesBtn: document.querySelector('.js-games-btn'),
	jsProjectsBtn: document.querySelector('.js-projects-btn'),
	webSidesBtn: document.querySelector('.simple-websides-btn'),
	reactBtn: document.querySelector('.react-btn'),
};

const {
	featuresBtn,
	formsBtn,
	gamesBtn,
	jsProjectsBtn,
	webSidesBtn,
	reactBtn,
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
jsFeatures(projectArr, jsFeaturesEl);
jsForms(projectArr, jsFormsEl);
jsGames(projectArr, jsGamesEl);
jsProjects(projectArr, jsProjectsEl);
simpleWebSides(projectArr, simpleWebSidesEl);
reactProjects(projectArr, reactListEl);

//todo menu events
featuresBtn.addEventListener('click', () => {
	if (click1 === 0) {
		jsFeaturesEl.classList.add('is-open');
		click1 += 1;
	} else {
		jsFeaturesEl.classList.remove('is-open');
		click1 = 0;
	}
});

formsBtn.addEventListener('click', () => {
	if (click2 === 0) {
		jsFormsEl.classList.add('is-open');
		click2 += 1;
	} else {
		jsFormsEl.classList.remove('is-open');
		click2 = 0;
	}
});

gamesBtn.addEventListener('click', () => {
	if (click3 === 0) {
		jsGamesEl.classList.add('is-open');
		click3 += 1;
	} else {
		jsGamesEl.classList.remove('is-open');
		click3 = 0;
	}
});

jsProjectsBtn.addEventListener('click', () => {
	if (click4 === 0) {
		jsProjectsEl.classList.add('is-open');
		click4 += 1;
	} else {
		jsProjectsEl.classList.remove('is-open');
		click4 = 0;
	}
});

webSidesBtn.addEventListener('click', () => {
	if (click5 === 0) {
		simpleWebSidesEl.classList.add('is-open');
		click5 += 1;
	} else {
		simpleWebSidesEl.classList.remove('is-open');
		click5 = 0;
	}
});

reactBtn.addEventListener('click', () => {
	if (click6 === 0) {
		reactListEl.classList.add('is-open');
		click6 += 1;
	} else {
		reactListEl.classList.remove('is-open');
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

//todo fix for markup
const technologyItems = document.querySelectorAll('.technology');
technologyItems.forEach(item => {
	if (!item.textContent) {
		item.style.display = 'none';
	}
});
