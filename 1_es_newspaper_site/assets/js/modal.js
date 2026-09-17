(() => {
    const items = [...document.querySelectorAll('.main__item')]
    const dialog = document.querySelector('.dialog')
    const firstContent = document.querySelector('.face')
    const dialogBtnShowSlider = document.querySelector('.dialog__btn')
    const dialogName = document.querySelector('.dialog__name')
    const slider = [...document.querySelectorAll('.slider')]
    const sliderName = [...document.querySelectorAll('.slider__name')]

    let targetSlide = 0

    items.forEach((item, index) => item.addEventListener('click', () => {
        targetSlide = index
        dialogName.textContent = sliderName[index].textContent
        dialog.showModal()
    }))

    dialogBtnShowSlider.addEventListener('click', e => {
        firstContent.classList.add('hide')
        slider[targetSlide].classList.add('active')
        dialog.close()
    })
})()