const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') => {

	const header = document.querySelector(headerSelector);
	const tab = document.querySelectorAll(tabSelector);
	const content = document.querySelectorAll(contentSelector);


	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		})
		tab.forEach(item => {
			item.classList.remove(activeClass);
		})
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	//для отслеживания на какой таб кликает пользователь используем делегирование событий
	header.addEventListener('click', (e) => {
		const target = e.target;
		//проверка на клик по нужному селектору(не по пробелам между вкладками), или если кликнет по ребенку
		//для игнорирования точки используем regular expration
		//
		if (target &&
			(target.classList.contains(tabSelector.replace(/\./, "")) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

}; 