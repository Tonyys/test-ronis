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
