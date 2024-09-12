import { projectArr } from './project-arr';

//todo -------------------------------------------------------------------------
const jsFeaturesEl = document.querySelector('.js-features-list');
function setFeaturesMarkup(projectArrInner) {
	return projectArrInner.map(
		({
			nameOfProjectGitText,
			nameOfProjectGit,
			nameOFProjectPreviewText,
			nameOFProjectPreview,
			categoryText,
			category,
			typeOfProjectText,
			typeOfProject,
			status,
			imgPreview,
			imgGallery,
			alt,
			codeLinkText,
			codeLink,
			siteText,
			siteLink,
			technologyText,
			technology1,
			technology2,
			descriptionText,
			description,
			projectNumTExt,
			ProjectNumber,
		}) => {
			if (status && category === 'JS Features') {
				return`
		<li class="project-item">
<div class="img-container">
	<a class="gallery-link" width='1112px' height = '640px' href="${imgGallery}">
	<img
	class="gallery-image"
	src="${imgPreview}"
	alt="${alt}"
	/>
	</a>
</div>
<div class="project-item-info">
<div class="project-item-info-left">
	<div class="block-container">
		<p class="txt">${nameOFProjectPreviewText}</p>
		<p class="name-info">${nameOFProjectPreview}</p>
	</div>
	<div class="block-container">
		<p class="txt">${nameOfProjectGitText}</p>
		<p class="name-info">${nameOfProjectGit}</p>
	</div>
	<div class="block-container">
		<p class="txt">${categoryText}</p>
		<p class="name-info">${category}</p>
	</div>
	<div class="block-container">
		<p class="txt">${typeOfProjectText}</p>
		<p class="name-info">${typeOfProject}</p>
	</div>
	<div class="block-container">
		<p class="txt">${technologyText}</p>
		<p class="technology">${technology1}</p>
		<p class="technology">${technology2}</p>
	</div>
</div>
<div class="project-item-info-right">
	<div class="block-container">
		<p class="txt">${projectNumTExt}</p>
		<p class="project_number">${ProjectNumber}</p>
	</div>
	<a href="${siteLink}" alt="${siteText} button" class="site">${siteText}</a>
	<a href="${codeLink}" alt="${codeLinkText} button" class="code">${codeLinkText}</a>
</div>
</div>
	<div class="block-container">
		<p class="txt">${descriptionText}</p>
		<p class="description">${description}</p>
	</div>
</li>`}}).join('');

	
}
jsFeaturesEl.insertAdjacentHTML('beforeend', setFeaturesMarkup(projectArr));
//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const jsFormsEl = document.querySelector('.js-forms-list');

function setFormMarkup(projectArrInner) {
	return projectArrInner.map(
		({
			nameOfProjectGitText,
			nameOfProjectGit,
			nameOFProjectPreviewText,
			nameOFProjectPreview,
			categoryText,
			category,
			typeOfProjectText,
			typeOfProject,
			status,
			imgPreview,
			imgGallery,
			alt,
			codeLinkText,
			codeLink,
			siteText,
			siteLink,
			technologyText,
			technology1,
			technology2,
			descriptionText,
			description,
			projectNumTExt,
			ProjectNumber,
		}) => {
			if (status && category === 'Forms') {
				return`
		<li class="project-item">
<div class="img-container">
	<a class="gallery-link" width='1112px' height = '640px' href="${imgGallery}">
	<img
	class="gallery-image"
	src="${imgPreview}"
	alt="${alt}"
	/>
	</a>
</div>
<div class="project-item-info">
<div class="project-item-info-left">
	<div class="block-container">
		<p class="txt">${nameOFProjectPreviewText}</p>
		<p class="name-info">${nameOFProjectPreview}</p>
	</div>
	<div class="block-container">
		<p class="txt">${nameOfProjectGitText}</p>
		<p class="name-info">${nameOfProjectGit}</p>
	</div>
	<div class="block-container">
		<p class="txt">${categoryText}</p>
		<p class="name-info">${category}</p>
	</div>
	<div class="block-container">
		<p class="txt">${typeOfProjectText}</p>
		<p class="name-info">${typeOfProject}</p>
	</div>
	<div class="block-container">
		<p class="txt">${technologyText}</p>
		<p class="technology">${technology1}</p>
		<p class="technology">${technology2}</p>
	</div>
</div>
<div class="project-item-info-right">
	<div class="block-container">
		<p class="txt">${projectNumTExt}</p>
		<p class="project_number">${ProjectNumber}</p>
	</div>
	<a href="${siteLink}" alt="${siteText} button" class="site">${siteText}</a>
	<a href="${codeLink}" alt="${codeLinkText} button" class="code">${codeLinkText}</a>
</div>
</div>
	<div class="block-container">
		<p class="txt">${descriptionText}</p>
		<p class="description">${description}</p>
	</div>
</li>`}}).join('');

	
}
jsFormsEl.insertAdjacentHTML('beforeend', setFormMarkup(projectArr));
//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const jsGamesEl = document.querySelector('.js-games-list');

