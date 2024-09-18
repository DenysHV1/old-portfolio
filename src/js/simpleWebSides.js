export function simpleWebSides(projectArr, simpleWebSidesEl) {

	function setSimpleWebSidesMarkup(projectArrInner) {
		const arr = projectArrInner.toSorted((a, b) =>b.ProjectNumber - a.ProjectNumber);
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
}
