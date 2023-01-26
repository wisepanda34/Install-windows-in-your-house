// import './slider';
// import { moduls } from './modules/modals.js';
// import { tabs } from './modules/tabs.js';
// import { forms } from './modules/forms.js';


window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	//создаем объект для сбора информации и далнейшей передачи данных на сервер
	let modalState = {};
	let deadline = '2023-05-01';

	//тут будет наполнение данными от пользователя
	changeModalState(modalState);

	modals();

	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content >div>div', 'after-click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

	//передача объекта данных на сервер
	form(modalState);

	timer('.container1', deadline);

	images();











});






