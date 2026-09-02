(() => {
    const items = [...document.querySelectorAll('.main__button')]
    const dialog = document.querySelector('.dialog')
    const firstContent = document.querySelector('.face')
    const dialogBtnClose = document.querySelector('.dialog__close')
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
    dialogBtnClose.addEventListener('click', () => dialog.close())
    dialog.addEventListener('click', e => {
        if (e.target === dialog) dialog.close()
    })

    dialogBtnShowSlider.addEventListener('click', e => {
        firstContent.classList.add('hide')
        slider[targetSlide].classList.add('active')
        dialog.close()
    })
})()