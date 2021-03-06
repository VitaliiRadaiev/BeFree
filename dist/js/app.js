

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');

	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	// === // Проверка, поддержка браузером формата webp ==================================================================

			// ==== ADD PADDING-TOP ================================
			{
				let wrapper = document.querySelector('.wrapper');
				if (wrapper) {
					let header = document.querySelector('.header');
					if(header) {
						let headerHeight = header.clientHeight;
						wrapper.style.paddingTop = headerHeight + 'px';
					}
					
				}
			}
			// ==== AND ADD PADDING-TOP ================================

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================




// === Конвертация svg картинки в svg код ==================================================================
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});
// === // Конвертация svg картинки в svg код ==================================================================



//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				console.log(spoller.parentElement);
				
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Possibly fall back to event handlers here
	}
});
// === // lazy load ==================================================================

// === Плавный скрол на якорях ==================================================================
if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href")
	  var destination = $(elementClick).offset().top;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}
// === Плавный скрол на якорях ==================================================================

;
	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
	// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// function form_submit(e) {
// 	let btn = event.target;
// 	let form = btn.closest('form');
// 	let message = form.getAttribute('data-message');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		//SendForm
// 		form_clean(form);
// 		if (message) {
// 			popup_open('message-' + message);
// 			e.preventDefault();
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		event.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];

			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				let maskValue = input.dataset.mask;
				input.classList.add('_mask');
				Inputmask(maskValue, {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
			if (input.classList.contains('_date')) {
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}

			//const input_g_value = input.getAttribute('data-value');
			//input_placeholder_add(input);
			// if (input.value != '' && input.value != input_g_value) {
			// 	input_focus_add(input);
			// }
			// input.addEventListener('focus', function (e) {
			// 	if (input.value == input_g_value) {
			// 		input_focus_add(input);
			// 		input.value = '';
			// 	}
			// 	if (input.getAttribute('data-type') === "pass") {
			// 		input.setAttribute('type', 'password');
			// 	}
			// 	if (input.classList.contains('_date')) {
			// 		/*
			// 		input.classList.add('_mask');
			// 		Inputmask("99.99.9999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 		*/
			// 	}
			// 	if (input.classList.contains('_phone')) {
			// 		//'+7(999) 999 9999'
			// 		//'+38(999) 999 9999'
			// 		//'+375(99)999-99-99'
			// 		input.classList.add('_mask');
			// 		Inputmask("+375 (99) 9999999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	if (input.classList.contains('_digital')) {
			// 		input.classList.add('_mask');
			// 		Inputmask("9{1,}", {
			// 			"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	form_remove_error(input);
			// });
			// input.addEventListener('blur', function (e) {
			// 	if (input.value == '') {
			// 		input.value = input_g_value;
			// 		input_focus_remove(input);
			// 		if (input.classList.contains('_mask')) {
			// 			input_clear_mask(input, input_g_value);
			// 		}
			// 		if (input.getAttribute('data-type') === "pass") {
			// 			input.setAttribute('type', 'text');
			// 		}
			// 	}
			// });
			// if (input.classList.contains('_date')) {
			// 	datepicker(input, {
			// 		customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			// 		formatter: (input, date, instance) => {
			// 			const value = date.toLocaleDateString()
			// 			input.value = value
			// 		},
			// 		onSelect: function (input, instance, date) {
			// 			input_focus_add(input.el);
			// 		}
			// 	});
			// }
		}
	}
}
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// ==  QUANTITY =====================================================
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// == // QUANTITY =====================================================

