import { projectArr } from './project-arr';
import SimpleLightbox from 'simplelightbox';

//todo -------------------------------------

import { jsFeatures } from './js/jsFeatures';
jsFeatures(projectArr);

//todo -------------------------------------
import { jsForms } from './js/jsForms';
jsForms(projectArr);

//todo -------------------------------------

import { jsGames } from './js/jsGames';
jsGames(projectArr);

//todo -------------------------------------

import { jsProjects } from './js/jsProjects';
jsProjects(projectArr);

//todo -------------------------------------

import { simpleWebSides } from './js/simpleWebSides';
simpleWebSides(projectArr);

//todo -------------------------------------

import { reactProjects } from './js/reactProjects';
reactProjects(projectArr);

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
