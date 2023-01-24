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
				if (elem.length > 1) {
					state[prop] = i;
				} else {
					state[prop] = item.value;
				}
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
	// bindActionToElem('change', windowType, 'type');
	// bindActionToElem('change', windowPrpfile, 'profile');

};