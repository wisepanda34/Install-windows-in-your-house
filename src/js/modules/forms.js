const form = (state) => {

	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('input');

	//вызов универсальной функции для отсеивания нечисел
	checkNumInputs('input[name="user_phone"]');


	const message = {
		loading: 'Download...',
		success: 'Thank you! We will connect with you soon.',
		failure: 'Some mistake happened...'
	};


	//описание функции POST-запроса
	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: "POST",
			body: data
		});
		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
	};

	forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			//POST-запрос на сервер, отправка данных, которые собраны в объекте modalState
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {

					setTimeout(() => {
						clearInputs();
						statusMessage.remove();

					}, 5000);
				});
		});
	});



}