const timer = (id, deadline) => {

	//функция прорисовки нуля к однозначным числам
	const addZero = (num) => {
		if (num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	};

	// описываем функцию: вычисление остатка времени до дедлайна, разбираем его на часы-минуты, возвращаем в виде объекта
	const getTimeRemaining = (endTime) => {
		const time = Date.parse(endTime) - Date.parse(new Date());

		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / 1000 / 60) % 60);
		const hours = Math.floor((time / 1000 / 60 / 60) % 24);
		const days = Math.floor(time / 1000 / 60 / 60 / 24);

		return {
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	//описываем функцию сеттинга времени в таймер на сайте
	const setClock = (selector, endtime) => {
		//получаем коллекции
		const timer = document.querySelector(selector);
		const days = timer.querySelector("#days");
		const hours = timer.querySelector("#hours");
		const minutes = timer.querySelector("#minutes");
		const seconds = timer.querySelector("#seconds");
		timeInterval = setInterval(updateClock, 1000);

		updateClock();

		//передаем в коллекции значение временных параметров
		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			//проверяем на достижение дедлайна 
			if (t.total <= 0) {
				days.textContent = 00;
				hours.textContent = 00;
				minutes.textContent = 00;
				seconds.textContent = 00;

				clearInterval(timeInterval);
			}
		}

	};


	setClock(id, deadline);










};