import { projectArr } from './project-arr';

//todo -------------------------------------------------------------------------
const jsFeaturesEl = document.querySelector('.js-features-list');
function setFeaturesMarkup(projectArrInner) {
	return projectArrInner
		.map(
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
					return `
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
		<p class="name-info-git">${nameOfProjectGit}</p>
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
</li>`;
				}
			}
		)
		.join('');
}
jsFeaturesEl.insertAdjacentHTML('beforeend', setFeaturesMarkup(projectArr));

const jsFeaturesElItems = jsFeaturesEl.querySelectorAll('li');

if (jsFeaturesElItems.length <= 2 && jsFeaturesEl.offsetWidth > 1100) {
	jsFeaturesEl.style.justifyContent = 'start';
} else {
	jsFeaturesEl.style.justifyContent = 'center';
}

//todo 2
if (jsFeaturesElItems.length >= 4) {
	jsFeaturesElItems.forEach((item, inx) => {
		if (inx > 2) {
			item.style.display = 'none';
		}
	});
	jsFeaturesEl.insertAdjacentHTML(
		'beforeend',
		`<button type="button" class="shove-more-WebSides"></button>`
	);
	const WebSidesBtn = jsFeaturesEl.querySelector('.shove-more-WebSides');
	let isExpanded = false;
	WebSidesBtn.textContent = 'Shove more';
	WebSidesBtn.addEventListener('click', () => {
		if (isExpanded) {
			WebSidesBtn.textContent = 'Shove more';
			jsFeaturesElItems.forEach((item, inx) => {
				if (inx > 2) {
					item.style.display = 'none';
				}
			});
		} else {
			WebSidesBtn.textContent = 'Hide';
			jsFeaturesElItems.forEach(item => {
				item.style.display = 'block';
			});
		}
		isExpanded = !isExpanded;
	});
}

//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const jsFormsEl = document.querySelector('.js-forms-list');

function setFormMarkup(projectArrInner) {
	return projectArrInner
		.map(
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
					return `
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
		<p class="name-info-git">${nameOfProjectGit}</p>
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
</li>`;
				}
			}
		)
		.join('');
}
jsFormsEl.insertAdjacentHTML('beforeend', setFormMarkup(projectArr));

const jsFormsElItems = jsFormsEl.querySelectorAll('li');

if (jsFormsElItems.length <= 2 && jsFormsEl.offsetWidth > 1100) {
	jsFormsEl.style.justifyContent = 'start';
} else {
	jsFormsEl.style.justifyContent = 'center';
}

//todo 2
if (jsFormsElItems.length >= 4) {
	jsFormsElItems.forEach((item, inx) => {
		if (inx > 2) {
			item.style.display = 'none';
		}
	});
	jsFormsEl.insertAdjacentHTML(
		'beforeend',
		`<button type="button" class="shove-more-WebSides"></button>`
	);
	const WebSidesBtn = jsFormsEl.querySelector('.shove-more-WebSides');
	let isExpanded = false;
	WebSidesBtn.textContent = 'Shove more';
	WebSidesBtn.addEventListener('click', () => {
		if (isExpanded) {
			WebSidesBtn.textContent = 'Shove more';
			jsFormsElItems.forEach((item, inx) => {
				if (inx > 2) {
					item.style.display = 'none';
				}
			});
		} else {
			WebSidesBtn.textContent = 'Hide';
			jsFormsElItems.forEach(item => {
				item.style.display = 'block';
			});
		}
		isExpanded = !isExpanded;
	});
}

//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const jsGamesEl = document.querySelector('.js-games-list');

function setGamesMarkup(projectArrInner) {
	return projectArrInner
		.map(
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
					return `
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
		<p class="name-info-git">${nameOfProjectGit}</p>
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
</li>`;
				}
			}
		)
		.join('');
}
jsGamesEl.insertAdjacentHTML('beforeend', setGamesMarkup(projectArr));

const jsGamesElItems = jsGamesEl.querySelectorAll('li');

if (jsGamesElItems.length <= 2 && jsGamesEl.offsetWidth > 1100) {
	jsGamesEl.style.justifyContent = 'start';
} else {
	jsGamesEl.style.justifyContent = 'center';
}

