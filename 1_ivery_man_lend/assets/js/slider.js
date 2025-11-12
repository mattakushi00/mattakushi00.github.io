$('.comments__list').slick({
  rows: 0,
  swipeToSlide: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: $('.comments__arrow_prev'),
  nextArrow: $('.comments__arrow_next'),
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        centerMode: false,
        variableWidth: false,
      }
    }
  ]
})