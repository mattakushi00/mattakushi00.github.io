const galleryHandler = (galleryName) => {
  const galleryParentNode = `.${galleryName}__list`
  const galleryList = [...document.querySelectorAll(`.${galleryName}__item`)]
  const prevArrow = document.querySelector(`.${galleryName}__prev`)
  const nextArrow = document.querySelector(`.${galleryName}__next`)
  const activeItem = document.querySelector(`.${galleryName}__active`)
  const listLength = document.querySelector(`.${galleryName}__total`)

  listLength.textContent = `${galleryList.length}`

  $(galleryParentNode).slick({
    rows: 0,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    dots: false,
    centerMode: true,
    prevArrow: $(prevArrow),
    nextArrow: $(nextArrow),
    focusOnChange: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          variableWidth: false,
        }
      }
    ]
  })

  activeItem.textContent = `${galleryList.findIndex(item => item.classList.contains('slick-active')) + 1}`

  $(galleryParentNode).on('afterChange', () => {
    activeItem.textContent = `${galleryList.findIndex(item => item.classList.contains('slick-active')) + 1}`
  });
}
galleryHandler('office')
galleryHandler('party')
galleryHandler('product')