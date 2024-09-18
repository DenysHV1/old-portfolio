export function jsForms(projectArr, jsFormsEl) {

	function setFormMarkup(projectArrInner) {
		const arr = projectArrInner.toSorted((a, b) => b.ProjectNumber - a.ProjectNumber);
		return arr
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
}