// == PRICE SLIDER =====================================================
let priceSlider = document.querySelector('.price-filter');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// == // PRICE SLIDER =====================================================;
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');

		let classNameElem = document.querySelector('.burger').dataset.activel;
		let header = document.querySelector('.header');
		
		document.querySelector(`.${classNameElem}`).classList.toggle('open');
		_slideToggle(document.querySelector(`.${classNameElem}`));

		header.classList.toggle('isOpenMenu');
		document.body.classList.toggle('lock');
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	;
	{
    let navLink = document.querySelectorAll('.nav-link.dropdown-toggle');
    if(navLink.length) {
        navLink.forEach(item => {
            if(document.documentElement.clientWidth < 992) {
                item.removeAttribute('data-toggle');
            }
            item.addEventListener('click', function(){
                if(document.documentElement.clientWidth < 992) {
                    this.classList.toggle('_active');
                    _slideToggle(this.nextElementSibling);
                    this.parentElement.classList.toggle('_active');
                    
                    navLink.forEach(i => {
                        if(i == this) {
                            return
                        }

                        i.classList.remove('_active');
                        _slideUp(i.nextElementSibling);
                        i.parentElement.classList.remove('_active');
                    })
                }
            })
        })
    }

    let localBtn = document.querySelector('.promo-header__local-icon');
    if(localBtn) {
        
        localBtn.addEventListener('click', function() {
            let map = document.querySelector('.home-map'); 
            console.log('test');
            
            if(map) {
                map.classList.toggle('_hide');
            }
        })
    }
};
	{
    let popularBrand = document.querySelector('.popular-brand');

    if(popularBrand) {
            let slider;
            slider = new Swiper(popularBrand.querySelector('.popular-brand__slider .swiper-container'), {
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */
            slidesPerView: 1,
            spaceBetween: 40,
            speed: 800,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
            	el: popularBrand.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: popularBrand.querySelector('.popular-brand__slider-btn_next'),
                prevEl: popularBrand.querySelector('.popular-brand__slider-btn_prev'),
            },
            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
            on: {
                init: function () {
                   // transferCards();
                    //console.log(slider);
                    
                },
            }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},

        });

        let windowWidth = 992;
        let numElements = 9;

        if(document.documentElement.clientWidth < 480) {
            windowWidth = 480;
            numElements = 5;
        } else if(document.documentElement.clientWidth < 768) {
            windowWidth = 768;
            numElements = 7;
        }  
        
        function transferCards(params) {
            let wrapper = popularBrand.querySelector('.swiper-wrapper');
            if(wrapper) {
                if(document.documentElement.clientWidth < windowWidth) {
                    let arr = [];

                    for(let slide of wrapper.children) {
                        if(slide.children.length > numElements) {
                            let cards = [...slide.children].slice(numElements, slide.children.length);
                            arr.push(...cards);
                        }      
                    }

                    if(arr.length > numElements) {
                        let count = Math.ceil(arr.length / numElements);
                        for(let i = 0; i < count; i++) {
                            let div = document.createElement('div');
                            div.className = 'swiper-slide';
                            div.append(...arr.slice(0, numElements));
                            arr = arr.slice(numElements, arr.length);
                            if(slider) {
                                slider.appendSlide(div);
                            }
                        }
                        
                        
                    } else {
                        let div = document.createElement('div');
                        div.className = 'swiper-slide';
                        div.append(...arr);

                        if(slider) {
                            slider.appendSlide(div);
                        }
                    }

                    
                    for(let slide of wrapper.children) {
                        for(let el of slide.children) {
                            el.classList.remove('_big-width', '_big-heigth')
                        }
                        
                         if(document.documentElement.clientWidth < 480) {
                            if(slide.children[2]) slide.children[2].classList.add('_big-width');
                            console.log('test3');
                        } else if(document.documentElement.clientWidth < 768) {
                            if(slide.children[3]) slide.children[3].classList.add('_big-width');
                            if(slide.children[4]) slide.children[4].classList.add('_big-heigth');
                            console.log('test2');
                        } else if(document.documentElement.clientWidth < 992) {
                            if(slide.children[0]) slide.children[0].classList.add('_big-heigth');
                            if(slide.children[6]) slide.children[6].classList.add('_big-heigth');
                            if(slide.children[8]) slide.children[8].classList.add('_big-width');
                            console.log('test1');
                        } 
                    }
                    
                }
            }
        }

        transferCards();

    }
}
;
	
