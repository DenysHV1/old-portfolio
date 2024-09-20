import { projectArr } from './project-arr';
import SimpleLightbox from 'simplelightbox';

//todo -------------------------------------

import { jsFeatures } from './js/jsFeatures';

const jsFeaturesEl = document.querySelector('.js-features-list');
const featuresBtn = document.querySelector('.js-features-title');
let click1 = 0;
jsFeatures(projectArr, jsFeaturesEl);
featuresBtn.addEventListener('click', () => {
	if (click1 === 0) {
		jsFeaturesEl.classList.add('is-open');
		click1 += 1;
	} else {
		jsFeaturesEl.classList.remove('is-open');
		click1 = 0;
	}
});

//todo -------------------------------------
import { jsForms } from './js/jsForms';
const jsFormsEl = document.querySelector('.js-forms-list');

const formsBtn = document.querySelector('.js-forms-title');
let click2 = 0;

jsForms(projectArr, jsFormsEl);
formsBtn.addEventListener('click', () => {
	if (click2 === 0) {
		jsFormsEl.classList.add('is-open');
		click2 += 1;
	} else {
		jsFormsEl.classList.remove('is-open');
		click2 = 0;
	}
});

//todo -------------------------------------

import { jsGames } from './js/jsGames';
const jsGamesEl = document.querySelector('.js-games-list');

const gamesBtn = document.querySelector('.js-games-title');
let click3 = 0;

jsGames(projectArr, jsGamesEl);
gamesBtn.addEventListener('click', () => {
	if (click3 === 0) {
		jsGamesEl.classList.add('is-open');
		click3 += 1;
	} else {
		jsGamesEl.classList.remove('is-open');
		click3 = 0;
	}
});

//todo -------------------------------------

import { jsProjects } from './js/jsProjects';
const jsProjectsEl = document.querySelector('.js-projects-list');

const jsProjectsBtn = document.querySelector('.js-projects-title');
let click4 = 0;

jsProjects(projectArr, jsProjectsEl);
jsProjectsBtn.addEventListener('click', () => {
	if (click4 === 0) {
		jsProjectsEl.classList.add('is-open');
		click4 += 1;
	} else {
		jsProjectsEl.classList.remove('is-open');
		click4 = 0;
	}
});

//todo -------------------------------------

import { simpleWebSides } from './js/simpleWebSides';
const simpleWebSidesEl = document.querySelector('.simple-webSides-list-js');

const webSidesBtn = document.querySelector('.simple-websides-title');
let click5 = 0;

simpleWebSides(projectArr, simpleWebSidesEl);
webSidesBtn.addEventListener('click', () => {
	if (click5 === 0) {
		simpleWebSidesEl.classList.add('is-open');
		click5 += 1;
	} else {
		simpleWebSidesEl.classList.remove('is-open');
		click5 = 0;
	}
});

//todo -------------------------------------

import { reactProjects } from './js/reactProjects';
const reactListEl = document.querySelector('.react-list');

const reactBtn = document.querySelector('.react-title');
let click6 = 0;

reactProjects(projectArr, reactListEl);
reactBtn.addEventListener('click', () => {
	if (click6 === 0) {
		reactListEl.classList.add('is-open');
		click6 += 1;
	} else {
		reactListEl.classList.remove('is-open');
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