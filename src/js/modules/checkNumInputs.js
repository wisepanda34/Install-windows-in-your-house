// функция-проверка вводимых символов в поля input на пренадлежность к числовый значениям
const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);

	//отсеивание нечисел
	numInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});
}