//RATING
$('.rating.edit .star').hover(function () {
    var block = $(this).parents('.rating');
    block.find('.rating__activeline').css({ width: '0%' });
    var ind = $(this).index() + 1;
    var linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
}, function () {
    var block = $(this).parents('.rating');
    block.find('.star').removeClass('active');
    var ind = block.find('input').val();
    var linew = ind / block.find('.star').length * 100;
    setrating(block, linew);
});
$('.rating.edit .star').click(function (event) {
    var block = $(this).parents('.rating');
    var re = $(this).index() + 1;
    block.find('input').val(re);
    var linew = re / block.find('.star').length * 100;
    setrating(block, linew);
});
$.each($('.rating'), function (index, val) {
    var ind = $(this).find('input').val();
    var linew = ind / $(this).parent().find('.star').length * 100;
    setrating($(this), linew);
});
function setrating(th, val) {
    th.find('.rating__activeline').css({ width: val + '%' });
};
	// {
//     let pagination = document.querySelector('.pagging');
//     if(pagination) {
//         let remeberItem;
//         pagination.addEventListener('mouseenter', () => {
//             let items = pagination.querySelectorAll('.page-link');
//             items.forEach(item => {
//                 if(item.classList.contains('active')) {
//                     remeberItem = item;
//                     item.classList.remove('active');
//                 }
//             })
//         })

//         pagination.addEventListener('mouseleave', () => {
//             if(remeberItem) {
//                 remeberItem.classList.add('active');
//             }
//         })
//     }
// };
	{
    let slider = document.querySelector('.slider-info-block');
    if(slider) {
        let dataSlider;
             dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */

            slidesPerView: 1,
            spaceBetween: 10,
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
            	el: slider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: slider.querySelector('.slider-info-block__btn_next'),
                prevEl: slider.querySelector('.slider-info-block__btn_prev'),
            },
            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
            // on: {
            //     lazyImageReady: function () {
            //         ibg();
            //     },
            // }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},
        });
    }

    let infoBlockBody = document.querySelector('.info-block__body');
    if(infoBlockBody) {
        if(document.documentElement.clientWidth < 992 && document.documentElement.clientWidth > 767) {
            let div = document.createElement('div');
            div.className = 'info-block__column-3';

            let textBLock = infoBlockBody.querySelector('.info-block__row-2');
            if(textBLock) {
                div.append(textBLock)
            }

            infoBlockBody.append(div);
        }
    }
};
	let menuTable = document.querySelector('.tabs-block__head');
