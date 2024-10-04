export function lastProjects(projectArr, lastProjectsEl) {
	function setSimpleWebSidesMarkup(projectArrInner) {
		const arrInner = [];
		for (let i = projectArrInner.length - 1; i >= 0; i--) {
			arrInner.push(projectArrInner[i]);
		}
		console.log(arrInner);
		return arrInner
			.map(
				(
					{
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
					},
					idx
				) => {
					if (status) {
						return `
			<li class="project-item-swiper">
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
	lastProjectsEl.insertAdjacentHTML(
		'beforeend',
		setSimpleWebSidesMarkup(projectArr)
	);
}

export function lastProjectsSlider(block) {
	const mainBlock = document.querySelector('.last-projects-block');
	const leftBtnEl = document.querySelector('.lastProjects-btn-left-js');
	const rightBtnEl = document.querySelector('.lastProjects-btn-right-js');
	// const width = block.offsetWidth + 44;
	let swipe = 415;
	if (mainBlock.clientWidth < 410) {
		swipe = 365;
	}
	let position = 0;

	rightBtnEl.addEventListener('click', () => {
		position -= swipe;
		const maxPosition = block.children.length * swipe - swipe;
		let max = -maxPosition;
		if (mainBlock.clientWidth > 1600) {
			max = -maxPosition + 1170;
		} else if (mainBlock.clientWidth > 1500 && mainBlock.clientWidth < 1600) {
			max = -maxPosition + 1070;
		} else if (mainBlock.clientWidth > 1400 && mainBlock.clientWidth < 1500) {
			max = -maxPosition + 970;
		} else if (mainBlock.clientWidth > 1300 && mainBlock.clientWidth < 1400) {
			max = -maxPosition + 870;
		} else if (mainBlock.clientWidth > 1200 && mainBlock.clientWidth < 1300) {
			max = -maxPosition + 770;
		} else if (mainBlock.clientWidth > 1100 && mainBlock.clientWidth < 1200) {
			max = -maxPosition + 670;
		} else if (mainBlock.clientWidth > 1000 && mainBlock.clientWidth < 1100) {
			max = -maxPosition + 570;
		} else if (mainBlock.clientWidth > 900 && mainBlock.clientWidth < 1000) {
			max = -maxPosition + 470;
		} else if (mainBlock.clientWidth > 800 && mainBlock.clientWidth < 900) {
			max = -maxPosition + 370;
		} else if (mainBlock.clientWidth > 700 && mainBlock.clientWidth < 800) {
			max = -maxPosition + 270;
		} else if (mainBlock.clientWidth > 600 && mainBlock.clientWidth < 700) {
			max = -maxPosition + 170;
		} else if (mainBlock.clientWidth > 500 && mainBlock.clientWidth < 600) {
			max = -maxPosition + 70;
		}
		if (position <= max) {
			position = max;
			rightBtnEl.style.opacity = '0.6';
			rightBtnEl.disabled = true;
		} else {
			rightBtnEl.style.opacity = '1';
			rightBtnEl.disabled = false;
			leftBtnEl.disabled = false;
			leftBtnEl.style.opacity = '1';
		}
		block.style.transform = `translateX(${position}px)`;
	});

	leftBtnEl.style.opacity = '0.6';
	leftBtnEl.disabled = true;
	leftBtnEl.addEventListener('click', () => {
		position += swipe;
		if (position >= 0) {
			position = 0;
			leftBtnEl.style.opacity = '0.6';
			leftBtnEl.disabled = true;
		} else {
			rightBtnEl.style.opacity = '1';
			rightBtnEl.disabled = false;
		}
		block.style.transform = `translateX(${position}px)`;
	});
}