//todo 2
if (jsGamesElItems.length >= 4) {
	jsGamesElItems.forEach((item, inx) => {
		if (inx > 2) {
			item.style.display = 'none';
		}
	});
	jsGamesEl.insertAdjacentHTML(
		'beforeend',
		`<button type="button" class="shove-more-WebSides"></button>`
	);
	const WebSidesBtn = jsGamesEl.querySelector('.shove-more-WebSides');
	let isExpanded = false;
	WebSidesBtn.textContent = 'Shove more';
	WebSidesBtn.addEventListener('click', () => {
		if (isExpanded) {
			WebSidesBtn.textContent = 'Shove more';
			jsGamesElItems.forEach((item, inx) => {
				if (inx > 2) {
					item.style.display = 'none';
				}
			});
		} else {
			WebSidesBtn.textContent = 'Hide';
			jsGamesElItems.forEach(item => {
				item.style.display = 'block';
			});
		}
		isExpanded = !isExpanded;
	});
}

//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const jsProjectsEl = document.querySelector('.js-projects-list');

function setJsProjectsMarkup(projectArrInner) {
	return projectArrInner
		.map(
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
					return `
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
		<p class="name-info-git">${nameOfProjectGit}</p>
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
</li>`;
				}
			}
		)
		.join('');
}
jsProjectsEl.insertAdjacentHTML('beforeend', setJsProjectsMarkup(projectArr));

const jsProjectsItems = jsProjectsEl.querySelectorAll('li');

if (jsProjectsItems.length <= 2 && jsProjectsEl.offsetWidth > 1100) {
	jsProjectsEl.style.justifyContent = 'start';
} else {
	jsProjectsEl.style.justifyContent = 'center';
}

//todo 2
if (jsProjectsItems.length >= 4) {
	jsProjectsItems.forEach((item, inx) => {
		if (inx > 2) {
			item.style.display = 'none';
		}
	});
	jsProjectsEl.insertAdjacentHTML(
		'beforeend',
		`<button type="button" class="shove-more-WebSides"></button>`
	);

	const WebSidesBtn = jsProjectsEl.querySelector('.shove-more-WebSides');
	let isExpanded = false;
	WebSidesBtn.textContent = 'Shove more';
	WebSidesBtn.addEventListener('click', () => {
		if (isExpanded) {
			WebSidesBtn.textContent = 'Shove more';
			jsProjectsItems.forEach((item, inx) => {
				if (inx > 2) {
					item.style.display = 'none';
				}
			});
		} else {
			WebSidesBtn.textContent = 'Hide';
			jsProjectsItems.forEach(item => {
				item.style.display = 'block';
			});
		}
		isExpanded = !isExpanded;
	});
}

//*---------------------------------------------------------------

//todo -------------------------------------------------------------------------
const simpleWebSidesEl = document.querySelector('.simple-webSides-list-js');

function setSimpleWebSidesMarkup(projectArrInner) {
	return projectArrInner
		.map(
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
					return `
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
		<p class="name-info-git">${nameOfProjectGit}</p>
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
</li>`;
				}
			}
		)
		.join('');
}
simpleWebSidesEl.insertAdjacentHTML(
	'beforeend',
	setSimpleWebSidesMarkup(projectArr)
);

const simpleWebSidesItem = simpleWebSidesEl.querySelectorAll('li');

//todo 1
if (simpleWebSidesItem.length <= 2 && simpleWebSidesEl.offsetWidth > 1100) {
	simpleWebSidesEl.style.justifyContent = 'start';
} else {
	simpleWebSidesEl.style.justifyContent = 'center';
}

//todo 2
if (simpleWebSidesItem.length >= 4) {
	simpleWebSidesItem.forEach((item, inx) => {
		if (inx > 2) {
			item.style.display = 'none';
		}
	});
	simpleWebSidesEl.insertAdjacentHTML(
		'beforeend',
		`<button type="button" class="shove-more-WebSides"></button>`
	);
	const WebSidesBtn = simpleWebSidesEl.querySelector('.shove-more-WebSides');
	let isExpanded = false;

	WebSidesBtn.textContent = 'Shove more';
	WebSidesBtn.addEventListener('click', () => {
		if (isExpanded) {
			WebSidesBtn.textContent = 'Shove more';
			simpleWebSidesItem.forEach((item, inx) => {
				if (inx > 2) {
					item.style.display = 'none';
				}
			});
		} else {
			WebSidesBtn.textContent = 'Hide';
			simpleWebSidesItem.forEach(item => {
				item.style.display = 'block';
			});
		}
		isExpanded = !isExpanded;
	});
}

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

// style settings

const technologyItems = document.querySelectorAll('.technology');

technologyItems.forEach(item => {
	if (!item.textContent) {
		item.style.display = 'none';
	}
});
