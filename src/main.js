import { projectArr } from './project-arr';
import SimpleLightbox from 'simplelightbox';

//todo -------------------------------------

import { jsFeatures } from './js/jsFeatures';

const jsFeaturesEl = document.querySelector('.js-features-list');
const featuresBtn = document.querySelector('.js-features-title');
let click1 = 0;
featuresBtn.addEventListener('click', () => {
	if (click1 === 0) {
		jsFeatures(projectArr, jsFeaturesEl);
		jsFeaturesEl.style.display = 'flex';
		jsFeaturesEl.style.paddingTop = '20px';
		jsFeaturesEl.style.paddingBottom = '60px';
		click1 += 1;
	} else {
		jsFeaturesEl.style.display = 'none';
		jsFeaturesEl.style.paddingTop = '0';
		jsFeaturesEl.style.paddingBottom = '0';
		click1 = 0;
	}
});

//todo -------------------------------------
import { jsForms } from './js/jsForms';
const jsFormsEl = document.querySelector('.js-forms-list');

const formsBtn = document.querySelector('.js-forms-title');
let click2 = 0;
formsBtn.addEventListener('click', () => {
	if (click2 === 0) {
		jsForms(projectArr, jsFormsEl);
		jsFormsEl.style.display = 'flex';
		jsFormsEl.style.paddingTop = '20px';
		jsFormsEl.style.paddingBottom = '60px';
		click2 += 1;
	} else {
		jsFormsEl.style.display = 'none';
		jsFormsEl.style.paddingTop = '0';
		jsFormsEl.style.paddingBottom = '0';
		click2 = 0;
	}
});

//todo -------------------------------------

import { jsGames } from './js/jsGames';
const jsGamesEl = document.querySelector('.js-games-list');

const gamesBtn = document.querySelector('.js-games-title');
let click3 = 0;
gamesBtn.addEventListener('click', () => {
	if (click3 === 0) {
		jsGames(projectArr, jsGamesEl);
		jsGamesEl.style.display = 'flex';
		jsGamesEl.style.paddingTop = '20px';
		jsGamesEl.style.paddingBottom = '60px';
		click3 += 1;
	} else {
		jsGamesEl.style.display = 'none';
		jsGamesEl.style.paddingTop = '0';
		jsGamesEl.style.paddingBottom = '0';
		click3 = 0;
	}
});

//todo -------------------------------------

import { jsProjects } from './js/jsProjects';
const jsProjectsEl = document.querySelector('.js-projects-list');

const jsProjectsBtn = document.querySelector('.js-projects-title');
let click4 = 0;
jsProjectsBtn.addEventListener('click', () => {
	if (click4 === 0) {
		jsProjects(projectArr, jsProjectsEl);
		jsProjectsEl.style.display = 'flex';
		jsProjectsEl.style.paddingTop = '20px';
		jsProjectsEl.style.paddingBottom = '60px';
		click4 += 1;
	} else {
		jsProjectsEl.style.display = 'none';
		jsProjectsEl.style.paddingTop = '0';
		jsProjectsEl.style.paddingBottom = '0';
		click4 = 0;
	}
});

//todo -------------------------------------

import { simpleWebSides } from './js/simpleWebSides';
const simpleWebSidesEl = document.querySelector('.simple-webSides-list-js');

const webSidesBtn = document.querySelector('.simple-websides-title');
let click5 = 0;
webSidesBtn.addEventListener('click', () => {
	if (click5 === 0) {
		simpleWebSides(projectArr, simpleWebSidesEl);
		simpleWebSidesEl.style.display = 'flex';
		simpleWebSidesEl.style.paddingTop = '20px';
		simpleWebSidesEl.style.paddingBottom = '60px';
		click5 += 1;
	} else {
		simpleWebSidesEl.style.display = 'none';
		simpleWebSidesEl.style.paddingTop = '0';
		simpleWebSidesEl.style.paddingBottom = '0';
		click5 = 0;
	}
});

//todo -------------------------------------

import { reactProjects } from './js/reactProjects';
const reactListEl = document.querySelector('.react-list');

const reactBtn = document.querySelector('.react-title');
let click6 = 0;
reactBtn.addEventListener('click', () => {
	if (click6 === 0) {
		reactProjects(projectArr, reactListEl);
		reactListEl.style.display = 'flex';
		reactListEl.style.paddingTop = '20px';
		reactListEl.style.paddingBottom = '60px';
		click6 += 1;
	} else {
		reactListEl.style.display = 'none';
		reactListEl.style.paddingTop = '0';
		reactListEl.style.paddingBottom = '0';
		click6 = 0;
	}
});

//todo --------------------------------------

import 'simplelightbox/dist/simple-lightbox.min.css';
new SimpleLightbox('.project-item .img-container a', {
	sourceAttr: 'href',
	overlay: true,
	nav: true,
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});

// style settings

const technologyItems = document.querySelectorAll('.technology');

technologyItems.forEach(item => {
	if (!item.textContent) {
		item.style.display = 'none';
	}
});