if(menuTable) {
    let items = document.querySelectorAll('.tabs-block__head-title')
     items.forEach((item) => {
        item.addEventListener('click', function(e) {
            
            if(document.documentElement.clientWidth > 767) {
                e.preventDefault();

                if(document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 992) {
                    if(item.classList.contains('_feedback-btn')) {
                        return
                    }
                }

                const id = e.target.getAttribute('href').replace('#','');
    
                document.querySelectorAll('.tabs-block__head-title').forEach((child) => {
                    child.classList.remove('active');
                });
    
                document.querySelectorAll('.tabs-block__content').forEach((child) => {
                    child.classList.remove('active');
                });
    
                item.classList.add('active');
                document.getElementById(id).classList.add('active');
            }

            if(document.documentElement.clientWidth < 768) {
                e.preventDefault();

                if(!this.classList.contains('_feedback-btn')) {
                    if(this.nextElementSibling) {
                        this.classList.toggle('_active');
                        this.nextElementSibling.classList.toggle('_active');
                        _slideToggle(this.nextElementSibling, 500);
        
                    }
    
                    items.forEach(item => {
                        if(item == this) {
                            return
                        }
                        if(item.nextElementSibling) {
                            item.classList.remove('_active');
                            item.nextElementSibling.classList.remove('_active');
                            _slideUp(item.nextElementSibling, 500);
    
                        }
                    })
                }


            }
        });
    });

    let feedBackBtn = document.querySelector('.tabs-block__head-title._feedback-btn');
    let feedBackBlockBtn = document.querySelector('.tabs-block__head-item._feedback')
    let feedBackForm = document.querySelector('.feedback-form');
    if(feedBackBtn) {
        window.addEventListener('resize', () => {
            if(document.documentElement.clientWidth < 992) {
                if(feedBackBtn.classList.contains('active')) {
                    feedBackBtn.classList.remove('active');
                    let reviewsTabs = document.querySelector('.tabs-block__head-item_reviews .tabs-block__head-title');
                    reviewsTabs.classList.add('active');
                    document.getElementById('tab-3').classList.add('active');
                }
            }
        });
    
    
        feedBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(document.documentElement.clientWidth < 768) {
                feedBackForm.classList.add('_isFormMobileShow');
                document.body.classList.add('lock');
            } else if(document.documentElement.clientWidth < 992) {
                _slideDown(feedBackForm);
                setTimeout(() => {
                     _slideUp(feedBackBlockBtn);
    
                }, 600)
            }
        })
    }


    let cancelBtn = document.querySelector('.feedback-form__cancel');
    if(cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 992) {
                _slideUp(feedBackForm);
                setTimeout(() => {
                     _slideDown(feedBackBlockBtn);
    
                }, 600)
            }
        });
    }

    let formErrowBack = document.querySelector('.feedback-form__arrow-back');
    if(formErrowBack) {
        formErrowBack.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 768) {
                feedBackForm.classList.remove('_isFormMobileShow');
                document.body.classList.remove('lock');
            }
        })

    }
}
;
	{
    let sharesSlider = document.querySelector('.shares-slider');
    if(sharesSlider) {
        let dataSlider;

        function mobileSlider() {
            if(document.documentElement.clientWidth > 991 && sharesSlider.dataset.mobile == 'false') {
                dataSlider = new Swiper(sharesSlider.querySelector('.swiper-container'), {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    speed: 600,
                    //touchRatio: 0,
                    //simulateTouch: false,
                    loop: true,
                    //preloadImages: false,
                    //lazy: true,
                    // Dotts
                    pagination: {
                        el: sharesSlider.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    // Arrows
                    navigation: {
                        nextEl: sharesSlider.querySelector('.shares-slider__btn_next'),
                        prevEl: sharesSlider.querySelector('.shares-slider__btn_prev'),
                    },
                    /*
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            autoHeight: true,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1268: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    },
                    */
                    // on: {
                    //     lazyImageReady: function () {
                    //         ibg();
                    //     },
                    // }
                    // And if we need scrollbar
                    //scrollbar: {
                    //	el: '.swiper-scrollbar',
                    //},
                });

                sharesSlider.dataset.mobile == 'true';
            }

            if(document.documentElement.clientWidth < 992) {
				sharesSlider.dataset.mobile = 'false';

				if(sharesSlider.querySelector('.swiper-container').classList.contains('swiper-container-initialized')) {
					dataSlider.destroy();
				}
			}
        } 
        
        mobileSlider();

        window.addEventListener('resize', () => {
			mobileSlider();
		})

    }
};
	// ==== Popup form handler====

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
	for(let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if(curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('.popup_content')) {
				popupClose(e.target.closest('.popup'));
			}
		});

	}
}

