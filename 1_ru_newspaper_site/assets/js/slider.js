(() => {
    const sliderBottom = new Swiper('.slider__list', {
        slidesPerView: 1,
        lazyPreloadPrevNext: 0,
        spaceBetween: 8,
        edgeSwipeDetection: true,
        touchReleaseOnEdges: true,
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                shadow: true,
                origin: 'left center',
                translate: ['-5%', 0, -200],
                rotate: [0, -100, 0],
            },
            next: {
                origin: 'right center',
                translate: ['5%', 0, -400],
                rotate: [0, 0, 0],
            },
        },
        navigation: {
            nextEl: '.slider__btn_next',
            prevEl: '.slider__btn_prev',
        },
    })
})()