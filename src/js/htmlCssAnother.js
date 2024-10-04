export function htmlCssAnother(projectArr, htmlCssAnother) {

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
					if (status && category === 'html css another') {
						return `
			<li class="project-item">
	<div class="img-container">
		<a class="gallery-link" width='1112px' height = '640px' href="${imgGallery}">
		<img
		class="gallery-image"
		src="${imgPreview}"
		alt="${alt}"
				width="355"
		height="200"
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
	htmlCssAnother.insertAdjacentHTML(
		'beforeend',
		setSimpleWebSidesMarkup(projectArr)
	);

	const htmlCssAnotherItem = htmlCssAnother.querySelectorAll('li');

	//todo 1
	if (htmlCssAnotherItem.length <= 2 && htmlCssAnother.offsetWidth > 1100) {
		htmlCssAnother.style.justifyContent = 'start';
	} else {
		htmlCssAnother.style.justifyContent = 'center';
	}

	//todo 2
	if (htmlCssAnotherItem.length >= 4) {
		htmlCssAnotherItem.forEach((item, inx) => {
			if (inx > 2) {
				item.style.display = 'none';
			}
		});
		htmlCssAnother.insertAdjacentHTML(
			'beforeend',
			`<button type="button" class="shove-more-btn"></button>`
		);
		const WebSidesBtn = htmlCssAnother.querySelector('.shove-more-btn');
		let isExpanded = false;

		WebSidesBtn.textContent = 'Shove more';
		WebSidesBtn.addEventListener('click', () => {
			if (isExpanded) {
				WebSidesBtn.textContent = 'Shove more';
				htmlCssAnotherItem.forEach((item, inx) => {
					if (inx > 2) {
						item.style.display = 'none';
					}
				});
			} else {
				WebSidesBtn.textContent = 'Hide';
				htmlCssAnotherItem.forEach(item => {
					item.style.display = 'block';
				});
			}
			isExpanded = !isExpanded;
		});
	}
}