function popupClose(popupActive, doUnlock = true) {
	if(unlock) {
		popupActive.classList.remove('open');
		if(doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

	if(lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function() {
		for( let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() { 
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if(e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// === Polyfill ===
	(function() {
		if(!Element.prototype.closest) {
			Element.prototype.closest = function(css) {
				var node = this;
				while(node) {
					if(node.matches(css)) return node;
					else node == node.parentElement;
				}
				return null;
			};
		}
	})();

	(function() {
		if(!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.mozMatchesSelector;
		}
	})();
// === AND Polyfill ===;
	{
    let cryptocurrencySlider = document.querySelector('.cryptocurrency__slider');
    if(cryptocurrencySlider) {
        var cryptoSlider = new Swiper(cryptocurrencySlider.querySelector('.swiper-container'), {
            freeMode: true,
            /*
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            */
            // observer: true,
            // observeParents: true,
            // slidesPerView: 5,
            // spaceBetween: 0,
            // autoHeight: true,
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
            	el: cryptocurrencySlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            // navigation: {
            //     nextEl: '.about__more .more__item_next',
            //     prevEl: '.about__more .more__item_prev',
            // },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    freeMode: false,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    freeMode: false,

                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    freeMode: false,

                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1268: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
            },
            
            on: {
                lazyImageReady: function () {
                    ibg();
                },
            }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},
        });
        
    }
};
	function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

{
    const $cookieEl = document.getElementById('cookieMessage');
    if($cookieEl) {
        let closeBtns = document.querySelectorAll('.cookie-message__close');
        if(closeBtns.length) {
            closeBtns.forEach(btnClose => {
                btnClose.addEventListener('click', (e) => {
                    e.preventDefault();
                    $cookieEl.style.display = 'none';
                })
            })
        }

        let cookies = () => {
            if (!getCookie('hide-cookie')) {
                setTimeout(() => {
                    $cookieEl.style.display = 'block';
                }, 1000);
            }

            document.cookie = encodeURIComponent('hide-cookie') + "=" + encodeURIComponent('true') + "; path=/; max-age=86400";
        }



        cookies();
    }
    
};
	
	
	{
    let headBottomBtn = document.querySelector('.category-header__bottom-btn');
    if(headBottomBtn) {
        headBottomBtn.addEventListener('click', () => {
            let headerSort = document.querySelector('.category-header .category-header__toggle-slide');
            headBottomBtn.classList.toggle('_active');
            _slideToggle(headerSort, 600);
            cryptoSlider.update();
        })
    }

    let prductsFilter = document.querySelector('.products-filter');
    if(prductsFilter) {
        let remeberItem;
        prductsFilter.addEventListener('mouseenter', () => {
            let items = prductsFilter.querySelectorAll('.products-filter__list-item');
            items.forEach(item => {
                if(item.classList.contains('active')) {
                    remeberItem = item;
                    item.classList.remove('active');
                }
            })
        })

        prductsFilter.addEventListener('mouseleave', () => {
            if(remeberItem) {
                remeberItem.classList.add('active');
            }
        })

        prductsFilter.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 1024) {
                prductsFilter.classList.toggle('active');
                let list = prductsFilter.querySelector('.products-filter__list');
                _slideToggle(list, 600);
            }
        })

        document.body.addEventListener('click', (e) => {
            if(document.documentElement.clientWidth < 1024) {
                if(!e.target.closest('.products-filter')) {
                    let list = prductsFilter.querySelector('.products-filter__list');
                    _slideUp(list, 600);
                }
            }
        })
    }
}

{
    let textBlock = document.querySelector('.category-page-text');
    if(textBlock) {
        if(document.documentElement.clientWidth < 992) {
            let arr = [...textBlock.querySelectorAll('p')];
            if(arr.length > 2) {
                arr = arr.slice(2, arr.length);
                let div = document.createElement('div');
                div.className = '_toggleWrap';
                div.append(...arr);
    
                let container = textBlock.querySelector('.container')
                container.append(div);
    
                let btn = document.createElement('div');
                btn.className = "_toggleBtn";
                btn.innerText = 'Показать ещё';
    
                container.append(btn);
                
                btn.addEventListener('click', function() {
                    _slideToggle(this.previousElementSibling);
                    this.classList.toggle('_active');
    
                    if(this.classList.contains('_active')) {
                        this.innerText = "Скрыть";
                    } else {
                        this.innerText = "Показать ещё";
                    }
                })
            }
            
        }
    }
};
	{
    let entityList = document.querySelector('.entity-list');
    if(entityList) {
        let remeberItem;
        entityList.addEventListener('mousemove', () => {
            if(document.documentElement.clientWidth > 991) {
                let items = entityList.querySelectorAll('.entity-list__triggers');
                items.forEach(item => {
                    if(item.classList.contains('active')) {
                        remeberItem = item;
                        item.classList.remove('active');
                    }
                })
            }

        })

        entityList.addEventListener('mouseleave', () => {
            if(document.documentElement.clientWidth > 991) {
                if(remeberItem) {
                    remeberItem.classList.add('active');
                }
            }
        })

        let entityItems = entityList.querySelectorAll('.entity-list__triggers');
        entityItems.forEach((item) => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                if(document.documentElement.clientWidth > 991) {
                    
                    const id = e.target.getAttribute('href').replace('#','');
        
                    entityList.querySelectorAll('.entity-list__triggers').forEach((child) => {
                        child.classList.remove('active');
                    });
        
                    document.querySelectorAll('.entity-form').forEach((child) => {
                        child.classList.remove('active');
                    });
        
                    item.classList.add('active');
                    document.getElementById(id).classList.add('active');
                } else {
                    
                    this.classList.toggle('active');

                    if(this.nextElementSibling) {
                        _slideToggle(this.nextElementSibling);
                    }
                   
                    entityItems.forEach(item => {
                        if(this == item) {
                            return;
                        }

                        item.classList.remove('active');

                        if(item.nextElementSibling) {
                            _slideUp(item.nextElementSibling);
                        }

                    })
                }
    
            });
        });
    }


    function moveFormToTriggers() {
        let entityList = document.querySelector('.entity-list');
        let triggers = document.querySelectorAll('.entity-list__triggers');
        let forms = document.querySelectorAll('.entity-form');
        
        if(document.documentElement.clientWidth < 992) {
            if(!entityList.querySelector('.entity-form')) {
                triggers.forEach((item, i) => {
                    item.after(forms[i]);
                    
                })
            }
        }
    }

    moveFormToTriggers();

    window.addEventListener('resize', moveFormToTriggers);


    let forms = document.querySelectorAll('.entity-form');
    if(forms.length) {
        forms.forEach(form => {
                let scheduleBlockItems = form.querySelectorAll('.schedule-block__item');
                scheduleBlockItems.forEach(item => {
                    let checkBox = item.querySelector('input[type="checkbox"]');
                    let wrap = item.querySelector('.checkbox-wrap');
                    let inner = item.querySelector('.schedule-block__item-inner');
        
                    if(checkBox.checked) {
                        wrap.classList.add('_active');
                        inner.classList.add('_active');
                    } else {
                        wrap.classList.remove('_active');
                        inner.classList.remove('_active');
                    }
    
                    checkBox.addEventListener('input', function() {
                        
                        if(this.checked) {
                            wrap.classList.add('_active');
                            inner.classList.add('_active');
                        } else {
                            wrap.classList.remove('_active');
                            inner.classList.remove('_active');
                        }
                        
                    });
    
                })

                form.addEventListener('reset', () => {
                    setTimeout(() => {
                        scheduleBlockItems.forEach(item => {
                            let checkBox = item.querySelector('input[type="checkbox"]');
                            let wrap = item.querySelector('.checkbox-wrap');
                            let inner = item.querySelector('.schedule-block__item-inner');
                            console.log(checkBox.checked);
                            
                            if(checkBox.checked) {
                                wrap.classList.add('_active');
                                inner.classList.add('_active');
                            } else {
                                wrap.classList.remove('_active');
                                inner.classList.remove('_active');
                            }
                        })
                    })
                })

                let loadBtn = form.querySelector('.entity-form__photo-list .load-btn');
                let photoBLock = form.querySelector('.entity-form__photo');
                if(document.documentElement.clientWidth < 768) {
                    photoBLock.append(loadBtn);
                }
        })
    }


    let btnReset = document.querySelector('.entity-form__reset');
    if(btnReset) {
        btnReset.addEventListener('reset', () => {
            console.log('test111');
            
            scheduleBlockItems.forEach(item => {
                let checkBox = item.querySelector('input[type="checkbox"]');
                console.log(checkBox.checked);
                
                let wrap = item.querySelector('.checkbox-wrap');
                let inner = item.querySelector('.schedule-block__item-inner');
    
                if(checkBox.checked) {
                    wrap.classList.add('_active');
                    inner.classList.add('_active');
                } else {
                    wrap.classList.remove('_active');
                    inner.classList.remove('_active');
                }

            })
        })
    }

    // let forms = document.querySelectorAll('.entity-form');
    // if(forms.length) {
    //     forms.forEach(form => {
    //         form.addEventListener('reset', () => {
    //             let scheduleBlockItems = form.querySelectorAll('.schedule-block__item');
    //             scheduleBlockItems.forEach(item => {
    //                 let checkBox = item.querySelector('input[type="checkbox"]');
    //                 console.log(checkBox.checked);
                    
    //                 let wrap = item.querySelector('.checkbox-wrap');
    //                 let inner = item.querySelector('.schedule-block__item-inner');
        
    //                 if(checkBox.checked) {
    //                     wrap.classList.add('_active');
    //                     inner.classList.add('_active');
    //                 } else {
    //                     wrap.classList.remove('_active');
    //                     inner.classList.remove('_active');
    //                 }
    
    //             })
    //         })
    //     })
    // }

};
	
});

