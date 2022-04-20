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

document.querySelectorAll('.intro__nav-item').forEach(function (item) {
	let btnItems = document.querySelectorAll('.intro__nav-item')
	let currentItem = item
	let itemAttr = currentItem.getAttribute("data-scroll")
	let currentSection = document.querySelector(itemAttr)

	window.addEventListener('scroll',function (){
		btnItems.forEach(function (item){

			if(window.scrollY >= currentSection.offsetTop){
				btnItems.forEach(function (item){
					item.classList.remove('active')
				})
				currentItem.classList.add('active')
			} else {
				currentItem.classList.remove('active')
			}
		})
	})

	item.addEventListener('click',function (e) {

		btnItems.forEach(function (item){
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
