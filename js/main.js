// swiper intro
const swiperBg = new Swiper('.intro__bg', {
	loop: true,
	parallax: true,
	autoplay: {
		delay: 4000,
	},
	speed: 1500,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// swiper range
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

			if(count < 1) {
				count = 0
			}

			if(count === 0) {
				count = 0
			}
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
