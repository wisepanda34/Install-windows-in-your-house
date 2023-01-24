const images = () => {


	const workSection = document.querySelector('.works');
	const imgPopup = document.createElement('div');
	const bigImage = document.createElement('img');



	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);

	//вместо инлайн-стилей можно добавить подходящий класс или воспользоваться cssText
	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignItems = 'center';
	imgPopup.style.display = 'none';


	imgPopup.appendChild(bigImage);

	bigImage.style.width = '70%';
	bigImage.style.height = '70%';
	bigImage.style.backgroundSize = 'cover';

	workSection.addEventListener("click", function (e) {
		e.preventDefault();
		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
			document.body.style.overflow = "hidden";
		}

		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none';
			document.body.style.overflow = "";
		}
	});

};