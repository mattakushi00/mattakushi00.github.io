$('.comments__list').slick({
  rows: 0,
  swipeToSlide: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  prevArrow: $('.comments__arrow_prev'),
  nextArrow: $('.comments__arrow_next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})