function setGamesMarkup(projectArrInner) {
	return projectArrInner.map(
		({
			nameOfProjectGitText,
			nameOfProjectGit,
			nameOFProjectPreviewText,
			nameOFProjectPreview,
			categoryText,
			category,
			typeOfProjectText,
			typeOfProject,
			status,
			imgPreview,
			imgGallery,
			alt,
			codeLinkText,
			codeLink,
			siteText,
			siteLink,
			technologyText,
			technology1,
			technology2,
			descriptionText,
			description,
			projectNumTExt,
			ProjectNumber,
		}) => {
			if (status && category === 'Games') {
				return`
		<li class="project-item">
<div class="img-container">
	<a class="gallery-link" width='1112px' height = '640px' href="${imgGallery}">
	<img
	class="gallery-image"
	src="${imgPreview}"
	alt="${alt}"
	/>
	</a>
</div>
<div class="project-item-info">
<div class="project-item-info-left">
	<div class="block-container">
		<p class="txt">${nameOFProjectPreviewText}</p>
		<p class="name-info">${nameOFProjectPreview}</p>
	</div>
	<div class="block-container">
		<p class="txt">${nameOfProjectGitText}</p>
		<p class="name-info">${nameOfProjectGit}</p>
	</div>
	<div class="block-container">
		<p class="txt">${categoryText}</p>
		<p class="name-info">${category}</p>
	</div>
	<div class="block-container">
		<p class="txt">${typeOfProjectText}</p>
		<p class="name-info">${typeOfProject}</p>
	</div>
	<div class="block-container">
		<p class="txt">${technologyText}</p>
		<p class="technology">${technology1}</p>
		<p class="technology">${technology2}</p>
	</div>
</div>
<div class="project-item-info-right">
	<div class="block-container">
		<p class="txt">${projectNumTExt}</p>
		<p class="project_number">${ProjectNumber}</p>
	</div>
	<a href="${siteLink}" alt="${siteText} button" class="site">${siteText}</a>
	<a href="${codeLink}" alt="${codeLinkText} button" class="code">${codeLinkText}</a>
</div>
</div>
	<div class="block-container">
		<p class="txt">${descriptionText}</p>
		<p class="description">${description}</p>
	</div>
</li>`}}).join('');

	
}
jsGamesEl.insertAdjacentHTML('beforeend', setGamesMarkup(projectArr));
//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const jsProjectsEl = document.querySelector('.js-projects-list');

