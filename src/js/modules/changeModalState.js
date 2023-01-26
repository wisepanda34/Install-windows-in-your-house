const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img');
	const windowWidth = document.querySelectorAll('#width');
	const windowHeight = document.querySelectorAll('#height');
	const windowType = document.querySelectorAll('#view_type');
	const windowPrpfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	// создаем универсальную функцию определения порядкового номера выбранного  пользователем элемента в коллекции 
	function bindActionToElem(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
							elem.forEach((box, j) => {
								box.checked = false;
								if (i == j) { box.checked = true };
							});
						} else {
							state[prop] = item.value;
						}
						break;
					case 'SELECT':
						state[prop] = item.value;
						break;
				};
				console.log(state);
			});
		});
	}

	// windowForm.forEach((item, i) => {
	// 	item.addEventListener('click', () => {
	// 		state.form = i;
	// 		console.log(state);
	// 	}); 
	// });

	bindActionToElem('click', windowForm, 'form');
	bindActionToElem('input', windowHeight, 'height');
	bindActionToElem('input', windowWidth, 'width');
	bindActionToElem('change', windowType, 'type');
	bindActionToElem('change', windowPrpfile, 'profile');

};