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
    const windowHeight = window.innerHeight * 0.50
    const btnItems = document.querySelectorAll('.intro__nav-item')

    const currentSectionOffsetTop = [...btnItems].map(function (currentItem){
        const currentAttr = currentItem.getAttribute('data-scroll')
        const currentSection = document.querySelector(currentAttr)
        return currentSection.offsetTop;
    });

    window.addEventListener('scroll', function (){
        const { scrollY } = window;

        btnItems.forEach(function (currentItem,index){
            if(scrollY >= currentSectionOffsetTop[index] - windowHeight && scrollY <= currentSectionOffsetTop[index] + windowHeight){
            //     if(currentItem.previousElementSibling){
            //     currentItem.previousElementSibling.classList.remove('active')
            // }
                btnItems.forEach(function (item){
                    item.classList.remove('active')
                })
                currentItem.classList.add('active')
            }
        })
    });

    btnItems.forEach(function (currentItem){
        currentItem.addEventListener('click', (e) => {
            const currentAttr = currentItem.getAttribute('data-scroll')
            const currentSection = document.querySelector(currentAttr)

            btnItems.forEach((item) => {
                item.classList.remove('active')
            })

            currentItem.classList.add('active')
            scrollTo(currentSection)
        });
    });

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

//
// if(scrollY >= currentSectionOffsetTop[index] - windowHeight){
//     currentItem.classList.add('active')
//     if(currentItem.previousElementSibling){
//         currentItem.previousElementSibling.classList.remove('active')
//     }
// } else {
//     currentItem.classList.remove('active')
// }