//// html example --- <img class="lazy" data-src="https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" src="img/photo/placeholder.jpg" alt="img">


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

	if ("IntersectionObserver" in window) {
        
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
        const lazyLoad = function() {
            if (active === false) {
              active = true;
              setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    //lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
        
                    lazyImages = lazyImages.filter(function(image) {
                      return image !== lazyImage;
                    });
        
                    if (lazyImages.length === 0) {
                      document.removeEventListener("scroll", lazyLoad);
                      window.removeEventListener("resize", lazyLoad);
                      window.removeEventListener("orientationchange", lazyLoad);
                    }
                  }
                });
        
                active = false;
              }, 200);
            }
          };
      
          lazyLoad();
        
          document.addEventListener("scroll", lazyLoad);
          window.addEventListener("resize", lazyLoad);
          window.addEventListener("orientationchange", lazyLoad);
    }
    
});
// === // lazy load ==================================================================;
{
	// let homeMap = document.querySelector('.home-map');
	// if(homeMap) {
	// 	let height = document.querySelector('.promo-header__bg-bottom').clientHeight;
	// 	homeMap.style.marginTop = -height - 5 + 'px';
	// }

	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: 55.754374,
			lng: 37.617068,
		}

		var markerPosition = {
			lat: 55.754374,
			lng: 37.617068,
		}

		// Функция initMap которая отрисует карту на странице
		function initMap() {

			// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
			map = new google.maps.Map(document.getElementById('map'), {
				// При создании объекта карты необходимо указать его свойства
				// center - определяем точку на которой карта будет центрироваться
				center: {lat: center.lat, lng: center.lng},
				// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
				zoom: 14,
				scrollwheel: false,
				disableDefaultUI: true,
				// Добавляем свои стили для отображения карты
				styles: [
					{
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#f5f5f5"
						}
					  ]
					},
					{
					  "elementType": "labels.icon",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "elementType": "labels.text.stroke",
					  "stylers": [
						{
						  "color": "#f5f5f5"
						}
					  ]
					},
					{
					  "featureType": "administrative.land_parcel",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#bdbdbd"
						}
					  ]
					},
					{
					  "featureType": "administrative.locality",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#bdbdbd"
						}
					  ]
					},
					{
					  "featureType": "administrative.neighborhood",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#919191"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#eeeeee"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#e5e5e5"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "road",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "road.arterial",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#c6fbf7"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "featureType": "road.local",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "transit.line",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#e5e5e5"
						}
					  ]
					},
					{
					  "featureType": "transit.station",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#eeeeee"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#c9c9c9"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#c6fbf7"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry.stroke",
					  "stylers": [
						{
						  "color": "#c6fbf7"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					}
				  ]
			});

			// Создаем маркер на карте
			var marker = new google.maps.Marker({

				// Определяем позицию маркера
			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
			    map: map,

			    // Пишем название маркера - появится если навести на него курсор и немного подождать
			    title: '',
			    label: '',

			     icon: 'img/icons/mainLoacal.svg',
			});

		}
	}
};
