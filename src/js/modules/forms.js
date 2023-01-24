const form = () => {

	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('input');

	//вызов универсальной функции для отсеивания нечисел
	checkNumInputs('input[name="user_phone"]');


	const message = {
		loading: 'Download...',
		success: 'Thank you! We will connect with you soon.',
		failure: 'Some mistake happened...'
	};

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

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => statusMessage.textContent = message.failure)
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});



}