// swiper
const swiperRange = new Swiper('.range__swiper', {
	loop: true,
	centeredSlides: true,
	spaceBetween: 100,
	autoplay: {
		delay: 4000,
	},
	speed: 800,
	pagination: {
		el: '.range__pagination',
		type: 'fraction'
	},
	navigation: {
		nextEl: '.range__next',
		prevEl: '.range__prev',
	},
});

// Nav scrollbar

document.querySelectorAll('.intro__nav-item').forEach( (currentItem) => {
	const btnItems = document.querySelectorAll('.intro__nav-item')
	const itemAttr = currentItem.getAttribute("data-scroll")
	const currentSection = document.querySelector(itemAttr)


	function throttle (func, ms) { // объявляем функцию throttle

		let locked = false // переменная которая отвечает за блокировку вызова функции

		return function() { // эта функция запускается при каждом событии движения курсора

			if (locked) return // если заблокировано, то прекращаем выполнение этой функции

			const context = this // запоминаем передаваемую функцию func
			const args = arguments // запоминаем параметры передаваемой функции func

			locked = true // блокируем вызов функции

			setTimeout(() => { // устанавливаем время ожидания

				func.apply(context, args) // выполняем переданную функцию func
				locked = false // снимаем блокировку

			}, ms) // подставляем значение параметра ms

		}
	}
	window.addEventListener('scroll', throttle(scroll,100))

	function scroll (){
		console.log(111)
		btnItems.forEach((item) => {
			const windowHeight = window.screen.height * 0.50
			if(window.scrollY >= currentSection.offsetTop - windowHeight){
				btnItems.forEach( (item) =>{
					item.classList.remove('active')
				})
				currentItem.classList.add('active')
			} else {
				currentItem.classList.remove('active')
			}
		})
	}

	currentItem.addEventListener('click', (e) => {

		btnItems.forEach((item) => {
			item.classList.remove('active')
		})

		currentItem.classList.add('active')
		scrollTo(currentSection)
	})
})
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}
