// swiper
new Swiper('.range__swiper', {
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
(function (){
    const arrAttr = []
    const windowHeight = window.screen.height * 0.50
    const btnItems = document.querySelectorAll('.intro__nav-item[data-scroll]')
    btnItems.forEach(function (el){
        arrAttr.push(el)
    })
    arrAttr.forEach(function (currentItem){
        const currentAttr = currentItem.getAttribute('data-scroll')
        const currentSection = document.querySelector(currentAttr)

        window.addEventListener('scroll', scroll)
        function scroll (){
            if(window.scrollY >= currentSection.offsetTop - windowHeight){
                btnItems.forEach( (item) =>{
                    item.classList.remove('active')
                })
                currentItem.classList.add('active')
            } else {
                currentItem.classList.remove('active')
            }
        }

        currentItem.addEventListener('click', (e) => {

            btnItems.forEach((item) => {
                item.classList.remove('active')
            })

            currentItem.classList.add('active')
            scrollTo(currentSection)
        })
    })

    // function throttle (func, ms) {
        //     let locked = false
        //     return function() {
        //         if (locked) return
        //
        //         const context = this
        //         const args = arguments
        //
        //         locked = true
        //
        //         setTimeout(() => {
        //             func.apply(context, args)
        //             locked = false
        //         }, ms)
        //     }
        // }


    function scrollTo(element) {
        window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
     })
    }
})()
