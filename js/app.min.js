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


const btnItems = document.querySelectorAll('.intro__nav-item')


btnItems.forEach(function (item) {
	let currentItem = item
	let itemAttr = currentItem.getAttribute("data-scroll")
	let currentSection = document.querySelector(itemAttr)

	window.addEventListener('scroll',function (){
		btnItems.forEach(function (item){
			// let currentItem = item
			// let itemAttr = currentItem.getAttribute("data-scroll")
			// let currentSection = document.querySelector(itemAttr)

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

// validate

//Name
const inpEmail = document.querySelectorAll('.form__input')
const errEmail = document.querySelectorAll('.form__input-container')

var regEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let count = 0

document.querySelectorAll('.form__btn').forEach(function (item,index){
	item.addEventListener('click' , function(e){
		e.preventDefault()

		errEmail.forEach(function (item){
			item.classList.remove('is-valid')
			item.classList.remove('is-invalid')
		})

		if(!isEmail (regEmail, inpEmail[index].value) || inpEmail[index].value.length <= 3) {
			notValid(errEmail[index])
			count--
		} else {
			valid(errEmail[index])
			count++
		}

		count = 0

		inpEmail.forEach(function (item){
			item.value = ''
		})
	})
})


function isEmail (regex, inp) {
	return regex.test(inp)
}

function notValid (inp) {
	inp.classList.remove('is-valid')
	inp.classList.add('is-invalid')
}

function valid (inp) {
	inp.classList.remove('is-invalid')
	inp.classList.add('is-valid')
}