function setJsProjectsMarkup(projectArrInner) {
	return projectArrInner.map(
		({
			nameOfProjectGitText,
			nameOfProjectGit,
			nameOFProjectPreviewText,
			nameOFProjectPreview,
			categoryText,
			category,
			typeOfProjectText,
			typeOfProject,
			status,
			imgPreview,
			imgGallery,
			alt,
			codeLinkText,
			codeLink,
			siteText,
			siteLink,
			technologyText,
			technology1,
			technology2,
			descriptionText,
			description,
			projectNumTExt,
			ProjectNumber,
		}) => {
			if (status && category === 'JS Projects') {
				return`
		<li class="project-item">
<div class="img-container">
	<a class="gallery-link" width='1112px' height = '640px' href="${imgGallery}">
	<img
	class="gallery-image"
	src="${imgPreview}"
	alt="${alt}"
	/>
	</a>
</div>
<div class="project-item-info">
<div class="project-item-info-left">
	<div class="block-container">
		<p class="txt">${nameOFProjectPreviewText}</p>
		<p class="name-info">${nameOFProjectPreview}</p>
	</div>
	<div class="block-container">
		<p class="txt">${nameOfProjectGitText}</p>
		<p class="name-info">${nameOfProjectGit}</p>
	</div>
	<div class="block-container">
		<p class="txt">${categoryText}</p>
		<p class="name-info">${category}</p>
	</div>
	<div class="block-container">
		<p class="txt">${typeOfProjectText}</p>
		<p class="name-info">${typeOfProject}</p>
	</div>
	<div class="block-container">
		<p class="txt">${technologyText}</p>
		<p class="technology">${technology1}</p>
		<p class="technology">${technology2}</p>
	</div>
</div>
<div class="project-item-info-right">
	<div class="block-container">
		<p class="txt">${projectNumTExt}</p>
		<p class="project_number">${ProjectNumber}</p>
	</div>
	<a href="${siteLink}" alt="${siteText} button" class="site">${siteText}</a>
	<a href="${codeLink}" alt="${codeLinkText} button" class="code">${codeLinkText}</a>
</div>
</div>
	<div class="block-container">
		<p class="txt">${descriptionText}</p>
		<p class="description">${description}</p>
	</div>
</li>`}}).join('');

	
}
jsProjectsEl.insertAdjacentHTML('beforeend', setJsProjectsMarkup(projectArr));
//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const simpleWebSidesEl = document.querySelector('.simple-webSides-list-js');

function setSimpleWebSidesMarkup(projectArrInner) {
	return projectArrInner.map(
		({
			nameOfProjectGitText,
			nameOfProjectGit,
			nameOFProjectPreviewText,
			nameOFProjectPreview,
			categoryText,
			category,
			typeOfProjectText,
			typeOfProject,
			status,
			imgPreview,
			imgGallery,
			alt,
			codeLinkText,
			codeLink,
			siteText,
			siteLink,
			technologyText,
			technology1,
			technology2,
			descriptionText,
			description,
			projectNumTExt,
			ProjectNumber,
		}) => {
			if (status && category === 'Web Sides') {
				return`
		<li class="project-item">
<div class="img-container">
	<a class="gallery-link" width='1112px' height = '640px' href="${imgGallery}">
	<img
	class="gallery-image"
	src="${imgPreview}"
	alt="${alt}"
	/>
	</a>
</div>
<div class="project-item-info">
<div class="project-item-info-left">
	<div class="block-container">
		<p class="txt">${nameOFProjectPreviewText}</p>
		<p class="name-info">${nameOFProjectPreview}</p>
	</div>
	<div class="block-container">
		<p class="txt">${nameOfProjectGitText}</p>
		<p class="name-info">${nameOfProjectGit}</p>
	</div>
	<div class="block-container">
		<p class="txt">${categoryText}</p>
		<p class="name-info">${category}</p>
	</div>
	<div class="block-container">
		<p class="txt">${typeOfProjectText}</p>
		<p class="name-info">${typeOfProject}</p>
	</div>
	<div class="block-container">
		<p class="txt">${technologyText}</p>
		<p class="technology">${technology1}</p>
		<p class="technology">${technology2}</p>
	</div>
</div>
<div class="project-item-info-right">
	<div class="block-container">
		<p class="txt">${projectNumTExt}</p>
		<p class="project_number">${ProjectNumber}</p>
	</div>
	<a href="${siteLink}" alt="${siteText} button" class="site">${siteText}</a>
	<a href="${codeLink}" alt="${codeLinkText} button" class="code">${codeLinkText}</a>
</div>
</div>
	<div class="block-container">
		<p class="txt">${descriptionText}</p>
		<p class="description">${description}</p>
	</div>
</li>`}}).join('');

	
}
simpleWebSidesEl.insertAdjacentHTML('beforeend', setSimpleWebSidesMarkup(projectArr));
//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
new SimpleLightbox('.project-item .img-container a', {
	sourceAttr: 'href',
	overlay: true,
	nav: true,
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
  });
