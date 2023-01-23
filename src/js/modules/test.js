const form = () => {

	const forms = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('input');
	const phoneInputs = document.querySelectorAll('inputs[name="user_phone"]');

	phoneInputs.forEach(item => {
		item.value = item.value.replace(/\D/, '');
	});

	const message = {
		loading: 'Sending data...',
		success: 'Thank you! We will connect with you!',
		failture: 'Some problems happend...'
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
					statusMessage.textContent = message.success;
					console.log(res);
				})
				.catch(() => statusMessage.textContent = message.failture)
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});





















}