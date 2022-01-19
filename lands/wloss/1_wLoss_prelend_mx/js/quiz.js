(function () {
    const form = document.querySelector('.form')
    const inputHeight = document.querySelector('input[name="height"]')
    const inputWeight = document.querySelector('input[name="weight"]')
    const inputSex = document.querySelector('select[name="sex"]')
    const inputWishfulWeight = document.querySelector('input[name="wishfulWeight"]')
    const result = document.querySelector('.quiz__result')
    const result__item = document.querySelectorAll('.quiz__result-item')
    const status = document.querySelector('.quiz__status')
    let isValidate = new Map()

    console.dir(inputSex.value)

    /*create validate data*/
    document.querySelectorAll('.quiz__input').forEach(item => {
        isValidate.set(item.getAttribute('name'), {isFill: false, isCorrect: false})
    })

    /*validate*/
    document.querySelectorAll('.quiz__input').forEach((item, index) => {

        /*skip select with sex*/
        if (index === 0) return

        /*validate inputs*/
        item.addEventListener('input', e => {

            if (e.target.value.length === 0) {
                e.target.classList.remove('input__success')
                e.target.classList.remove('input__error')

                isValidate.set(e.target.getAttribute('name'), {isFill: false, isCorrect: false})
                return;
            }

            if (!Number(e.target.value)) {
                e.target.classList.remove('input__success')
                e.target.classList.add('input__error')

                isValidate.set(e.target.getAttribute('name'), {isFill: true, isCorrect: false})
                return
            }

            e.target.classList.remove('input__error')
            e.target.classList.add('input__success')

            isValidate.set(e.target.getAttribute('name'), {isFill: true, isCorrect: true})
        })
    })

    /*calculate imt*/
    form.addEventListener('input', () => {
        let validateFlag = false
        let imt = inputWeight.value / Math.pow(inputHeight.value / 100, 2)
        const lowBorder = 16
        let middle = inputSex.value === 'man' ? 25 : 23
        const topBorder = 40

        /*check validate*/
        isValidate.forEach(item => {
            if (item.isFill && item.isCorrect) {
                validateFlag = true
                return
            }
            validateFlag = false
        })

        /*validate error*/
        if (!validateFlag) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[0].style.display = 'block'
            return
        }

        /*validate success*/
        status.style.display = 'none'
        result.classList.remove('text__error')

        if (imt <= lowBorder) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[1].style.display = 'block'
        }

        if (imt > lowBorder && imt < 18.49) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[2].style.display = 'block'
        }

        if (imt > 18.5 && imt < middle) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[3].style.display = 'block'
        }

        if (imt > middle && imt < 29.99) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[4].style.display = 'block'
        }

        if (imt > 30 && imt < 34.99) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[5].style.display = 'block'
        }

        if (imt > 35 && imt < 39.99) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[6].style.display = 'block'
        }

        if (imt >= topBorder) {
            result__item.forEach(item => item.style.display = 'none')
            result__item[7].style.display = 'block'
        }

    })

})()